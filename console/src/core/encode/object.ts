import type { Collection, DArray, DArrayReal, DBuffer, DCollection, DDataView, DDataViewReal, DFunction, DGetSetter, DLink, DNumber, DObjReal, DPromise, DRecord, DTypedArray, DTypedArrayReal, PObjReal } from '../../definition'
import { entries } from '../../utils/entries'
import { getValue } from '../getValue'
import { isBuffer } from '../../utils/isBuffer'
import { isCollection } from '../../utils/isCollection'
import { isDataView } from '../../utils/isDataView'
import { isDom } from '../../utils/isDom'
import { isList } from '../../utils/isList'
import { isPromise } from '../../utils/isPromise'
import { isRegExp } from '../../utils/isRegExp'
import { isTypedArray } from '../../utils/isTypedArray'
import { getObjectName } from '../../utils/getObjectName'
import { getHeaderFn } from '../getHeaderFn'
import { getOwnDescriptorsBuffer } from '../getOwnDescriptorsBuffer'
import { getOwnDescriptorsCollection } from '../getOwnDescriptorsCollection'
import { getOwnDescriptorsDataView } from '../getOwnDescriptorsDataView'
import { getOwnDescriptorsIn } from '../getOwnDescriptorsIn'
import { getOwnDescriptorsRegExp } from '../getOwnDescriptorsRegExp'
import { getOwnDescriptorsTypedArray } from '../getOwnDescriptorsTypedArray'
import { shouldInline } from '../shouldInline'
import { encodeNull } from './basic'
import { createFakeRecord, createRealItem } from './common'
import type { EncodeOption, EncoderType } from './types'
import { createLink, encode } from './encode'

export const encodeFunction: EncoderType = (data: object, opt) => {
  const { first, linkReal, store } = opt
  if (linkReal) {
    const code = `${data}`
    const header = getHeaderFn(code)
    return {
      '@t': 'function',
      '@code': first ? data.toString() : '',
      '@header': header,
      '@first': first,
      '@real': first ? null : createLink(data, opt.store),
    } as DFunction
  }
  return createFakeRecord(_encodeObject(data, { store }))
}

const encodeError: EncoderType = (data: Error, opt) => {
  const { linkReal, first, store } = opt
  if (linkReal) {
    return {
      '@t': 'error',
      '@first': first,
      '@stack': data.stack ?? '',
      '@real': first ? null : createLink(data, opt.store),
    }
  }
  return createFakeRecord(_encodeObject(data, { store }))
}

const encodeRegExp: EncoderType = (data: RegExp, opt) => {
  const { linkReal, first, store } = opt
  if (linkReal) {
    return {
      '@t': 'regexp',
      '@name': `${data}`,
      '@first': first,
      '@flags': data.flags,
      '@source': data.source,
      '@real': first ? null : createLink(data, store),
    }
  }
  return createFakeRecord(
    _encodeObject(data, { store }, getOwnDescriptorsRegExp(data)),
  )
}

const encodeDate: EncoderType = (data: Date, opt) => {
  const { linkReal, first, store } = opt
  if (linkReal) {
    return {
      '@t': 'date',
      '@first': first,
      '@value': data.toString(),
      '@real': first ? null : createLink(data, store),
      '@des': first ? null : createPreviewObject(data, { store }),
    }
  }
  return createFakeRecord(_encodeObject(data, { store }))
}

const encodeArray: EncoderType = (data: Array<any>, opt) => {
  const { linkReal, first, store } = opt
  if (linkReal) {
    const meta: DArray = {
      '@t': 'array',
      '@first': first,
      '@size': data.length,
      '@name': data instanceof NodeList ? 'NodeList' : null,
      '@des': createPreviewObject(data, { store }),
      '@real': createLink(data, store),
    }
    return meta
  }

  return createFakeRecord(_encodeObject(data, { store }) as DArrayReal)
}

export function encodeTypedArray(data, opt) {
  const { linkReal, first, preview, store } = opt
  if (linkReal) {
    const meta: DTypedArray = {
      '@t': 'typedarray',
      '@first': first,
      '@size': data.length,
      '@name': (data as unknown as any)[Symbol.toStringTag],
      '@des': preview
        ? createPreviewObject(data, { store }, getOwnDescriptorsTypedArray(data))
        : null,
      '@real': createLink(data, store),
    }
    return meta
  }

  return createFakeRecord(
    _encodeObject(
      data,
      { store },
      getOwnDescriptorsTypedArray(data),
    ) as DTypedArrayReal,
  )
}

