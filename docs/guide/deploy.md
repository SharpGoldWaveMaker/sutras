# 部署Sutras

Sutras基于Vitepress，部署过程参见 [Vitepress文档](https://vitepress.dev/guide/deploy) 即可。

**但是部署过程可能遇到一些问题，尽管有些问题并非Sutras引起**。

## 排除Vue实例
Sutras面向`library开发场景`，如果你的libray使用了`vue`，通常情况下需要在打包时排除。
除非这是你的libary有意为之。

**为什么要排除**

因为你的library使用者一般也安装了Vue，
如果library在打包阶段将Vue包含进去，那么使用者将在运行时发生错误：出现了两个`vue实例`。

从某种意义上来说，Sutras同样也是你的library消费者。

**如何排除**

排除Vue的方法取决于你的library使用`打包工具`，这里以`Vite，rollup`为例提供一种解决方案，抛砖引玉：

Vite构建阶段采用rollup打包，所以`使用Vite`或`只使用rollup`可以用同样的方案，可设置`rollupOptions.external`选项排除:

```ts{19}
import { defineConfig } from "vite";
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'

const ROOT = fileURLToPath(import.meta.url)
const r = (p: string) => resolve(ROOT, '..', p)

export default defineConfig({
    build: {
        minify: false,
        lib: {
            entry: r('src/index.ts'),
            formats: ['es'],
            fileName: 'index'
        },
        rollupOptions: {
            external: ['vue']
        }
    },
    plugins: [
        vue(),
        dts({rollupTypes: true})
    ]
})
```

## 代码分割

Sutras在生产构建时，会对demo依赖的包进行代码分割。例如：vue，你的library等等。

## 关闭出口混淆

Sutras关闭了Vitepress的rollup配置：`minifyInternalExports`，其用处可详见[rollup文档](https://rollupjs.org/configuration-options/#output-minifyinternalexports)：
这是**Sutras默认操作**，可能在部署阶段出现你意料之外的情况，所以这里说明一下。

**缩短chunk出口变量名长度**是**减少打包体积**的关键之一，因为在打包结果中，**chunk出口变量名**可能由于频繁被其他chunk引入，导致出现频率很高。所以rollup公布了这个配置项，用于简化chunk出口变量名的长度，减少最终library打包体积。

**为什么关闭这个配置项**

这里Sutras关闭这项配置的主要原因是为了**站在文档学习者的角度，更好地实现REPL**：

假设demo代码是这样的

```vue
<template>
    <button>{{count}}</button>
</template>
<script setup>
import {ref} from 'vue'
const count = ref(0)
</script>
```

如果文档学习者想要改变你的demo代码，做一些简单的Poc：

```vue{1,4}
<template>
    <button>{{count}}</button>
    double: {{double}}
</template>
<script setup>
import {ref, computed} from 'vue'
const count = ref(0)
const double = computed(() => count.value * 2)
</script>
```

修改demo代码后，学习者可以查看更改后的demo效果。

如果开启了`minifyInternalExports`，**更改demo代码查看效果将不可操作**。

所以Sutras目前所采取的就是牺牲一点Vitepress文档项目的打包体积，换取你的文档学习者的使用体验。

Sutras也将持续关注相关技术方案，尽可能实现两全其美。