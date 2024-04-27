# Demo设置项

Sutras为demo提供了以下设置项，部分配置项支持通过[全局配置](../config/index)来设置。支持全局配置的配置项将通过`Badge` 标注。

## 标题 <Badge type="warning" text="仅Demo中配置" /> {#title} 

用于定义Demo的标题，设置标题后，在文档中将自动呈现一个二级标题，并在文档右侧添加锚点链接。

- 设置项: `title`
- 类型:   `string`

## 徽章 <Badge type="warning" text="仅Demo中配置" /> {#badge}

用于指定Demo标题旁的徽章`badge`，[效果详见Vitepress](https://vitepress.dev/zh/reference/default-theme-badge)

- 设置项: `badge`
- 类型:   `string`
- 格式:   `{BadgeType}-{content}`

```ts
type BadgeType = 'info' | 'tip' | 'warning' | 'danger'
```

Sutras首先判断你的设置值中是否由`{BadgeType}-`开头，如果是，Sutras将其余内容视为Badge内容。
否则，Sutras将默认使用`'tip'`作为你的徽章类型，整个设置值视为Badge内容。


## 多文件包含 <Badge type="warning" text="仅Demo中配置" /> {#include}

当你的Demo比较复杂时，你可能习惯于将Demo源码拆分为多个文件

- 设置项: `includes`
- 类型:   `array`

  includes 包含的文件，将与Demo入口文件一同显示在Demo文档中，也支持REPL，详见[Demo模块化](./include)


## 展示模式 <Badge type="info" text="支持全局配置" /> {#defaultPreviewMode} 

用于设置demo展示区的展示模式

- 设置项: `defaultPreviewMode`
- 类型:   `'block' | 'terminal' | 'browser'`

  `block`，`browser`详见[界面模式](../preview/view.md)，terminal 详见[终端模式](../preview/terminal.md)


## 开启服务端渲染 <Badge type="info" text="支持全局配置" /> {#enableSSR}

用于开启demo服务端渲染(SSR)

- 设置项: `enableSSR`
- 类型:   `'clientOnly' | 'serverOnly' | 'both' | true | false`

  详见[服务端渲染](../preview/ssr)

## 默认渲染模式 <Badge type="info" text="支持全局配置" /> {#defaultRenderMode}

用于设置demo开启服务端渲染时，首次渲染方式

- 设置项: `defaultRenderMode`
- 类型:   `'client' | 'server'`

  详见[默认渲染模式](../preview/ssr#default-render-mode)

## 开启REPL <Badge type="info" text="支持全局配置" /> {#enableREPL}

如果开启了REPL，将允许你的文档学习者编辑demo代码并预览效果

- 设置项: `enableREPL`
- 类型:   `boolean`

  详见[REPL](../preview/repl)

## 展示区风格 <Badge type="info" text="支持全局配置" />

可以设置展示区无边框风格

- 设置项: `style`
- 类型:   `'compact'`

  详见[展示区边距](../preview/style#compact)


## 展示区背景 <Badge type="info" text="支持全局配置" />

可以设置展示区背景色

- 设置项: `background`
- 类型:   `string`

  详见[展示区背景](../preview/style#background)


## 展示区高度 <Badge type="info" text="支持全局配置" /> {#previewHeight}

用于设置demo展示区的固定高度

- 设置项: `previewHeight`
- 类型:   `'auto' | number | string`

  详见[展示区高度](../preview/style#height)

## 默认折叠代码块 <Badge type="info" text="支持全局配置" />

demo的代码块在**界面模式**下默认是折叠的，在**终端模式**下默认是展开的。
你可以通过这个设置项来指定：

- 设置项: `defaultCodeCollapse`
- 类型:   `boolean`

<demo path="./code-collapse"/>

## 代码块高亮 <Badge type="warning" text="仅Demo中配置" /> {#highlight}

Sutras保留了Vitepress的功能，支持你的demo代码行高亮

- 设置项: `highlight`
- 类型:   `string`

语法详见[Vitepress](https://vitepress.dev/guide/markdown#line-highlighting-in-code-blocks)



## defaultDevice <Badge type="info" text="支持全局配置" />

指定demo的默认设备尺寸类型

- 设置项: `defaultDevice`
- 类型:   `string`

  详见[设备尺寸](../preview/device)
