# 进阶篇
## 闭包
- 闭包就是能够读取其他函数内部变量的*函数*
- 闭包是指有权访问另⼀个函数作⽤域中变量的函数，创建闭包的最常⻅的⽅式就是在⼀个
- 函数内创建另⼀个函数，通过另⼀个函数访问这个函数的局部变量,利⽤闭包可以突破作⽤
- 链域
- 闭包的特性：
    - 函数内再嵌套函数
    - 内部函数可以引⽤外层的参数和变量
    - 参数和变量不会被垃圾回收机制回收
```js
function A() {
   let a = 1
   function B() {
   console.log(a)
   }
 return B
}
```
经典⾯试题，循环中使⽤闭包解决 var 定义函数的问题
```js
for ( var i=1; i<=5; i++) {
   setTimeout( function timer() {
      console.log( i );
   }, i*1000 );
}
```
- ⾸先因为 setTimeout 是个异步函数，所有会先把循环全部执⾏完毕，这时候 i 就是 6 了，所以会输出⼀堆 6 。
- 解决办法两种，第⼀种使⽤闭包
```js
for (var i = 1; i <= 5; i++) {
   (function(j) {
   setTimeout(function timer() {
      console.log(j);
   }, j * 1000);
   })(i);
}
```
- 第⼆种就是使⽤ setTimeout 的第三个参数
```js
for ( var i=1; i<=5; i++) {
   setTimeout( function timer(j) {
      console.log( j );
   }, i*1000, i);
}
```
- 第三种就是使⽤ let 定义 i 了
```js
for ( let i=1; i<=5; i++) {
   setTimeout( function timer() {
      console.log( i );
   }, i*1000 );
}
```
>因为对于 let 来说，他会创建⼀个块级作⽤域，相当于

### 说说你对闭包的理解

- 使⽤闭包主要是为了设计私有的⽅法和变量。闭包的优点是可以避免全局变量的污染，缺
- 点是闭包会常驻内存，会增⼤内存使⽤量，使⽤不当很容易造成内存泄露。在js中，函数即
- 闭包，只有函数才会产⽣作⽤域的概念
- 闭包 的最⼤⽤处有两个，⼀个是可以读取函数内部的变量，另⼀个就是让这些变量始终保
- 持在内存中
- 闭包的另⼀个⽤处，是封装对象的私有属性和私有⽅法
- 好处：能够实现封装和缓存等；
- 坏处：就是消耗内存、不正当使⽤会造成内存溢出的问题
### 使⽤闭包的注意点

- 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很⼤，所以不能滥⽤闭包，否则会造成⽹⻚的性能问题，在IE中可能导致内存泄露
- 解决⽅法是，在退出函数之前，将不使⽤的局部变量全部删除

##  ❤为什么 0.1 + 0.2 != 0.3
原因，因为 JS 采⽤ IEEE 754 双精度版本（ 64 位），并且只要采⽤ IEEE 754 的语⾔都有该问题

:::tip
我们都知道计算机是通过⼆进制来存储东⻄的，那么 0.1 在⼆进制中会表示为

// (0011) 表示循环
0.1 = 2^-4 * 1.10011(0011)

我们可以发现， 0.1 在⼆进制中是 **⽆限循环的⼀些数字**，其实不只是0.1 

其实很多⼗进制⼩数⽤⼆进制表示都是 **⽆限循环**的。这样其实没什么问题，但是 JS 采⽤的浮点数标准却会裁剪掉我们的数字。
:::

IEEE 754 双精度版本（64位）将 64 位分为了三段
- 第⼀位⽤来表示符号
- 接下去的 11 位⽤来表示指数
- 其他的位数⽤来表示有效位，也就是⽤⼆进制表示 0.1 中的 10011(0011)
:::tip

