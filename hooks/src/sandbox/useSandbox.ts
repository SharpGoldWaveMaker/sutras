import { type Ref, type WatchStopHandle, computed, inject, nextTick, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { ConsoleAPIInjectKey, ConsoleLinkStoreInjectKey, DeviceTypeInjectKey, IsTerminialInjectKey, ReplImportMapInjectKey, ReplMetaKey, ReplPageDataInjectKey } from '../symbol'
import { ReplProxy } from './proxy'
// @ts-expect-error import srcdoc.html raw content
import srcdoc from './srcdoc.html'
import { ConsoleApi, LinkStore, createEncoder } from '@sgwm-sutras/console'

interface UseSandboxOption {
  container: Ref<HTMLElement | null>
  onError: (message: string) => void
  onLoad: () => void
}

export function useSandbox(options: UseSandboxOption) {
  const { container, onError, onLoad } = options
  const UUID = btoa(Date.now().toString())
  let sandbox: HTMLIFrameElement
  let proxy: ReplProxy
  let stopUpdateWatcher: WatchStopHandle
  const importMap = inject(ReplImportMapInjectKey)
  const pageData = inject(ReplPageDataInjectKey)
  const meta = inject(ReplMetaKey)
  const theme = computed(() => pageData?.isDark.value ? 'dark' : 'light')
  const deviceType = inject(DeviceTypeInjectKey)
  const initializing = ref(true)
  const consoleApi = inject(ConsoleAPIInjectKey)
  const consoleLinkStore = inject(ConsoleLinkStoreInjectKey)
  const isTerminal = inject(IsTerminialInjectKey)
  const linkStore = new LinkStore()
  const encoder = createEncoder(linkStore)
  if(consoleLinkStore?.value){
    consoleLinkStore.value = linkStore
  }
  

  function init() {
    if (!sandbox)
      create()

    const sandboxSrc = srcdoc.replace(
      /<html>/,
        `<html class="${theme.value}">`,
    ).replace(/<!--IMPORT_MAP-->/, JSON.stringify(importMap))
    sandbox.srcdoc = sandboxSrc
    proxy = new ReplProxy(sandbox, {
      on_fetch_progress: () => {},
      on_error: (event: any) => {
        const msg = event.value instanceof Error ? event.value.message : event.value
        if (msg.includes('Failed to resolve module specifier') || msg.includes('Error resolving module specifier')) {
          const errorMessage = `${msg.replace(/\. Relative references must.*$/, '') // '.\nTip: add an "import-map.json" file to specify import paths for dependencies.'
            }.\nTip: specify import paths for dependencies in [imports-map] props on sandbox components`
          onError(errorMessage)
        }
        else {
          onError(event.value.message)
        }
      },
      on_unhandled_rejection: (event: any) => {
        let error = event.value
        if (typeof error === 'string')
          error = { message: error }

        onError(`Uncaught (in promise): ${error.message}`)
      },
      // on_console: (log: any) => {
      //   consoleAPI[log.level](...log.args)
      // },
      on_console_api: (event: any) => {
        if (consoleApi) {
          const { type, values } = event.args || []
          // @ts-expect-error consoleAPi method
          consoleApi[type](...values)
        }
      },
    })
    sandbox.addEventListener('load', () => {
      proxy.handle_links()
      onLoad?.()
      setTheme()
      // @ts-ignore
      sandbox.contentWindow.encodeConsoleArgs = encoder.encodeArgs
      // console.log('sandbox.contentWindow.encodeConsoleArgs', sandbox.contentWindow.encodeConsoleArgs)
    })
  }
  function create() {
    if (sandbox)
      destroy()

    initializing.value = true
    sandbox = document.createElement('iframe')
    sandbox.setAttribute('id', UUID)
    sandbox.setAttribute('frameborder', '0')
    sandbox.setAttribute('scrolling', 'no')
    sandbox.setAttribute('sandbox', [
      'allow-forms',
      'allow-modals',
      'allow-pointer-lock',
      'allow-popups',
      'allow-same-origin',
      'allow-scripts',
      'allow-top-navigation-by-user-activation',
    ].join(' '))
    sandbox.style.width = '100%'
    sandbox.style.height = '100%'
    sandbox.style.display = isTerminal?.value ? 'none' : 'block'
    let loadTimer: any
    const loadDelay = 300
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadTimer = setTimeout(() => {
            init()
            observer.unobserve(entry.target)
          }, loadDelay)
        }
        else {
          if (loadTimer) {
            clearTimeout(loadTimer)
            create()
          }
        }
      })
    }, {
      rootMargin: '100px',
    })
    observer.observe(container!.value!)
    container.value?.appendChild(sandbox)
  }
  function updateBoxHeight() {
    if (deviceType?.value !== 'Default') {
      sandbox.style.height = '100%'
      return
    }
    if (['number', 'string'].includes(typeof meta?.value?.previewHeight)) {
      sandbox.style.height = '100%'
      return
    }
    // @ts-expect-error parentWindow
    const iframeWin = sandbox.contentWindow || sandbox.contentDocument!.parentWindow! as Window
    if (iframeWin.document.body)
      sandbox.style.height = `${iframeWin.document.body.scrollHeight}px`
  }

  function destroy() {
    proxy.destroy()
    stopUpdateWatcher?.()
    container.value?.removeChild(sandbox)
  }

  function setTheme() {
    const html = sandbox.contentDocument?.documentElement
    if (html)
      html.className = theme.value
    else
      create()
  }

  const reload = useDebounceFn(() =>
    sandbox.contentWindow?.location.reload(), 200)

  async function evals(codes: string[]) {
    onError('')
    consoleApi?.clear()
    linkStore.clear()
    await proxy.execute(codes)
    nextTick(updateBoxHeight)
    initializing.value && (initializing.value = false)
  }

  watch(() => deviceType?.value, () => {
    nextTick(updateBoxHeight)
  })

  return {
    initializing,
    create,
    destroy,
    setTheme,
    reload,
    evals,
  }
}

