import { SFCParseResult } from "../parse"


/**
 * 格式化vue sfc
 * @param sfc 
 * @returns 
 */
export function formatSFC(parsedSFC: SFCParseResult): string {
    const template = formatSFCTemplate(parsedSFC)
    const script = formatSFCScript(parsedSFC)
    const styles = formatSFCStyles(parsedSFC)
    return [template, script, styles].reduce((result: string, content?: string) => {
        if(content){
            return result += `${result ? '\n' : ''}${content}`
        }
        return result
    }, '')
}


/**
 * 格式化js版本vue sfc
 * @param sfc 
 * @returns 
 */
export function formatSFCJS(parsedSFC: SFCParseResult){
    const template = formatSFCTemplate(parsedSFC)
    const script = formatSFCScriptJS(parsedSFC)
    const styles = formatSFCStyles(parsedSFC)
    return [template, script, styles].reduce((result, content) => {
        if(content){
            return result += `${result ? '\n' : ''}${content}`
        }
        return result
    }, '')
}

/**
 * 格式化js/ts script
 * @param sfc 
 * @returns 
 */
export function formatSFCScript(sfc: SFCParseResult){
    const {isScriptLangTS, isSetupScript, script} = sfc
    if(!script?.trim()){
        return undefined
    }
    return `<script${isSetupScript ? ' setup' : ''}${isScriptLangTS ? ' lang="ts"' : ''}>${script}</script>`
}

/**
 * 格式化js script
 * @param sfc 
 * @returns 
 */
export function formatSFCScriptJS(sfc: SFCParseResult){
    const {isSetupScript, jsCode} = sfc
    if(!jsCode?.trim()){
        return undefined
    }
    return `<script${isSetupScript ? ' setup' : ''}>${jsCode}</script>`
}

/**
 * 格式化template
 * @param sfc 
 * @returns 
 */
export function formatSFCTemplate(sfc: SFCParseResult){
    const {template} = sfc
    if(!template?.trim()){
        return undefined
    }
    return `<template>${template}</template>`
}

/**
 * 格式化style
 * @param sfc 
 * @returns 
 */
export function formatSFCStyles(sfc: SFCParseResult){
    const {styles} = sfc
    if(!styles?.length){
        return undefined
    }
    return styles?.reduce((result, style) => {
        if(style.trim()){
            return result += `${result ? '\n' : ''}<style>${style}</style>`
        }
        return result
    }, '')
}