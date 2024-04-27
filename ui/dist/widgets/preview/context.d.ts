import { InjectionKey, Ref } from 'vue';

export declare const ShowTerminialInjectKey: InjectionKey<Ref<boolean>>;
export declare const DeviceRotateInjectKey: InjectionKey<Ref<boolean>>;
export declare const ErrorMessageInjectKey: InjectionKey<Ref<string>>;
export declare const ErrorMessageChangeInjectKey: InjectionKey<(message: string) => void>;
export declare const PreviewLoadingInjectKey: InjectionKey<Ref<boolean>>;
export declare const PreviewLoadingChangeInjectKey: InjectionKey<(loading: boolean) => void>;
