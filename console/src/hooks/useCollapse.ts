import { inject, provide, ref } from 'vue'
import type { InjectionKey, Ref } from 'vue'

export interface ConsoleCollapseState {
  expand: Ref<boolean>
}

export const consoleCollapseStateDefault: ConsoleCollapseState = {
  expand: ref(false),
}

export const ConsoleCollapseStateInjectKey = Symbol('ConsoleCollapseState') as InjectionKey<ConsoleCollapseState>

export function provideConsoleCollapseState() {
  const expand = ref(false)
  provide(ConsoleCollapseStateInjectKey, { expand })
  return { expand }
}

export function useConsoleCollapseState(): ConsoleCollapseState {
  return inject(ConsoleCollapseStateInjectKey, consoleCollapseStateDefault)
}
