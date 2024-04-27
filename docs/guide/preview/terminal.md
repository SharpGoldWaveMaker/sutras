# 终端模式

如果你的library是**js工具类库**，那么通过`js console`输出你的library运行结果可能更合适便捷。

终端模式下，你的demo将放在沙箱中运行，以便捕获运行的console的输出内容。

:::tip 沙箱性能
Sutras针对沙箱做了[性能优化](../what-is-sutras#performance)，包括：懒加载、块编译、LRU缓存等等。
:::

demo的书写可以使用**vue**，也可以使用**js/ts**的形式，如果使用**vue**来书写，你可以通过`docs`标签设置更多可选项，详见[书写](../writing/index)

## 使用vue来书写

<demo path="./terminal-basic"/>

## 使用js/ts来书写

:::warning 默认启用终端模式
当你使用`ts/js`作为demo的入口文件时，Sutras将默认启用终端模式
:::

<demo path="./terminal-ts"/>

终端模式需要通过配置开启，否则Sutras将默认采用[界面模式的block状态](./view#block)来展示demo

:::tip 为什么需要手动开启终端模式
目前Sutras暂时没有找到准确、合适的方法来推测：你的demo是否包含需要演示的界面。
:::

## 如何开启

你可以通过Sutras全局配置 **或** demo的独立配置开启界面模式，其中demo的独立配置优先级高于Sutras全局配置：

:::warning 代码块折叠
如果不展示代码块，终端输出的内容会让人很难理解，不直观。所以Sutras在终端模式下**默认展开代码块**。
如果你的代码块篇幅较长，或出于其他原因，需要默认折叠代码块，需要同时设置选项`defaultCodeCollapse: true`。
:::

**通过全局配置**

在你的文档目录下的`.vitepress/config`文件中：

```js {8-12}
import { defineConfig } from 'vitepress'
import { pluginVite } from '@sgwm-sutras/plugin'

defineConfig({
  vite: {
    plugins: [
      pluginVite({
        demo: {
          defaultPreviewMode: 'terminal',
          // 终端模式下，代码块默认是展开的，设置为true时，将折叠代码块：
          // defaultCodeCollapse: true 
        }
      })
    ]
  }
})
```

**通过demo独立配置**

在你的demo入口文件中：

```vue{3-5}
<docs lang="md">
---
defaultPreviewMode: 'terminal'
<!-- 终端模式下，代码块默认是展开的，设置为true时，将折叠代码块：-->
<!-- defaultCodeCollapse: true -->
---
</docs>
```

## 支持的console调用 {#support-call}

- console.warn
- console.info
- console.debug
- console.error
- console.log
- console.table
- console.group
- console.groupCollapsed
- console.groupEnd
- console.count
- console.countReset
- console.time
- console.timeLog
- console.timeEnd
- console.assert

<demo path="./terminal-call"/>

## 支持的数据类型

<demo path="./terminal-value"/>
