import { type Ref, type Slot, computed, getCurrentInstance, inject, provide, readonly, ref, useSlots } from 'vue'
import type {
  DemoContext,
  File,
  FileCode,
  FileIdentifier,
  PreviewMode,
  SFCParseResult,
  SSRModeType,
} from '@sgwm-sutras/shared'
import {
  compileFile,
  findEntryFile,
  flatten,
  getDemoInjectSymbol,
  getPageInjectSymbol,
  isFileUseTS,
  parseFilesFromDemoContext,
  pickBy,
  useVueImportMap,
} from '@sgwm-sutras/shared'
import type { MaybeElement } from '@vueuse/core'
import { useDebounceFn, useFullscreen } from '@vueuse/core'
import type { VitePressData } from 'vitepress'
import type { LinkStore } from '@sgwm-sutras/console'
import { ConsoleApi } from '@sgwm-sutras/console'
import type { DemoPatternType, DemoShowLangType } from './types'
import {
  ConsoleAPIInjectKey,
  ConsoleLinkStoreInjectKey,
  DeviceTypeChangeInjectKey,
  DeviceTypeInjectKey,
  IsTerminialInjectKey,
  PreviewModeInjectKey,
  ReplActiveFileChangeKey,
  ReplActiveFileKey,
  ReplBoxWrapperRefKey,
  ReplCodePreviewRendersKey,
  ReplCodeShowLangChangeKey,
  ReplCodeShowLangKey,
  ReplCollapseChangeKey,
  ReplCollapseKey,
  ReplFileIdentifierInjectKey,
  ReplFilesInjectKey,
  ReplFullscreenChangeKey,
  ReplFullscreenKey,
  ReplImportMapInjectKey,
  ReplIsUseTS,
  ReplMetaKey,
  ReplPageDataInjectKey,
  ReplPattenKey,
  ReplPatternChangeKey,
  ReplSetSourceInjectKey,
  SSRModeChangeInjectKey,
  SSRModeInjectKey,
} from './symbol'

