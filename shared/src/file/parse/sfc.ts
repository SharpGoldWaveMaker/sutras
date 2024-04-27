import { BadgeType, SFCDocMeta, SFCScriptLangType, badgeTypes } from '../types';
import { parse, type SFCDescriptor } from '@vue/compiler-sfc';
import { LRUCache } from "lru-cache";
import { transformTS } from '../transform'
import { parseMatter } from './matter';
import { head, tail } from '../../utils';
import { ParseResult } from './default';

const descriptorCache = new LRUCache<string, SFCDescriptor>({ max: 1024 });

type ParseSFCDescriptorResult = {
    errors?: Error[]
    descriptor?: SFCDescriptor
}

export interface SFCParseResult extends ParseResult {
    /**
     * @name template源代码
     */
    template?: string,
    /**
     * @name style源代码
     */
    styles?: string[],
    /**
     * @name script源代码
     */
    script?: string,
    /**
     * @name 是否是setup
     */
    isSetupScript?: boolean,
    /**
     * @name script是否使用TS
     */
    isScriptLangTS?: boolean,
    /**
     * @name script经TS编译后的纯JS代码
     * @description 如果不使用TS，jsCode = script
     */
    jsCode?: string,
    /**
     * @name 文档内容
     */
    docContent?: string
}

export function parseSFCDescriptor(rawContent: string): ParseSFCDescriptorResult {
    if(!rawContent){
        return {errors: [Error(`parse sfc descriptor error: nothing to parse`)]}
    }
    const cached = descriptorCache.get(rawContent)
    if(cached){
        return { descriptor: cached }
    }
    const {descriptor, errors} = parse(rawContent, {
        // filename
        // sourceMap
        // templateParseOptions
    })
    if(errors.length){
        return { errors }
    }
    descriptorCache.set(rawContent, descriptor)
    return { descriptor }
}

export async function parseSFC(rawContent: string): Promise<SFCParseResult> {
    const {descriptor, errors} = parseSFCDescriptor(rawContent)
    if(errors?.length) {
        throw Error(errors[0].message)
    }
    if(!descriptor){
        throw Error(`parse sfc: parse descriptor faild`)
    }
    const template = descriptor.template?.content
    const script = descriptor.script?.content
    const scriptSetup = descriptor.scriptSetup?.content
    const isSetupScript = scriptSetup ? true : script ? false : undefined
    const isScriptLangTS = parseSFCScriptLangType(descriptor) === 'ts'
    const finalScript = scriptSetup || script
    const styles = parseSFCStyles(descriptor)
    const {docContent, docMeta} = parseSFCDocs(descriptor)
    const jsCode = finalScript ? isScriptLangTS ? await transformTS(finalScript) : finalScript : ''

    
    return {
      code: rawContent,
      template,
      script: finalScript,
      styles,
      jsCode,
      isScriptLangTS,
      isSetupScript,
      docContent,
      docMeta,
    }
}

export function parseSFCStyles(descriptor: SFCDescriptor): string[] {
    let styles: string[] = [] 
    for (const style of descriptor.styles) {
        if (style.module) {
            /** 暂不支持 module */
            throw (`<style module> is not supported.`)
        }
        if(style.lang){
            /** 暂不支持 less scss */
            throw Error(`<style lang> is not supported.`)
        }
        styles.push(style.content)
    }
    return styles
}

export function isVueDocsSFC(rawContent: string){
    const {descriptor, errors} = parseSFCDescriptor(rawContent)
    if(errors?.length){
        throw Error(errors[0].message)
    }
    return !descriptor || !!parseSFCDocContent(descriptor)
}

export function parseSFCDocContent(descriptor: SFCDescriptor){
    return descriptor.customBlocks?.find(b => b.type.includes('docs'))?.content
}



export function parseSFCScriptLangType(descriptor: SFCDescriptor): SFCScriptLangType {
    const scriptLang =
      (descriptor.script && descriptor.script.lang) ||
      (descriptor.scriptSetup && descriptor.scriptSetup.lang)
    if (scriptLang && scriptLang !== 'ts') {
        throw Error(`Only lang="ts" is supported for <script> blocks.`)
    }
    return scriptLang === 'ts' ? 'ts' : 'js'
}

export function parseSFCDocs(descriptor: SFCDescriptor): Pick<SFCParseResult, 'docContent' | 'docMeta'>{
    const rawContent = parseSFCDocContent(descriptor)
    if(!rawContent?.trim){
        return {
            docContent: '',
            docMeta: {}
        }
    }
    const {content, data} = parseMatter(rawContent.trim())
    return {
        docContent: content,
        docMeta: data as SFCDocMeta
    }
}

export function parseDocMetaBadge(badgeStr: string): {type: BadgeType, content: string} {
    const badgeArr = badgeStr?.split('-').filter(Boolean) || [] as string[]
    const mayBeBadgeType = head(badgeArr) as BadgeType
    if(badgeTypes.includes(mayBeBadgeType)){
        return {
            type: mayBeBadgeType,
            content: tail(badgeArr).join('-')
        }
    }
    return {
        type: 'tip',
        content: badgeStr
    }
}