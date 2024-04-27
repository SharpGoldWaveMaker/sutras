const { toString } = Object.prototype

export function getObjectName<T extends object>(obj: T): string {
  return toString.call(obj).slice(8, -1)
}
