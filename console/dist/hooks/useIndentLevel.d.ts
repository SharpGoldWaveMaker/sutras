import type { InjectionKey } from 'vue';
export interface ConsoleIndentLevel {
    level: number;
}
export declare const consoleIndentLevelDefault: ConsoleIndentLevel;
export declare const ConsoleIndentLevelInjectKey: InjectionKey<ConsoleIndentLevel>;
export declare function provideConsoleIndentLevel(): {
    level: number;
};
export declare function useConsoleIndentLevel(): ConsoleIndentLevel;
