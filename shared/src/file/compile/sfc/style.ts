import { compileStyleAsync as sfcCompileStyle, type SFCDescriptor } from '@vue/compiler-sfc'

export type CompileStyleResult = {
    code?: string;
    errors: Error[]
}

export type CompileStyleOption = {
    descriptor: SFCDescriptor;
    id: string;
    filename: string
}


export async function compileStyle(opt: CompileStyleOption): Promise<CompileStyleResult> {
    const {descriptor, id, filename} = opt
    if(descriptor.template?.lang){
      throw Error(`lang="x" pre-processors for <style> are currently not supported.`)
    }
    let code: string = ''
    for (const style of descriptor.styles) {
        if (style.module) {
          return {errors: [new Error(`<style module> is not supported.`)]}
        }
    
        const styleResult = await sfcCompileStyle({
          source: style.content,
          filename,
          id,
          scoped: style.scoped,
          modules: !!style.module
        })
        if (styleResult.errors.length) {
          // postcss uses pathToFileURL which isn't polyfilled in the browser
          // ignore these errors for now
        //   if (!styleResult.errors[0].message.includes('pathToFileURL')) {
        //     errors.push(...(styleResult.errors as Error[]))
        //   }
          // proceed even if css compile errors
        } else {
          code += styleResult.code + '\n'
        }
    }
    return {
        code: code ? code.trim() : '/* No <style> tags present */',
        errors: []
    }
}