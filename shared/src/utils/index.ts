import { camelCase, upperFirst, kebabCase, repeat, head, tail, pick, flatten, pickBy, find, map, flatMap, uniqueId } from 'lodash-es'
import {browserPath} from './path'

const pascalCase = (str: string) => upperFirst(camelCase(str))
const tuple = <T extends string[]>(...args: T) => args;

export { 
    kebabCase, 
    repeat, 
    head, 
    tail, 
    pick, 
    flatten, 
    pickBy, 
    find, 
    map, 
    flatMap, 
    uniqueId ,
    pascalCase,
    tuple,
    browserPath
}



