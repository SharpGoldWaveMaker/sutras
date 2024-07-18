import { browserPath } from '../../utils';
import { File, FileExtension, SourceFile, fileExtensions } from "../types";
import { parseSFC, type SFCParseResult } from "./sfc";
import { parseTS, type TSParseResult } from './ts'
import { parseDefault, type ParseBasicResult} from './default'
import { formatSFC } from "../format";

export * from './sfc'
export * from './ts'
export * from './matter'
export * from './default'

const { normalize, parse, relative, dirname } = browserPath

export async function parseFile(filepath: string, rawContent: string, entryPath: string): Promise<SourceFile | undefined> {
    const {ext, name} = parse(filepath)
    const isEntry = normalize(filepath) === normalize(entryPath)
    let parsed: SFCParseResult | TSParseResult | ParseBasicResult
    if(!fileExtensions.includes(ext as FileExtension)){
        throw Error(`extension ${ext} not support`)
    }
    if(ext === '.vue'){
        parsed = await parseSFC(rawContent)
        rawContent = formatSFC(parsed)
    } else if(['.ts', '.tsx'].includes(ext)){
      parsed = await parseTS(rawContent)
    } else {
      parsed = await parseDefault(rawContent)
    }

    let pathFromEntry = '.'
    if(!isEntry){
        const relativePath = relative(dirname(entryPath), filepath)
        if (!relativePath.startsWith('..') && !relativePath.startsWith('/')) {
            pathFromEntry = './' + relativePath;
        }
    }
    return {
        filepath,
        filename: name,
        extension: ext as FileExtension,
        code: rawContent,
        isEntry,
        pathFromEntry,
        parsed
    }
}

export function isFileUseTS(file: File){
    if(file.isSFC){
        return (file.parsed as SFCParseResult).isScriptLangTS
    }
    return file.isTS || file.isTSX
}