export function prepareCode(entry: string, modules: string[], isSSR: boolean) {
  return [
        `
            window.__modules__ = {};\n
            window.__css__ = [];\n
            if (window.__app__) window.__app__.unmount();\n${
            isSSR
              ? ``
              : `document.body.innerHTML = '<div id="app"></div>'`}`,
        ...modules,
            `
            document.head.insertAdjacentHTML('beforeend', window.__css__.map(s => \`<style css>\${s}</style>\`).join('\\n'))`,
            `import { ${
                isSSR ? `createSSRApp` : `createApp`
              } as _createApp } from "vue"
              const _mount = () => {
                const AppComponent = __modules__["${entry}"].default
                if(!AppComponent) return;
                AppComponent.name = 'Repl'
                const app = window.__app__ = _createApp(AppComponent)
                if (!app.config.hasOwnProperty('unwrapInjectedRef')) {
                  app.config.unwrapInjectedRef = true
                }
                // app.config.errorHandler = e => console.error(e)
                app.mount('#app')
              }
              if (window.__ssr_promise__) {
                window.__ssr_promise__.then(_mount)
              } else {
                _mount()
              }`,
  ]
}

export function prepareSSRCode(entry: string, ssrModules: string[]) {
  return [
      `const __modules__ = {};`,
      ...ssrModules,
      `import { renderToString as _renderToString } from 'vue/server-renderer'
      import { createSSRApp as _createApp } from 'vue'
      const AppComponent = __modules__["${entry}"].default
      AppComponent.name = 'Repl'
      const app = _createApp(AppComponent)
      if (!app.config.hasOwnProperty('unwrapInjectedRef')) {
          app.config.unwrapInjectedRef = true
      }
      // app.config.warnHandler = () => {}
      window.__ssr_promise__ = _renderToString(app).then(html => {
          document.body.innerHTML = '<div id="app">' + html + '</div>'
      }).catch(err => {
          console.error("SSR Error", err)
      })
      `,
  ]
}
