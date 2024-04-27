import type { InjectionKey } from 'vue';
export interface ConsoleTheme {
    paddingLeft?: number;
    indent?: number;
}
export declare const ConsoleThemeInjectKey: InjectionKey<ConsoleTheme>;
export declare function provideConsoleTheme(): void;
export declare function useConsoleTheme(): ConsoleTheme;
export declare function usePaddingLeft(props: {
    paddingLeft: number;
}): import("vue").ComputedRef<number>;
