import {chunk} from 'lodash-es'

console.group('demo: chunk-2')
console.log(chunk(['a', 'b', 'c', 'd'], 2))
console.groupEnd()

console.group('demo: chunk-3')
console.log(chunk(['a', 'b', 'c', 'd'], 3))
console.groupEnd()

const result = chunk(['a', 'b', 'c', 'd'], 4)
console.groupCollapsed('demo: chunk-4')
console.log(result)
console.groupEnd()

console.assert(result.length === 2, `错误信息`)