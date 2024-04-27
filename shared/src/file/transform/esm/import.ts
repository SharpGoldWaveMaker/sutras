import type { Identifier, ImportDeclaration } from '@babel/types'
import { findLocalFile } from '../../utils'
import { File } from '../../types'
import { MODULES_KEY } from './config'
import { ModuleCodeImportSymbol, ModuleCodeImportSymbolParsed, ModuleCompileContext, ModuleImportId } from './context'


type TransformIncludeImportOption = {
    files: File[],
    file: File,
    node: ImportDeclaration,
    context: ModuleCompileContext
}

export function transformModuleImport(opt: TransformIncludeImportOption){
    const {
        node, 
        file, 
        files, 
        context: {
            code,
            importSymbolParseMap: symbolParseMap,
        }
    } = opt
    const source = node.source.value
    const localFile = findLocalFile(source, file, files)
    if(!localFile){
        return
    }
    const importId = defineImportId(opt.context, localFile)
    code.appendLeft(
        node.start!,
        `const ${importId} = ${MODULES_KEY}[${JSON.stringify(localFile.identifier)}]\n`,
    )
    if(importId){
        for (const spec of node.specifiers) {
            let importSymbol = spec.local.name as ModuleCodeImportSymbol
            let parsedImportSymbol: ModuleCodeImportSymbolParsed | undefined = undefined
            if (spec.type === 'ImportSpecifier') {
                parsedImportSymbol = `${importId}.${(spec.imported as Identifier).name}`
            } else if (spec.type === 'ImportDefaultSpecifier') {
                parsedImportSymbol = `${importId}.default`
            } else if (spec.type === 'ImportNamespaceSpecifier') {
                parsedImportSymbol = importId
            }
            if(parsedImportSymbol){
                symbolParseMap.set(importSymbol, parsedImportSymbol)
            }
        }
        code.remove(node.start!, node.end!)
    }
}

export function defineImportId(context: ModuleCompileContext, importFile: File): ModuleImportId {
    const {importedFiles, importToIdMap} = context
    if(importedFiles.has(importFile.identifier)){
        return importToIdMap.get(importFile.identifier)!
    }
    const importId = `__import_${importedFiles.size}__`
    importedFiles.add(importFile.identifier)
    importToIdMap.set(importFile.identifier, importId)
    return importId
}