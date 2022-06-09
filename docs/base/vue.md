# Vue2

## 对于MVVM的理解
- Model 代表数据模型，也可以在 Model 中定义数据修改和操作的业务逻辑。
- View 代表 UI 组件，它负责将数据模型转化成 UI 展现出来。
- ViewModel 监听模型数据的改变和控制视图⾏为、处理⽤户交互，简单理解就是⼀个同步View 和 Model 的对象，连接 Model 和 View
:::tip
- 在 MVVM 架构下， View 和 Model 之间并没有直接的联系，⽽是通过ViewModel 进⾏交互， Model 和 ViewModel 之间的交互是双向的， 因此 View 数据的变化会同步到Model中，⽽Model 数据的变化也会⽴即反应到 View 上。
- ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，⽽
View 和 Model 之间的同步⼯作完全是⾃动的，⽆需⼈为⼲涉，因此开
发者只需关注业务逻辑，不需要⼿动操作DOM，不需要关注数据状态的同
步问题，复杂的数据状态维护完全由 MVVM 来统⼀管理
:::

## 请详细说下你对vue⽣命周期的理解
- 答：总共分为8个阶段创建前/后，载⼊前/后，更新前/后，销毁前/后

- 创建前/后： 在 beforeCreate 阶段， vue 实例的挂载元素 el 和数据对象 data 都为undefined ，还未初始化。在 created 阶段， vue 实例的数据对象 data 有了，el还没有
- 载⼊前/后：在 beforeMount 阶段， vue 实例的 $el 和 data 都初始化了，但还是挂载之前为虚拟的 dom 节点， data.message 还未替换。在 mounted 阶段， vue 实例挂载完成， data.message 成功渲染。
- 更新前/后：当 data 变化时，会触发 beforeUpdate 和 updated ⽅法
- 销毁前/后：在执⾏ destroy ⽅法后，对 data 的改变不会再触发周期函数，说明此时vue 实例已经解除了事件监听以及和 dom 的绑定，但是 dom 结构依然存在
### 什么是vue⽣命周期？
Vue 实例从创建到销毁的过程，就是⽣命周期。从开始创建、初始化数据、编译模
板、挂载Dom→渲染、更新→渲染、销毁等⼀系列过程，称之为 Vue 的⽣命周期。

### vue⽣命周期的作⽤是什么？
它的⽣命周期中有多个事件钩⼦，让我们在控制整个Vue实例的过程时更容易形成好的
逻辑
### vue⽣命周期总共有⼏个阶段？
它可以总共分为 8 个阶段：创建前/后、载⼊前/后、更新前/后、销毁前/销毁后。

### 第⼀次⻚⾯加载会触发哪⼏个钩⼦
会触发下⾯这⼏个 beforeCreate 、 created 、 beforeMount 、 mounted 。

### DOM 渲染在哪个周期中就已经完成
DOM 渲染在 mounted 中就已经完成了

## Vue实现数据双向绑定的原理：Object.defineProperty()

- vue 实现数据双向绑定主要是：采⽤数据劫持结合发布者-订阅者模式的⽅式，通过Object.defineProperty() 来劫持各个属性的 setter ， getter ，在数据变动时发布消息给订阅者，触发相应监听回调。当把⼀个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，⽤ Object.defineProperty() 将它们转为 getter/setter 。⽤户看不到 getter/setter ，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。
- vue的数据双向绑定 将 MVVM 作为数据绑定的⼊⼝，整合 Observer ， Compile 和Watcher 三者，通过 Observer 来监听⾃⼰的 model 的数据变化，通过 Compile 来解析编译模板指令（ vue 中是⽤来解析 {{}} ），最终利⽤ watcher 搭起 observer 和Compile 之间的通信桥梁，达到数据变化 —>视图更新；视图交互变化（ input ）—>数据 model 变更双向绑定效果。


## Vue组件间的参数传递

⽗组件与⼦组件传值

:::tip
- ⽗组件传给⼦组件：⼦组件通过 props ⽅法接受数据
:::

- ⼦组件传给⽗组件： $emit ⽅法传递参数

⾮⽗⼦组件间的数据传递，兄弟组件传值
:::tip
eventBus ，就是创建⼀个事件中⼼，相当于中转站，可以⽤它来传递事件和
接收事件。项⽬⽐较⼩时，⽤这个⽐较合适（虽然也有不少⼈推荐直接⽤
VUEX ，具体来说看需求）
:::

## Vue的路由实现：hash模式 和 history模式

- hash 模式：在浏览器中符号 “#” ，#以及#后⾯的字符称之为 hash ，⽤ **window.location.hash** 读取。
    - 特点： hash 虽然在 URL 中，但不被包括在 HTTP 请求中；⽤来指导浏览器动作，对服务端安全⽆⽤， 
    - hash 不会重加载⻚⾯。
