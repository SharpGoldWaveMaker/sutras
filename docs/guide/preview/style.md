# 风格样式

Sutras支持你对展示区的样式做简单的设置

## 展示区边距 {#compact}

默认Sutras会在展示区提供一个边距，这样视觉上会显得比较美观。有时你并不需要这样的边距，比如在展示Layout这样的全局组件

你可以通过Sutras的`style`选项，在全局配置 **或** demo的独立配置，其中demo的独立配置优先级高于Sutras全局配置：

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
          style: 'compact'
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
style: 'compact'
---
</docs>
```

<demo path="./layout-demo/basic" />

## 展示区背景色 {#background}

默认Sutras的展示区背景会随着主题变化，有时，你可能需要demo展示在特殊的背景下，比如`ghost`模式：

你可以通过Sutras的`background`选项，在全局配置 **或** demo的独立配置，其中demo的独立配置优先级高于Sutras全局配置：

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
          background: 'rgb(190, 200, 200)'
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
background: 'rgb(190, 200, 200)'
---
</docs>
```

<demo path="./style-background" />


## 展示区高度 {#height}

:::warning 
如果你已经浏览了**设备尺寸缩放**，可以跳过此节
:::

默认情况下，设备的尺寸会在**展示区尺寸**（宽度等于文档内容宽度）的基础上进行比例缩放。

Sutras支持你对展示区高度进行设置，进而限制设备尺寸的缩放基础：

通过Sutras全局配置 **或** demo的独立配置，其中demo的独立配置优先级高于Sutras全局配置：

**通过全局配置**

在你的文档目录下的`.vitepress/config`文件中：

```js {11}
import { defineConfig } from 'vitepress'
import { pluginVite, defaultDeviceList, defaultDeviceTypes } from '@sgwm-sutras/plugin'

defineConfig({
  vite: {
    plugins: [
      pluginVite({
        demo: {
          deviceList: defaultDeviceList,
          defaultDevice: defaultDeviceTypes.iPhone_X
          previewHeight: 500 // 或 '500px'
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
defaultDevice: 'iPhone X'
previewHeight: 500 // 或 '500px'
---
</docs>
```

<demo path="./device-scale"/>