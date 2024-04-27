<script setup lang="ts">

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

</script>

<docs lang="md">
---
title: Lodash-chunk
badge: danger-terminal mode
defaultPreviewMode: 'terminal'
---
将数组（array）拆分成多个 `size` 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。

**引入版本**
3.0.0

**参数**
- array (Array): 需要处理的数组
- [size=1] (number): 每个数组区块的长度

**返回**
(Array): 返回一个包含拆分区块的新数组（注：相当于一个二维数组）。
</docs>