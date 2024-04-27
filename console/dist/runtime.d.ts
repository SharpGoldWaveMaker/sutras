declare enum TypesFn {
    fn = 0,
    arrowFn = 1,
    propFn = 2
}
declare function getHeaderFn(code: string): {
    name: string;
    args: string;
    content: string;
    isAsync: boolean;
    isStar: boolean;
    typeFn: TypesFn;
};

interface DLink {
    readonly '@t': 'link';
    readonly '@type': 'object' | 'function';
    readonly '@link': string;
    readonly '@name': string | null;
}
interface DString {
    readonly '@t': 'string';
    '@first': boolean;
    '@value': string;
}
interface DNumber {
    readonly '@t': 'number';
    readonly '@value': string;
}
interface DBigInt {
    readonly '@t': 'bint';
    readonly '@value': string;
}
interface DSymbol {
    readonly '@t': 'symbol';
    readonly '@value': string;
}
interface DNill {
    readonly '@t': 'nill';
    readonly '@value': 'null' | 'undefined';
}
interface DFunction {
    readonly '@t': 'function';
    readonly '@first': boolean;
    readonly '@header': ReturnType<typeof getHeaderFn>;
    readonly '@code': string;
    readonly '@real': DLink | null;
}
interface DCollection extends Omit<DRecord, '@t' | '@des' | '@first' | '@real'> {
    readonly '@t': 'collection';
    readonly '@name': 'map' | 'weakmap' | 'set' | 'weakset';
    readonly '@size': number | null;
    readonly '@entries': unknown;
    readonly '@real': DLink;
}
interface DRegExp extends Omit<DRecord, '@t' | '@de' | '@real' | '@des'> {
    readonly '@t': 'regexp';
    readonly '@flags': string;
    readonly '@source': string;
    readonly '@real': DLink | null;
}
interface DGetSetter {
    readonly '@t': 'gs';
    readonly '@value': DLink;
    readonly '@at': Partial<{
        [name in 'get' | 'set']: DFunction;
    }>;
}
interface DObjReal {
    readonly [name: string]: RealItem<DGetSetter | string | number | bigint | symbol | DFunction | DCollection | RegExp | DRecord | DNill | DError | DArray | DElement | DPromise | Date | DTypedArray | DBuffer | DataView>;
}
interface DRecord {
    readonly '@t': 'object';
    readonly '@name': string | null;
    readonly '@first': boolean;
    readonly '@real': DObjReal | DLink;
    readonly '@des': {
        readonly '@value': PObjReal;
        readonly '@lastKey': string;
    } | null;
}
interface DError {
    readonly '@t': 'error';
    readonly '@first': boolean;
    readonly '@stack': string;
    readonly '@real': DLink | null;
}
interface DArray extends Pick<DRecord, '@des'> {
    readonly '@t': 'array';
    readonly '@size': number;
    readonly '@name': string | null;
    readonly '@first': boolean;
    readonly '@real': DLink;
}
interface DElement {
    readonly '@t': 'element';
    readonly '@name': string;
    readonly '@first': boolean;
    readonly '@attrs'?: [string, string][];
    readonly '@real': DLink | null;
    readonly '@childs'?: string | null | DLink;
}
interface DPromise {
    readonly '@t': 'promise';
    readonly '@first': boolean;
    readonly '@state': 'pending' | 'fulfilled' | 'rejected';
    readonly '@real': DLink;
    readonly '@des': Exclude<DRecord['@des'], null>;
}
interface DDate extends Pick<DRecord, '@des'> {
    readonly '@t': 'date';
    readonly '@first': boolean;
    readonly '@value': string;
    readonly '@real': DLink | null;
}
interface DTypedArray extends Omit<DArray, '@t'> {
    readonly '@t': 'typedarray';
    readonly '@real': DLink;
}
interface DBuffer extends Omit<DArray, '@t' | '@des' | '@real'> {
    readonly '@t': 'buffer';
    readonly '@real': DLink;
}
interface DDataView extends Omit<DArray, '@t' | '@des' | '@name'> {
    readonly '@t': 'dataview';
    readonly '@name': 'DataView';
    readonly '@real': DLink;
}
interface RealItem<T> {
    readonly '@hidden': boolean;
    readonly '@value': T;
}

