# 界面模式

如果你的library是**前端组件**、**Hooks**，或者**样式库**，那么通过可视化的UI界面，向学习者展示你的library运行结果是很好的选择。

界面模式也包含终端模式的功能，方便你的文档学习者在合适的位置输出demo内部状态。

界面模式的入口文件默认需要是vue文件，否则Sutras将默认使用[终端模式](./terminal)来展示。你也可以通过插件配置来指定非Vue入口文件的展示模式。

界面模式有两种状态：**block（默认）、browser**

## block状态 {#block}

默认情况下，你的demo会在**构建阶段**随文档内容一同编译，在**运行阶段**随文档一同渲染。

此时demo的展现采用比较简约的样式。

当你的文档学习者点击`工具栏的编辑按钮`时，demo将进入REPL模式，切换至`browser`状态；点击`工具栏的取消按钮`时，demo将退出REPL模式，切换回`block`状态:

<demo path="./basic-block"/>

## browser状态 {#browser}

在`browser`状态下，你的demo将被放在独立的沙箱中，在运行时编译渲染。

你的文档学习者可以通过：

- **CSR/SSR切换**：来查看demo分别在CSR，SSR不同渲染状态下的表现，详见[SSR/CSR](./ssr)。
- **设备尺寸切换及旋转**：来查看demo在不同设备尺寸下的表现，详见[设备尺寸](./device)。
- **查看终端**：查看demo渲染过程的控制台输出信息，也可以编辑demo代码对输出某个状态的值

Sutras的终端模式支持**多种console调用**以及**数据类型**的输出，详见[终端模式](./terminal)

<demo path="./basic-browser"/>

:::tip 沙箱性能
Sutras针对沙箱做了[性能优化](../what-is-sutras#performance)，包括：懒加载、块编译、LRU缓存等等。
:::

## 如何默认开启browser状态？ {#config}

Sutras默认采用`block`模式进行展示，你可以通过Sutras全局配置 **或** demo的独立配置开启界面模式，其中demo的独立配置优先级高于Sutras全局配置：

**通过全局配置**

在你的文档目录下的`.vitepress/config`文件中：

```js {8-10}
import { defineConfig } from 'vitepress'
import { pluginVite } from '@sgwm-sutras/plugin'

defineConfig({
  vite: {
    plugins: [
      pluginVite({
        demo: {
          defaultPreviewMode: 'browser'
        }
      })
    ]
  }
})
```

**通过demo独立配置**

在你的demo入口文件中：

```vue
<docs lang="md">
---
defaultPreviewMode: 'browser'
---
</docs>
```


## 非Vue入口的展示模式 {#ts-entry}

界面模式的入口文件默认需要是vue文件，否则Sutras将默认使用[终端模式](./terminal)来展示。

如果你希望通过`js`或`ts`来书写你的demo，那么可以通过demo的独立配置来设置。

非`vue`入口的demo文件配置通过注释来完成，更多详见[书写](../writing/docs)

```js {8-10}
/**
 * docs
 * @param {string} defaultPreviewMode browser
 * @param {array} includes view-ts-include, ./view-ts-include2
 * @param {number} previewHeight 300
 * @param {boolean} defaultCodeCollapse true
 */
```

**使用ts书写demo**

<demo path="./view-ts"/>