export const encodeCollection: EncoderType = (data: Collection, opt) => {
  const { linkReal, store } = opt
  if (linkReal) {
    const meta: DCollection = {
      '@t': 'collection',
      '@name': toString
        .call(data)
        .slice(8, -1) as DCollection['@name'],
      '@size': (data as Set<unknown>).size ?? null,
      '@entries': Array.from(
        (data as unknown as Map<unknown, unknown>).entries?.() ?? [],
      ).map(([key, val]) => [
        encode(key, {
          first: false,
          linkReal: true,
          store,
        }),
        encode(val, {
          first: false,
          linkReal: true,
          store,
        }),
      ]),
      '@real': createLink(data, store),
    }
    return meta
  }

  return createFakeRecord(
    _encodeObject(data, { store }, getOwnDescriptorsCollection(data)),
  )
}

export const encodeBuffer: EncoderType = (data: ArrayBuffer, opt) => {
  const { linkReal, first, store } = opt
  if (linkReal) {
    const meta: DBuffer = {
      '@t': 'buffer',
      '@first': first,
      '@size': data.byteLength,
      '@name': getObjectName(data),
      '@real': createLink(data, store),
    }
    return meta
  }

  return createFakeRecord({
    ..._encodeObject(data, { store }, getOwnDescriptorsBuffer(data)),
    '[[Int8Array]]': createRealItem(
      encode(new Int8Array(data), {
        first: false,
        linkReal: true,
        preview: false,
        store,
      }) as DTypedArray,
      true,
    ),
    '[[Uint8Array]]': createRealItem(
      encode(new Uint8Array(data), {
        first: false,
        linkReal: true,
        preview: false,
        store,
      }) as DTypedArray,
      true,
    ),

    '[[Int16Array]]': createRealItem(
      encode(new Int16Array(data, 0, ~~(data.byteLength / 2)), {
        first: false,
        linkReal: true,
        preview: false,
        store,
      }) as DTypedArray,
      true,
    ),
    '[[Int32Array]]': createRealItem(
      encode(new Int32Array(data, 0, ~~(data.byteLength / 4)), {
        first: false,
        linkReal: true,
        preview: false,
        store,
      }) as DTypedArray,
      true,
    ),

    '[[ArrayBufferByteLength]]': createRealItem(
      encode(data.byteLength, {
        first: false,
        linkReal: true,
        store,
      }) as DNumber,
      true,
    ) as any,
  })
}

export const encodeDataView: EncoderType = (data: DataView, opt) => {
  const { linkReal, first, store } = opt
  if (linkReal) {
    const meta: DDataView = {
      '@t': 'dataview',
      '@name': 'DataView',
      '@first': first,
      '@size': data.byteLength,
      '@real': createLink(data, store),
    }
    return meta
  }

  return createFakeRecord(
    _encodeObject(
      data,
      { store },
      getOwnDescriptorsDataView(data),
    ) as DDataViewReal,
  )
}

export const encodePromise: EncoderType = (data: Promise<any>, opt) => {
  const { linkReal, first, store } = opt
  if (linkReal) {
    const meta: DPromise = {
      '@t': 'promise',
      '@first': first,
      '@state': 'pending',
      '@real': createLink(data, store),
      '@des': createPreviewObject(data, { store }),
    }
    return meta
  }
  return createFakeRecord(_encodeObject(data, { store }))
}

const nameByNodeType = {
  1: 'ELEMENT_NODE',
  3: 'TEXT_NODE',
  7: 'PROCESSING_INSTRUCTION_NODE',
  8: 'COMMENT_NODE',
  9: 'DOCUMENT_NODE',
  10: 'DOCUMENT_TYPE_NODE',
  11: 'DOCUMENT_FRAGMENT_NODE',
}

