import type { InjectionKey, Ref } from 'vue';
export declare const defaultNamespace = "su";
export declare const namespaceContextKey: InjectionKey<Ref<string>>;
export declare function useGetDerivedNamespace(namespaceOverrides?: Ref<string | undefined>): import("vue").ComputedRef<string>;
export declare function useNamespace(block: string, namespaceOverrides?: Ref<string | undefined>): {
    namespace: import("vue").ComputedRef<string>;
    b: (blockSuffix?: string) => string;
    e: (element?: string) => string;
    m: (modifier?: string) => string;
    be: (blockSuffix?: string, element?: string) => string;
    em: (element?: string, modifier?: string) => string;
    bm: (blockSuffix?: string, modifier?: string) => string;
    bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
    is: {
        (name: string, state: boolean): string;
        (name: string): string;
    };
    cssVar: (object: Record<string, string>) => Record<string, string>;
    cssVarName: (name: string) => string;
    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
    cssVarBlockName: (name: string) => string;
};
export type UseNamespaceReturn = ReturnType<typeof useNamespace>;
export declare function classNames(...args: any[]): string;
