import type { InjectionKey, Ref } from 'vue'
export const EditorReadyInjectKey = Symbol('EditorReady') as InjectionKey<Ref<boolean>>