那么这些循环的数字被裁剪了，就会出现精度丢失的问题，也就造成了 0.1不再是 0.1 了，⽽是变成了 **0.100000000000000002**
:::
```js
0.100000000000000002 === 0.1 // true
```
:::tip
那么同样的， **0.2** 在⼆进制也是⽆限循环的，被裁剪后也失去了精度变成了**0.200000000000000002**
:::
```js
0.200000000000000002 === 0.2 // true
```
:::tip
所以这两者相加不等于 0.3 ⽽是 **0.300000000000000004**
:::
```js
0.1 + 0.2 === 0.30000000000000004 // true
```
- 那么可能你⼜会有⼀个疑问，既然 0.1 不是 0.1 ，那为什么console.log(0.1) 却是正确的呢？
   - 因为在输⼊内容的时候，⼆进制被转换为了⼗进制，⼗进制⼜被转换为了字符串，在这个转换的过程中发⽣了取近似值的过程，所以打印出来的其实是⼀个近似值，你也可以通过以下代码来验证
```js
console.log(0.100000000000000002) // 0.1
```

### 解决
```js
parseFloat((0.1 + 0.2).toFixed(10)) === 0.3 // true
```

## ❤ Javascript如何实现继承？
### 构造继承
-   特点：
    - 创建子类实例时，可以向父类传递参数
    - 可以实现多继承（call多个父类对象）
- 缺点：
    - 实例并不是父类的实例，只是子类的实例
    - 只能 <ofont>继承父类的实例属性和方法，不能继承原型属性/方法</ofont> 
    - 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
:::demo 构造继承
js/extendCot
:::
### 原型继承
- 特点：
    - 非常纯粹的继承关系，**实例是子类的实例，也是父类的实例**
    - 父类新增原型方法/原型属性，子类都能访问到
    - 简单，易于实现
- 缺点：
    - 要想为子类新增属性和方法，可以在Cat构造函数中，为Cat实例增加实例属性。如果要新增原型属性和方法，则必须放在new Animal()这样的语句之后执行。
    - 无法实现多继承
    - 来自原型对象的所有属性被所有实例共享
    - 创建子类实例时，无法向父类构造函数传参
:::demo 构造继承
js/extendPro
:::

###  实例继承
- 核心：为父类实例添加新特性，作为子类实例返回
- 特点：
    - 不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果
- 缺点：
    - 实例是父类的实例，不是子类的实例
    - 不支持多继承
:::demo 构造继承
js/extendIns
:::

### 拷⻉继承
- 支持多继承
- 缺点：
    - 效率较低，内存占用高（因为要拷贝父类的属性）
    - 无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）
:::demo 拷⻉继承
js/extendCopy
:::

### 组合继承
- 核心：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
- 特点：
    - 弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法
    - 既是子类的实例，也是父类的实例
    - 不存在引用属性共享问题
    - 可传参
    - 函数可复用
- 缺点：
    - 调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）

:::demo 组合继承
js/extendGroup
:::

### class 继承
:::tip
以上两种继承⽅式都是通过原型去解决的，在 ES6 中，我们可以使⽤ **class** 去
实现继承，并且实现起来很简单
:::
```js
class Parent {
   constructor(value) {
      this.val = value
   }
   getValue() {
      console.log(this.val)
   }
}
class Child extends Parent {
   constructor(value) {
      super(value)
      this.val = value
   }
}
let child = new Child(1)
child.getValue() // 1
child instanceof Parent // true
```
:::tip
class 实现继承的核⼼在于使⽤ **extends** 表明继承⾃哪个⽗类，并且在⼦类构造函数中必须调⽤ super ，因为这段代码可以看成**Parent.call(this, value)**
:::
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
Genertor 函数的最大的特点就是可以**交出函数的执行权**（即暂停执行）。
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
:::tip
从以上代码可以发现，加上 * 的函数执⾏后拥有了 next 函数，也就是说
函数执⾏后返回了⼀个对象。每次调⽤ **next** 函数可以继续执⾏被暂停的代
码。以下是 **Generator** 函数的简单实现
:::

