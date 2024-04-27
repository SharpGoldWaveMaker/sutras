import { babelParse } from '@vue/compiler-sfc';
import { LRUCache } from 'lru-cache';
import nodePath from 'node:path';
import { 
    ImportMap, 
    getImportIdentifier, 
    isRelativeSourcePath, 
    File, 
    SFCParseResult, 
    SourceFile, 
    TSParseResult
} from '@sgwm-sutras/shared'

/**
 * @name 文件标识
 * @description 所属文件标识
 */


const cache = new LRUCache<string, ImportMap>({ max: 1024 });

export type ParseImportMapResult = {
    importMap: ImportMap,
    transformed: string 
}

//@ts-ignore


export function parseImportMap(file: SourceFile, targetPath: string){
    let sourceContent = ''
    if(file.extension === '.vue'){
        sourceContent = (file.parsed as SFCParseResult)?.script || ''
    } else if(['.ts', '.tsx'].includes(file.extension)){
        sourceContent = (file.parsed as TSParseResult).ts || ''
    } else if(['.js', '.jsx'].includes(file.extension)){
        sourceContent = (file.parsed as string) || ''
    }
    if(!sourceContent){
        return {}
    }

    const cached = cache.get(sourceContent)
    if(cached){
        return cached
    }
    const importMap: ImportMap = {
        // 这个要加上
        imports: {}
    }
    const ast = babelParse(sourceContent, {
        sourceType: 'module',
        plugins: ['jsx', 'typescript']
    })
    const pathFromEntry = file.pathFromEntry!
    ast.program.body.forEach(node => {
        if(node.type === 'ImportDeclaration'){
            const source = node.source.value
            const identifier = getImportIdentifier(pathFromEntry, source)
            const importSource = parseImportSourcePath(targetPath, file, source)
            importMap.imports![identifier] = `() => import('${importSource}')`
        }
    })
    cache.set(sourceContent, importMap)
    return importMap
}

export function parseImportSourcePath(targetPath: string, file: SourceFile, source: string){
    const isRelativeSource = isRelativeSourcePath(source)
    if(!isRelativeSource){
        return source
    }
    const testSource = nodePath.relative(nodePath.dirname(targetPath), nodePath.join(nodePath.dirname(file.filepath), source))
    return isRelativeSourcePath(testSource) ? testSource : `./${testSource}`
}




export function tryParseImportName(files: File[], filename: string){
    const file = files.find(f => f.filename === filename)
    return file ? `${file.filename}${file.extension}` : undefined
}






