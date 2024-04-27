import * as _sgwm_sutras_shared from '@sgwm-sutras/shared';
import { File, FileCode, FileIdentifier, SFCDocMeta, SSRModeType, PreviewMode } from '@sgwm-sutras/shared';
import { ConsoleApi, LinkStore } from '@sgwm-sutras/console';
import { PromisifyFn, MaybeElement } from '@vueuse/core';
import { VitePressData } from 'vitepress';
import { InjectionKey, Ref, Slot, ComputedRef } from 'vue';
import * as _vueuse_shared from '@vueuse/shared';

type DemoPatternType = 'editable' | 'readPretty';
type DemoShowLangType = 'ts' | 'js';

declare const ReplPageDataInjectKey: InjectionKey<VitePressData<any> | undefined>;
declare const ReplFilesInjectKey: InjectionKey<Ref<File[]>>;
declare const ReplFileIdentifierInjectKey: InjectionKey<string>;
declare const ReplImportMapInjectKey: InjectionKey<{
    readonly imports?: {
        readonly [x: string]: _sgwm_sutras_shared.ImportSource;
    } | undefined;
    readonly scopes?: {
        readonly [x: string]: {
            readonly [x: string]: _sgwm_sutras_shared.ImportSource;
        };
    } | undefined;
}>;
declare const ReplSetSourceInjectKey: InjectionKey<PromisifyFn<(identifier: string, codeNext: FileCode) => Promise<void>>>;
declare const ReplCodePreviewRendersKey: InjectionKey<Record<string, Slot<any>>>;
declare const ReplCodeShowLangKey: InjectionKey<Readonly<Ref<DemoShowLangType>>>;
declare const ReplCodeShowLangChangeKey: InjectionKey<(showLang: DemoShowLangType) => void>;
declare const ReplPattenKey: InjectionKey<Readonly<Ref<DemoPatternType>>>;
declare const ReplPatternChangeKey: InjectionKey<(pattern: DemoPatternType) => void>;
declare const ReplCollapseKey: InjectionKey<Readonly<Ref<boolean>>>;
declare const ReplCollapseChangeKey: InjectionKey<(collapse: boolean) => void>;
declare const ReplBoxWrapperRefKey: InjectionKey<Ref<MaybeElement>>;
declare const ReplFullscreenKey: InjectionKey<Readonly<Ref<boolean>>>;
declare const ReplFullscreenChangeKey: InjectionKey<(fullscreen: boolean) => void>;
declare const ReplActiveFileKey: InjectionKey<Readonly<Ref<string>>>;
declare const ReplActiveFileChangeKey: InjectionKey<(identifier: FileIdentifier) => void>;
declare const ReplIsUseTS: InjectionKey<Readonly<boolean>>;
declare const ReplMetaKey: InjectionKey<ComputedRef<SFCDocMeta | undefined>>;
declare const DeviceTypeInjectKey: InjectionKey<Ref<string | undefined>>;
declare const DeviceTypeChangeInjectKey: InjectionKey<(device: string) => void>;
declare const SSRModeInjectKey: InjectionKey<Ref<SSRModeType | undefined>>;
declare const SSRModeChangeInjectKey: InjectionKey<(mode: SSRModeType) => void>;
declare const ConsoleAPIInjectKey: InjectionKey<ConsoleApi>;
declare const ConsoleLinkStoreInjectKey: InjectionKey<Ref<LinkStore | null>>;
declare const IsTerminialInjectKey: InjectionKey<Ref<boolean>>;
declare const PreviewModeInjectKey: InjectionKey<Ref<PreviewMode>>;

