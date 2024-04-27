import path from 'node:path'
import type { UserConfig } from '@sgwm-sutras/shared'
import type { UserConfig as ViteUserConfig } from 'vite'

export function checkUserConfig(config?: UserConfig) {
  if (!config)
    return

  if (config.packages) {
    if (!Array.isArray(config.packages))
      throw new Error('[sutras userConfig check]: config option "package" has wrong struct!')
  }
}
export function getRoot(vite: ViteUserConfig, userConfig?: UserConfig) {
  let root = ''
  if (userConfig?.root)
    root = path.isAbsolute(userConfig.root) ? userConfig.root : path.join(vite.root!, userConfig.root)

  else
    root = vite.root!

  return root
}
