import { getValue } from './getValue'

const keys = ['buffer', 'byteLength', 'byteOffset']
export function getOwnDescriptorsDataView(typed: DataView) {
  const des: Record<string, PropertyDescriptor> = {}

  keys.forEach((name) => {
    // ([name, meta])
    const value = getValue(typed, name, typed)
    const enumerable = false

    if (typeof value !== 'function') {
      des[name.toString()] = {
        value: (typed as unknown as any)[name],
        enumerable,
      }
    }
  })

  return des
}
