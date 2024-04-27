import MarkdownIt from 'markdown-it'
import type { DemoToken } from '@sgwm-sutras/shared'
import { uniqueId } from '@sgwm-sutras/shared'
import { Page } from '../page'

const mkit = new MarkdownIt({html: true})
const scriptSetupRE = /<script\s(.*\s)?setup(\s.*)?>([\s\S]*)<\/script>/

export function parseTokens(page: Page){
    const tokens: DemoToken[] = []
    const lines = page.content.split('\n') as (string | undefined)[]
    function clearLines(from: number, to: number){
        if(from >= to){
            return
        }
        for(let line = from; line < to ; line ++){
            lines[line] = undefined
        }
    }
    mkit.parse(page.content, {})?.forEach(token => {
        if (token.type === 'html_block') {
            if(token.content.search(/<demo\s+/) > -1){
                const {tokens: tokenTokens, markedContent} = parseToken(token.content, page)
                tokens.push(...tokenTokens)
                const [startLine, endLine] = token.map as number[]
                lines[startLine] = markedContent
                clearLines(startLine + 1, endLine)
            }
            if(token.content.search(/<demo\s+setup/)){
                const matched = token.content.match(scriptSetupRE)
                if(matched){
                    const scriptSetup = matched?.[3]
                    if (scriptSetup) {
                        page.append.scriptSetups.add(scriptSetup)
                        clearLines(token.map![0], token.map![1])
                    }
                }
            }
        }
    })
    const markedContent = lines.filter(line => line !== undefined).join('\n')
    return {
        tokens,
        markedContent
    }
}

const tokenRegex = /<demo(.*?)\/>|<demo(.*?)>([\s\S]*?)<\/demo>/g;
export function parseToken(content: string, page: any) {
    let match;
    const tokens = [];
    let markedContent = content;

    while ((match = tokenRegex.exec(content)) !== null) {
        const attrsString = match[1] || match[2];
        const _id = `__DEMO_IDENTIFIER_${uniqueId()}__`;
        const attrs: Record<string, any> = {};

        attrsString.split(/\s+/).forEach(attr => {
            const [key, value] = attr.split('=');
            if (key) attrs[key] = value ? value.replace(/['"]/g, '') : true;
        });

        attrs._id = _id;
        const token = createToken(attrs, page, match[0]);
        tokens.push(token);

        markedContent = markedContent.replace(match[0], _id);
    }

    return {
        tokens,
        markedContent
    };
}

export const supportDemoEntryExts = [
  'vue',
  'ts',
  'js',
  'tsx',
  'jsx',
]

const extRegExp = /\.([0-9a-zA-Z]+)$/;
export function createToken(attrs: Record<string, any>, page: Page, content: string): DemoToken{
    if(!attrs.path){
        throw Error(`attribute path is required: ${content}`)
    }

    const matches = attrs.path.match(extRegExp)
    if(matches && matches[1] && !supportDemoEntryExts.includes(matches[1])){
        throw Error(`path entry extension must be one of ${supportDemoEntryExts.join(',')}: ${content}`)
    }

    const token: DemoToken = {
        path: attrs.path,
        _id: attrs._id,
        _basepath: page.path,
        isDir: attrs.scene
    }
    if(attrs.path.startsWith('./') || attrs.path.startsWith('../')){
        token.local = true
        return token
    }

    if(attrs.package || page.package){
        token.package = attrs.package || page.package
    }

    token.local = false
    
    token.component = attrs.component || page.component

    return token
}
