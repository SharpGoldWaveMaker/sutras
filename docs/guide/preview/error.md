# 运行时错误

沙箱模式下，Sutra在展示区将对demo的运行时错误给予提示，这通常发生在用户编辑demo示例代码时。

**抛出错误的demo**

<demo path="./error"/>

你也可以将demo中的抛出错误相关代码移除，demo将重新执行，渲染正确的结果：

```js
throw Error('demo 运行时发生了错误！')
```

**未抛出错误的demo**

<demo path="./no-error-browser"/>
<demo path="./no-error-block"/>