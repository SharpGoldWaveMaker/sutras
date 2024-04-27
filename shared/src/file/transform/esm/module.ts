import {
    babelParse,
    isInDestructureAssignment,
    isStaticProperty,
    walk,
    walkIdentifiers,
} from '@vue/compiler-sfc'

import { Node } from '@babel/types'
import { File } from '../../types'
import { DYNAMIC_IMPORT_KEY, MODULES_KEY, MODULE_KEY } from './config'
import { createModuleCompileContext } from './context'
import { transformModuleExportAll, transformModuleExportDefault, transformModuleExportNamed } from './export'
import { transformModuleImport } from './import'


export type CompileModulesOption = {
    /**
     * @name 文件列表
     */
    files: File[]
    /**
     * @name 是否启用SSR
     */
    isSSR: boolean
}

export function processModule(opt: CompileModulesOption, file: File, code: string) {
    const {extension, filename} = file
    const {files} = opt
    const fullname = `${filename}${extension}`
  
    const ast = babelParse(code, {
      sourceFilename: fullname,
      sourceType: 'module',
    }).program.body

    const context = createModuleCompileContext(code)
  
    // 0. instantiate module
    context.code.prepend(
      `const ${MODULE_KEY} = ${MODULES_KEY}[${JSON.stringify(
        file.identifier,
      )}] = { [Symbol.toStringTag]: "Module" }\n\n`,
    )
  
    // 1. check all import statements and record id -> importName map
    for (const node of ast) {
        if (node.type === 'ImportDeclaration') {
            transformModuleImport({
                node,
                file,
                files,
                context
            })
        }
    }
  
    // 2. check all export statements and define exports
    for (const node of ast) {
        if(node.type === 'ExportNamedDeclaration'){
            transformModuleExportNamed({
                node,
                file,
                files,
                context
            })
        }
        if(node.type === 'ExportDefaultDeclaration'){
            transformModuleExportDefault({
                node,
                file,
                files,
                context
            })
        }
        if(node.type === 'ExportAllDeclaration'){
            transformModuleExportAll({
                node,
                file,
                files,
                context
            })
        }
    }
  
    // 3. convert references to import bindings
    const {importSymbolParseMap, declaredConst} = context
    for (const node of ast) {
        if (node.type === 'ImportDeclaration') continue
        walkIdentifiers(node, (id, parent, parentStack) => {
            const binding = importSymbolParseMap.get(id.name)
            if (!binding) {
                return
            }
            if (isStaticProperty(parent) && parent.shorthand) {
                // let binding used in a property shorthand
                // { foo } -> { foo: __import_x__.foo }
                // skip for destructure patterns
                if (
                    !(parent as any).inPattern ||
                    isInDestructureAssignment(parent, parentStack)
                ) {
                    context.code.appendLeft(id.end!, `: ${binding}`)
                }
            } else if (
                parent.type === 'ClassDeclaration' &&
                id === parent.superClass
            ) {
                if (!declaredConst.has(id.name)) {
                    declaredConst.add(id.name)
                    // locate the top-most node containing the class declaration
                    const topNode = parentStack[1]
                    context.code.prependRight(topNode.start!, `const ${id.name} = ${binding};\n`)
                }
            } else {
                context.code.overwrite(id.start!, id.end!, binding)
            }
        })
    }
  
    // 4. convert dynamic imports
    let hasDynamicImport = false
    walk(ast, {
      enter(node: Node, parent: Node) {
        if (node.type === 'Import' && parent.type === 'CallExpression') {
          const arg = parent.arguments[0]
          if (arg.type === 'StringLiteral' && arg.value.startsWith('./')) {
            hasDynamicImport = true
            context.code.overwrite(node.start!, node.start! + 6, DYNAMIC_IMPORT_KEY)
            context.code.overwrite(
              arg.start!,
              arg.end!,
              JSON.stringify(arg.value.replace(/^\.\/+/, 'src/')),
            )
          }
        }
      },
    })
  
    return {
      code: context.code.toString(),
      importedFiles: context.importedFiles,
      hasDynamicImport,
    }
  }