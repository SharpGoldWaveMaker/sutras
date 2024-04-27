# 服务端渲染（SSR）

Sutras考虑到你的组件可能支持[SSR渲染](https://cn.vuejs.org/guide/scaling-up/ssr.html#server-side-rendering-ssr)或同时支持`CSR`、`SSR`两种渲染模式。

为此Sutras在演示区提供这两种模式的切换。

:::warning SSR与CSR的书写区别？

SSR模式下，由于没有**任何动态更新**，所以像 **onMounted 或者 onUpdated 这样的生命周期钩子不会在 SSR 期间被调用**，**事件也不会响应**。详见[书写友好的SSR代码](https://cn.vuejs.org/guide/scaling-up/ssr.html#component-lifecycle-hooks)

:::

<demo path="./ssr-csr"/>


## 开启SSR渲染 {#enable}

你可以通过Sutras的`enableSSR`选项，在全局配置 **或** demo的独立配置开启SSR渲染模式，其中demo的独立配置优先级高于Sutras全局配置：

**enableSSR 可选值**

| 值 | 类型 | 说明 |
| :---- | :--- | :--- |
| clientOnly | `string` | (默认值)demo只会在CSR模式下渲染 |
| serverOnly | `string` | demo只会在SSR模式下渲染 |
| both | `string` | demo会展示CSR/SSR切换按钮，文档学习者可以点击切换，默认的渲染方式需要通过[defaultRenderMode选项](#default-render-mode)来指定 |
| true | `boolean` | 同 `both` |
| false | `boolean` | 同 `clientOnly` |

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
          enableSSR: true, // 'clientOnly' 'serverOnly' 'both' false
        }
      })
    ]
  }
})
```

**通过demo独立配置**

在你的demo入口文件中：

```vue{3}
<docs lang="md">
---
enableSSR: true
---
</docs>
```

## 默认的渲染模式 {#default-render-mode}

**enableSSR**选项值为`true`或`'both'`时，可以通过`defaultRenderMode`选项指定优先采用哪种方式来渲染

**enableSSR 可选值**

| 值 | 类型 | 说明 |
| :---- | :--- | :--- |
| client | `string` | (默认值) CSR渲染 |
| server | `string` | SSR渲染 |

如果你想要demo默认采用SSR模式，通过Sutras全局配置 **或** demo的独立配置默认的渲染模式，其中demo的独立配置优先级高于Sutras全局配置：

**通过全局配置**

在你的文档目录下的`.vitepress/config`文件中：

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

**通过demo独立配置**

在你的demo入口文件中：

```vue{3-4}
<docs lang="md">
---
enableSSR: true
defaultRenderMode: 'server'
---
</docs>
```

<demo path="./ssr-csr-default"/>







