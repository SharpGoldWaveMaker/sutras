import { computed, inject, provide } from 'vue'
import type { InjectionKey } from 'vue'
import { useConsoleIndentLevel } from './useIndentLevel'

export interface ConsoleTheme {
  paddingLeft?: number
  indent?: number
}

function getDefault(): ConsoleTheme {
  return {
    paddingLeft: 0,
    indent: 12,
  }
}

export const ConsoleThemeInjectKey = Symbol('ConsoleTheme') as InjectionKey<ConsoleTheme>

export function provideConsoleTheme() {
  return provide(ConsoleThemeInjectKey, getDefault())
}

export function useConsoleTheme(): ConsoleTheme {
  return inject(ConsoleThemeInjectKey, getDefault())
}

export function usePaddingLeft(props: { paddingLeft: number }) {
  const { indent } = useConsoleTheme()
  const { level } = useConsoleIndentLevel()
  return computed(() => (props.paddingLeft ?? 0) + indent * level)
}