- history 模式：history 采⽤ HTML5 的新特性；且提供了两个新⽅法：**pushState() ， replaceState()** 可以对浏览器历史记录栈进⾏修改，以及 popState事件的监听到状态变更


## 路由原理
>前端路由实现起来其实很简单，本质就是监听 URL 的变化，然后匹配路由规则，显示相应的⻚⾯，并且⽆须刷新。⽬前单⻚⾯使⽤的路由就只有两种实现⽅式

:::tip hash
www.test.com/##/ 就是 Hash URL ，当 ## 后⾯的哈希值发⽣变化时，
不会向服务器请求数据，可以通过 **hashchange** 事件来监听到 URL 的变
化，从⽽进⾏跳转⻚⾯。
:::

:::tip History
History 模式是 HTML5 新推出的功能，⽐之 Hash URL 更加美观
:::

## vue路由的钩⼦函数
:::tip
⾸⻚可以控制导航跳转， beforeEach ， afterEach 等，⼀般⽤于⻚⾯
title 的修改。⼀些需要登录才能调整⻚⾯的重定向功能。
:::

- beforeEach 主要有3个参数 to ， from ， next 。
- to ： route 即将进⼊的⽬标路由对象。
- from ： route 当前导航正要离开的路由。
- next ： function ⼀定要调⽤该⽅法 resolve 这个钩⼦。执⾏效果依赖n ext ⽅法的调⽤参数。可以控制⽹⻚的跳转

## vuex是什么？怎么使⽤？哪种功能场景使⽤它？
- 只⽤来读取的状态集中放在 store 中； 改变状态的⽅式是提交 mutations ，这是个同步的事务； 异步逻辑应该封装在 action 中。
- 在 main.js 引⼊ store ，注⼊。新建了⼀个⽬录 store ， … export
- 场景有：单⻚应⽤中，组件之间的状态、⾳乐播放、登录状态、加⼊购物⻋


- **state** ： Vuex 使⽤单⼀状态树,即每个应⽤将仅仅包含⼀个 store 实例，但单⼀状态树和模块化并不冲突。存放的数据状态，不可以直接修改⾥⾯的数据。
- **mutations** ：**同步**  mutations 定义的⽅法动态修改 Vuex 的 store 中的状态或数据
- **getters** ：类似 vue 的计算属性，主要⽤来过滤⼀些数据。
- **action** ： actions 可以理解为通过将 mutations ⾥⾯处⾥数据的⽅法变成可异步的处理数据的⽅法，简单的说就是**异步**操作数据。 view 层通过 store.dispath 来分发action

:::tip
**modules** ：项⽬特别复杂的时候，可以让每⼀个模块拥有⾃⼰的 state 、
mutation 、 action 、 getters ，使得结构⾮常清晰，⽅便管理
:::


## $route 和 $router 的区别

- $route 是 **“路由信息对象”**，包括 path ， params ， hash ， query ，fullPath ， matched ， name 等路由信息参数。
- ⽽ $router 是“路由实例”对象包括了路由的跳转⽅法，钩⼦函数等

## `<keep-alive></keep-alive>` 的作⽤是什么

`<keep-alive></keep-alive>` 包裹动态组件时，会缓存不活动的组件实例,主要⽤于保留
组件状态或避免重新渲染

:::tip

⽐如有⼀个列表和⼀个详情，那么⽤户就会经常执⾏打开详情=>返回列表=>
打开详情…这样的话列表和详情都是⼀个频率很⾼的⻚⾯，那么就可以对列表
组件使⽤` <keep-alive></keep-alive>` 进⾏缓存，这样⽤户每次返回列表的
时候，都能从缓存中快速渲染，⽽不是重新渲染
:::

##  ❤NextTick原理

nextTick 可以让我们在下次 DOM 更新循环结束之后执⾏延迟回调，⽤于获得更新后的 DOM

## Vue 组件 data 为什么必须是函数
- 每个组件都是 Vue 的实例。
- 组件共享 data 属性，当 data 的值是同⼀个引⽤类型的值时，改变其中⼀个会影响其他


##  ❤Vue computed 实现

- 建⽴与其他属性（如： data 、 Store ）的联系；
- 属性改变后，通知计算属性重新计算
- 初始化 data ， 使⽤ Object.defineProperty 把这些属性全部转为getter/setter 。
- 初始化 computed , 遍历 computed ⾥的每个属性，每个 computed 属性都是⼀个watch 实例。每个属性提供的函数作为属性的 getter ，使⽤Object.defineProperty 转化。
- Object.defineProperty getter 依赖收集。⽤于依赖发⽣变化时，触发属性重新计算。
- 若出现当前 computed 计算属性嵌套其他 computed 计算属性时，先进⾏其他的依赖收集

## ❤Vue complier 实现

