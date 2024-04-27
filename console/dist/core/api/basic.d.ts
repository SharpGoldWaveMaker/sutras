import type { EncodeResult, EncodeTableResult } from '../encode';
import type { ConsoleItemValue } from './types';
export declare class ConsoleApi {
    readonly values: ConsoleItemValue[];
    private lastItem;
    constructor();
    private isEqualData;
    private basicMethod;
    log(...data: EncodeResult[]): void;
    warn(...data: EncodeResult[]): void;
    info(...data: EncodeResult[]): void;
    debug(...data: EncodeResult[]): void;
    error(...data: EncodeResult[]): void;
    table(data: EncodeTableResult): void;
    private push;
    private findLastActiveGroup;
    group(key: EncodeResult): void;
    groupCollapsed(key: EncodeResult): void;
    groupEnd(): void;
    clear(): void;
}
