import type { SFCDescriptor, BindingMetadata } from '@vue/compiler-sfc'
import { compileScript as sfcCompileScript, rewriteDefault } from '@vue/compiler-sfc'
import { COMP_IDENTIFIER } from '../config'
import { transformTS } from '../../transform'

export type CompileScriptResult = {
    code?: string;
    bindings?: BindingMetadata;
    errors: Error[]
}

export type CompileScriptOption = {
    descriptor: SFCDescriptor;
    id: string;
    ssr: boolean;
    isTS: boolean;
}

export async function compileScript(opt: CompileScriptOption): Promise<CompileScriptResult> {
    const {descriptor, id, ssr, isTS} = opt
    if (descriptor.script || descriptor.scriptSetup) {
        try {
          const expressionPlugins = isTS ? ['typescript'] as any[] : undefined
          const compiledScript = sfcCompileScript(descriptor, {
            inlineTemplate: true,
            id,
            templateOptions: {
              ssr,
              ssrCssVars: descriptor.cssVars,
              compilerOptions: {
                expressionPlugins,
              },
            },
          })
          let code = ''
          if (compiledScript.bindings) {
            code += `\n/* Analyzed bindings: ${JSON.stringify(
              compiledScript.bindings,
              null,
              2
            )} */`
          }
          code +=
            `\n` +
            rewriteDefault(
              compiledScript.content, 
              COMP_IDENTIFIER,
              expressionPlugins
            )
          if ((descriptor.script || descriptor.scriptSetup)!.lang === 'ts') {
            code = await transformTS(code)
          }
          return {code, bindings: compiledScript.bindings, errors: []}
        } catch (error) {
          if(error instanceof Error){
            return {errors: [error]}
          }else{
            return {errors: [Error(JSON.stringify(error))]}
          }
        }
    } else {
        return {
            code: `\nconst ${COMP_IDENTIFIER} = {}`,
            errors: []
        }
    }
}