- 如果你使⽤ babel 编译后可以发现 test 函数变成了这样
```js
// cb 也就是编译过的 test 函数
function generator(cb) {
   return (function() {
      var object = {
         next: 0,
         stop: function() {}
      };
      return {
         next: function() {
            var ret = cb(object);
            if (ret === undefined) return { value: undefined, done: true };
            return {
               value: ret,
               done: false
            };
         }
      };
   })();
}
function test() {
   var a;
   return generator(function(_context) {
      while (1) {
         switch ((_context.prev = _context.next)) {
         // 可以发现通过 yield 将代码分割成⼏块
         // 每次执⾏ next 函数就执⾏⼀块代码
         // 并且表明下次需要执⾏哪块代码
         case 0:
            a = 1 + 2;
            _context.next = 4;
            return 2;
         case 4:
            _context.next = 6;
            return 3;
            // 执⾏完毕
         case 6:
         case "end":
            return _context.stop();
         }
      }
   });
}

```

## 说说你对promise的了解

- Promise 有且仅有三种状态：
    - 待定（pending）: 初始状态，既没有被兑现，也没有被拒绝。
    - 已兑现（fulfilled）: 意味着操作成功完成。
    - 已拒绝（rejected）: 意味着操作失败。

使用场景：
- 多个异步顺序调用
- 多个异步全部调用完毕
## ❤实现一个promise
:::demo myPromise
js/promise
:::


##  数组降维
```js
[1, [2], 3].flatMap(v => v)
// -> [1, 2, 3]
```
> 如果想将⼀个多维数组彻底的降维，可以这样实现

```js
const flattenDeep = (arr) => Array.isArray(arr)
 ? arr.reduce( (a, b) => [...a, ...flattenDeep(b)] , [])
 : [arr]
flattenDeep([1, [[2], [3, [4]], 5]])
```

## ❤typeof 于 instanceof 区别

### typeof
- typeof 对于基本类型，除了 null 都可以显示正确的类型
```js
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof b // b 没有声明，但是还会显示 undefined
typeof NaN  //number
```
- typeof 对于对象，除了函数都会显示 object
```js
typeof [] // 'object'
typeof {} // 'object'
typeof new Date(); //object
typeof console.log // 'function'

```
- 对于 null 来说，虽然它是基本类型，但是会显示 object ，这是⼀个存在很久了的 Bug

- 缺点：
   - 不能判断变量具体的数据类型比如**数组、正则、日期、对象**，因为都会返回object
   - 判断 **null** 的时候返回的是一个object，这是js的一个缺陷 , 判断 NaN 的时候返回是 number
### instanceof
- instanceof 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到**类型的 prototype**
- 缺点: 在判断对象无法直观获取，因为**数组，时间 都会认为是对象**

```js
console.log([] instanceof Array)//true
console.log([] instanceof Object)//true
new Date() instanceof Date; //true
```
- 用法：
   - typeof经常用来检测一个变量是不是最基本的数据类型，
   - instanceof简单说就是判断一个引用类型的变量具体是不是某种类型的对象。

### 最真实获取类型

- 因为js中的一切都是对象，任何都不例外，对所有值类型应用 **Object.prototype.toString.call()** 方法结果如下
```js
console.log(Object.prototype.toString.call(123)) //[object Number]
console.log(Object.prototype.toString.call('123')) //[object String]
console.log(Object.prototype.toString.call(undefined)) //[object Undefined]
console.log(Object.prototype.toString.call(true)) //[object Boolean]
console.log(Object.prototype.toString.call({})) //[object Object]
console.log(Object.prototype.toString.call([])) //[object Array]
console.log(Object.prototype.toString.call(function(){})) //[object Function]
```

## Proxy
:::tip
Proxy 是 ES6 中新增的功能，可以⽤来⾃定义对象中的操作
:::

:::demo Proxy
js/proxy
:::


