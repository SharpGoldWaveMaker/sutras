import { ref, computed, version as defaultVersion } from 'vue'
import { isRelativeSourcePath } from './utils'
import { SiteConfig } from '../demo'
import { size } from 'lodash-es'

export type ImportIdentifier = string
export type ImportMap = {
    imports?: Record<ImportIdentifier, ImportSource>,
    scopes?: Record<string, Record<ImportIdentifier, ImportSource>>
}
export type ImportSource = string | (() => Promise<any>)

/**
 * 合并importMap, 设置vue编译内核版本
 * ！暂不支持外部定义vue编译内核，内核版本以线上版本为主
 * @param defaultImportMap 
 * @param defaults 
 * @returns
 */
export function useVueImportMap(
    importMap: ImportMap,
    site: SiteConfig,
    defaults: {
      runtimeDev?: string | (() => string)
      runtimeProd?: string | (() => string)
      serverRenderer?: string | (() => string)
      vueVersion?: string | null
    } = {},
  ) {
    // 默认配置，支持函数形式
    // function normalizeDefaults(defaults?: string | (() => string)) {
    //   if (!defaults) return
    //   return typeof defaults === 'string' ? defaults : defaults()
    // }
    // 是否启用正式构建
    const productionMode = ref(false)
    // vue版本号
    const vueVersion = ref<string | null>(defaults.vueVersion || null)
    const finalImportMap = computed(() => {
      // const vue =
      //   (!vueVersion.value &&
      //     normalizeDefaults(
      //       productionMode.value ? defaults.runtimeProd : defaults.runtimeDev,
      //     )) ||
      //   `https://cdn.jsdelivr.net/npm/@vue/runtime-dom@${
      //     vueVersion.value || defaultVersion
      //   }/dist/runtime-dom.esm-browser${productionMode.value ? `.prod` : ``}.js`
  
      // const serverRenderer =
      //   (!vueVersion.value && normalizeDefaults(defaults.serverRenderer)) ||
      //   `https://cdn.jsdelivr.net/npm/@vue/server-renderer@${
      //     vueVersion.value || defaultVersion
      //   }/dist/server-renderer.esm-browser.js`

      return getStaticImportMap(importMap, site)
    })
  
    return {
      productionMode,
      importMap: finalImportMap,
      vueVersion,
      defaultVersion,
    }
}

function getStaticImportMap(importMap: ImportMap, site: SiteConfig){
    const staticImportMaps: ImportMap = {
      imports: {},
      scopes: importMap.scopes || {}
    }
    for (const [key, valueFunc] of Object.entries(importMap.imports || {})) {
        const funcString = valueFunc?.toString();
        // 尝试匹配字符串和模板字符串两种形式
        const pathMatch = funcString?.match(/import\((?:'|")(.+?)(?:'|")\)/) || funcString?.match(/import\(`(.+?)`\)/);
        if (pathMatch && pathMatch[1]) {
          const base = site.base
          const assets = site.assetsDir
          const prefix = process.env.NODE_ENV === 'production' ? base + `${assets}/` : ''
          staticImportMaps.imports![key] = `${prefix}${pathMatch[1]}`
        }
    }

    return staticImportMaps
}

export function mergeImportMap(source1: ImportMap, source2: ImportMap){
  return {
      imports: {
          ...(source1.imports || {}),
          ...(source2.imports || {})
      },
      scopes: {
          ...(source1.scopes || {}),
          ...(source2.scopes || {})
      }
  }
}

export function getImportIdentifier(pathFromEntry: string, source: string){
  if(isRelativeSourcePath(source)){
      // return `${pathFromEntry}$${source}`
      return source
  }
  return source
}