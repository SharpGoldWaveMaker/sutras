import { sprintf } from 'sprintf-js'
import type { GroupData } from './types'

export function isGroup(data: any): data is GroupData {
  return typeof data?.['@items']?.length === 'number'
}

export function printfArgs<T extends unknown[]>(args: T) {
  if (args.length > 0 && typeof args[0] === 'string') {
    const countParaments = args[0].match(/%\w/g)?.length

    if (countParaments) {
      const { length } = args
      return [
        sprintf(
          args[0],
          ...args.slice(1, countParaments + 1),
          ...(length - 1 < countParaments
            ? Array(countParaments - (length - 1)).fill('%s')
            : []),
        ),
        ...args.slice(countParaments + 1),
      ]
    }
  }

  return args
}
