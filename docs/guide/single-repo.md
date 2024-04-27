# SingleRepo 案例

通常情况下的`SingleRepo`开发场景，目录设计有以下几种情况


总体上都是围绕：`component`与`demo`两个概念展开，即一个component对应多个demo的形式，并与文档`docs`目录独立。

Sutras以文档文件`.md`为中心，对`demo`进行查找。为了满足大多数应用场景，Sutras提供了如下几种查找方式：

## 与library一致的文档结构
在`SingleRepo`仓库中`library`的目录是按照一定的逻辑组织的，比如上述例子
```
.
├─ src
│  ├─ button
│  │  └─ index.ts
│  ├─ input
│  │  └─ index.ts
│  ├─ ...
│  └─ index.ts
├─ ...
└─ package.json
```
其中，demo目录根据不同的团队习惯，一般会放在对应的component目录下：
```
.
├─ src
│  ├─ button
│  │  ├─ __demo__
│  │  │  ├─ basic.vue /** 最基础的case */
│  │  │  ├─ size.vue  /** 支持多种大小的case */
│  │  │  └─ ...
│  │  └─ index.ts
│  ├─ input
│  ├─ ...
│  └─ index.ts
├─ ...
└─ package.json
```
也有的独立于component，单独起一个demos目录：
```
.
├─ src
│  ├─ __demo__
│  │  ├─ button
│  │  │  ├─ basic.vue /** 最基础的case */
│  │  │  ├─ size.vue  /** 支持多种大小的case */
│  │  │  └─ ...
│  │  └─ ...
│  ├─ button
│  │  └─ index.ts
│  ├─ input
│  ├─ ...
│  └─ index.ts
├─ ...
└─ package.json
```
甚至放到src目录之外，以打包结果作为demo演示的基础：
```
.
├─ __demo__
│  ├─ button
│  │  ├─ basic.vue /** 最基础的case */
│  │  ├─ size.vue  /** 支持多种大小的case */
│  │  └─ ...
│  └─ ...  
├─ dist
├─ src
│  ├─ button
│  │  └─ index.ts
│  ├─ input
│  ├─ ...
│  └─ index.ts
├─ ...
└─ package.json
```

无论那种情况，Sutras建议你采用与library一致的文档组织结构：

```
.
├─ docs
│  ├─ components
│  │  ├─ button.md /** button的介绍文档 */
│  │  ├─ input.md /** input的介绍文档 */
│  │  └─ ...
│  └─ ...
```

在这种模式下，需要你开启配置，在你的vite.config.ts文件中：
```js
import { defineConfig } from 'vite'
import { pluginVite as sutrasVite } from '@sgwm-sutras/plugin'

defineConfig({
    plugins: [
        sutrasVite({
            useDocPath: true, // 默认为：true
            demoDirname: 'demos' // 根据你的团队习惯设置，默认为：__demos__
        })
    ]
})
```
在`button.md`文档中，只需要添加内容，Sutras就能推测demo的完整路径：
{root}/src/button/demos/size.vue
{root}/src/button/demos/size/index.vue
{root}/src/demos/button/size.vue
{root}/src/demos/button/size/index.vue
{root}/demos/src/button/size.vue
{root}/demos/src/button/size/index.vue
```markdown
<demo path="size" />
```
你的basic如果还需要分场景进行展示，那么可以将size作为一个文件夹，把各种场景放置在里面：
比如下面的例子，一个button按钮的大小，可以通过 Button 的 size属性来设置；也可以通过全局的ConfigProvder.componentSize来进行默认设置；

```js{7-8}
.
├─ src
│  ├─ __demo__
│  │  ├─ button
│  │  │  ├─ basic.vue
│  │  │  ├─ size /** 支持多种大小的case */
│  │  │  │  ├─ local.vue /** 通过属性进行设置 */
│  │  │  │  └─ global /** 通过全局config进行设置 */
│  │  │  │     └─ index.vue /** 这里作为一个例子展示 */
│  │  │  └─ ...
│  │  └─ ...
│  ├─ button
│  │  └─ index.ts
│  ├─ input
│  ├─ ...
│  └─ index.ts
├─ ...
└─ package.json
```
文档`button.md`需要添加一个属性
```markdown
<demo path="size/local"/>
<demo path="size/global"/>
```

如果你想要像上述情况一样，两个场景并列展示，中间不插入其他markdown文本，那么有更简答的等价写法
```markdown
<demo path="size" scene/>
```
