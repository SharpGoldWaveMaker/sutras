import { DemoContext } from './types'

export function stringifyDemoContext(context: DemoContext): string{
    return JSON.stringify(context, null, 2).replace(/"\(\) => import\((.*?)\)"/g, '() => import($1)')
}