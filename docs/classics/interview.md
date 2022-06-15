# Q问题

## 1、vue子组件与子组件之间怎么通信
### 1、使用EventBus
- 1.  初始化时全局定义
```js
import Vue from 'vue'
// main.js 中
// 第一种定义方式
Vue.prototype.$eventBus = new Vue()
// 第二种定义方式
window.eventBus = new Vue();
```
- 2. 触发事件
```js
//使用方式一定义时
// params 多个参数
this.$eventBus.$emit('eventName', param1,param2,...)
//使用方式二定义时
eventBus.$emit('eventName', param1,param2,...)
```
- 3. 监听事件
```js
//使用方式一定义时
this.$eventBus.$on('eventName', (param1,param2,...)=>{
    //需要执行 逻辑代码
    // params 多个参数
})
//使用方式二定义时
eventBus.$on('eventName', (param1,param2,...)=>{
    //需要执行 逻辑代码
})
```
### 2、单例模式结合发布订阅模式
- 1、自定义一个单例，返回一个观察者
- 2、在需要通知的地方，增加对应的通知事件和参数
- 3、在需要触发的地方，增加订阅事件

###  vuex 全局状态管理

## 2、$attrs 和 $listeners

### $attrs
- 包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (**class 和 style** 除外)。
- 当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 **v-bind="$attrs"** 传入内部组件——在创建高级别的组件时非常有用。



### $listeners

包含了父作用域中的 (不含 **.native** 修饰器的) **v-on** 事件监听器。它可以通过 **v-on="$listeners"** 传入内部组件——在创建更高层次的组件时非常有用。


## 3、Watch的参数
> Watch 第二个参数可以为  Function，Object Array

当watch 第二个参数为Object的时候，参数说明
- **handler** 执行的方法
- **deep** 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
- **immediate** 该回调将会在侦听开始之后被立即调用

当watch 第二个参数为 Array的时候，可以**触发多个方法**

:::warning
注意，不应该使用箭头函数来定义 watcher 函数 (例如 searchQuery: **newValue => this.updateAutocomplete(newValue)**)。

理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，**this.updateAutocomplete** 将是 undefined。
:::

## 4、设计模式
[设计模式](./../base/js.md#❤设计模式)