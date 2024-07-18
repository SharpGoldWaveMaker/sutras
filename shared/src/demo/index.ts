import { DemoContext } from './types'
import { File, ParseResult } from '../file'
import { pick } from '../utils'

export * from './format'
export * from './types'
export * from './transform'


export function parseFilesFromDemoContext(context: DemoContext){
    return context.files.map(file => {
        const option = {
            ...pick(file, [
                'identifier', 
                'filename',
                'extension',
                'isEntry',
                'pathFromEntry',
            ]),
            parsed: {
              ...file.parsed,
              code: decodeURIComponent(file.parsed.code)
            },
            code: decodeURIComponent(file.code)
        }
        return new File(option)
    })
}