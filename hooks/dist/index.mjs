import { getCurrentInstance, inject, ref, useSlots, computed, provide, readonly, watch, nextTick, watchEffect } from 'vue';
import { getDemoInjectSymbol, getPageInjectSymbol, parseFilesFromDemoContext, isFileUseTS, useVueImportMap, compileFile, flatten, findEntryFile, transformModules } from '@sgwm-sutras/shared';
import { useFullscreen, useDebounceFn, useResizeObserver } from '@vueuse/core';
import { ConsoleApi, LinkStore, createEncoder } from '@sgwm-sutras/console';

const ReplPageDataInjectKey = Symbol("PageData");
const ReplFilesInjectKey = Symbol("ReplFiles");
const ReplFileIdentifierInjectKey = Symbol("ReplFileIdentifier");
const ReplImportMapInjectKey = Symbol("ReplImportMap");
const ReplSetSourceInjectKey = Symbol("ReplSetSource");
const ReplCodePreviewRendersKey = Symbol("ReplCodePreviewRenders");
const ReplCodeShowLangKey = Symbol("ReplShowLang");
const ReplCodeShowLangChangeKey = Symbol("ReplShowLangChange");
const ReplPattenKey = Symbol("ReplPatten");
const ReplPatternChangeKey = Symbol("ReplPatternChange");
const ReplCollapseKey = Symbol("ReplCollapse");
const ReplCollapseChangeKey = Symbol("ReplCollapseChange");
const ReplBoxWrapperRefKey = Symbol("ReplBoxWrapperRef");
const ReplFullscreenKey = Symbol("ReplFullscreen");
const ReplFullscreenChangeKey = Symbol("ReplFullscreenChange");
const ReplActiveFileKey = Symbol("ReplActiveFile");
const ReplActiveFileChangeKey = Symbol("ReplActiveFileChange");
const ReplIsUseTS = Symbol("IsUseTS");
const ReplMetaKey = Symbol("ReplMeta");
const DeviceTypeInjectKey = Symbol("DeviceType");
const DeviceTypeChangeInjectKey = Symbol("DeviceTypeChange");
const SSRModeInjectKey = Symbol("SSRMode");
const SSRModeChangeInjectKey = Symbol("SSRModeChange");
const ConsoleAPIInjectKey = Symbol("ConsoleAPI");
const ConsoleLinkStoreInjectKey = Symbol("ConsoleLinkStore");
const IsTerminialInjectKey = Symbol("IsTerminial");
const PreviewModeInjectKey = Symbol("PreviewMode");

