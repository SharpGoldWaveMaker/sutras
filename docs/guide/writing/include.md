# Demo模块化

在Demo书写时，你可能有以下需求：

- **Demo源码量较大**，不便于维护，也不便于库学习者阅读。

- **Demo之间可能共用配置数据、业务数据、或其他组件**，这些数据或组件你也期望作为Demo的一部分展示给库学习者，甚至支持他们编辑。

在上述情况下，Sutras 支持你将Demo拆分为多个文件。

## Demo模块化设置

假设你要书写Layout组件基础使用的Demo，其中，Layout.Sider中所包含的Menu数据，你期望独立成一个文件`menu-data.ts`:

```text
.
├─ src
│  ├─ demos
│  │  ├─ layout
│  │  │  ├─ basic.vue /** Layout Demo */
│  │  │  ├─ menu-data.ts /** MenuData */
│  │  │  └─ ...
│  │  └─ ...
```

那么你可以在Demo入口文件`basic.vue`中，通过Demo设置项`includes`来包含`menu-data.ts`文件：

```vue{3-4}
<docs lang="md">
---
includes: ["menu-data"] // 或 ["menu-data.ts"] 或 ["./menu-data"] 或 ["./menu-data.ts"]
---
</docs>
```

<demo path="./layout-demo/basic"/>

文档中也有[其他使用案例](../preview/view#ts-entry)

## 模块热替换（Hot Replacement）{#hot-replacement}

在REPL模式中，每个模块文件是独立编译的，如上述例子中，你的库学习者编辑了`menu-data.ts`文件后，Sutras将只会对`menu-data.ts`文件进行单独编译。
