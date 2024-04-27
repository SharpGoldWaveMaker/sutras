import { FileIdentifier } from "../../types"
import { MagicString } from '@vue/compiler-sfc'


// import foo from 'foo' --> foo -> __import_foo__.default
// import { baz } from 'foo' --> baz -> __import_foo__.baz
// import * as ok from 'foo' --> ok -> __import_foo__

/**
 * __import_1__
 */
export type ModuleImportId = string

/**
 * import a from '****'
 * import { a } from '****'
 * import * as a from '****'
 * const b = a
 * const b = ${importId}.default
 * const b = ${importId}.a
 * const b = ${importId}
 */

// 符号 a
export type ModuleCodeImportSymbol = string
// ${importId}.default, ${importId}.a, ${importId}
export type ModuleCodeImportSymbolParsed = string

export type ModuleCompileContext = {
    /**
     * @description 用于替换源码中的外部模块变量
     * key: a, value: ${importId}.default
     * const b = a
     * const b = ${importId}.default// ImportDefaultSpecifier: import a from 'xxxx'
     * const b = ${importId}.a // ImportSpecifier: import { a } from 'xxxx'
     * const b = ${importId} // ImportNamespaceSpecifier: import * as a from 'xxxx'
     */
    importSymbolParseMap: Map<ModuleCodeImportSymbol, ModuleCodeImportSymbolParsed>
    declaredConst: Set<string>
    importedFiles: Set<FileIdentifier>
    /**
     * 
     */
    importToIdMap: Map<FileIdentifier, ModuleImportId>
    code: MagicString
}

export function createModuleCompileContext(sourceCode: string): ModuleCompileContext {
    return {
        importSymbolParseMap: new Map<string, string>(),
        declaredConst: new Set<string>(),
        importedFiles: new Set<FileIdentifier>(),
        importToIdMap: new Map<FileIdentifier, ModuleImportId>(),
        code: new MagicString(sourceCode)
    }
}
