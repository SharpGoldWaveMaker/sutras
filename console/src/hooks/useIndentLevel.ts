import { inject, provide } from 'vue'
import type { InjectionKey } from 'vue'

export interface ConsoleIndentLevel {
  level: number
}

export const consoleIndentLevelDefault: ConsoleIndentLevel = {
  level: 0,
}

export const ConsoleIndentLevelInjectKey = Symbol('ConsoleIndentLevel') as InjectionKey<ConsoleIndentLevel>

export function provideConsoleIndentLevel() {
  const { level } = useConsoleIndentLevel()
  provide(ConsoleIndentLevelInjectKey, { level: level + 1 })
  return {
    level,
  }
}

export function useConsoleIndentLevel(): ConsoleIndentLevel {
  return inject(ConsoleIndentLevelInjectKey, consoleIndentLevelDefault)
}
