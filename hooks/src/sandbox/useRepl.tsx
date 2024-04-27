import { findEntryFile, transformModules } from '@sgwm-sutras/shared'
import { useResizeObserver } from '@vueuse/core'
import type { ComputedRef, Ref, WatchStopHandle } from 'vue'
import { computed, inject, nextTick, ref, watch, watchEffect } from 'vue'
import { ReplFilesInjectKey, ReplPageDataInjectKey, SSRModeInjectKey } from '../symbol'
import { prepareCode, prepareSSRCode, useSandbox } from './useSandbox'

export interface UseReplResult {
  /**
   * @name 运行时状态
   */
  loading: ComputedRef<boolean>
  /**
   * @name 重新渲染
   */
  reload: () => void
  /**
   * @name 销毁
   */
  destory: () => void
  /**
   * @name 创建
   */
  create: () => void
  /**
   * @name 初始化状态
   */
  initializing: Ref<boolean>
}

interface UseReplOption {
  container: Ref<HTMLElement | null>
  onError: (message: string) => void
}

export function useRepl(option: UseReplOption): UseReplResult {
  const { container, onError } = option
  const ssrMode = inject(SSRModeInjectKey)
  const files = inject(ReplFilesInjectKey)
  const pageData = inject(ReplPageDataInjectKey)

  const runtimeError = ref('')
  const runtimeWarning = ref('')
  const loading = ref(false)
  let firstLoading = false
  let stopUpdateWatcher: WatchStopHandle

  const isSSR = computed(() => ssrMode?.value === 'server')
  const theme = computed(() => pageData?.isDark.value ? 'dark' : 'light')

  const {
    create,
    destroy: sandboxDesctory,
    reload,
    setTheme,
    evals,
    initializing,
  } = useSandbox({
    ...option,
    onLoad,
  })

  async function update() {
    runtimeError.value = ''
    runtimeWarning.value = ''

    if (!firstLoading) {
      loading.value = true
      firstLoading = true
    }
    try {
      if (!files)
        return

      const entryFile = findEntryFile(files.value)

      if (isSSR.value) {
        const ssrModules = transformModules({
          files: files.value,
          isSSR: true,
        })
        await evals(
          prepareSSRCode(
            entryFile!.identifier,
            ssrModules,
          ),
        )
      }
      if(!isSSR.value){
        const modules = transformModules({
          files: files?.value,
          isSSR: false,
        })
        await evals(
          prepareCode(
            entryFile!.identifier,
            modules,
            isSSR.value,
          ),
        )
      }
    }
    catch (e: any) {
      console.error(e)
      onError((e as Error).message)
    }
    finally {
      loading.value = false
    }
  }

  function onLoad() {
    stopUpdateWatcher = watchEffect(update)
  }

  function destory() {
    sandboxDesctory()
    stopUpdateWatcher?.()
  }

  useResizeObserver(container, () => {
    // useDebounceFn(reload, 200)()
  })

  watch(theme, setTheme)

  watch(container, () => {
    if (container.value)
      nextTick(create)
  }, { immediate: true })

  return {
    initializing,
    create,
    loading: computed(() => loading.value),
    reload,
    destory,
  }
}
