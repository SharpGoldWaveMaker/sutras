# 设备尺寸

Sutras在界面模式下提供了设备尺寸切换以及设备旋转功能，如果你的library使用场景是移动端，那么这个功能会对你很有帮助。

你可以通过Sutras的配置预设**多种设备类型及尺寸**，并从中指定默认的设备类型。

<demo path="./device"/>

## 自定义设备类型

设备类型需要在插件配置项中进行设置，在你的文档目录下的`.vitepress/config`文件中：

```js {4-11, 17-20}
import { defineConfig } from 'vitepress'
import { pluginVite } from '@sgwm-sutras/plugin'

const deviceList = {
  "iPhone 5/SE": [320, 568], // [ width, height ]
  "iPhone 6/7/8": [375, 667],
  "iPhone 6/7/8 Plus": [414, 736],
  "iPhone X": [375, 812],
  "iPad": [768, 1024],
  "iPad Pro": [1024, 1366],
}

defineConfig({
  vite: {
    plugins: [
      pluginVite({
        demo: {
          deviceList
        }
      })
    ]
  }
})
```

## 设置默认设备

Sutras支持设置：demo初次加载时默认使用的设备类型，通过Sutras全局配置 **或** demo的独立配置，其中demo的独立配置优先级高于Sutras全局配置：

如果没有通过`defaultDevice`指定默认设备，Sutra将使用**deviceList的第一个设备**作为你的默认设备。

**通过全局配置**

在你的文档目录下的`.vitepress/config`文件中：

```js {4-12, 20}
import { defineConfig } from 'vitepress'
import { pluginVite } from '@sgwm-sutras/plugin'

const deviceList = {
  "Default": [0, 0],
  "iPhone 5/SE": [320, 568], // [ width, height ]
  "iPhone 6/7/8": [375, 667],
  "iPhone 6/7/8 Plus": [414, 736],
  "iPhone X": [375, 812],
  "iPad": [768, 1024],
  "iPad Pro": [1024, 1366],
}

defineConfig({
  vite: {
    plugins: [
      pluginVite({
        demo: {
          deviceList,
          defaultDevice: 'iPhone X'
        }
      })
    ]
  }
})
```
:::tip 如何设置填充展示区的设备？
在你的设备列表中，添加一个宽度，高度为0的设备，并通过`defaultDevice`来指定它。
在例子中，我们添加了一个`Default: [0, 0]`的设备
:::

**通过demo独立配置**

在你的demo入口文件中：

```vue{3}
<docs lang="md">
---
defaultDevice: 'iPhone X'
---
</docs>
```

## 内置的设备

Sutras也内置了一些设备：

```ts
export const defaultDeviceList: DeviceList = {
  "Default": [0, 0],
  "Moto 4G": [360, 640],
  "Galaxy S5": [360, 640],
  "Pixel 2": [411, 731],
  "Pixel 2 XL": [411, 823],
  "iPhone 5/SE": [320, 568],
  "iPhone 6/7/8": [375, 667],
  "iPhone 6/7/8 Plus": [414, 736],
  "iPhone X": [375, 812],
  "iPad": [768, 1024],
  "iPad Pro": [1024, 1366],
  "Surface Duo": [540, 720],
  "Galaxy Fold": [280, 653]
}

export enum defaultDeviceTypes {
  Default = 'Default',
  Moto_4G = 'Moto 4G',
  Galaxy_S5 = 'Galaxy S5',
  Pixel_2 = 'Pixel 2',
  Pixel_2_XL = 'Pixel 2 XL',
  iPhone_5_SE = 'iPhone 5/SE',
  iPhone_6_7_8 = 'iPhone 6/7/8',
  iPhone_6_7_8_Plus = 'iPhone 6/7/8 Plus',
  iPhone_X = 'iPhone X',
  iPad = 'iPad',
  iPad_Pro = 'iPad Pro',
  Surface_Duo = 'Surface Duo',
  Galaxy_Fold = 'Galaxy Fold'
}
```

**使用内置的设备**

```js {2, 8-11}
import { defineConfig } from 'vitepress'
import { pluginVite, defaultDeviceList, defaultDeviceTypes } from '@sgwm-sutras/plugin'

defineConfig({
  vite: {
    plugins: [
      pluginVite({
        demo: {
          deviceList: defaultDeviceList,
          defaultDevice: defaultDeviceTypes.iPhone_X
        }
      })
    ]
  }
})
```


## 尺寸缩放

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

