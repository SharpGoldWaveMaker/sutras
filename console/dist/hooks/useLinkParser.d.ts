import type { Component, InjectionKey, Slot } from 'vue';
import type { DLink } from '../definition';
import type { EncodeTypeResult, LinkStore } from '../core/encode';
export type ConsoleLinkRender = Component<{
    href: string;
}> | Slot | string;
export interface ConsoleLinkParser {
    render?: ConsoleLinkRender;
    store?: LinkStore;
    _getListLinkAsync?: (link: DLink) => Promise<EncodeTypeResult>;
    readLinkObjectAsync?: (link: DLink) => Promise<EncodeTypeResult>;
    callFnLinkAsync?: (link: DLink) => Promise<EncodeTypeResult>;
}
export declare const ConsoleLinkParserInjectKey: InjectionKey<ConsoleLinkParser>;
export declare function provideConsoleLinkParser(props: ConsoleLinkParser): void;
export declare function useConsoleLinkParser(): ConsoleLinkParser;
export declare function useLinkRender(): string | Slot<any> | import("vue").ComponentOptions<{
    href: string;
}, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, any, any, any, any> | import("vue").FunctionalComponent<{
    href: string;
}, {}, any, {}> | {
    new (...args: any[]): {
        href: string;
    };
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
};
