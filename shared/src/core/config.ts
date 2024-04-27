import { DemoContext } from '..'
import { ImportMap, SSREnableType, SSRModeType } from '../file'
import { Package, PackageOption } from './package'

export type UserConfig = {
    /**
     * @name 工作目录
     */
    root?: string,
    /**
     * @name packages配置
     */
    packages?: PackageOption[],
    /**
     * @name demoDirname
     * @default "__demos__"
     */
    demoDirname?: string,
    /**
     * @name 使用文档结构作为package, component
     * @default: true
     */
    useDocPath?: boolean
    /**
     * @name 是否为包自动添加别名解析
     * @default: true
     */
    autoResolveAlias?: boolean
    /**
     * @name importMap全局配置
     * @description
     */
    importMap?: ImportMap
    /**
     * @name 调试模式
     * @description
     */
    debug?: boolean
    
    demo?: DemoConfig
}

export interface DemoConfig {
  /**
   * @name 展示方式
   * @default 'block'
   */
  defaultPreviewMode?: PreviewMode
  /**
   * @name 展示方式区高度
   * @default 'auto'
   */
  previewHeight?: PreviewHeight
  /**
   * @name SSR模式
   * @default 'both'
   */
  enableSSR?: SSREnableType
  /**
   * @name SSR默认模式
   * @default 'client'
   */
  defaultRenderMode?: SSRModeType
  /**
   * @name 是否允许编辑
   * @description 为true时，将支持repl，默认可编辑
   */
  enableREPL?: boolean;
  /**
   * @name demo展示样式风格
   * @description 内置样式，也可自定义样式，自行实现demo展示组件
   */
  style?: 'box' | 'box-compact' | 'plain' | 'plain-compact';
  /**
  * @name 背景色
  * @description 特殊情况需要定义demo背景色，比如展示ghost
  */
  background?: string;
  /**
   * @name 源码地址
   */
  sourceURL?: string | ((demo: DemoContextBasic) => string);
  /**
   * @name 默认是否折叠代码块
   */
  defaultCodeCollapse?: boolean
  /**
   * @name 设备列表
   */
  deviceList?: DeviceList
  /**
   * @name 默认设备
   * @default 'Default'
   */
  defaultDevice?: string
}

export type DeviceSize = [number, number]
export type DeviceList = Record<string, DeviceSize>

export type DemoContextBasic = Pick<DemoContext, 'component' | 'entry' | 'package' | 'page' | 'meta'>

export type PreviewMode = 'block' | 'terminal' | 'browser'

export type PreviewHeight = 'auto' | number | string

export type SandboxConfigType = boolean | number | string

export type ResolvedConfig = Omit<UserConfig, 'root'|'packages'> & {
    root: string
    packages: Package[]
    base?: string
    assetsDir?: string
}