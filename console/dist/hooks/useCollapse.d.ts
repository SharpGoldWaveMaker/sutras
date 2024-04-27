import type { InjectionKey, Ref } from 'vue';
export interface ConsoleCollapseState {
    expand: Ref<boolean>;
}
export declare const consoleCollapseStateDefault: ConsoleCollapseState;
export declare const ConsoleCollapseStateInjectKey: InjectionKey<ConsoleCollapseState>;
export declare function provideConsoleCollapseState(): {
    expand: Ref<boolean>;
};
export declare function useConsoleCollapseState(): ConsoleCollapseState;
