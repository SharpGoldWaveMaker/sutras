import { sprintf } from 'sprintf-js'
import { isBuffer } from '../../utils/isBuffer'
import { isCollection } from '../../utils/isCollection'
import { isDataView } from '../../utils/isDataView'
import { isRegExp } from '../../utils/isRegExp'
import { isTypedArray } from '../../utils/isTypedArray'
import { getOwnDescriptorsBuffer } from '../getOwnDescriptorsBuffer'
import { getOwnDescriptorsCollection } from '../getOwnDescriptorsCollection'
import { getOwnDescriptorsDataView } from '../getOwnDescriptorsDataView'
import { getOwnDescriptorsIn } from '../getOwnDescriptorsIn'
import { getOwnDescriptorsRegExp } from '../getOwnDescriptorsRegExp'
import { getOwnDescriptorsTypedArray } from '../getOwnDescriptorsTypedArray'

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

export function getExtendsPropertyDescriptors(
  data: unknown,
): Record<string, PropertyDescriptor> | undefined {
  if (data === null || typeof data !== 'object')
    return

  if (isBuffer(data))
    return getOwnDescriptorsBuffer(data)
  if (isCollection(data))
    return getOwnDescriptorsCollection(data)
  if (isDataView(data))
    return getOwnDescriptorsDataView(data)
  if (isRegExp(data))
    return getOwnDescriptorsRegExp(data)
  if (isTypedArray(data))
    return getOwnDescriptorsTypedArray(data)

  return undefined
}
export function getDescriptors<T extends object>(data: T) {
  return Object.assign(
    getOwnDescriptorsIn(data),
    Object.getOwnPropertyDescriptors(data),
    getExtendsPropertyDescriptors(data),
    //   extendsPropertyDescriptors //data instanceof RegExp ? getOwnDescriptorsRegExp(data) : undefined
  )
}

export function isTable(data: any): boolean {
  return typeof data?.table === 'object'
}
