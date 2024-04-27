import { entries } from '../utils/entries'

const keys = entries(Object.getOwnPropertyDescriptors(RegExp.prototype))
export function getOwnDescriptorsRegExp(reg: RegExp) {
  const des: Record<string, PropertyDescriptor> = {}

  keys.forEach(([name, meta]) => {
    const { value, enumerable } = meta
    if (name === 'lastIndex')
      return

    if (typeof value !== 'function') {
      des[name.toString()] = {
        value: (reg as unknown as any)[name],
        enumerable,
      }
    }
  })

  return des
}
