import type { ConsoleApi, LinkStore } from '@sgwm-sutras/console'
import type { File, FileCode, FileIdentifier, ImportMap, PreviewMode, SFCDocMeta, SSRModeType } from '@sgwm-sutras/shared'
import type { MaybeElement, PromisifyFn } from '@vueuse/core'
import type { VitePressData } from 'vitepress'
import type { ComputedRef, DeepReadonly, InjectionKey, Ref, Slot } from 'vue'
import type { DemoPatternType, DemoShowLangType } from './types'
import { DemoMeta } from '@sgwm-sutras/shared'

export const ReplPageDataInjectKey = Symbol('PageData') as InjectionKey<VitePressData | undefined>

export const ReplFilesInjectKey = Symbol('ReplFiles') as InjectionKey<Ref<File[]>>
export const ReplFileIdentifierInjectKey = Symbol('ReplFileIdentifier') as InjectionKey<FileIdentifier>

export const ReplImportMapInjectKey = Symbol('ReplImportMap') as InjectionKey<DeepReadonly<ImportMap>>

export const ReplSetSourceInjectKey = Symbol('ReplSetSource') as InjectionKey<PromisifyFn<(identifier: string, codeNext: FileCode) => Promise<void>>>

export const ReplCodePreviewRendersKey = Symbol('ReplCodePreviewRenders') as InjectionKey<Record<string, Slot<any>>>

export const ReplCodeShowLangKey = Symbol('ReplShowLang') as InjectionKey<Readonly<Ref<DemoShowLangType>>>
export const ReplCodeShowLangChangeKey = Symbol('ReplShowLangChange') as InjectionKey<(showLang: DemoShowLangType) => void>

export const ReplPattenKey = Symbol('ReplPatten') as InjectionKey<Readonly<Ref<DemoPatternType>>>
export const ReplPatternChangeKey = Symbol('ReplPatternChange') as InjectionKey<(pattern: DemoPatternType) => void>

export const ReplCollapseKey = Symbol('ReplCollapse') as InjectionKey<Readonly<Ref<boolean>>>
export const ReplCollapseChangeKey = Symbol('ReplCollapseChange') as InjectionKey<(collapse: boolean) => void>

export const ReplBoxWrapperRefKey = Symbol('ReplBoxWrapperRef') as InjectionKey<Ref<MaybeElement | null>>

export const ReplFullscreenKey = Symbol('ReplFullscreen') as InjectionKey<Readonly<Ref<boolean>>>
export const ReplFullscreenChangeKey = Symbol('ReplFullscreenChange') as InjectionKey<(fullscreen: boolean) => void>

export const ReplActiveFileKey = Symbol('ReplActiveFile') as InjectionKey<Readonly<Ref<FileIdentifier>>>
export const ReplActiveFileChangeKey = Symbol('ReplActiveFileChange') as InjectionKey<(identifier: FileIdentifier) => void>

export const ReplIsUseTS = Symbol('IsUseTS') as InjectionKey<Readonly<boolean>>

export const ReplMetaKey = Symbol('ReplMeta') as InjectionKey<ComputedRef<DemoMeta | undefined>>

export const DeviceTypeInjectKey = Symbol('DeviceType') as InjectionKey<Ref<string | undefined>>
export const DeviceTypeChangeInjectKey = Symbol('DeviceTypeChange') as InjectionKey<(device: string) => void>

export const SSRModeInjectKey = Symbol('SSRMode') as InjectionKey<Ref<SSRModeType | undefined>>
export const SSRModeChangeInjectKey = Symbol('SSRModeChange') as InjectionKey<(mode: SSRModeType) => void>

export const ConsoleAPIInjectKey = Symbol('ConsoleAPI') as InjectionKey<InstanceType<typeof ConsoleApi>>
export const ConsoleLinkStoreInjectKey = Symbol('ConsoleLinkStore') as InjectionKey<Ref<InstanceType<typeof LinkStore> | null>>

export const IsTerminialInjectKey = Symbol('IsTerminial') as InjectionKey<Ref<boolean>>
export const PreviewModeInjectKey = Symbol('PreviewMode') as InjectionKey<Ref<PreviewMode>>
