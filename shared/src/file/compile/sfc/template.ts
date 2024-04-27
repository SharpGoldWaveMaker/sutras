import type { SFCDescriptor, BindingMetadata } from '@vue/compiler-sfc'
import { compileTemplate as sfcCompileTemplate} from '@vue/compiler-sfc'
import { COMP_IDENTIFIER } from '../config'
import { transformTS } from '../../transform';

export type CompileTemplateResult = {
    code?: string;
    errors: Error[]
}

export type CompileTemplateOption = {
    descriptor: SFCDescriptor
    id: string
    bindings?: BindingMetadata
    ssr: boolean,
    isTS: boolean
}

export async function compileTemplate(opt: CompileTemplateOption): Promise<CompileTemplateResult> {
    const {descriptor, id, bindings, ssr, isTS} = opt
    if(descriptor.template?.lang){
      throw Error(`lang="x" pre-processors for <template> are currently not supported.`)
    }
    const templateResult = sfcCompileTemplate({
        isProd: false,
        ast: descriptor.template?.ast!,
        source: descriptor.template!.content,
        filename: descriptor.filename,
        id,
        scoped: descriptor.styles.some(s => s.scoped),
        slotted: descriptor.slotted,
        ssr,
        ssrCssVars: descriptor.cssVars,
        compilerOptions: {
          bindingMetadata: bindings,
          expressionPlugins: isTS ? ['typescript'] : undefined,
        }
      })
      if (templateResult.errors.length) {
        return {
            errors: templateResult.errors as Error[]
        }
      }
      const fnName = ssr ? `ssrRender` : `render`

      let code = `\n${templateResult.code.replace(
        /\nexport (function|const) (render|ssrRender)/,
        `$1 ${fnName}`
      )}` + `\n${COMP_IDENTIFIER}.${fnName} = ${fnName}`

      if ((descriptor.script || descriptor.scriptSetup)?.lang === 'ts') {
        code = await transformTS(code)
      }

      return {
        code,
        errors: []
      }
}