function useDemoProvider(container) {
  const identifier = getCurrentInstance().vnode.key;
  const symbol = getDemoInjectSymbol(identifier);
  const context = inject(symbol);
  const pageData = inject(getPageInjectSymbol());
  const loading = ref(false);
  const errors = ref([]);
  const files = ref(context ? parseFilesFromDemoContext(context) : []);
  const codePreviewRenders = useSlots();
  const isUseTS = files.value.some(isFileUseTS);
  const showLang = ref(isUseTS ? "ts" : "js");
  const pattern = ref("readPretty");
  const collapse = ref(context.meta.defaultCodeCollapse ?? context.meta.defaultPreviewMode !== "terminal");
  const { isFullscreen, enter, exit } = useFullscreen(container);
  const activeFile = ref(identifier);
  const meta = computed(() => context.meta);
  const { importMap } = useVueImportMap(context.importMap, context.site);
  let defaultDevice = meta.value.defaultDevice;
  const deviceList = meta.value.deviceList;
  if (deviceList && Object.keys(deviceList).length > 1) {
    if (!defaultDevice || !deviceList[defaultDevice]) {
      defaultDevice = Object.keys(deviceList)[0];
    }
  } else {
    defaultDevice = void 0;
  }
  const deviceType = ref(defaultDevice);
  const consoleAPI = new ConsoleApi();
  const consoleLinkStore = ref(null);
  const isTerminial = ref(meta.value?.defaultPreviewMode === "terminal");
  let defaultSSRMode;
  const enableSSR = meta.value.enableSSR;
  if (typeof enableSSR === "string") {
    switch (enableSSR) {
      case "clientOnly":
        defaultSSRMode = "client";
      case "serverOnly":
        defaultSSRMode = "sever";
      case "both":
        defaultSSRMode = meta.value?.defaultRenderMode ?? "client";
      default:
        throw Error(`invalid enableSSR config: ${enableSSR}`);
    }
  } else {
    defaultSSRMode = !!enableSSR ? meta.value?.defaultRenderMode ?? "client" : "client";
  }
  const ssrMode = ref(defaultSSRMode);
  const previewMode = computed(() => {
    if (pattern.value === "editable") {
      return "browser";
    }
    if (enableSSR) {
      return "browser";
    }
    return meta.value.defaultPreviewMode || "block";
  });
  async function compileAll() {
    try {
      loading.value = true;
      errors.value = flatten(
        await Promise.all(
          files.value.map((file) => compileFile(file))
        )
      );
    } catch (error) {
      if (error instanceof Error)
        errors.value = [error];
      else
        errors.value = [Error(JSON.stringify(error))];
    } finally {
      loading.value = false;
    }
  }
  function setShowLang(showLangNext) {
    showLang.value = showLangNext;
  }
  function setPattern(patternNext) {
    pattern.value = patternNext;
  }
  function setCollapse(collapseNext) {
    collapse.value = collapseNext;
  }
  function setFullscreen(fullscreen) {
    fullscreen ? enter() : exit();
  }
  function setActiveFile(identifier2) {
    activeFile.value = identifier2;
  }
  const setSource = useDebounceFn(async (identifier2, codeNext) => {
    const file = files.value.find((f) => f.identifier === identifier2);
    if (!file)
      throw new Error(`file ${identifier2} not exist`);
    try {
      file.code = codeNext;
      loading.value = true;
      errors.value = await compileFile(file);
    } catch (error) {
      if (error instanceof Error)
        errors.value = [error];
      else
        errors.value = [Error(JSON.stringify(error))];
    } finally {
      loading.value = false;
    }
  }, 500);
  provide(ReplBoxWrapperRefKey, container);
  provide(ReplFilesInjectKey, files);
  provide(ReplFileIdentifierInjectKey, identifier);
  provide(ReplSetSourceInjectKey, setSource);
  provide(ReplImportMapInjectKey, readonly(importMap.value));
  provide(ReplCodePreviewRendersKey, codePreviewRenders);
  provide(ReplCodeShowLangKey, readonly(showLang));
  provide(ReplCodeShowLangChangeKey, setShowLang);
  provide(ReplPattenKey, readonly(pattern));
  provide(ReplPatternChangeKey, setPattern);
  provide(ReplCollapseKey, readonly(collapse));
  provide(ReplCollapseChangeKey, setCollapse);
  provide(ReplFullscreenKey, readonly(isFullscreen));
  provide(ReplFullscreenChangeKey, setFullscreen);
  provide(ReplActiveFileKey, readonly(activeFile));
  provide(ReplActiveFileChangeKey, setActiveFile);
  provide(ReplMetaKey, meta);
  provide(ReplIsUseTS, isUseTS);
  provide(ReplPageDataInjectKey, pageData);
  provide(DeviceTypeInjectKey, deviceType);
  provide(DeviceTypeChangeInjectKey, (device) => deviceType.value = device);
  provide(SSRModeInjectKey, ssrMode);
  provide(SSRModeChangeInjectKey, (mode) => ssrMode.value = mode);
  provide(ConsoleAPIInjectKey, consoleAPI);
  provide(ConsoleLinkStoreInjectKey, consoleLinkStore);
  provide(IsTerminialInjectKey, isTerminial);
  provide(PreviewModeInjectKey, previewMode);
  compileAll();
  return {
    files,
    errors,
    loading,
    setSource,
    collapse
  };
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
let uid = 1;
class ReplProxy {
  constructor(iframe, handlers) {
    __publicField(this, "iframe");
    __publicField(this, "handlers");
    __publicField(this, "pending_cmds");
    __publicField(this, "handle_event");
    this.iframe = iframe;
    this.handlers = handlers;
    this.pending_cmds = /* @__PURE__ */ new Map();
    this.handle_event = (e) => this.handle_repl_message(e);
    window.addEventListener("message", this.handle_event, false);
  }
  destroy() {
    window.removeEventListener("message", this.handle_event);
  }
  iframe_command(action, args) {
    return new Promise((resolve, reject) => {
      const cmd_id = uid++;
      this.pending_cmds.set(cmd_id, { resolve, reject });
      this.iframe.contentWindow.postMessage({ action, cmd_id, args }, "*");
    });
  }
  handle_command_message(cmd_data) {
    const action = cmd_data.action;
    const id = cmd_data.cmd_id;
    const handler = this.pending_cmds.get(id);
    if (handler) {
      this.pending_cmds.delete(id);
      if (action === "cmd_error") {
        const { message, stack } = cmd_data;
        const e = new Error(message);
        e.stack = stack;
        handler.reject(e);
      }
      if (action === "cmd_ok")
        handler.resolve(cmd_data.args);
    } else {
      console.error("command not found", id, cmd_data, [
        ...this.pending_cmds.keys()
      ]);
    }
  }
  handle_repl_message(event) {
    if (event.source !== this.iframe.contentWindow)
      return;
    const { action, args } = event.data;
    switch (action) {
      case "cmd_error":
      case "cmd_ok":
        return this.handle_command_message(event.data);
      case "fetch_progress":
        return this.handlers.on_fetch_progress(args.remaining);
      case "error":
        return this.handlers.on_error(event.data);
      case "unhandledrejection":
        return this.handlers.on_unhandled_rejection(event.data);
      case "console_api":
        return this.handlers.on_console_api(event.data);
    }
  }
  execute(script) {
    return this.iframe_command("execute", { script });
  }
  handle_links() {
    return this.iframe_command("catch_clicks", {});
  }
}

var srcdoc = "<!doctype html>\n<html>\n  <head>\n    <style>\n      html.dark {\n        color-scheme: dark;\n      }\n      body {\n        margin: 0;\n        width: 100%;\n        min-width: 320px;\n        line-height: 24px;\n        font-family: var(--vp-font-family-base);\n        font-size: 16px;\n        font-weight: 400;\n        color: var(--vp-c-text-1);\n        background-color: var(--vp-c-bg);\n        font-synthesis: style;\n        text-rendering: optimizeLegibility;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n    </style>\n    <!-- PREVIEW-OPTIONS-HEAD-HTML -->\n    <script type=\"importmap\">\n      <!--IMPORT_MAP-->\n    </script>\n    <script>\n      ;(() => {\n        let scriptEls = []\n\n        window.process = { env: {} }\n        window.__modules__ = {}\n\n        window.__export__ = (mod, key, get) => {\n          Object.defineProperty(mod, key, {\n            enumerable: true,\n            configurable: true,\n            get,\n          })\n        }\n\n        window.__dynamic_import__ = (key) => {\n          return Promise.resolve(window.__modules__[key])\n        }\n\n        async function handle_message(ev) {\n          let { action, cmd_id } = ev.data\n          const send_message = (payload) =>\n            parent.postMessage({ ...payload }, ev.origin)\n          const send_reply = (payload) => send_message({ ...payload, cmd_id })\n          const send_ok = () => send_reply({ action: 'cmd_ok' })\n          const send_error = (message, stack) => {\n            send_reply({ action: 'cmd_error', message, stack })\n            return false\n          }\n\n          if (action === 'execute') {\n            try {\n              if (scriptEls.length) {\n                scriptEls.forEach((el) => {\n                  document.head.removeChild(el)\n                })\n                scriptEls.length = 0\n              }\n\n              let { script: scripts } = ev.data.args\n              if (typeof scripts === 'string') scripts = [scripts]\n\n              for (const script of scripts) {\n                const scriptEl = document.createElement('script')\n                scriptEl.setAttribute('type', 'module')\n                const done = new Promise((resolve) => {\n                  window.__next__ = resolve\n                })\n                scriptEl.innerHTML = script + `\\nwindow.__next__()`\n                document.head.appendChild(scriptEl)\n                scriptEl.onerror = (err) => {\n                  send_error(err.message, err.stack)\n                  return true\n                }\n                scriptEls.push(scriptEl)\n                await done\n              }\n              send_ok()\n            } catch (e) {\n              send_error(e.message, e.stack)\n            }\n          }\n\n          if (action === 'catch_clicks') {\n            try {\n              const top_origin = ev.origin\n              document.body.addEventListener('click', (event) => {\n                if (event.which !== 1) return\n                if (event.metaKey || event.ctrlKey || event.shiftKey) return\n                if (event.defaultPrevented) return\n\n                // ensure target is a link\n                let el = event.target\n                while (el && el.nodeName !== 'A') el = el.parentNode\n                if (!el || el.nodeName !== 'A') return\n\n                if (\n                  el.hasAttribute('download') ||\n                  el.getAttribute('rel') === 'external' ||\n                  el.target ||\n                  el.href.startsWith('javascript:') ||\n                  !el.href\n                )\n                  return\n\n                event.preventDefault()\n\n                if (el.href.startsWith(top_origin)) {\n                  const url = new URL(el.href)\n                  if (url.hash[0] === '#') {\n                    window.location.hash = url.hash\n                    return\n                  }\n                }\n\n                window.open(el.href, '_blank')\n              })\n              send_ok()\n            } catch (e) {\n              send_error(e.message, e.stack)\n            }\n          }\n        }\n        \n        window.addEventListener('message', handle_message, false)\n\n        window.onerror = function (msg, url, lineNo, columnNo, error) {\n          // ignore errors from import map polyfill - these are necessary for\n          // it to detect browser support\n          if (msg.includes('module specifier “vue”')) {\n            // firefox only error, ignore\n            return false\n          }\n          if (msg.includes(\"Module specifier, 'vue\")) {\n            // Safari only\n            return false\n          }\n          try {\n            parent.postMessage({ action: 'error', value: error }, '*')\n            console.error(error)\n            return true\n          } catch (e) {\n            parent.postMessage({ action: 'error', value: msg }, '*')\n            console.error(error)\n            return true\n          }\n        }\n\n        window.addEventListener('unhandledrejection', (event) => {\n          if (\n            event.reason.message &&\n            event.reason.message.includes('Cross-origin')\n          ) {\n            event.preventDefault()\n            return\n          }\n          try {\n            parent.postMessage(\n              { action: 'unhandledrejection', value: event.reason },\n              '*',\n            )\n          } catch (e) {\n            parent.postMessage(\n              { action: 'unhandledrejection', value: event.reason.message },\n              '*',\n            )\n          }\n        })\n      })()\n    </script>\n    <!-- ES Module Shims: Import maps polyfill for modules browsers without import maps support (all except Chrome 89+) -->\n    <script\n      async\n      src=\"https://cdn.jsdelivr.net/npm/es-module-shims@1.5.18/dist/es-module-shims.wasm.js\"\n    ></script>\n    <script type=\"module\">\n      const ignoresTags = [\n        'Feature flags __VUE_OPTIONS_API__, __VUE_PROD_DEVTOOLS__, __VUE_PROD_HYDRATION_MISMATCH_DETAILS__',\n        'An iframe which has both allow-scripts and allow-same-origin',\n        'Component is missing template or render function'\n      ]\n      const ignorePattern = new RegExp(\n        ignoresTags\n          .map((tag) => tag.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'))\n          .join('|'),\n        'i',\n      )\n      ;[\n        'clear',\n        'count',\n        'countReset',\n        'debug',\n        'error',\n        'group',\n        'groupCollapsed',\n        'groupEnd',\n        'info',\n        'log',\n        'table',\n        'time',\n        'timeEnd',\n        'timeLog',\n        'warn',\n        'assert'\n        // not support yet\n        // 'assert'\n        // 'dir',\n        // 'groupCollapsed',\n        // 'assert',\n        // 'trace'\n      ].forEach((level) => {\n        const original = console[level]\n        console[level] = (...args) => {\n          if (\n            args.some(\n              (arg) => typeof arg === 'string' && ignorePattern.test(arg),\n            )\n          ) {\n            return\n          }\n\n          const encodedArgs = window.encodeConsoleArgs(level, ...args)\n          if (encodedArgs) {\n            parent.postMessage({\n              action: 'console_api',\n              args: encodedArgs,\n            })\n          }\n          original(...args)\n        }\n      })\n    </script>\n  </head>\n  <body>\n    <!--PREVIEW-OPTIONS-PLACEHOLDER-HTML-->\n  </body>\n</html>\n";

function useSandbox(options) {
  const { container, onError, onLoad } = options;
  const UUID = btoa(Date.now().toString());
  let sandbox;
  let proxy;
  const importMap = inject(ReplImportMapInjectKey);
  const pageData = inject(ReplPageDataInjectKey);
  const meta = inject(ReplMetaKey);
  const theme = computed(() => pageData?.isDark.value ? "dark" : "light");
  const deviceType = inject(DeviceTypeInjectKey);
  const initializing = ref(true);
  const consoleApi = inject(ConsoleAPIInjectKey);
  const consoleLinkStore = inject(ConsoleLinkStoreInjectKey);
  const isTerminal = inject(IsTerminialInjectKey);
  const linkStore = new LinkStore();
  const encoder = createEncoder(linkStore);
  if (consoleLinkStore?.value) {
    consoleLinkStore.value = linkStore;
  }
  function init() {
    if (!sandbox)
      create();
    const sandboxSrc = srcdoc.replace(
      /<html>/,
      `<html class="${theme.value}">`
    ).replace(/<!--IMPORT_MAP-->/, JSON.stringify(importMap));
    sandbox.srcdoc = sandboxSrc;
    proxy = new ReplProxy(sandbox, {
      on_fetch_progress: () => {
      },
      on_error: (event) => {
        const msg = event.value instanceof Error ? event.value.message : event.value;
        if (msg.includes("Failed to resolve module specifier") || msg.includes("Error resolving module specifier")) {
          const errorMessage = `${msg.replace(/\. Relative references must.*$/, "")}.
Tip: specify import paths for dependencies in [imports-map] props on sandbox components`;
          onError(errorMessage);
        } else {
          onError(event.value.message);
        }
      },
      on_unhandled_rejection: (event) => {
        let error = event.value;
        if (typeof error === "string")
          error = { message: error };
        onError(`Uncaught (in promise): ${error.message}`);
      },
      // on_console: (log: any) => {
      //   consoleAPI[log.level](...log.args)
      // },
      on_console_api: (event) => {
        if (consoleApi) {
          const { type, values } = event.args || [];
          consoleApi[type](...values);
        }
      }
    });
    sandbox.addEventListener("load", () => {
      proxy.handle_links();
      onLoad?.();
      setTheme();
      sandbox.contentWindow.encodeConsoleArgs = encoder.encodeArgs;
    });
  }
  function create() {
    if (sandbox)
      destroy();
    initializing.value = true;
    sandbox = document.createElement("iframe");
    sandbox.setAttribute("id", UUID);
    sandbox.setAttribute("frameborder", "0");
    sandbox.setAttribute("scrolling", "no");
    sandbox.setAttribute("sandbox", [
      "allow-forms",
      "allow-modals",
      "allow-pointer-lock",
      "allow-popups",
      "allow-same-origin",
      "allow-scripts",
      "allow-top-navigation-by-user-activation"
    ].join(" "));
    sandbox.style.width = "100%";
    sandbox.style.height = "100%";
    sandbox.style.display = isTerminal?.value ? "none" : "block";
    let loadTimer;
    const loadDelay = 300;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadTimer = setTimeout(() => {
            init();
            observer.unobserve(entry.target);
          }, loadDelay);
        } else {
          if (loadTimer) {
            clearTimeout(loadTimer);
            create();
          }
        }
      });
    }, {
      rootMargin: "100px"
    });
    observer.observe(container.value);
    container.value?.appendChild(sandbox);
  }
  function updateBoxHeight() {
    if (deviceType?.value !== "Default") {
      sandbox.style.height = "100%";
      return;
    }
    if (["number", "string"].includes(typeof meta?.value?.previewHeight)) {
      sandbox.style.height = "100%";
      return;
    }
    const iframeWin = sandbox.contentWindow || sandbox.contentDocument.parentWindow;
    if (iframeWin.document.body)
      sandbox.style.height = `${iframeWin.document.body.scrollHeight}px`;
  }
  function destroy() {
    proxy.destroy();
    container.value?.removeChild(sandbox);
  }
  function setTheme() {
    const html = sandbox.contentDocument?.documentElement;
    if (html)
      html.className = theme.value;
    else
      create();
  }
  const reload = useDebounceFn(() => sandbox.contentWindow?.location.reload(), 200);
  async function evals(codes) {
    onError("");
    consoleApi?.clear();
    linkStore.clear();
    await proxy.execute(codes);
    nextTick(updateBoxHeight);
    initializing.value && (initializing.value = false);
  }
  watch(() => deviceType?.value, () => {
    nextTick(updateBoxHeight);
  });
  return {
    initializing,
    create,
    destroy,
    setTheme,
    reload,
    evals
  };
}
function prepareCode(entry, modules, isSSR) {
  return [
    `
            window.__modules__ = {};

            window.__css__ = [];

            if (window.__app__) window.__app__.unmount();
${isSSR ? `` : `document.body.innerHTML = '<div id="app"></div>'`}`,
    ...modules,
    `
            document.head.insertAdjacentHTML('beforeend', window.__css__.map(s => \`<style css>\${s}</style>\`).join('\\n'))`,
    `import { ${isSSR ? `createSSRApp` : `createApp`} as _createApp } from "vue"
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
              }`
  ];
}
function prepareSSRCode(entry, ssrModules) {
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
      `
  ];
}

function useRepl(option) {
  const { container, onError } = option;
  const ssrMode = inject(SSRModeInjectKey);
  const files = inject(ReplFilesInjectKey);
  const pageData = inject(ReplPageDataInjectKey);
  const runtimeError = ref("");
  const runtimeWarning = ref("");
  const loading = ref(false);
  let firstLoading = false;
  let stopUpdateWatcher;
  const isSSR = computed(() => ssrMode?.value === "server");
  const theme = computed(() => pageData?.isDark.value ? "dark" : "light");
  const {
    create,
    destroy: sandboxDesctory,
    reload,
    setTheme,
    evals,
    initializing
  } = useSandbox({
    ...option,
    onLoad
  });
  async function update() {
    runtimeError.value = "";
    runtimeWarning.value = "";
    if (!firstLoading) {
      loading.value = true;
      firstLoading = true;
    }
    try {
      if (!files)
        return;
      const entryFile = findEntryFile(files.value);
      if (isSSR.value) {
        const ssrModules = transformModules({
          files: files.value,
          isSSR: true
        });
        await evals(
          prepareSSRCode(
            entryFile.identifier,
            ssrModules
          )
        );
      }
      if (!isSSR.value) {
        const modules = transformModules({
          files: files?.value,
          isSSR: false
        });
        await evals(
          prepareCode(
            entryFile.identifier,
            modules,
            isSSR.value
          )
        );
      }
    } catch (e) {
      console.error(e);
      onError(e.message);
    } finally {
      loading.value = false;
    }
  }
  function onLoad() {
    stopUpdateWatcher = watchEffect(update);
  }
  function destory() {
    sandboxDesctory();
    stopUpdateWatcher?.();
  }
  useResizeObserver(container, () => {
  });
  watch(theme, setTheme);
  watch(container, () => {
    if (container.value)
      nextTick(create);
  }, { immediate: true });
  return {
    initializing,
    create,
    loading: computed(() => loading.value),
    reload,
    destory
  };
}

export { ConsoleAPIInjectKey, ConsoleLinkStoreInjectKey, DeviceTypeChangeInjectKey, DeviceTypeInjectKey, IsTerminialInjectKey, PreviewModeInjectKey, ReplActiveFileChangeKey, ReplActiveFileKey, ReplBoxWrapperRefKey, ReplCodePreviewRendersKey, ReplCodeShowLangChangeKey, ReplCodeShowLangKey, ReplCollapseChangeKey, ReplCollapseKey, ReplFileIdentifierInjectKey, ReplFilesInjectKey, ReplFullscreenChangeKey, ReplFullscreenKey, ReplImportMapInjectKey, ReplIsUseTS, ReplMetaKey, ReplPageDataInjectKey, ReplPattenKey, ReplPatternChangeKey, ReplSetSourceInjectKey, SSRModeChangeInjectKey, SSRModeInjectKey, useDemoProvider, useRepl };
