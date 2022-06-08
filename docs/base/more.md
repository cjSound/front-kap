<!--
 * @Author: 曹捷
 * @Date: 2022-06-08 18:05:42
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-08 18:15:51
 * @Description: fileContent
-->
# 进阶篇
## bind、call、apply 区别
- call 和 apply 都是为了解决改变 this 的指向。作⽤都是相同的，只是**传参的⽅式不同**。
- 除了第⼀个参数外， call 可以接收⼀个**参数列表**， apply 只接受⼀个**参数数组**
- 至于bind方法，他是直接改变这个函数的this指向并且返回一个新的函数，之后**再次调用**这个函数的时候this都是指向bind绑定的第一个参数。**bind方式跟call方法一致**。
```js
let a = {
 value: 1
}
function getValue(name, age) {
 console.log(name)
 console.log(age)
 console.log(this.value)
}
getValue.call(a, 'yck', '24')
getValue.apply(a, ['yck', '24'])
```
:::tip
bind 和其他两个⽅法作⽤也是⼀致的，只是该⽅法会返回⼀个函数。并且我
们可以通过 bind 实现柯⾥化
:::

## 实现一个bind 函数
对于实现以下⼏个函数，可以从⼏个⽅⾯思考
- 不传⼊第⼀个参数，那么默认为 window
- 改变了 **this** 指向，让新的对象可以执⾏该函数。那么思路是否可以变成给新的对象添加⼀个函数，然后在执⾏完以后删除？

```js
Function.prototype.myBind = function (context) {
 if (typeof this !== 'function') {
 throw new TypeError('Error')
 }
 var _this = this
 var args = [...arguments].slice(1)
 // 返回⼀个函数
 return function F() {
 // 因为返回了⼀个函数，我们可以 new F()，所以需要判断
 if (this instanceof F) {
 return new _this(...args, ...arguments)
 }
 return _this.apply(context, args.concat(...arguments))
 }
}

```
## 如何实现⼀个 call 函数

```js
Function.prototype.myCall = function (context) {
 var context = context || window
 // 给 context 添加⼀个属性
 // getValue.call(a, 'yck', '24') => a.fn = getValue
 context.fn = this
 // 将 context 后⾯的参数取出来
 var args = [...arguments].slice(1)
 // getValue.call(a, 'yck', '24') => a.fn('yck', '24')
 var result = context.fn(...args)
 // 删除 fn
 delete context.fn
 return result
}
```
## 如何实现⼀个 apply 函数


```js
Function.prototype.myApply = function (context) {
 var context = context || window
 context.fn = this
 var result
 // 需要判断是否存储第⼆个参数
 // 如果存在，就将第⼆个参数展开
 if (arguments[1]) {
    result = context.fn(...arguments[1])
 } else {
    result = context.fn()
 }
 delete context.fn
 return result
}

```

## 谈⼀谈箭头函数与普通函数的区别？

- 函数体内的 this 对象，就是定义时所在的对象，⽽不是使⽤时所在的对象
- 不可以当作构造函数，也就是说，不可以使⽤ new 命令，否则会抛出⼀个错误
- 不可以使⽤ arguments 对象，该对象在函数体内不存在。如果要⽤，可以⽤ Rest 参数代替
- 不可以使⽤ yield 命令，因此箭头函数不能⽤作 Generator 函数

```js
function a() {
 return () => {
 return () => {
 console.log(this)
 }
 }
}
console.log(a()()())

```
:::tip
箭头函数其实是没有 this 的，这个函数中的 this 只取决于他外⾯的第⼀
个不是箭头函数的函数的 **this** 。在这个例⼦中，因为调⽤ a 符合前⾯代
码中的第⼀个情况，所以 this 是 window 。并且 this ⼀旦绑定了上下
⽂，就不会被任何代码改变
:::

## 谈谈This对象的理解

- **this** 总是指向函数的直接调⽤者（⽽⾮间接调⽤者）
- 如果有 **new** 关键字， **this** 指向 **new** 出来的那个对象
- 在事件中， **this** 指向触发这个事件的对象，特殊的是， IE 中的 attachEvent 中的 this 总是指向全局对象 Window
```js
function foo() {
console.log(this.a)
}
var a = 1
foo()
var obj = {
a: 2,
foo: foo
}
obj.foo()
// 以上两者情况 `this` 只依赖于调⽤函数前的对象，优先级是第⼆个情况⼤于第⼀个情况
// 以下情况是优先级最⾼的，`this` 只会绑定在 `c` 上，不会被任何⽅式修改 `this` 指向
var c = new foo()
c.a = 3
console.log(c.a)
//还有种就是利⽤ call，apply，bind 改变 this，这个优先级仅次于 new
```


## async、await 优缺点

:::tip
async 和 await 相⽐直接使⽤ **Promise** 来说，优势在于**处理 then 的调⽤链**，能够更清晰准确的写出代码。

缺点在于滥⽤ await 可能会导致性能问题，因为 **await 会阻塞代码**，也许之后的异步代码并不依赖于前者，但仍然需要等待前者完成，导致代码**失去了并发性**
:::
下⾯来看⼀个使⽤ await 的代码。
```js
var a = 0
var b = async () => {
 a = a + await 10
 console.log('2', a) // -> '2' 10
 a = (await 10) + a
 console.log('3', a) // -> '3' 20
}
b()
a++
console.log('1', a) // -> '1' 1
```
- ⾸先函数 b 先执⾏，在执⾏到 **await 10** 之前变量 a 还是 0 ，因为在 **await** 内部实现了 **generators** ， generators 会保留堆栈中东⻄，所以这时候 a = 0 被保存了下来
- 因为 await 是异步操作，遇到 **await** 就会⽴即返回⼀个 **pending** 状态的 **Promise** 对象，暂时返回执⾏代码的控制权，使得函数外的代码得以继续执⾏，所以会先执⾏ **console.log('1', a)**
- 这时候同步代码执⾏完毕，开始执⾏异步代码，将保存下来的值拿出来使⽤，这时候 **a =10**
- 然后后⾯就是常规执⾏代码了

## generator 原理

:::tip generator
**Generator** 是 ES6 中新增的语法，和 **Promise** ⼀样，都可以⽤来异步编程
:::

```js
// 使⽤ * 表示这是⼀个 Generator 函数
// 内部可以通过 yield 暂停代码
// 通过调⽤ next 恢复执⾏
function* test() {
 let a = 1 + 2;
 yield 2;
 yield 3;
}
let b = test();
console.log(b.next()); // > { value: 2, done: false }
console.log(b.next()); // > { value: 3, done: false }
console.log(b.next()); // > { value: undefined, done: true }

```