import { SandboxConfigType, DemoConfig } from "../../core/config";
import { tuple } from "../../utils"

export type SFCScriptLangType = 'js' | 'ts'

export type SFCDocMeta = {
    /**
     * @name 标题
     */
    title?: string;
    /**
     * @name 徽章
     * @description ${type}-${content} 或 ${content}，type: 参见vitepress badge
     */
    badge?: string;
    /**
     * @name 调试模式
     * @description 用于标记开发状态，默认dev下为debug模式，prod下关闭debug模式
     */
    debug?: string;
    /**
     * @name 其他需展示的文件路径
     * @description 相对路径，需要同时在script中被引用到
     */
    includes?: string[];
    /**
     * @name 代码高亮
     * @description 参见[vitepress](https://vitepress.dev/zh/guide/markdown#line-highlighting-in-code-blocks)
     */
    highlight?: string;
} & DemoConfig

export type SSREnableType = 'clientOnly' | 'serverOnly' | 'both' | true | false

export type SSRModeType = 'client' | 'server'

export const badgeTypes = tuple('info' , 'tip' , 'warning' , 'danger')
export type BadgeType = (typeof badgeTypes)[number]