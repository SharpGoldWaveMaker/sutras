import type { InjectionKey, Ref } from "vue";

export const ShowTerminialInjectKey = Symbol('ShowTerminial') as InjectionKey<Ref<boolean>>
export const DeviceRotateInjectKey = Symbol('DeviceRotate') as InjectionKey<Ref<boolean>>

export const ErrorMessageInjectKey = Symbol('ErrorMessage') as InjectionKey<Ref<string>>
export const ErrorMessageChangeInjectKey = Symbol('ErrorMessageChange') as InjectionKey<(message: string) => void>

export const PreviewLoadingInjectKey = Symbol('PreviewLoading') as InjectionKey<Ref<boolean>>
export const PreviewLoadingChangeInjectKey = Symbol('PreviewLoadingChange') as InjectionKey<(loading: boolean) => void>