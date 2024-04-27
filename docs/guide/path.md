
# 路径解析

demo的书写很简单，只涉及到一个路径path的问题，这个路径经过 Sutras 解析，最终将指向demo文件的实际地址。
考虑到使用场景，Sutras提供了一些配置项，能够让你在书写文档的时候体验更好，且便于维护。
Sutras考虑的使用场景如下：

### 常见的项目结构
```
.
├─ docs
│  ├─ components
│  │  ├─ button.md /** button的介绍文档 */
│  │  ├─ input.md /** input的介绍文档 */
│  │  └─ ...
│  └─ ...  
├─ packages
│  ├─ button
│  │  ├─ src
│  │  │  ├─ __demo__
│  │  │  │  ├─ basic.vue /** 最基础的case */
│  │  │  │  ├─ size.vue  /** 支持多种大小的case */
│  │  │  │  └─ ...
│  │  │  └─ index.ts
│  │  └─ package.json
│  ├─ input
│  └─ ...
└─ workspace.yaml
```
甚至是更为复杂的[monorepo](https://semaphoreci.com/blog/what-is-monorepo)
```
.
├─ docs
│  ├─ components
│  │  ├─ button.md /** button的介绍文档 */
│  │  ├─ input.md /** input的介绍文档 */
│  │  └─ ...
│  └─ ...  
├─ packages
│  ├─ components
│  │  ├─ src
│  │  │  ├─ button
│  │  │  │  ├─ __demo__
│  │  │  │  │  ├─ basic.vue /** 最基础的case */
│  │  │  │  │  ├─ size.vue  /** 支持多种大小的case */
│  │  │  │  │  └─ ...
│  │  │  │  └─ index.ts
│  │  │  ├─ ...
│  │  │  └─ index.ts
│  │  └─ package.json
│  ├─ composables
│  │  ├─ src
│  │  │  ├─ use-style
│  │  │  │  ├─ __demo__
│  │  │  │  │  └─ ...
│  │  │  │  └─ index.ts
│  │  │  ├─ ...
│  │  │  └─ index.ts
│  │  └─ package.json
│  ├─ utils
│  └─ ...
└─ workspace.yaml
```

亦或是你的团队有其他的目录规范，但从概念上，Sutras做了总结：

## 概念介绍

- **Component**

  在Sutras中，**Component**这一概念被广泛地应用，它不仅限于前端组件。这一概念涉及**模块化**、**复杂程序的分解**以及**设计重用**等多个层面，是相对于**整体**的一个分割单元。

  - **JavaScript函数**：比如`lodash`库中的`chunk`、`each`等函数，每一个都可以视为一个组件。
  - **Hook函数**：如`@vueuse/core`中的`useFetch`、`useTimeout`等，也属于Sutras所定义的组件范畴。

  它是demo的**展示对象**

- **Feature**

  每个Component都至少包含一个**Feature**。

  如一个`Button`组件，支持设置：**类型**、**大小**等等；

  如lodash函数`find`，有多种用法：

  ```js
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
  
  _.find(users, function(o) { return o.age < 40; });
  // => object for 'barney'
  
  // The `_.matches` iteratee shorthand.
  _.find(users, { 'age': 1, 'active': true });
  // => object for 'pebbles'
  
  // The `_.matchesProperty` iteratee shorthand.
  _.find(users, ['active', false]);
  // => object for 'fred'
  
  // The `_.property` iteratee shorthand.
  _.find(users, 'active');
  // => object for 'barney'
  ```

  Sutras认为每一个Feature都可以作为一个独立的demo进行展示，当然你也可以放在一个demo中。

- **Scene**
  
  有时一个复杂庞大的Feature，可能要进一步细化来解释、介绍。Sutras把被细化的每种情况称作**Scene**

- **Package**

  在常规的**单项目仓库**(**SingleRepo**)中，你可能并不需要关注这个概念。在复杂的**多项目仓库**(**Monorepo**)，将庞大的Component划分组织成多个Package是常见的：

  如前端组件库可以拆分为：`utils`，`components`，`style`，`hooks`...等等package。

  如**lodashjs**，可以根据数据结果划分package：`Array`、`Collection`、`Function`...

  **@vueuse**，也有它自身设定的category分类：`State`、`Elements`...

  这些package可能都需要demo展示，以便书写技术文档共享给社区或团队成员。



由此Sutras遇到了：**Package-Component-Feature-Scene**，这样的四级结构。Sutras也是根据围绕着四个概念设计了**路径解析逻辑**

## 路径解析逻辑

### Package解析

首先，Sutras在构建时，会基于[工作目录](./config/index#root)扫描你的仓库，搜集所有的package信息。

如果你的仓库是单项目仓库，那么Sutras会将你的仓库视为一个package。

如果你的仓库是多项目仓库，那么Sutras会依据你所使用的**工作空间workspace**设置，来获取所有的package信息。Sutras支持的workspace技术有： `Yarn`,` Bolt`,` Lerna`, `pnpm`, `Rush`

### 指定Package与Component

Sutras需要你来指定demo所属的Package、Component，指定方式有三种：

- **通过文档的文件名与目录名**

  通常你的文档可以按照`/docs/package/component.md`进行整理，如：`/docs/components/button.md`。

  当你在文档`button.md`中书写：`<demo path="basic"/>`时，Sutras会认为你要将：
  
  Package名为："**components**"、组件名为："**button**"的**basic文件**作为你的demo文件。

  :::tip

  你可以省略demo文件后缀名。

  Sutras也支持通过插件配置来为你的每个package定义各自的**别名Alias**，详见[定义Package别名](./config/index#package-alias)

  :::

- **通过文档的frontmatter**

  有的时候你的文档结构并非完全按照仓库结构进行组织，为此，Sutras支持你在文档的frontmatter中显示指定要展示的package与component，如在button.md中：

  ```md
  ---
  package: components
  component: button
  ---
  <demo path="basic"/>
  ```

  Sutras同样也会认为你要将：Package名为："**components**"、组件名为："**button**"的**basic文件**作为你的demo文件。


- **通过`demo`的属性**

  更特别地，你可能想要写一篇Summary文档页面，简单总结几个component下各自的demo。Sutras支持你通过`demo`的属性来指定，如在summary.md中：

  ```md
  <demo package="components" component="button" path="basic"/>
  <demo package="style" component="useStyle" path="basic"/>
  ```

  
你也可以讲上述三种方式组合起来，如：`/docs/xxx/summary-components.md`中
```md
---
package: components
---
<demo component="button" path="basic"/>
<demo component="input" path="basic"/>
```

或在`/docs/components/xxx.md`中，使用文档目录名：

```md
<demo component="button" path="basic"/>
<demo component="input" path="basic"/>
```

或在`/docs/components/xxx.md`中，使用文档目录名，结合**frontmatter**：

```md
---
component: button
---
<demo path="basic"/>
```

总之：Sutras会**先检查`demo`的属性**，然后查看**frontmatter**，最后依据**文档的文件名与目录名**


### 扫描demo

通过你的指定信息，Sutras基本已经知道你要展示的demo是什么了。接下来，Sutras会借助`glob`，扫描你的仓库获取demo文件内容：

**glob规则**：

在单项目仓库中，Sutras生成的glob规则为：

```text
{root}/**/{component}/**/demos/**/{demo}.{vue|ts|js}
{root}/**/{component}/**/demos/**/{demo}./index.{vue|ts|js}
{root}/**/demos/**/{component}/**/{demo}..{vue|ts|js}
{root}/**/demos/**/{component}/**/{demo}./index.{vue|ts|js}
```

在多项目仓库中，Sutras生成的glob规则为：

```text
{path-to-package}/**/{component}/**/demos/**/{demo}.{vue|ts|js}
{path-to-package}/**/{component}/**/demos/**/{demo}/index.{vue|ts|js}
{path-to-package}/**/demos/**/{component}/**/{demo}.{vue|ts|js}
{path-to-package}/**/demos/**/{component}/**/{demo}/index.{vue|ts|js}
```

:::tip 定义demos目录
你可以通过插件设置，来自定义demos目录，如：`__demos__`，详见[定义demos目录](./config/index#demos)
:::


## 使用本地demo

Sutras也支持你在Vitepress目录下使用demo，如，你在`/docs/xxxx/`目录下书写了一个`demo.vue`或`demo.js`，在`/docs/`目录下的**任意文档**中可以**通过相对路径**引用这个demo，如在`/docs/index.md`文档中：

```md
<demo path="./xxxx/demo.vue"/>
```

## 继续分解

在概念介绍中，Sutras定义了一个Scene概念，如果你实际工作中确实遇到庞大的Feature需要继续分解的需求，Sutras也做了支持。

如上面介绍过的例子中，你的button组件的`size`特性还需要分场景进行展示：button按钮的大小，可以通过 Button 的 size属性来设置；也可以通过全局的ConfigProvder.componentSize来进行默认设置；

那么可以将`size`作为一个文件夹，把各种场景放置在里面：

```js{7-8}
.
├─ src
│  ├─ demos
│  │  ├─ button
│  │  │  ├─ basic.vue
│  │  │  ├─ size /** 支持多种大小的case */
│  │  │  │  ├─ by-props.vue /** 通过属性进行设置 */
│  │  │  │  └─ by-provider /** 通过全局config进行设置 */
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
<demo path="size/by-props"/>
<demo path="size/by-provider"/>
```

如果多个场景需要并列展示，中间不插入其他markdown文本，那么Sutras提供了有更简单的等价写法：

```markdown
<demo path="size" scene/>
```







