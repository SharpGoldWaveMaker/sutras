# Sutras 是什么？ {#what-is-sutras}

Sutras专为**快速构建以demo为中心的技术文档**而设计。
简而言之，Sutras通过简单的配置，自动扫描Demo，将运行结果和源代码**一致地**集成到由 [Vitepress](https://vitepress.dev/) 构建的技术文档中。

**更多地：**


- **实时源码编辑、编译、执行和反馈**：Sutras 实现了REPL（[实时交互式编程](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)），支持快速测试代码片段、深入了解特性或进行概念验证（[PoC](https://en.wikipedia.org/wiki/Proof_of_concept#Software_development)）。

- **沙箱环境**：Sutras 支持你将demo运行在独立、隔离的 [沙箱环境](./preview/view#browser) 中。

- **灵活的展示模式**：Sutras 支持 [终端](./preview/terminal) 和 [界面](./preview/view) 两种模式，适用于演示前端库或JavaScript工具库。

- **支持自定义 [设备尺寸](./preview/device) 和 [展示样式](./preview/style)**：确保你的库在预期的设备尺寸上能够良好展示。

- **服务端渲染（SSR）**：Sutras 支持使用 [SSR模式](./preview/ssr) 来渲染Demo。

- **SingleRepo & Monorepo**：支持单项目及基于 [Yarn](https://yarnpkg.com/)、[Bolt](https://github.com/boltdb/bolt)、[Lerna](https://lerna.js.org/)、[pnpm](https://pnpm.io/)、[Rush](https://rushjs.io/) 等技术的多项目仓库架构。

- **Demo模块化**：Sutras 支持你将复杂的Demo拆分为多个文件实现[模块化](./writing/include)，或多个Demo之间共享模块文件，并将这些文件作为Demo的一部分展示给库学习者。在REPL模式下，任一文件内容发生变化时，Sutras将只对变化的文件进行独立编译及[热替换](./writing/include#hot-replacement)

<div class="tip custom-block" style="padding-top: 8px">

只是想尝试一下？跳到[快速开始](./getting-started)。

想快速了解Sutras是否适合你？跳到[常见场景案例](./examples)。

</div>

## Sutras的努力方向

### 面向库开发者的文档驱动开发模式

Sutras 提倡在编码前，通过撰写文档的方式来明确库的目标、解决的问题、需求、特性及其预期的使用方式。
进而为每个特性设计Demo，并从Demo开始研发和测试你的库。
依托于`Vite`和`VitePress`，Sutras 能够让你在研发过程中**实时便捷地预览Demo的运行结果**。

### 面向库学习者的高效学习体验

Sutras 从库学习者的角度出发，将对Demo的展示和交互进行持续的优化和改进。此外，Sutras 也在逐步借鉴[Storybook](https://storybook.js.org/)等优秀框架的功能，旨在为学习者提供更高效的学习体验。



## 使用场景 {#use-cases}

- **构建组件库文档**
  
  如，[ElementPlus](https://element-plus.org/en-US/)、[Ant Design](https://ant.design/docs/react/introduce)

- **VueCompositionApi文档**
  
  如，[Vueuse](https://vueuse.org/)

- **JavaScript工具库文档**
  
  如，[Lodash](https://lodash.com/)

Sutras根据了常见场景总结了[使用案例](./examples)，你也通过案例更直观地了解Sutras能为你做什么。

## 书写体验 {#developer-experience}

Saturas 致力于提供良好的库研发体验。

- **测试驱动**：Sutras基于[Vite](https://cn.vitejs.dev/) & [Vitepress](https://vitepress.dev/)，实现即时的服务器启动，始终立即反映 (<100ms) 的编辑变化，无需重新加载页面，提供良好的测试驱动的研发体验。

- **灵活排版**：Sutras对文档排版无强制约束，你可以在Vitepress文档中的任何位置**渐进式地插入**你的Demo。后续Sutras也将开放`@sgwm-sutras/hooks`，以支持库开发者自定义Demo展示、编辑样式。

- **一致性维护**：技术文档编撰者在维护过程中，无需关心：**文档中展示的Demo的代码块** 与 **Demo源码** 的一致性问题。

- **简单配置**：Sutras的配置很简单，详见 [Demo配置](./writing/docs) 与 [插件配置](./config/index)。

## 性能 {#performance}

得益于现代浏览器的ESM及ImportMap，Sutras在**沙箱模式下**只需要消耗很少的浏览器资源：

- **懒加载**

  Sutra的沙箱是懒加载的，每个Demo的编译、执行仅在即将进入视口时开始。

- **局部编译**

  Sutras只会编译Demo源码部分，对于Demo所依赖文件的编译则是在构建时完成。

- **模块热替换**

  Sutra实现了[Demo的模块化](./writing/include)，并在模块内容发生变化时，只对相应的模块进行重新编译。

- **LRU缓存**

  Sutras通过对demo源码进行解析，实现了分块式LRU缓存。这对demo源码中包含较多的template, script内容时，无论组件研发时，还是线上REPL运行时，都提供了一些的性能节省。

Sutras也针对性能方面做了[多个复杂demo的加载案例](./examples)


