import { DemoContext } from './types'
import { File } from '../file'
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
            parsed: JSON.parse(decodeURIComponent(file.parsed as unknown as string)),
            code: decodeURIComponent(file.code)
        }
        return new File(option)
    })
}