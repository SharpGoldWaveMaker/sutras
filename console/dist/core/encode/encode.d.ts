import type { DLink } from '../../definition';
import type { LinkStore } from '../store';
import type { EncodeArgsResult, EncodeArgsType, EncodeOption, EncodeResult } from './types';
export declare function createLink(obj: object, store: LinkStore): DLink;
export declare function encode(data: unknown, option: EncodeOption): import("./types").EncodeTypeResult;
export declare function encodeFull(data: unknown, opt: EncodeOption): EncodeResult;
export declare function createEncoder(store: LinkStore): {
    encode: typeof encodeFull;
    encodeArgs: (type: EncodeArgsType, ...args: unknown[]) => EncodeArgsResult | null;
    clear: () => void;
};
