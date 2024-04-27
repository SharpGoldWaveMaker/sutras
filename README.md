<p align="center">
  <a href="https://sharpgoldwavemaker.github.io/sutras.docs" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://sharpgoldwavemaker.github.io/sutras.docs/logo.svg" alt="Sutras logo">
  </a>
</p>
<br/>

# Sutras

## 什么是 Sutras？

Sutras 是专为**快速构建以 demo 为中心的技术文档**而设计的工具。通过简单的配置，Sutras 能自动扫描 Demo，并将运行结果和源代码一致地集成到由 Vitepress 构建的技术文档中。

查看[官方文档](https://sharpgoldwavemaker.github.io/sutras.docs/)了解更多信息。

### 主要特点

- **实时源码编辑、编译、执行和反馈**：实现了 REPL，支持快速测试代码片段、深入了解特性或进行概念验证。
- **沙箱环境**：支持将 demo 运行在独立、隔离的环境中。
- **灵活的展示模式**：支持终端和界面两种模式，适用于演示前端库或 JavaScript 工具库。
- **自定义设备尺寸和展示样式**：确保库在预期的设备尺寸上能良好展示。
- **服务端渲染（SSR）**：支持使用 SSR 模式来渲染 Demo。
- **支持单仓库和多仓库架构**：兼容 Yarn、Bolt、Lerna、pnpm、Rush 等技术。
- **Demo 模块化**：支持将复杂的 Demo 拆分为多个文件实现模块化，或多个 Demo 之间共享模块文件。

## 快速开始

想尝试 Sutras？查看我们的[快速开始指南](https://sharpgoldwavemaker.github.io/sutras.docs/getting-started)。

## 常见使用场景

- 构建组件库文档，例如 ElementPlus 和 Ant Design。
- VueCompositionApi 文档，例如 Vueuse。
- JavaScript 工具库文档，例如 Lodash。

## Sutras 的努力方向

### 面向库开发者的文档驱动开发模式

Sutras 提倡在编码前通过撰写文档的方式来明确库的目标和需求，然后为每个特性设计 Demo 并从 Demo 开始研发和测试你的库。

### 面向库学习者的高效学习体验

Sutras 不断优化 Demo 的展示和交互，借鉴如 Storybook 等框架的功能，为学习者提供高效的学习体验。

## 性能

得益于现代浏览器的支持，Sutras 在沙箱模式下提供了以下优势：

- **懒加载**：每个 Demo 的编译、执行仅在即将进入视口时开始。
- **局部编译**：只编译 Demo 源码部分，依赖文件在构建时完成。
- **模块热替换**：实现了 Demo 的模块化，并在模块内容发生变化时，只对相应的模块进行重新编译。
- **LRU缓存**：通过对 demo 源码进行解析，实现了分块式 LRU 缓存。
