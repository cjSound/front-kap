<!--
 * @Author: 曹捷
 * @Date: 2022-06-08 16:58:47
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-14 12:33:33
 * @Description: fileContent
-->
# js运行机制
## 事件机制

:::tip 
⾸先， **js** 是单线程的，主要的任务是处理⽤户的交互.

⽽⽤户的交互⽆⾮就是响应 **DOM** 的增删改，使⽤事件队列的形式，⼀次事件循环只处理⼀个事件响应，使得脚本执⾏相对连续，所以有了事件队列，⽤来储存待执⾏的事件


那么事件队列的事件从哪⾥被 **push** 进来的呢。那就是另外⼀个线程叫事件触发线程做的事情了，他的作⽤主要是在 **定时触发器线程**、异步 **HTTP** 请求线程满⾜特定条件下的回调函数 push 到事件队列中，等待 js 引擎空闲的时候去执⾏，


:::

## 浏览器 Eventloop 和 Node 中的有什么区别

:::tip d
众所周知 JS 是⻔⾮阻塞单线程语⾔，因为在最初 JS 就是为了和浏览器交互⽽
诞⽣的。如果 JS 是⻔多线程的语⾔话，我们在多个线程中处理 DOM 就可能会发⽣问题（⼀个线程中新加节点，另⼀个线程中删除节点），当然可以引⼊
读写锁解决这个问题。
:::

- JS 在执⾏的过程中会产⽣执⾏环境，这些执⾏环境会被顺序的加⼊到执⾏栈中。如果遇到异步的代码，会被挂起并加⼊到 **Task** （有多种 task ） 队列中。⼀旦执⾏栈为空，**Event Loop**就会从 **Task** 队列中拿出需要执⾏的代码并放⼊执⾏栈中执⾏，所以本质上来说 JS 中的异步还是同步⾏为
```js
console.log('script start');
setTimeout(function() {
 console.log('setTimeout');
}, 0);
console.log('script end');
```

- 以上代码虽然 **setTimeout** 延时为 0 ，其实还是异步。这是因为 **HTML5** 标准规定这个函数第⼆个参数不得⼩于 4 毫秒，不⾜会⾃动增加。所以 setTimeout 还是会在script end 之后打印。

- 不同的任务源会被分配到不同的 **Task** 队列中，任务源可以分为 微任务（ **microtask** ）和 宏任务（ **macrotask** ）。在 ES6 规范中， microtask 称为 jobs `(promise)` ， macrotask 称为
task`[setTimeout、setInterval]` 。
```js
console.log('script start');
setTimeout(function() {
 console.log('setTimeout');
}, 0);
new Promise((resolve) => {
 console.log('Promise')
 resolve()
}).then(function() {
 console.log('promise1');
}).then(function() {
    setTimeout(function() {
        console.log('promise2');
    }, 0);
}).then(function() {
 console.log('promise3');
});
console.log('script end');
// script start => Promise => script end => promise1 =>promise3 => setTime => promise2

```
- **js**引擎执⾏过程中有优先级之分，⾸先js引擎在⼀次事件循环中，会先执⾏js**线程的主任务**，然后会去查找是否有微任务 **microtask（promise）** ，如果有那就**优先执⾏微任务**，如果没有，在去查找宏任务 macrotask（**setTimeout、setInterval**） 进⾏执⾏
- 以上代码虽然 setTimeout 写在 Promise 之前，但是因为 Promise 属于微任务⽽ setTimeout 属于宏任务，所以会有以上的打印。
- 微任务包括 **process.nextTick ， promise ， Object.observe,MutationObserver**
- 宏任务包括 **script ， setTimeout ， setInterval ， setImmediate ， I/O ，UI renderin**
:::tip Script


```js 
setTimeout(function () {
  console.log("1");
}, 0);
async function async1() {
  console.log("2");
  const data = await async2();
  console.log("3");
  return data;
}
async function async2() {
  return new Promise((resolve) => {
    console.log("4");
    resolve("async2的结果");
  }).then((data) => {
    console.log("5");
    return data;
  });
}
async1().then((data) => {
  console.log("6");
  console.log(data);
});
new Promise(function (resolve) {
  console.log("7");
  //   resolve()
}).then(function () {
  console.log("8");
});

// 执行顺序是  2->4->7->5->3->6-> async2 的结果 ->1
```
很多⼈有个误区，认为微任务快于宏任务，其实是错误的。

因为宏任务中包括了 **script** ，浏览器会先执⾏⼀个宏任务，接下来有异步代码的话就先执⾏微任务
:::

## 所以正确的⼀次 Event loop 顺序是这样的
- 执⾏同步代码，这属于宏任务 `因为：script`
- 执⾏栈为空，查询是否有微任务需要执⾏
- 执⾏所有微任务
- 必要的话渲染 UI
- 然后开始下⼀轮 Event loop ， 执⾏宏任务中的异步代码

:::tip
通过上述的 **Event loop** 顺序可知，如果宏任务中的异步代码有⼤量的计算并且需要操作 DOM 的话，为了更快的 界⾯响应，我们可以把操作 **DOM** 放⼊微任务中
:::