declare function useDemoProvider(container: Ref<MaybeElement | null>): {
    files: Ref<{
        readonly identifier: string;
        readonly filename: string;
        readonly extension: ".vue" | ".js" | ".jsx" | ".ts" | ".tsx" | ".html" | ".css" | ".json";
        readonly isEntry: boolean;
        readonly pathFromEntry: string;
        readonly parsed: string | {
            template?: string | undefined;
            styles?: string[] | undefined;
            script?: string | undefined;
            isSetupScript?: boolean | undefined;
            isScriptLangTS?: boolean | undefined;
            jsCode?: string | undefined;
            docContent?: string | undefined;
            code: string;
            docMeta: {
                title?: string | undefined;
                badge?: string | undefined;
                debug?: string | undefined;
                includes?: string[] | undefined;
                highlight?: string | undefined;
                defaultPreviewMode?: PreviewMode | undefined;
                previewHeight?: _sgwm_sutras_shared.PreviewHeight | undefined;
                enableSSR?: _sgwm_sutras_shared.SSREnableType | undefined;
                defaultRenderMode?: SSRModeType | undefined;
                enableREPL?: boolean | undefined;
                style?: "box" | "box-compact" | "plain" | "plain-compact" | undefined;
                background?: string | undefined;
                sourceURL?: string | ((demo: _sgwm_sutras_shared.DemoContextBasic) => string) | undefined;
                defaultCodeCollapse?: boolean | undefined;
                deviceList?: _sgwm_sutras_shared.DeviceList | undefined;
                defaultDevice?: string | undefined;
            };
        } | {
            js: string;
            ts: string;
            code: string;
            docMeta: {
                title?: string | undefined;
                badge?: string | undefined;
                debug?: string | undefined;
                includes?: string[] | undefined;
                highlight?: string | undefined;
                defaultPreviewMode?: PreviewMode | undefined;
                previewHeight?: _sgwm_sutras_shared.PreviewHeight | undefined;
                enableSSR?: _sgwm_sutras_shared.SSREnableType | undefined;
                defaultRenderMode?: SSRModeType | undefined;
                enableREPL?: boolean | undefined;
                style?: "box" | "box-compact" | "plain" | "plain-compact" | undefined;
                background?: string | undefined;
                sourceURL?: string | ((demo: _sgwm_sutras_shared.DemoContextBasic) => string) | undefined;
                defaultCodeCollapse?: boolean | undefined;
                deviceList?: _sgwm_sutras_shared.DeviceList | undefined;
                defaultDevice?: string | undefined;
            };
        };
        code: string;
        compiled: {
            js?: string | undefined;
            ssr?: string | undefined;
            css?: string | undefined;
        } | null;
        readonly isJS: boolean;
        readonly isJSX: boolean;
        readonly isJSON: boolean;
        readonly isTS: boolean;
        readonly isTSX: boolean;
        readonly isSFC: boolean;
        readonly isCSS: boolean;
        readonly isHTML: boolean;
    }[]>;
    errors: Ref<{
        name: string;
        message: string;
        stack?: string | undefined;
        cause?: unknown;
    }[]>;
    loading: Ref<boolean>;
    setSource: _vueuse_shared.PromisifyFn<(identifier: FileIdentifier, codeNext: FileCode) => Promise<void>>;
    collapse: Ref<boolean>;
};

interface UseReplResult {
    /**
     * @name 运行时状态
     */
    loading: ComputedRef<boolean>;
    /**
     * @name 重新渲染
     */
    reload: () => void;
    /**
     * @name 销毁
     */
    destory: () => void;
    /**
     * @name 创建
     */
    create: () => void;
    /**
     * @name 初始化状态
     */
    initializing: Ref<boolean>;
}
interface UseReplOption {
    container: Ref<HTMLElement | null>;
    onError: (message: string) => void;
}
declare function useRepl(option: UseReplOption): UseReplResult;

export { ConsoleAPIInjectKey, ConsoleLinkStoreInjectKey, DeviceTypeChangeInjectKey, DeviceTypeInjectKey, IsTerminialInjectKey, PreviewModeInjectKey, ReplActiveFileChangeKey, ReplActiveFileKey, ReplBoxWrapperRefKey, ReplCodePreviewRendersKey, ReplCodeShowLangChangeKey, ReplCodeShowLangKey, ReplCollapseChangeKey, ReplCollapseKey, ReplFileIdentifierInjectKey, ReplFilesInjectKey, ReplFullscreenChangeKey, ReplFullscreenKey, ReplImportMapInjectKey, ReplIsUseTS, ReplMetaKey, ReplPageDataInjectKey, ReplPattenKey, ReplPatternChangeKey, ReplSetSourceInjectKey, SSRModeChangeInjectKey, SSRModeInjectKey, type UseReplResult, useDemoProvider, useRepl };
