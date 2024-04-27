import { keys } from "./keys"

export function entries<T extends object>(obj: T): [keyof T, T[keyof T]][] {
  return keys(obj).map((name) => [name, (obj as unknown as any)[name]]) as [
    keyof T,
    T[keyof T]
  ][]
}