export const encodeDOM: EncoderType = (data: Node, opt) => {
  const { linkReal, first, store } = opt
  if (linkReal) {
    const attrs
      = first && data instanceof Element
        ? Array.from(data.attributes).map((item): [string, string] => [
          item.name,
          item.value,
        ])
        : undefined
    switch (data.nodeType) {
      case Node.ELEMENT_NODE: {
        return {
          '@t': 'element',
          '@name': data.nodeName,
          '@first': first,
          '@attrs': attrs,
          '@real': first ? null : createLink(data, store),
          '@childs': shouldInline(data)
            ? data.textContent
            : createLink(data.childNodes, store),
        }
      }
      case Node.TEXT_NODE:
      case Node.CDATA_SECTION_NODE:
      case Node.COMMENT_NODE: {
        return {
          '@t': 'element',
          '@name': data.nodeName,
          '@first': first,
          '@attrs': attrs,
          '@real': first ? null : createLink(data, store),
          '@childs': data.textContent,
        }
      }
      case Node.PROCESSING_INSTRUCTION_NODE:
        return {
          '@t': 'element',
          '@name': data.nodeName,
          '@first': first,
          '@attrs': attrs,
          '@real': first ? null : createLink(data, store),
        }
      case Node.DOCUMENT_TYPE_NODE:
        return {
          '@t': 'element',
          '@name': data.nodeName, // html
          '@first': first,
          '@attrs': attrs,
          '@real': first ? null : createLink(data, store),
          '@childs': `<!DOCTYPE ${
            (data as unknown as DocumentType).name
          } ${
            (data as unknown as DocumentType).publicId
              ? ` PUBLIC "${(data as unknown as DocumentType).publicId}"`
              : ''
          } ${
            !(data as unknown as DocumentType).publicId
            && (data as unknown as DocumentType).systemId
              ? ' SYSTEM'
              : ''
          } ${
            (data as unknown as DocumentType).systemId
              ? ` "${(data as unknown as DocumentType).systemId}"`
              : ''
          } >`,
        }
      case Node.DOCUMENT_NODE:
        return {
          '@t': 'element',
          '@name': data.nodeName, // #document
          '@first': first,
          '@attrs': attrs,
          '@real': first ? null : createLink(data, store),
        }
      case Node.DOCUMENT_FRAGMENT_NODE:
        return {
          '@t': 'element',
          '@name': data.nodeName, // #document-fragment
          '@first': first,
          '@attrs': attrs,
          '@real': null,
        }
      default:
        return {
          '@t': 'element',
          '@name':
            `#${
            nameByNodeType[
                data.nodeType as keyof typeof nameByNodeType
              ]}` || '#unknown',
          '@first': first,
          '@real': first ? null : createLink(data, store),
        }
    }
  }

  return createFakeRecord(_encodeObject(data, { store }))
}

export const encodeObject: EncoderType = (data: object, opt) => {
  if (data === null)
    return encodeNull(data, opt)

  if (data instanceof Error)
    return encodeError(data, opt)

  if (isRegExp(data))
    return encodeRegExp(data, opt)

  if (data instanceof Date)
    return encodeDate(data, opt)

  if (!opt.forceObject && isList(data))
    return encodeArray(data, opt)

  if (isTypedArray(data))
    return encodeTypedArray(data, opt)

  if (isCollection(data))
    return encodeCollection(data, opt)

  if (isBuffer(data))
    return encodeBuffer(data, opt)

  if (isDataView(data))
    return encodeDataView(data, opt)

  if (isPromise(data))
    return encodePromise(data, opt)

  if (isDom(data))
    return encodeDOM(data, opt)

  const { first, linkReal, preview } = opt
  const meta: DRecord = {
    '@t': 'object',
    '@name': data.constructor?.name ?? null,
    '@first': first,
    '@real': linkReal
      ? createLink(data, opt.store)
      : _encodeObject(data, {
        store: opt.store,
      }),
    '@des': linkReal && preview
      ? createPreviewObject(data, {
        store: opt.store,
      })
      : null,
  }
  return meta
}

