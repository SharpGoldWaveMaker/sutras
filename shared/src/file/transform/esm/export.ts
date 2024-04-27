import type { 
    ExportSpecifier, 
    Identifier, 
    ExportDeclaration,
    ExportNamedDeclaration, 
    ExportDefaultDeclaration,
    ExportAllDeclaration,
} from '@babel/types'
import { findLocalFile } from '../../utils'
import { File } from '../../types'
import { ModuleCompileContext } from './context'
import { EXPORT_KEY, MODULE_KEY } from './config'
import { extractIdentifiers } from '@vue/compiler-sfc'
import { defineImportId } from './import'
import { MODULES_KEY } from './config'

type TransformIncludeExportOption<NodeExportDeclaration = ExportDeclaration> = {
    files: File[],
    file: File,
    node: NodeExportDeclaration,
    context: ModuleCompileContext
}

export function transformModuleExportNamed(opt: TransformIncludeExportOption<ExportNamedDeclaration>){
    const {
        node, 
        file, 
        files, 
        context: {
            code,
            importSymbolParseMap: symbolParseMap,
            importedFiles,
            importToIdMap
        }
    } = opt
    let exportStatement: string | undefined = undefined
    if (node.declaration) {
        if (
            node.declaration.type === 'FunctionDeclaration' ||
            node.declaration.type === 'ClassDeclaration'
        ) {
            // export function foo() {}
            exportStatement = defineExportStatement(node.declaration.id!.name)
            code.append(exportStatement)
        } else if (node.declaration.type === 'VariableDeclaration') {
            // export const foo = 1, bar = 2
            for (const decl of node.declaration.declarations) {
                for (const id of extractIdentifiers(decl.id)) {
                    exportStatement = defineExportStatement(id.name)
                    code.append(exportStatement)
                }
            }
        }
        code.remove(node.start!, node.declaration.start!)
    } else if (node.source) {
        // export { foo, bar } from './foo'
        const localFile = findLocalFile(node.source.value, file, files)
        if(!localFile){
            // FIXME: 非本地导出需不需要修改？
            return
        }
        const importId = defineImportId(opt.context, localFile)
        code.appendLeft(
          node.start!,
          `const ${importId} = ${MODULES_KEY}[${JSON.stringify(localFile.identifier)}]\n`,
        )
        for (const spec of node.specifiers) {
            exportStatement = defineExportStatement(
                (spec.exported as Identifier).name,
                `${importId}.${(spec as ExportSpecifier).local.name}`,
            )
            code.append(exportStatement)
        }
        code.remove(node.start!, node.end!)
    } else {
        // export { foo, bar }
        for (const spec of node.specifiers) {
            const local = (spec as ExportSpecifier).local.name
            const binding = symbolParseMap.get(local)
            exportStatement = defineExportStatement(
                (spec.exported as Identifier).name, 
                binding || local
            )
            code.append(exportStatement)
        }
        code.remove(node.start!, node.end!)
    }
}

export function transformModuleExportDefault(opt: TransformIncludeExportOption<ExportDefaultDeclaration>){
    const {
        node, 
        context: {
            code,
        }
    } = opt
    let exportStatement: string | undefined = undefined
    if ('id' in node.declaration && node.declaration.id) {
        // named hoistable/class exports
        // export default function foo() {}
        // export default class A {}
        const { name } = node.declaration.id
        exportStatement = defineExportStatement("default", name)
        code.remove(node.start!, node.start! + 15)
        code.append(exportStatement)
    } else {
        // anonymous default exports
        code.overwrite(node.start!, node.start! + 14, `${MODULE_KEY}.default =`)
    }
}

export function transformModuleExportAll(opt: TransformIncludeExportOption<ExportAllDeclaration>){
    const {
        node, 
        file, 
        files, 
        context: {
            code
        }
    } = opt
    const localFile = findLocalFile(node.source.value, file, files)
    if(!localFile){
        // FIXME: 非本地导出需不需要修改？
        return
    }
    const importId = defineImportId(opt.context, localFile)
    code.appendLeft(
      node.start!,
      `const ${importId} = ${MODULES_KEY}[${JSON.stringify(localFile.identifier)}]\n`,
    )
    code.remove(node.start!, node.end!)
    code.append(`\nfor (const key in ${importId}) {
        if (key !== 'default') {
            ${EXPORT_KEY}(${MODULE_KEY}, key, () => ${importId}[key])
        }
    }`)
}



export function defineExportStatement(exportName: string, localName: string = exportName): string {
    return `\n${EXPORT_KEY}(${MODULE_KEY}, "${exportName}", () => ${localName})`
}