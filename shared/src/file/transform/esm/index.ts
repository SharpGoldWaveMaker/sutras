import { File } from '../../types'
import { findEntryFile } from '../../utils'
import { processModule } from './module'
import { find } from '../../../utils'

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


export function transformModules(opt: CompileModulesOption): string[]{
    const seen = new Set<File>()
    const processed: string[] = []
    const entryFile = findEntryFile(opt.files)
    processFile(opt, entryFile!, processed, seen)

    if (!opt.isSSR) {
        // also add css files that are not imported
        opt.files.forEach(file => {
            if(file.isCSS){
                if (!seen.has(file)) {
                    processed.push(
                        `\nwindow.__css__.push(${JSON.stringify(file.compiled!.css)})`,
                    )
                }
            }
        })
    }
    return processed
}

function processFile(
    opt: CompileModulesOption,
    file: File,
    processed: string[],
    seen: Set<File>,
){
    if (seen.has(file)) {
        return []
    }
    seen.add(file)
    if (!opt.isSSR && file.isHTML) {
        return processHtmlFile(opt, file, processed, seen)
    }
    let {
        code: js,
        importedFiles,
        hasDynamicImport,
      } = processModule(
        opt,
        file,
        opt.isSSR ? file.compiled!.ssr! : file.compiled!.js!,
    )
    processChildFiles(
        opt,
        importedFiles,
        hasDynamicImport,
        processed,
        seen,
    )
    // append css
    if (file.compiled!.css && !opt.isSSR) {
        js += `\n
        window.__css__.push(${JSON.stringify(file.compiled!.css)})
        `
    }

    // push self
    processed.push(js)
}

const scriptRE = /<script\b(?:\s[^>]*>|>)([^]*?)<\/script>/gi
const scriptModuleRE =
  /<script\b[^>]*type\s*=\s*(?:"module"|'module')[^>]*>([^]*?)<\/script>/gi

function processHtmlFile(
    opt: CompileModulesOption,
    file: File,
    processed: string[],
    seen: Set<File>,
){
    const deps: string[] = []
    let jsCode = ''
    const html = file.code
        .replace(scriptModuleRE, (_, content) => {
            const { code, importedFiles, hasDynamicImport } = processModule(
                opt,
                file,
                content,
            )
            processChildFiles(
                {...opt, isSSR: false},
                importedFiles,
                hasDynamicImport,
                deps,
                seen,
            )
            jsCode += '\n' + code
            return ''
        })
        .replace(scriptRE, (_, content) => {
            jsCode += '\n' + content
            return ''
        })
    processed.push(`document.body.innerHTML = ${JSON.stringify(html)}`)
    processed.push(...deps)
    processed.push(jsCode)
}


function processChildFiles(
    opt: CompileModulesOption,
    importedFiles: Set<string>,
    hasDynamicImport: boolean,
    processed: string[],
    seen: Set<File>,
  ) {
    if (hasDynamicImport) {
      // process all files
      for (const file of opt.files) {
        if (seen.has(file)) continue
        processFile(opt, file, processed, seen)
      }
    } else if (importedFiles.size > 0) {
      // crawl child imports
      for (const identifier of importedFiles) {
        const importedFile = find(opt.files, {identifier})
        processFile(opt, importedFile!, processed, seen)
      }
    }
}