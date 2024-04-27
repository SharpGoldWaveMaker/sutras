import type { DLink, PObjReal } from '../../definition'
import { getLocationCall } from '../getLocationCall'
import { get } from '../id-manager'
import { entries } from '../../utils/entries'
import { isArrayEmpty } from '../../utils/isArrayEmpty'
import type { LinkStore } from '../store'
import { encodeBigInt, encodeNumber, encodeString, encodeSymbol, encodeUndefined } from './basic'
import type { EncodeArgsResult, EncodeArgsType, EncodeOption, EncodeResult, EncodeTableResult } from './types'
import { createPreviewValue, encodeFunction, encodeObject } from './object'
import { getDescriptors, printfArgs } from './utils'

const encodeMap = {
  string: encodeString,
  number: encodeNumber,
  boolean: encodeNumber,
  bigint: encodeBigInt,
  symbol: encodeSymbol,
  undefined: encodeUndefined,
  function: encodeFunction,
  object: encodeObject,
}

export function createLink(obj: object, store: LinkStore): DLink {
  const name
    = typeof obj === 'function' ? obj.name : obj?.constructor?.name ?? null

  const link = store.query(obj)
  if (link) {
    return {
      '@t': 'link',
      '@type': typeof obj as 'object' | 'function',
      '@link': link,
      '@name': name,
    }
  }

  const uid = store.set(obj)

  return {
    '@t': 'link',
    '@type': typeof obj as 'object' | 'function',
    '@link': uid,
    '@name': name,
  }
}

export function encode(data: unknown, option: EncodeOption) {
  return encodeMap[typeof data](data, {
    first: false,
    linkReal: false,
    preview: true,
    forceObject: false,
    ...option,
  })
}

function encodeTable(data: object, opt: EncodeOption): EncodeTableResult {
  const table: Record<string, Record<string, PObjReal['']['@value']>> = {}
  const nameCols = new Set<string>()

  entries(getDescriptors(data)).forEach(([name, meta]) => {
    name = name.toString()
    const { value } = meta

    let isArray: undefined | boolean
    if (
      value !== null
      && typeof value === 'object'
      // eslint-disable-next-line no-cond-assign
      && (!(isArray = Array.isArray(value)) || !isArrayEmpty({ arr: value }))
    ) {
      const row = (table[name] = {}) as typeof table['']
      entries(getDescriptors(value)).forEach(([propName, propMeta]) => {
        if (isArray && propName === 'length')
          return

        propName = propName.toString()
        nameCols.add(propName)
        row[propName] = createPreviewValue(propMeta.value, opt)
      })
    }
    else {
      nameCols.add('value')
      table[name] = {
        value: createPreviewValue(value, opt),
      }
    }
  })

  return {
    table,
    'cols': Array.from(nameCols.values()),
    '@location': opt.deepLink === false ? undefined : getLocationCall(opt.deepLink),
    '@collapse': encodeFull(data, {
      first: false,
      store: opt.store,
    }),
  }
}

export function encodeFull(data: unknown, opt: EncodeOption): EncodeResult {
  return {
    ...encode(data, {
      first: true,
      linkReal: true,
      ...opt,
    }),
    '@id': get(data),
    '@location': opt.deepLink === false ? undefined : getLocationCall(opt.deepLink),
  }
}

export function createEncoder(store: LinkStore) {
  const counters = new Map<string, number>()
  const timers = new Map<string, number>()

  const encodeArgs = (type: EncodeArgsType, ...args: unknown[]): EncodeArgsResult | null => {
    switch (type) {
      case 'warn':
      case 'info':
      case 'debug':
      case 'error':
      case 'log':
        return {
          type,
          values: printfArgs(args).map(item => encodeFull(item, {
            deepLink: 3,
            store,
          })),
        }
      case 'assert': {
        const [assertion, ...restArgs] = args
        if(!assertion){
          restArgs.unshift('Assertion failed: ')
          return {
            type: 'error',
            values: printfArgs(restArgs).map(item => encodeFull(item, {
              deepLink: 3,
              store,
            })),
          }
        }
      }

      case 'table': {
        const data = args[0] || []
        if (typeof data === 'object') {
          return {
            type,
            values: [encodeTable(data, {
              deepLink: 2,
              store,
            })],
          }
        }
        return {
          type: 'log',
          values: [data],
        }
      }
      case 'group':
      case 'groupCollapsed':
      case 'groupEnd': {
        const key = args[0] || 'console-goup'
        return {
          type,
          values: [encodeFull(key, { deepLink: 2, store })],
        }
      }
      case 'count': {
        const [key = 'default'] = (args || []) as string[]
        let count = counters.get(key)
        if (count)
          count++
        else
          count = 1
        counters.set(key, count)
        const message = `${key}: ${count}`
        return {
          type: 'log',
          values: [encodeFull(message, { deepLink: 2, store })],
        }
      }
      case 'countReset': {
        const [key = 'default'] = (args || []) as string[]
        counters.delete(key)
        return null
      }
      case 'time': {
        const [key = 'default'] = (args || []) as string[]
        if (timers.has(key)) {
          const message = `Timer '${key}' already exists`
          return {
            type: 'warn',
            values: [encodeFull(message, { deepLink: 2, store })],
          }
        }
        else {
          timers.set(key, performance.now())
          return null
        }
      }
      case 'timeLog': {
        const [key = 'default', ...restArgs] = (args || []) as string[]
        const timer = timers.get(key)
        if (!timer) {
          const message = `Timer '${key}' does not exist`
          return {
            type: 'warn',
            values: [encodeFull(message, { deepLink: 2, store })],
          }
        }
        const message = `${key}: ${performance.now() - timer} ms`
        return {
          type: 'log',
          values: [
            encodeFull(message, { deepLink: 2, store }),
            ...printfArgs(restArgs).map(item => encodeFull(item, {
              deepLink: 3,
              store,
            })),
          ],
        }
      }
      case 'timeEnd': {
        const [key = 'default'] = (args || []) as string[]
        const timer = timers.get(key)
        if (!timer) {
          const message = `Timer '${key}' does not exist`
          return {
            type: 'warn',
            values: [encodeFull(message, { deepLink: 2, store })],
          }
        }
        const message = `${key}: ${performance.now() - timer} ms`
        timers.delete(key)
        return {
          type: 'log',
          values: [encodeFull(message, { deepLink: 2, store })],
        }
      }
    }
  }

  const clear = () => {
    timers.clear()
    counters.clear()
  }

  return {
    encode: encodeFull,
    encodeArgs,
    clear,
  }
}
