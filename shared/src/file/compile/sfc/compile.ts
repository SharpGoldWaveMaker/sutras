import { parseSFCDescriptor, parseSFCScriptLangType } from "../../parse"
import { compileScript } from './script'
import { compileTemplate } from './template'
import { compileStyle } from './style'
import { File } from '../../types'
import { type CompileResult } from '../compile'
import { COMP_IDENTIFIER } from '../config'

export async function compileSFC(file: File): Promise<CompileResult> {
    // 编译sfc
    const id = hashId(file.identifier)
    const {descriptor, errors} = parseSFCDescriptor(file.code)
    if(errors?.length){
        return errors
    }

    if(!descriptor){
        return [Error(`comile sfc: parse descriptor failed`)]
    }

    const scriptLang = parseSFCScriptLangType(descriptor)
    const isTS = scriptLang === 'ts'

    let clientCode = ''
    let ssrCode = ''
    const {
      code: clientScript, 
      bindings, 
      errors: compileScriptErrors
    } = await compileScript({descriptor, id, ssr: false, isTS})
    if (compileScriptErrors.length) {
      return compileScriptErrors
    }
    clientCode += clientScript

    if(descriptor.scriptSetup){
      const {
        code: ssrScript, 
        errors: compilSSReScriptErrors
      } = await compileScript({descriptor, id, ssr: true, isTS})
      if (compilSSReScriptErrors.length) {
        return compilSSReScriptErrors
      }
      ssrCode += ssrScript
    } else {
      ssrCode += clientScript
    }

    if (descriptor.template && !descriptor.scriptSetup) {
      const {
        code: clientTemplate, 
        errors: clientTemplateErrors
      } = await compileTemplate({descriptor, id, bindings, ssr: false, isTS})
      if (clientTemplateErrors.length) {
        return clientTemplateErrors
      }
      clientCode += `;${clientTemplate}`
  
      const {
        code: ssrTemplate,
        errors: ssrTemplateErrors
      } = await compileTemplate({descriptor, id, bindings, ssr: true, isTS})
      if (ssrTemplateErrors.length) {
        ssrCode = `/* SSR compile error: ${ssrTemplateErrors[0]?.message} */`
      }
      ssrCode += `;${ssrTemplate}`
    }

    const hasScoped = descriptor.styles.some((s: any) => s.scoped)
    if (hasScoped) {
      const code =  `\n${COMP_IDENTIFIER}.__scopeId = ${JSON.stringify(`data-v-${id}`)}`
      clientCode += code
      ssrCode += code
    }

    if (clientCode || ssrCode) {
      const code = `\n${COMP_IDENTIFIER}.__file = ${JSON.stringify(file.filename)}` +
      `\nexport default ${COMP_IDENTIFIER}`
      clientCode += code
      ssrCode += code
    }
   
    // styles
    const {
      code: styleCode = '', 
      errors: styleCompileErrors
    } = await compileStyle({
      descriptor,
      id,
      filename: file.filename,
    })

    file.compiled = {
      js: clientCode.trimStart(),
      ssr: ssrCode.trimStart(),
      css: styleCode
    }

    return styleCompileErrors
}


function hashId(filename: string) {
    let hashHex = filename
  
    if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
      hashHex = btoa(filename).slice(0, 8)
    } else {
      hashHex = Buffer.from(filename).toString('base64').slice(0, 8)
    }
  
    return hashHex
}