type PRecord = Pick<DRecord, '@t' | '@name'>;
type PError = Pick<DError, '@t' | '@stack'>;
type PRegExp = Pick<DRegExp, '@t' | '@name'>;
type PCollection = Pick<DCollection, '@t' | '@name' | '@size'>;
type PArray = Pick<DArray, '@t' | '@size' | '@name'>;
type PFunction = Pick<DFunction, '@t'>;
type PElement = Pick<DElement, '@t' | '@name'>;
type PPromise = Pick<DPromise, '@t'>;
type PDate = Pick<DDate, '@t' | '@value'>;
type PTypedArray = Pick<DTypedArray, '@t' | '@size' | '@name'>;
type PBuffer = Pick<DBuffer, '@t' | '@size' | '@name'>;
type PDataView = Pick<DDataView, '@t' | '@size' | '@name'>;
interface PObjReal {
    readonly [name: string]: RealItem<PRecord | PError | PRegExp | PCollection | PArray | PFunction | PElement | PPromise | PDate | PTypedArray | PBuffer | PDataView | DString | DNumber | DBigInt | DSymbol | DNill>;
}

declare class LinkStore {
    private linkMap;
    private max;
    private accessOrder;
    private count;
    constructor(max?: number | null);
    clear(): void;
    set(obj: object): string;
    get(key: string): object | undefined;
    query(obj: object): string | undefined;
    private evict;
    private moveToFront;
}

type EncodeTypeResult = DString | DNumber | DBigInt | DSymbol | DFunction | DCollection | DRegExp | DNill | DRecord | DError | DArray | DElement | DPromise | DDate | DTypedArray | DBuffer | DDataView | DLink;
interface EncodeTableResult {
    readonly 'table': Record<string, Record<string, PObjReal['']['@value']>>;
    readonly 'cols': string[];
    readonly '@location'?: string;
    readonly '@collapse'?: EncodeResult;
}
type EncodeResult = (EncodeTypeResult & {
    readonly '@id': string;
    readonly '@location'?: string;
}) | EncodeTableResult;
type EncodeArgsType = 'warn' | 'info' | 'debug' | 'error' | 'log' | 'table' | 'group' | 'groupCollapsed' | 'groupEnd' | 'count' | 'countReset' | 'time' | 'timeLog' | 'timeEnd' | 'assert';
interface EncodeArgsResult {
    type: EncodeArgsType;
    values: (EncodeResult | unknown)[];
}
interface EncodeOption {
    readonly store: LinkStore;
    readonly first?: boolean;
    readonly linkReal?: boolean;
    readonly preview?: boolean;
    readonly forceObject?: boolean;
    readonly deepLink?: false | number;
}
interface EncodeScope {
    readonly queryLink: (data: object) => string | null;
    readonly saveLink: (data: object) => string;
}
type Encoder = (data: unknown, option: Partial<EncodeOption>) => EncodeResult;
type EncoderType = (data: unknown, option: EncodeOption) => EncodeTypeResult;

declare function encode(data: unknown, option: EncodeOption): EncodeTypeResult;
declare function encodeFull(data: unknown, opt: EncodeOption): EncodeResult;
declare function createEncoder(store: LinkStore): {
    encode: typeof encodeFull;
    encodeArgs: (type: EncodeArgsType, ...args: unknown[]) => EncodeArgsResult | null;
    clear: () => void;
};

interface LogData {
    readonly data: readonly EncodeResult[];
    count: number;
    readonly type: 'warn' | 'info' | 'debug' | 'error' | 'output' | 'log';
}
interface TableData {
    readonly data: EncodeResult;
    readonly type: 'table';
}
interface GroupData {
    readonly '@key': EncodeResult;
    readonly '@items': (LogData | TableData | GroupData)[];
    '@end': boolean;
    readonly '@collapse': boolean;
}
type ConsoleItemValue = LogData | TableData | GroupData;

declare function isGroup(data: any): data is GroupData;

declare class ConsoleApi {
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

export { ConsoleApi, type ConsoleItemValue, type EncodeArgsResult, type EncodeArgsType, type EncodeOption, type EncodeResult, type EncodeScope, type EncodeTableResult, type EncodeTypeResult, type Encoder, type EncoderType, type GroupData, LinkStore, type LogData, type TableData, createEncoder, encode, isGroup };
