import type { UserConfig } from '@sgwm-sutras/shared'
import { formatSFC, isVueDocsSFC, parseSFC } from '@sgwm-sutras/shared'
import type { UserConfig as ViteUserConfig, ResolvedConfig as ViteResolvedConfig, Plugin } from 'vite'
import { injectResolveAlias } from './injectResolveAlias'
import { Service } from './service'
import { disableMinifyInternalExports } from './disableMinifyInternalExports'

type ResolvedConfig = ViteResolvedConfig & {
  vitepress: {
    assetsDir: string
    site: {
      base: string
    }
  }
}

export function pluginVite(pluginConfig?: UserConfig) {
  let service: Service
  return {
    enforce: 'pre',
    name: 'sutras-plugin-vite',
    config(userConfig: ViteUserConfig) {
      userConfig.root = userConfig.root || process.cwd()

      service = new Service(userConfig, pluginConfig)
      service.init()

      injectResolveAlias(userConfig, service.config)
      // injectManualChunks(userConfig, service.config)
      disableMinifyInternalExports(userConfig)
    },
    configResolved(config){
      const vpConfig = (config as ResolvedConfig).vitepress 
      service.config.base = vpConfig.site.base
      service.config.assetsDir = vpConfig.assetsDir
    },
    async resolveId(source, importer) {
      if (importer && !importer.includes('node_modules') && !importer.includes('.vitepress')) {
        const resolution = await this.resolve(source, importer)
        if (resolution) {
          const pkg = service.config.packages?.find(p => p.name === source)
          if (pkg){
            // @ts-ignore
            pkg.resolvedPath = resolution.id
          }
        }
      }
    },
    async transform(rawContent: string, path: string) {
      if (path.endsWith('.md')) {
        const result = await service.transform(rawContent, path)
        return result
      }
      else if (path.endsWith('.vue')) {
        if (!isVueDocsSFC(rawContent))
          return rawContent

        const parsed = await parseSFC(rawContent)
        return parsed ? formatSFC(parsed) : ''
      }
      return rawContent
    },
    configureServer(server) {
      server.watcher.add([
        service.config.root,
        ...service.config.packages.map(p => p.path),
      ])
    },
  } as Plugin
}
