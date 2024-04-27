# 何时启用沙箱模式

以下情况，Sutras会将你的demo放在**独立、隔离的沙箱**中运行：

## 通过配置展示区展示模式：

Sutras的`展示模式`**默认是block**。如果你通过配置修改了demo的默认展示模式为：`browser`，`terminal`时，demo将默认运行在沙箱中。

- 通过Sutras全局配置，修改demo默认展示模式。

在你的文档目录下的`.vitepress/config`文件中：
```js {8-10}
import { defineConfig } from 'vitepress'
import { pluginVite } from '@sgwm-sutras/plugin'

defineConfig({
  vite: {
    plugins: [
      pluginVite({
        demo: {
          defaultPreviewMode: 'browser' // 'terminal'
        }
      })
    ]
  }
})
```

:::tip 

更多关于Sutras全局配置项参见：[插件配置](../config/index)，这里仅举简单例子用于说明。

:::


- 通过Demo的独立配置，让本demo默认展示模式。

在你的demo入口文件中：
```vue
<docs lang="md">
---
defaultPreviewMode: 'browser' // 'terminal'
---
</docs>
```

:::tip 

demo支持通过`<docs>`的`frontmatter`设置自身配置，参见：[demo配置](../writing/docs)，demo自身的配置优先级高于插件的全局配置。

:::


## 通过配置开启SSR渲染：

Sutras的`SSR渲染模式`**默认是开启的**.

- 通过Sutras全局配置，默认让所有的demo开启SSR渲染。

在你的文档目录下的`.vitepress/config`文件中：
```js {8-10}
import { defineConfig } from 'vitepress'
import { pluginVite } from '@sgwm-sutras/plugin'

defineConfig({
  vite: {
    plugins: [
      pluginVite({
        demo: {
          enableSSR: true,
        }
      })
    ]
  }
})
```

- 通过Demo的独立配置，让本demo以SSR的方式渲染。

在你的demo入口文件中：
```vue
<docs lang="md">
---
enableSSR: true
---
</docs>
```

## 进入REPL模式

如果通过配置项开启了`REPL模式`，并且你的学习者在浏览demo时，**通过工具栏按钮进入demo编辑模式**，demo将自动转移至沙箱中渲染。

Sutras的`REPL模式`**默认是开启的**.


- 通过Sutras全局配置，默认让所有的demo开启REPL。

在你的文档目录下的`.vitepress/config`文件中：
```js {8-10}
import { defineConfig } from 'vitepress'
import { pluginVite } from '@sgwm-sutras/plugin'

defineConfig({
  vite: {
    plugins: [
      pluginVite({
        demo: {
          enableREPL: true, // 默认为：true
        }
      })
    ]
  }
})
```

- 通过Demo的独立配置，让本demo开启：REPL。

在你的demo入口文件中：
```vue
<docs lang="md">
---
enableREPL: true  // 默认为：true
---
</docs>
```


