# 如何写作

## Demo设置

部分的配置项，可以Demo中设置，也可在全局设置中指定。若在全局设置中指定时，所有的Demo将默认应用全局设置。若在Demo设置中对某个全局设置项重新指定，此的Demo会应用自身的设置值，即Demo设置优先级高于全局设置。

Demo支持的设置项详见[demo设置项](./docs)

### 通过全局设置指定所有Demo的默认设置：

全局设置通过插件来指定：

如SSR相关设置项，在你的文档目录下的`.vitepress/config`文件中：

```js {8-11}
import { defineConfig } from 'vitepress'
import { pluginVite } from '@sgwm-sutras/plugin'

defineConfig({
  vite: {
    plugins: [
      pluginVite({
        demo: {
          enableSSR: true,
          defaultRenderMode: 'server'
        }
      })
    ]
  }
})
```

### Demo自身设置的指定

Demo自身设置的指定有两种方式

如果你的**demo入口文件为vue文件**，可以通过`<docs>`标签来指定，如SSR相关设置项：

在你的demo入口文件中：

```vue{3-4}
<docs lang="md">
---
enableSSR: true
defaultRenderMode: 'server'
---
</docs>
```

也可以通过**注释的方式**来设置，这种方式**适用于非vue类型的Demo入口文件**

```js
/**
 * docs
 * @param {string} defaultPreviewMode browser
 * @param {array} includes view-ts-include, ./view-ts-include2
 * @param {number} previewHeight 300
 * @param {boolean} defaultCodeCollapse true
 */
```

:::warning 注意事项

- Sutras 通过`docs`这个标识来识别当前注释块是否用于解析Demo设置。
- Sutras 通过 {type} 来指定如何解析参数值，默认`string`类型
- 需要留意**数组类型参数写法**，通过**逗号**分隔

:::

注释的方式书写起来相对麻烦，如果你不喜欢这样的方式，也可以使用`vue sfc`的方式书写`js`或`ts`：

```vue
<script setup>
// 你的js代码
</script>
<docs>
---
// ...你的demo独立设置
---
</docs>
```

## Demo描述

借助`vitepress`，我们可以直接在文档上编辑`markdown`格式的描述:

```md
按钮有五种类型：`主按钮`、`次按钮`、`虚线按钮`、`文本按钮`和`链接按钮`。
主按钮在**同一个操作区域最多出现一次**。

<demo path="./demo.vue" />
```

按钮有五种类型：`主按钮`、`次按钮`、`虚线按钮`、`文本按钮`和`链接按钮`。
主按钮在**同一个操作区域最多出现一次**。

<demo path="../demo.vue" />

**这似乎不太完美**：每个demo都应当是**相对独立的**，演示代码与其说明文档应当放到同一个demo文件中。这样更符合逻辑且便于维护。

你可以在`<docs>`中定义Demo的描述信息：

```vue
<docs lang="md">
---
title: Button的类型
badge: tip-我是徽章
---
按钮有五种类型：`主按钮`、`次按钮`、`虚线按钮`、`文本按钮`和`链接按钮`。
主按钮在**同一个操作区域最多出现一次**。
</docs>
```

<demo path="../demo-with-docs" />

## 代码块样式

支持设置Demo代码块部分相关样式，详见[代码块](./code)

## Demo模块化

支持你将Demo文件进行拆分，详见[Demo模块化](./include)