function _encodeObject(
  data: object | Function | RegExp,
  option: EncodeOption,
  extendsPropertyDescriptors?: Record<string, PropertyDescriptor>,
  proto: object | Function = Object.getPrototypeOf(data),
): DObjReal {
  const opt = {
    first: false,
    linkReal: true,
    store: option.store,
  }
  const meta = Object.fromEntries(
    entries(
      Object.assign(
        getOwnDescriptorsIn(data),
        Object.getOwnPropertyDescriptors(data),
        extendsPropertyDescriptors,
      ),
    ).map(([name, meta]): [string, DObjReal['']] => {
      const { value } = meta
      if ('get' in meta || 'set' in meta) {
        const at: Partial<Record<'get' | 'set', DFunction>> = {}
        if (meta.get)
          at.get = encodeFunction(meta.get, opt) as DFunction
        if (meta.set)
          at.set = encodeFunction(meta.set, opt) as DFunction
        return [
          name.toString(),
          createRealItem<DGetSetter>(
            {
              '@t': 'gs',
              '@value': createLink(() => getValue(data, name, data), opt.store) as DLink,
              '@at': at,
            },
            !meta.enumerable,
          ),
        ]
      }
      if (
        value !== null
        && typeof value === 'object'
        && !isRegExp(value)
        && !isCollection(value)
        && !(value instanceof Error)
        && !isList(value)
      ) {
        return [
          name.toString(),
          createRealItem(
            encode(value, opt),
            !meta.enumerable,
          ) as any,
        ]
      }
      if (typeof value === 'function') {
        return [
          name.toString(),
          createRealItem<DFunction>(
            encode(value, opt) as DFunction,
            !meta.enumerable,
          ),
        ]
      }

      return [
        name.toString(),
        createRealItem(encode(value, opt), !meta.enumerable) as any,
      ]
    }),
  )

  return Object.assign(meta, {
    '[[Prototype]]': createRealItem(
      encode(proto, {
        store: opt.store,
        first: false,
        linkReal: true,
        preview: false,
        forceObject: true,
      }),
    ),
  })
}

export function createPreviewObject(
  data: object,
  opt: Partial<EncodeOption>,
  extendsPropertyDescriptors?: Record<string, PropertyDescriptor>,
): {
    '@value': PObjReal
    '@lastKey': string
  } {
  let lastKey: string | number | symbol = ''
  const meta = Object.fromEntries(
    entries(
      Object.assign(
        getOwnDescriptorsIn(data),
        Object.getOwnPropertyDescriptors(data),
        extendsPropertyDescriptors, // data instanceof RegExp ? getOwnDescriptorsRegExp(data) : undefined
      ),
    ).map(([name, meta]): [string, PObjReal['']] => {
      name = name.toString()
      lastKey = name
      const { value } = meta

      return [name, createRealItem(createPreviewValue(value, opt), !meta.enumerable)]
    }),
  )
  return {
    '@value': meta,
    '@lastKey': lastKey,
  }
}

export function createPreviewValue(
  value: unknown,
  opt: Partial<EncodeOption>,
): PObjReal['']['@value'] {
  if (value !== null && typeof value === 'object') {
    if (value instanceof Error) {
      return {
        '@t': 'error',
        '@stack': value.stack?.split('\n', 3).slice(0, 3).join('\n') ?? '',
      }
    }
    if (isRegExp(value)) {
      return {
        '@t': 'regexp',
        '@name': `${value}`,
      }
    }
    if (value instanceof Date) {
      return {
        '@t': 'date',
        '@value': value.toString(),
      }
    }
    if (isCollection(value)) {
      return {
        '@t': 'collection',
        '@name': toString.call(value).slice(8, -1) as DCollection['@name'],
        '@size': (value as Set<unknown>).size ?? null,
      }
    }
    if (isList(value)) {
      return {
        '@t': 'array',
        '@name': value instanceof NodeList ? 'NodeList' : null,
        '@size': value.length,
      }
    }
    if (isTypedArray(value)) {
      return {
        '@t': 'typedarray',
        '@name': (value as unknown as any)[Symbol.toStringTag],
        '@size': value.length,
      }
    }
    if (isBuffer(value)) {
      return {
        '@t': 'buffer',
        '@name': getObjectName(value),
        '@size': value.byteLength,
      }
    }
    if (isDataView(value)) {
      return {
        '@t': 'dataview',
        '@name': 'DataView',
        '@size': value.byteLength,
      }
    }

    if (isDom(value)) {
      return {
        '@t': 'element',
        '@name': value.nodeName,
      }
    }

    if (isPromise(value)) {
      return {
        '@t': 'promise',
      }
    }

    return {
      '@t': 'object',
      '@name': value.constructor?.name ?? null,
    }
  }

  if (typeof value === 'function') {
    return {
      '@t': 'function',
    }
  }

  return encode(value, {
    first: false,
    linkReal: true,
    store: opt.store,
  }) as any
}
