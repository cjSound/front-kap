# Q 问题

## 1、vue 子组件与子组件之间怎么通信

### 1、使用 EventBus

- 1.  初始化时全局定义

```js
import Vue from 'vue';
// main.js 中
// 第一种定义方式
Vue.prototype.$eventBus = new Vue();
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

### vuex 全局状态管理

## 2、$attrs 和 $listeners

### $attrs

- 包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (**class 和 style** 除外)。
- 当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 **v-bind="$attrs"** 传入内部组件——在创建高级别的组件时非常有用。

### $listeners

包含了父作用域中的 (不含 **.native** 修饰器的) **v-on** 事件监听器。它可以通过 **v-on="$listeners"** 传入内部组件——在创建更高层次的组件时非常有用。

## 3、Watch 的参数

> Watch 第二个参数可以为 Function，Object Array

当 watch 第二个参数为 Object 的时候，参数说明

- **handler** 执行的方法
- **deep** 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
- **immediate** 该回调将会在侦听开始之后被立即调用

当 watch 第二个参数为 Array 的时候，可以**触发多个方法**

:::warning
注意，不应该使用箭头函数来定义 watcher 函数 (例如 searchQuery: **newValue => this.updateAutocomplete(newValue)**)。

理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，**this.updateAutocomplete** 将是 undefined。
:::

## 4、设计模式

[设计模式](./../base/js.md#❤设计模式)

## 5、watch 和 computed 区别

### 相同点

- 两者都可以观察页面数据的变化

### 不同点

#### computed

一个数据受多个数据影响）在 computed 中定义的每一个计算属性，都会被缓存起来，只有当计算属性里面依赖的一个或多个属性变化了，才会重新计算当前计算属性的值。

- 1、支持数据的缓存。
- 2、函数内部的数据改变也会触发。
- 3、**不支持异步**，当 computed 内部有异步操作时 computed 无效
- 4、如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，一般用 computed
- 5、computed 属性值会**默认走缓存**，计算属性是基于它们的**响应式依赖**进行缓存的，也就是基于 data 中声明过或者父组件传递的 props 中的数据通过计算得到的值。
  - （return 里面不用声明定义变量就可以进行监听观察数据变化的。）
- 6、computed **必须有调用才会触发**，否则就算内部的数据有所改变也不会触发

#### watch

watch 是属性**监听器**，一般用来监听属性的变化（**也可以用来监听计算属性函数**），并**做一些操作 可以异步**

- 1、不支持缓存
- 2、**支持异步**
- 3、只可以设置一个函数，可以带有两个参数
- 4、监听数据必须是 data 中声明过或者父组件传递过来的 props 中的数据，当数据变化时，触发其他操作。（return 里面必须声明定义变量才能进行监听。）
- 5、只要数据改变就会触发，**computed 必须调用才会触发**

## 6、vue 计算属性 computed 与函数 function 的区别

- 计算属性有缓存功能，当你的值没有改变，计算属性只会计算一次，后面使用该属性值就直接调用

- methods 调用多少次就执行多少次，如果遇到数据很多，需要计算很久
  - 会产生非常多的内存占用

## 7、设置一个对象只读的方法

- Object.defineProperty
  - writable 设置 false
  - set 方法。。

## 8、window 的 onload 事件和 domcontentloaded 谁先谁后

- window.onload：

  - **onload 会被样式表、图像和子框架阻塞**
  - 当一个**资源及其依赖资源**已完成加载时，将触发 onload 事件。

- document.onDOMContentLoaded：

当初始的 **HTML 文档**被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>DOMCOntentLoaded事件</title>
	</head>

	<body>
		<script>
			function say() {
				alert('文档结构加载完毕');
			}
			//添加事件监听
			window.addEventListener('DOMCOntentLoaded', say);
		</script>
	</body>
</html>
```

