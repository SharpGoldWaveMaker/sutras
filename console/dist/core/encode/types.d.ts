import type { DArray, DBigInt, DBuffer, DCollection, DDataView, DDate, DElement, DError, DFunction, DLink, DNill, DNumber, DPromise, DRecord, DRegExp, DString, DSymbol, DTypedArray, PObjReal } from '../../definition';
import type { LinkStore } from '../store';
export type EncodeTypeResult = DString | DNumber | DBigInt | DSymbol | DFunction | DCollection | DRegExp | DNill | DRecord | DError | DArray | DElement | DPromise | DDate | DTypedArray | DBuffer | DDataView | DLink;
export interface EncodeTableResult {
    readonly 'table': Record<string, Record<string, PObjReal['']['@value']>>;
    readonly 'cols': string[];
    readonly '@location'?: string;
    readonly '@collapse'?: EncodeResult;
}
export type EncodeResult = (EncodeTypeResult & {
    readonly '@id': string;
    readonly '@location'?: string;
}) | EncodeTableResult;
export type EncodeArgsType = 'warn' | 'info' | 'debug' | 'error' | 'log' | 'table' | 'group' | 'groupCollapsed' | 'groupEnd' | 'count' | 'countReset' | 'time' | 'timeLog' | 'timeEnd' | 'assert';
export interface EncodeArgsResult {
    type: EncodeArgsType;
    values: (EncodeResult | unknown)[];
}
export interface EncodeOption {
    readonly store: LinkStore;
    readonly first?: boolean;
    readonly linkReal?: boolean;
    readonly preview?: boolean;
    readonly forceObject?: boolean;
    readonly deepLink?: false | number;
}
export interface EncodeScope {
    readonly queryLink: (data: object) => string | null;
    readonly saveLink: (data: object) => string;
}
export type Encoder = (data: unknown, option: Partial<EncodeOption>) => EncodeResult;
export type EncoderType = (data: unknown, option: EncodeOption) => EncodeTypeResult;
