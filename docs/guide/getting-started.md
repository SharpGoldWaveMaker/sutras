# 快速开始

## 安装Sutras

:::warning 前提条件

Sutras基于[Vitepress](https://vitepress.dev/)，使用Sutras之前，确保你了解它的基础用法。

:::

**首先参照[Vitress官方引导](https://vitepress.dev/guide/getting-started#installation)，完成初始化**

**安装Sutras插件**

::: code-group

```sh [npm]
$ npm add -D @sgwm-sutras/plugin @sgwm-sutras/ui
```

```sh [pnpm]
$ pnpm add -D @sgwm-sutras/plugin @sgwm-sutras/ui
```

```sh [yarn]
$ yarn add -D @sgwm-sutras/plugin @sgwm-sutras/ui
```

```sh [bun]
$ bun add -D @sgwm-sutras/plugin @sgwm-sutras/ui
```

:::

:::tip 💡 安装的是个啥？

- **@sgwm-sutras/plugin** 包含了`Vite`与`Markdown`插件，在构建阶段完成必要的准备工作；
- **@sgwm-sutras/ui** 负责demo的渲染、沙箱以及`REPL`等处理。
:::

## 配置Sutras
假设选择在 `./docs` 中搭建 VitePress 项目，生成的文件结构应该是这样的：
```txt {4,5}
.
├─ docs                # 项目根目录
│  ├─ .vitepress
│  │  ├─ theme
│  │  │  └─ index.ts   # 主题入口
│  │  └─ config.ts     # 配置文件
│  └─ index.md
└─ package.json
```

### 引入`@sgwm-sutras/plugin`

编辑`docs/.vitepress/config.ts`文件

```ts{2,6,11}
import { defineConfig } from 'vitepress'
import { pluginMkit, pluginVite } from '@sgwm-sutras/plugin'
export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(pluginMkit)
    }
  },
  vite: {
    plugins: [
      pluginVite() // 可选配置：pluginVite({...})
    ]
  }
}
```

:::tip 💡 为啥又有两个插件？

- **pluginVite** 是一个[Vite插件](https://cn.vitejs.dev/guide/using-plugins.html)，在构建过程进行`transform`预处理。值得注意的是，pluginVite运行在所有Vite插件之前（`enforce: "pre"`）
- **pluginMkit** 是一个[MarkdownIt](https://github.com/markdown-it/markdown-it)，由于Vitepress采用了`MarkdownIt`处理Markdown，为了能享受Vitepress诸多[Markdown特性](https://vitepress.dev/guide/markdown)，Sutras采用了Vitepress的`MarkdownIt实例`完成Markdown处理。如果你通过其他MarkdownIt插件，改变了Markdown的渲染过程，那么Sutras涉及到的Markdown语法也会有**相同的渲染结果**。
:::

其中`pluginVite`有[可选的配置项](./config/index)，如：是否采用`SSR渲染模式`、demo的展现样式等等，可以根据项目自身情况添加。


### 引入 `@sgwm-sutras/ui`

编辑`docs/.vitepress/theme/index.ts`文件。
`theme`文件夹存在与否取决于Vitepress初始化时你所采用的[安装向导配置](https://vitepress.dev/guide/getting-started#setup-wizard)，如果没有，需要手动添加。

```ts{2,3,8}
import Theme from 'vitepress/theme'
import { DemoBox } from '@sgwm-sutras/ui'
import '@sgwm-sutras/ui/style'

export default {
  extends: Theme,
  enhanceApp({app}) {
    app.component('demo', DemoBox)
  }
}
```


## 基础用法

本节将通过简单的例子展示了`Sutras`的基础用法，尽管这个例子在**项目级场景**中并不常用，但它足够简单，可以让你快速了解。

:::tip 更多场景案例
如果你想快速了解**项目级场景**例子，参见[使用案例](./examples)，这里包含了`SingleRepo`,`Monorepo`等诸多常见项目方案用例。
:::

### 创建demo
首先在你的文档同目录下创建一个`demo.vue`文件。

这个文件本质上就是你的demo文件：引入你的library，并对library中某个特性进项展示说明。

通常情况下，demo文件更多是分散在library源码中的，参见[使用案例](./examples)。

这里采用简单的例子用于说明：

```txt{6}
.
└─ docs
   ├─ .vitepress
   └─ guide
      ├─ getting-started.md /** 文档 */
      └─ demo.vue /** demo文件 */
```
完善你的`demo.vue`，这里使用[ant design](https://www.antdv.com/components/overview)组件作为例子：

:::warning 注意：如果你正按照文档一步一步操作，确保你的环境中安装了[ant-design-vue](https://www.antdv.com/components/overview)

:::

```vue
<template>
  <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
</template>

<script setup>
import { Space, Button } from 'ant-design-vue'
</script>
```

### 引入demo
接下来编辑你的文档内容`getting-started.md`，引入你的demo文件
```markdown
<demo path="./demo" /> 
<!-- 加上后缀也可以 <demo path="./demo.vue" /> -->
```

### 文档效果
最后启动你的文档开发服务`pnpm docs:dev`，查看文档`getting-started.md`页面。你将在页面上看到如下demo文档效果：

<demo path="./demo" />

Sutras针对的demo展示初步预置了一些功能：
- 查看代码`< >`
- 全屏展示
- 代码编辑：实时局部编译、反馈(`REPL`)
- 代码复制
- 终端模式
- SSR渲染
- 设备尺寸

更多的功能详见[展示区](./preview/index)，如果你对实时编译感兴趣详见[REPL](./preview/repl)

## 添加文档 {#edit-docs}
通常我们还需要添加`demo描述信息`，借助`vitepress`，我们可以直接在文档上编辑`markdown`格式的描述:

```md
按钮有五种类型：`主按钮`、`次按钮`、`虚线按钮`、`文本按钮`和`链接按钮`。
主按钮在**同一个操作区域最多出现一次**。

<demo path="./demo.vue" />
```

按钮有五种类型：`主按钮`、`次按钮`、`虚线按钮`、`文本按钮`和`链接按钮`。
主按钮在**同一个操作区域最多出现一次**。

<demo path="./demo.vue" />

**这似乎不太完美**：每个demo都应当是**相对独立的**，演示代码与其说明文档应当放到同一个demo文件中。这样更符合逻辑且便于维护。
**Sutras支持你在传统的`VueSFC`中，通过`<docs>`标签添加demo文档。**

新建一个`demo-with-docs.vue`文件，当然你也可以在`demo.vue`基础上修改：

```txt{7}
.
└─ docs
   ├─ .vitepress
   └─ guide
      ├─ getting-started.md /** 文档 */
      ├─ demo.vue /** demo文件 */
      └─ demo-with-docs.vue /** 带有说明文档的demo文件 */
```
```vue{15-22}
<template>
  <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
</template>

<script setup>
import { Space, Button } from 'ant-design-vue'
</script>

<docs lang="md">
---
title: Button的类型
badge: tip-我是徽章
---
按钮有五种类型：`主按钮`、`次按钮`、`虚线按钮`、`文本按钮`和`链接按钮`。
主按钮在**同一个操作区域最多出现一次**。
</docs>
```
`<docs>`标签也支持`frontmatter`，以提供其他附加功能
- `title`将自动为你的demo添加二级标题，并且在文档右侧显示`锚点`
- `badge`将在标题右侧添加`徽章`

也可以通过设置`defaultPreviewMode：'browser'`，让你的demo在`沙箱`中展示。
更多设置项详见[写作](./writing/index)

`frontmatter`之外的内容将作为普通`Markdown`内容，添加到文档中。不过说明文档的内容部分，固定出现在demo的`preview`区与`toolbar`区域之间，如果你想要拥有自己独特的demo展现样式，后续Sutras将会提供支持。

我们看一下效果，在`getting-started.md`中引入新的demo，保存后你的vitepress项目将自动更新：
```md
<demo path="./demo-with-docs" />
```

<demo path="./demo-with-docs" />

## 路径解析

通常情况下，`demo`文件放在`library`中，`docs`作为独立目录，如此一来，文档中每引入一个demo，都需要配置很长的路径，**这样的文档维护成本无疑是巨大的**。

Sutras初步总结了几个`概念`，配合`工程化工具`，将路径配置工作**化繁为简**，也让你的文档写作**更具逻辑性**，这也是Sutras的初衷。详见[路径解析](./path)

下一步，你将通过[更多案例](./examples.md)，更直观地了解Sutras能够为你做什么。