export function useDemoProvider(container: Ref<MaybeElement | null>) {
  const identifier = getCurrentInstance()!.vnode.key as FileIdentifier
  const symbol = getDemoInjectSymbol(identifier)
  const context: DemoContext = inject(symbol)!
  const pageData = inject<VitePressData>(getPageInjectSymbol())
  const loading = ref(false)
  const errors = ref<Error[]>([])
  const files = ref<File[]>(context ? parseFilesFromDemoContext(context) : [])
  const codePreviewRenders = useSlots()
  const isUseTS = files.value.some(isFileUseTS)
  const showLang = ref<DemoShowLangType>(isUseTS ? 'ts' : 'js')
  const pattern = ref<DemoPatternType>('readPretty')
  const collapse = ref<boolean>(context.meta.defaultCodeCollapse ?? context.meta.defaultPreviewMode !== 'terminal')
  const { isFullscreen, enter, exit } = useFullscreen(container)
  const activeFile = ref<FileIdentifier>(identifier)
  const meta = computed(() => context.meta)
  const { importMap } = useVueImportMap(context.importMap, context.site)

  let defaultDevice = meta.value.defaultDevice
  const deviceList = meta.value.deviceList
  if(deviceList && Object.keys(deviceList).length > 1){
    if(!defaultDevice || !deviceList[defaultDevice]){
      defaultDevice = Object.keys(deviceList)[0]
    }
  }else{
    defaultDevice = undefined
  }
  const deviceType = ref(defaultDevice)

  const consoleAPI = new ConsoleApi()
  const consoleLinkStore = ref(null) as Ref<LinkStore | null>
  const isTerminial = ref(meta.value?.defaultPreviewMode === 'terminal')

  let defaultSSRMode
  const enableSSR = meta.value.enableSSR
  if(typeof enableSSR === 'string'){
    switch(enableSSR){
      case 'clientOnly':
        defaultSSRMode = 'client'
      case 'serverOnly':
        defaultSSRMode = 'sever'
      case 'both':
        defaultSSRMode = meta.value?.defaultRenderMode ?? 'client'
      default:
        throw Error(`invalid enableSSR config: ${enableSSR}`)
    }
  } else {
    defaultSSRMode = !!enableSSR ? meta.value?.defaultRenderMode ?? 'client' : 'client'
  }

  const ssrMode = ref(defaultSSRMode)

  const previewMode = computed((): PreviewMode => {
    if(pattern.value === 'editable'){
      return 'browser'
    }
    if(enableSSR){
      return 'browser'
    }
    return meta.value.defaultPreviewMode || 'block'
  })


  async function compileAll() {
    try {
      loading.value = true
      errors.value = flatten(
        await Promise.all(
          files.value.map(file => compileFile(file)),
        ),
      )
    }
    catch (error) {
      if (error instanceof Error)
        errors.value = [error]

      else
        errors.value = [Error(JSON.stringify(error))]
    }
    finally {
      loading.value = false
    }
  }

  function setShowLang(showLangNext: DemoShowLangType) {
    showLang.value = showLangNext
  }

  function setPattern(patternNext: DemoPatternType) {
    pattern.value = patternNext
  }

  function setCollapse(collapseNext: boolean) {
    collapse.value = collapseNext
  }

  function setFullscreen(fullscreen: boolean) {
    fullscreen ? enter() : exit()
  }

  function setActiveFile(identifier: FileIdentifier) {
    activeFile.value = identifier
  }

  const setSource = useDebounceFn(async (identifier: FileIdentifier, codeNext: FileCode) => {
    const file = files.value.find(f => f.identifier === identifier)
    if (!file)
      throw new Error(`file ${identifier} not exist`)

    try {
      file.code = codeNext
      loading.value = true
      errors.value = await compileFile(file)
    }
    catch (error) {
      if (error instanceof Error)
        errors.value = [error]

      else
        errors.value = [Error(JSON.stringify(error))]
    }
    finally {
      loading.value = false
    }
  }, 500)

  provide(ReplBoxWrapperRefKey, container)
  provide(ReplFilesInjectKey, files)
  provide(ReplFileIdentifierInjectKey, identifier)
  provide(ReplSetSourceInjectKey, setSource)
  provide(ReplImportMapInjectKey, readonly(importMap.value))
  provide(ReplCodePreviewRendersKey, codePreviewRenders as Record<string, Slot<any>>)
  provide(ReplCodeShowLangKey, readonly(showLang))
  provide(ReplCodeShowLangChangeKey, setShowLang)
  provide(ReplPattenKey, readonly(pattern))
  provide(ReplPatternChangeKey, setPattern)
  provide(ReplCollapseKey, readonly(collapse))
  provide(ReplCollapseChangeKey, setCollapse)
  provide(ReplFullscreenKey, readonly(isFullscreen))
  provide(ReplFullscreenChangeKey, setFullscreen)
  provide(ReplActiveFileKey, readonly(activeFile))
  provide(ReplActiveFileChangeKey, setActiveFile)
  provide(ReplMetaKey, meta)
  provide(ReplIsUseTS, isUseTS)
  provide(ReplPageDataInjectKey, pageData)
  provide(DeviceTypeInjectKey, deviceType)
  provide(DeviceTypeChangeInjectKey, device => deviceType.value = device)
  provide(SSRModeInjectKey, ssrMode)
  provide(SSRModeChangeInjectKey, (mode: SSRModeType) => ssrMode.value = mode)
  provide(ConsoleAPIInjectKey, consoleAPI)
  provide(ConsoleLinkStoreInjectKey, consoleLinkStore)
  provide(IsTerminialInjectKey, isTerminial)
  provide(PreviewModeInjectKey, previewMode)

  compileAll()

  return {
    files,
    errors,
    loading,
    setSource,
    collapse,
  }
}
