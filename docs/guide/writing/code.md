# 代码块

代码块部分支持设置默认折叠状态与高亮样式

## 代码块折叠

界面模式下，代码块默认是折叠的；
终端模式下，为了让你的库学习者更直观了解demo，代码块默认是展开的。

你也可以手动配置代码块的默认折叠状态

```
---
defaultCodeCollapse: false // 默认展开
---
```

<demo path="./code-collapse"/>

## 代码块高亮

Sutras在代码块中保留了Vitepress的代码块高亮功能

```
---
badge: warning-beta
highlight: '{11}'
---
```

<demo path="./highlight"/>