- 模板解析这种事，本质是将数据转化为⼀段 html ，最开始出现在后端，经过各种处理吐给前端。随着各种 mv* 的兴起，模板解析交由前端处理。
- 总的来说， Vue complier 是将 **template** 转化成⼀个 **render** 字符串。
- 步骤
    - parse 过程，将 template 利⽤正则转化成 **AST** 抽象语法树。
    - optimize 过程，标记静态节点，后 **diff** 过程跳过静态节点，提升性能。
    - **generate** 过程，⽣成 render 字符串

## Virtual Dom
为什么需要 Virtual Dom

:::tip

众所周知，操作 DOM 是很耗费性能的⼀件事情，既然如此，我们可以考虑通
过 JS 对象来模拟 DOM 对象，毕竟操作 JS 对象⽐操作 DOM 省时的多
:::

```js
// 假设这⾥模拟⼀个 ul，其中包含了 5 个 li
[1, 2, 3, 4, 5]
// 这⾥替换上⾯的 li
[1, 2, 5, 4]
```
:::tip

从上述例⼦中，我们⼀眼就可以看出先前的 ul 中的第三个 li 被移除了，
四五替换了位置。

:::
- 如果以上操作对应到 **DOM** 中，那么就是以下代码
```js
// 删除第三个 li
ul.childNodes[2].remove()
// 将第四个 li 和第五个交换位置
let fromNode = ul.childNodes[4]
let toNode = node.childNodes[3]
let cloneFromNode = fromNode.cloneNode(true)
let cloenToNode = toNode.cloneNode(true)
ul.replaceChild(cloneFromNode, toNode)
ul.replaceChild(cloenToNode, fromNode)
```

:::tip
当然在实际操作中，我们还需要给每个节点⼀个标识，作为判断是同⼀个节点的依据。所以这也是 Vue 和 React 中官⽅推荐列表⾥的节点使⽤唯⼀的**key** 来保证性能。
:::

- 那么既然 DOM 对象可以通过 JS 对象来模拟，反之也可以通过 JS 对象来渲染出对应的 DOM
- 以下是⼀个 JS 对象**模拟 DOM** 对象的简单实现
```js
export default class Element {
 /**
 * @param {String} tag 'div'
 * @param {Object} props { class: 'item' }
 * @param {Array} children [ Element1, 'text']
 * @param {String} key option
 */
 constructor(tag, props, children, key) {
    this.tag = tag
    this.props = props
    if (Array.isArray(children)) {
        this.children = children
    } else if (isString(children)) {
        this.key = children
        this.children = null
    }
    if (key) this.key = key
 }
 // 渲染
 render() {
    let root = this._createElement(
        this.tag,
        this.props,
        this.children,
        this.key
    )
    document.body.appendChild(root)
    return root
 }
 create() {
    return this._createElement(this.tag, this.props, this.children, this.key)
 }
 // 创建节点
 _createElement(tag, props, child, key) {
    // 通过 tag 创建节点
    let el = document.createElement(tag)
    // 设置节点属性
    for (const key in props) {
        if (props.hasOwnProperty(key)) {
            const value = props[key]
            el.setAttribute(key, value)
        }
    }
    if (key) {
        el.setAttribute('key', key)
    }
    // 递归添加⼦节点
    if (child) {
        child.forEach(element => {
            let child
            if (element instanceof Element) {
                child = this._createElement(
                    element.tag,
                    element.props,
                    element.children,
                    element.key
                )
            } else {
                child = document.createTextNode(element)
            }
            el.appendChild(child)
        })
    }
    return el
 }
}
```

### Virtual Dom 算法简述

- 既然我们已经通过 JS 来模拟实现了 DOM ，那么接下来的难点就在于如何判断旧的对象和新的对象之间的差异。
- DOM 是多叉树的结构，如果需要完整的对⽐两颗树的差异，那么需要的时间复杂度会是**O(n ^ 3)** ，这个复杂度肯定是不能接受的。于是 React 团队优化了算法，实现了O(n) 的复杂度来对⽐差异。
- 实现 O(n) 复杂度的关键就是只对⽐同层的节点，⽽不是跨层对⽐，这也是考虑到在实际业务中很少会去跨层的移动 DOM 元素
- 所以判断差异的算法就分为了两步
    - ⾸先从上⾄下，从左往右遍历对象，也就是树的深度遍历，这⼀步中会给每个节点添加索引，便于最后渲染差异
    - ⼀旦节点有⼦元素，就去判断⼦元素是否有不同
### Virtual Dom 算法实现
树的递归

- ⾸先我们来实现树的递归算法，在实现该算法前，先来考虑下两个节点对⽐会有⼏种情况
- 新的节点的 tagName 或者 key **和旧的不同**，这种情况代表需要替换旧的节点，并且也不再需要遍历新旧节点的⼦元素了，因为整个旧节点都被删掉了
- 新的节点的 tagName 和 key （可能都没有）和旧的相同，开始遍历⼦树
- 没有新的节点，那么什么都不⽤做

