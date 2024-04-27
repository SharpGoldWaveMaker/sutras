# REPL

[REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) 是 **Read-Eval-Print Loop** 的缩写，**意为“读取-求值-打印循环”**。这是一种简单的、交互式的编程环境，允许用户输入单行代码并立即执行，然后显示结果。这种环境非常适合快速测试代码片段、学习新的编程语言特性或进行实验。

Sutras为你的文档学习者提供了这种模式。**REPL默认是开启的**，如果你想要关闭它，可以通过Sutras全局配置 **或** demo的独立配置来设置，其中demo的独立配置优先级高于Sutras全局配置：

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
          enableREPL: false,
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
enableREPL: false
---
</docs>
```

<demo path="./basic-browser"/>