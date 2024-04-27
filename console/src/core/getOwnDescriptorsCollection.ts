import type { Collection } from '../definition'
import { getObjectName } from '../utils/getObjectName'
import { getValue } from './getValue'

const keys = ['size']
export function getOwnDescriptorsCollection(
  collection: Collection,
) {
  const des: Record<string, PropertyDescriptor> = {}

  const isFreeser = getObjectName(collection).startsWith('Weak')

  keys.forEach((name) => {
    if (isFreeser && name === 'size')
      return

    // ([name, meta])
    const value = getValue(collection, name, collection)
    const enumerable = false

    if (typeof value !== 'function') {
      des[name.toString()] = {
        value: (collection as unknown as any)[name],
        enumerable,
      }
    }
  })

  return des
}
