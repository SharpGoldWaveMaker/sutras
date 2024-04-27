import { parseFile, type SourceFile, type SFCParseResult } from "@sgwm-sutras/shared"
import { dirname, join } from "node:path";
import { statSync, readFileSync } from "node:fs"
import { resolvePath } from './resolve'

export function isDirectory(absPath: string){
    return statSync(absPath).isDirectory()
}

export async function parseSourceFile(filepath: string, entryPath?: string){
    entryPath = entryPath || filepath
    const rawContent = readFileSync(filepath, 'utf-8')
    const file = await parseFile(filepath, rawContent, entryPath!)
    if(file && file.isEntry){
        const includes = (file.parsed as SFCParseResult)?.docMeta?.includes
        if(includes?.length){
            file.includes = (
                await Promise.all(includes.map( async (relaPath: string) => {
                    const testAbsPath = join(dirname(filepath), relaPath)
                    const absPath = resolvePath(dirname(filepath), relaPath) || testAbsPath
                    return parseSourceFile(absPath, entryPath)
                }))
            ).filter(Boolean) as SourceFile[]
        }
    }
    return file
}