<script setup lang="ts">

console.group('group')
console.info('console.info')
console.debug('console.debug')
console.error('console.error')
console.log('console.log')
console.groupEnd()
console.groupCollapsed('default collapsed group')
console.info('console.info')
console.debug('console.debug')
console.error('console.error')
console.log('console.log')
console.warn('warning')
console.warn('warning')
console.groupEnd()

console.table([1, 2, 3])

console.count('counter')
console.count('counter')
console.countReset()
console.count('counter')

console.time('timer1')
console.time('timer2')
console.timeLog('timer1')
console.timeLog('timer1')
console.timeEnd('timer1')
console.timeLog('timer1')
console.timeLog('timer2')
console.timeEnd('timer2')
let val1 = 1
let val2 = 2
console.assert( val1 === val2, 'assert failed message')
</script>

<template></template>

<docs lang="md">
---
defaultPreviewMode: 'terminal'
---
</docs>