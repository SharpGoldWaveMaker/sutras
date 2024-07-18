import type { DeviceList, ResolvedConfig, UserConfig } from '@sgwm-sutras/shared'
import { Package, mergeImportMap } from '@sgwm-sutras/shared'
import type { UserConfig as ViteUserConfig } from 'vite'
import { checkUserConfig, getRoot } from './config'
import { getPackages } from './package'
import { createTransformer } from './transform'

export const defaultDeviceList: DeviceList = {
  "Default": [0, 0],
  "Moto 4G": [360, 640],
  "Galaxy S5": [360, 640],
  "Pixel 2": [411, 731],
  "Pixel 2 XL": [411, 823],
  "iPhone 5/SE": [320, 568],
  "iPhone 6/7/8": [375, 667],
  "iPhone 6/7/8 Plus": [414, 736],
  "iPhone X": [375, 812],
  "iPad": [768, 1024],
  "iPad Pro": [1024, 1366],
  "Surface Duo": [540, 720],
  "Galaxy Fold": [280, 653]
}

export enum defaultDeviceTypes {
  Default = 'Default',
  Moto_4G = 'Moto 4G',
  Galaxy_S5 = 'Galaxy S5',
  Pixel_2 = 'Pixel 2',
  Pixel_2_XL = 'Pixel 2 XL',
  iPhone_5_SE = 'iPhone 5/SE',
  iPhone_6_7_8 = 'iPhone 6/7/8',
  iPhone_6_7_8_Plus = 'iPhone 6/7/8 Plus',
  iPhone_X = 'iPhone X',
  iPad = 'iPad',
  iPad_Pro = 'iPad Pro',
  Surface_Duo = 'Surface Duo',
  Galaxy_Fold = 'Galaxy Fold'
}

const defaultConfig: Partial<ResolvedConfig> = {
  demoDirname: '__demos__',
  useDocPath: true,
  autoResolveAlias: true,
  debug: false,
  importMap: {
    imports: {
      'vue': `() => import('vue')`,
      'vue/server-renderer': `() => import('vue/server-renderer')`
    },
  },
  demo: {
    enableSSR: false,
    defaultRenderMode: 'client'
  },
  assetsDir: '',
  base: ''
}

export class Service {
  public config: ResolvedConfig
  private transformer: any
  constructor(vite: ViteUserConfig, userConfig?: UserConfig) {
    checkUserConfig(userConfig)
    const root = getRoot(vite, userConfig)
    this.config = {
      ...defaultConfig,
      ...(userConfig || {}),
      root,
      packages: [],
      importMap: mergeImportMap(defaultConfig.importMap!, userConfig?.importMap || {})
    } as ResolvedConfig
    this.transformer = createTransformer(this.config)
  }

  init() {
    // init packages
    this.config.packages = getPackages(this.config)
  }

  transform(...args: any[]) {
    return this.transformer(...args)
  }
}