- 区别：

  - ①onload 事件是 DOM 事件，onDOMContentLoaded 是 HTML5 事件。

  - ②onload 事件会被样式表、图像和子框架阻塞，而 onDOMContentLoaded 不会。

  - ③ 当加载的脚本内容并不包含立即执行 DOM 操作时，使用 onDOMContentLoaded 事件是个更好的选择，会**比 onload 事件执行时间更早**。

## 9、原型和原型链相关测试题

### 一.有一个类如下：

```js
function Person(name) {
	this.name = name;
}
let p = new Person('Tom');
```

1.  p.**proto**等于什么？
    - 答案：Person.prototype
2.  Person.**proto**等于什么？
    - 答案：Function.prototype

- **解析：**
  - 1，2 两问其实问的是同一个问题，都是考察原型链相关的知识，我们只需要记住一句话就可以迎刃而解。
  - 实例的**proto**属性（原型）等于其**构造函数的 prototype 属性**。实例 p 的构造函数为 Person，而 Person 的构造函数为 Function，结果就一目了然了。

### 原型题 2

```js
var foo = {},
	F = function () {};
Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log(foo.a); // vlaue a
console.log(foo.b); // undefind
console.log(F.a); // value a
console.log(F.b); // value b
```

### 构造函数返回

- return 的是非对象(数字、字符串、布尔类型等)会忽而略返回值

```js
function Person(name) {
	this.name = name;
	return name;
}
let p = new Person('Tom');

// 实例化Person过程中，Person返回什么（或者p等于什么）？

// 答案： {name: 'Tom'}
```

- 如果 return 的是对象，则返回该对象(注：若 return null 也会忽略返回值）

```js
function Person(name) {
	this.name = name;
	return { a: 1 };
}
let p = new Person('Tom');

// 实例化Person过程中，Person返回什么（或者p等于什么）？
// {a:1}
```

- 构造函数不需要显示的返回值。使用 new 来创建对象(调用构造函数)时，如果 return 的是非对象(数字、字符串、布尔类型等)会忽而略返回值;如果 return 的是对象，则返回该对象(注：若 return null 也会忽略返回值）。

## 10、 new 和 instanceof 的内部机制

- 1.创建一个新对象，同时继承对象类的原型，即 Person.prototype；
- 2.执行对象类的构造函数，同时该实例的属性和方法被 this 所引用，即 **this 指向新构造的实例**；
- 3.如果**构造函数 return 了一个新的“对象”**，那么这个对象就会取代整个 new 出来的结果。
  - 如果构造函数没有 return 对象，那么就会返回步骤 1 所创建的对象，即隐式返回 this。（一般情况下构造函数不会返回任何值，不过在一些特殊情况下，如果用户想覆盖这个值，可以选择返回一个普通的对象来覆盖。）

### 代码实现 new

```js
// let p = new Person()
let p = (function () {
	let obj = {};
	obj.__proto__ = Person.prototype;

	// 其他赋值语句...

	return obj;
})();
```

### instanceof 内部机制

:::tip
下面通过代码阐述 instanceof 的内部机制，假设现在有 x instanceof y 一条语句，则其内部实际做了如下判断：
:::

```js
while (x.__proto__ !== null) {
	if (x.__proto__ === y.prototype) {
		return true;
	}
	x.__proto__ = x.__proto__.proto__;
}
if (x.__proto__ == null) {
	return false;
}
```

x 会一直沿着隐式原型链**proto**向上查找直到**x.**proto**.**proto**......===y.prototype**为止，如果找到则返回 true，也就是 x 为 y 的一个实例。否则返回 false，x 不是 y 的实例。

## 11、for in 和 for of 的区别

[外链](https://www.jianshu.com/p/c43f418d6bf0)

```js
Array.prototype.method = function () {
	console.log(this.length);
};
var myArray = [1, 2, 4, 5, 6, 7];
myArray.name = '数组';
for (var index in myArray) {
	console.log(myArray[index]);
}
```

- 2 for in 遍历数组的毛病
