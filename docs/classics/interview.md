<!--
 * @Author: 曹捷
 * @Date: 2022-06-15 17:05:50
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-16 12:00:49
 * @Description: fileContent
-->
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

## 5、watch 和computed 区别
### 相同点
- 两者都可以观察页面数据的变化

### 不同点
#### computed
一个数据受多个数据影响）在computed中定义的每一个计算属性，都会被缓存起来，只有当计算属性里面依赖的一个或多个属性变化了，才会重新计算当前计算属性的值。
- 1、支持数据的缓存。
- 2、函数内部的数据改变也会触发。
- 3、**不支持异步**，当computed内部有异步操作时computed无效
- 4、如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，一般用computed
- 5、computed 属性值会**默认走缓存**，计算属性是基于它们的**响应式依赖**进行缓存的，也就是基于data中声明过或者父组件传递的props中的数据通过计算得到的值。
    - （return里面不用声明定义变量就可以进行监听观察数据变化的。）
- 6、computed **必须有调用才会触发**，否则就算内部的数据有所改变也不会触发

#### watch

watch是属性**监听器**，一般用来监听属性的变化（**也可以用来监听计算属性函数**），并**做一些操作 可以异步**
- 1、不支持缓存
- 2、**支持异步**
- 3、只可以设置一个函数，可以带有两个参数
- 4、监听数据必须是data中声明过或者父组件传递过来的props中的数据，当数据变化时，触发其他操作。（return里面必须声明定义变量才能进行监听。）
- 5、只要数据改变就会触发，**computed 必须调用才会触发**

## vue计算属性computed与函数function的区别
- 计算属性有缓存功能，当你的值没有改变，计算属性只会计算一次，后面使用该属性值就直接调用

- methods 调用多少次就执行多少次，如果遇到数据很多，需要计算很久
    - 会产生非常多的内存占用

## 设置一个对象只读的方法

- Object.defineProperty  
    - writable 设置 false
    - set 方法。。
    