# 插件设置

## 工作目录 {#root}

**工作目录**指的是，Sutras识别`package`,`component`以及`demo`的根目录。

Sutras将从工作目录中识别`packages`，进而匹配`demo`，这样有助于提升文档书写体验，以及可维护性，否则文档书写过程，需要配置大量的路径信息。

大多数情况下，docs文档会作为单独文件夹存在于project中，或作为单独的package存在于[monorepo](https://semaphoreci.com/blog/what-is-monorepo)项目中。
默认情况下：
- 如果是 `monorepo` 项目，那么Sutras会指定其 `workspace`根目录作为自己的工作目录。目前Sutras支持`Yarn`, `Bolt`, `Lerna`, `pnpm`, `Rush`，如果你采用的其他`monorepo`方案，请参考[手动配置packages](#package)

- 如果是`single-package`项目，那么Sutras会采用[Vitepress的工作目录](https://vitepress.dev/zh/reference/site-config#config-resolution)

其他情况，那么就需要手动指定root的工作目录，或[手动配置packages](#package)。如果同时配置了`root`,`packages`，Sutras会以`packages`配置优先的规则，将识别结果合并。

### 自定义工作目录 {define-root-custom}
Sutras的工作目录通过root选项来指定，支持绝对路径与相对路径，相对路径以[Vitepress的工作目录](https://vitepress.dev/zh/reference/site-config#config-resolution)为基准：
```js
import { defineConfig } from 'vite'
import { pluginVite as sutrasVite } from '@sgwm-sutras/plugin'

defineConfig({
    plugins: [
        sutrasVite({
            root: '' /** 自定义工作目录 */
        })
    ]
})
```

## Package配置 {#package}

添加workspace之外的package，或为package指定别名，指定后，Sutras将同时根据package名称与alias名称来扫描demo

关于路径解析，详见[路径解析](../path)

- 设置项: `packages`
- 类型:   `PackageOption`

  ```ts
  type PackageOption = {
   /**
    * @name 路径
    */
    path: string
   /**
    * @name 别名
    */
    alias: string | string[]
  }
  ```

  ```js
  defineConfig({
      plugins: [
          sutrasVite({
              packages: [
                  {
                      path: '/absolute/path/to/package1', 
                      alias: 'package1'
                  },
                  {
                      path: 'relative/path/from/root/to/package2',
                      /** alias 默认为：package2 */
                  },
                  {
                      path: 'any/type/path/to/package3',
                      /**
                        * alias 支持数组形式，但需要保证唯一
                        * 这样做的目的，只为了兼容特殊情况
                        * 一般不建议这样做，会为文档的运维工作增加负担
                        */
                      alias: ['package3', 'PA']
                  }
              ]
          })
      ]
  })
  ```

  如果最终结果出现名称冲突，Sutras将在开发服务启动时抛出错误。



## 定义demos目录 {#demos}

指定demos目录名，指定后，Sutras将根据你指定的demos目录名来扫描demo

- 设置项: `demoDirname`
- 类型:   `string`
- 默认值: `demos`

  详见[路径解析](../path)


## 定义demo全局配置 {#demo-config}

指定demo的全局配置

- 设置项: `demo`
- 类型:   `DemoConfig`

  详见[demo设置项](../writing/docs)


