import type { UserConfig } from 'vite'
import type { ResolvedConfig } from '@sgwm-sutras/shared'

export function injectResolveAlias(userConfig: UserConfig, config: ResolvedConfig) {
  if (config.autoResolveAlias) {
    userConfig.resolve = userConfig.resolve || {}
    userConfig.resolve.alias = userConfig.resolve.alias || {}
    const resolvedAlias: Record<string, string> = {}
    config.packages?.forEach((pkg) => {
      resolvedAlias[pkg.name] = pkg.path
      const alias = pkg.alias as string[]
      alias.forEach((alia) => {
        resolvedAlias[alia] = pkg.path
      })
    })
    userConfig.resolve.alias = {
      ...resolvedAlias,
      ...userConfig.resolve.alias,
    }
  }
}
