#  浏览器性能问题
## 重绘（Repaint）和回流（Reflow）
- 重绘和回流是渲染步骤中的⼀⼩节，但是这两个步骤对于性能影响很⼤。
- 重绘是当节点需要更改外观⽽不会影响布局的，⽐如改变 **color** 就叫称为重绘
- 回流是**布局**或者**⼏何属性**需要改变就称为回流。
- 回流必定会发⽣重绘，重绘不⼀定会引发回流。**回流所需的成本⽐重绘⾼的多**，改变深层次的节点很可能导致⽗节点的 **⼀系列回流** 

>所以以下⼏个动作可能会导致性能问题：

- 改变 window ⼤⼩
- 改变字体
- 添加或删除样式
- ⽂字改变
- 定位或者浮动
- 盒模型

**很多⼈不知道的是，重绘和回流其实和 Event loop 有关。**
- 当 Event loop 执⾏完 Microtasks 后，会判断 document 是否需要更新。- 因为浏览器是 60Hz 的刷新率，每 16ms 才会更新⼀次。
- 然后判断是否有 resize 或者 scroll ，有的话会去触发事件，所以 **resize** **和scroll** 事件也是⾄少 16ms 才会触发⼀次，并且⾃带节流功能。
- 判断是否触发了 **media query**
- 更新动画并且发送事件
- 判断是否有全屏操作事件
- 执⾏ **requestAnimationFrame** 回调
- 执⾏ **IntersectionObserver** 回调，该⽅法⽤于判断元素是否可⻅，可以⽤于懒加载上，但是兼容性不好
- 更新界⾯
- 以上就是⼀帧中可能会做的事情。如果在⼀帧中有空闲时间，就会去执⾏ **requestIdleCallback** 回调。

### 减少重绘和回流
>使⽤ translate 替代 top
```html
<div class="test"></div>
<style>
.test {
    position: absolute;
    top: 10px;
    width: 100px;
    height: 100px;
    background: red;
}
</style>
<script>
setTimeout(() => {
    // 引起回流
    document.querySelector('.test').style.top = '100px'
}, 1000)
</script>
```
- 使⽤ **visibility** 替换 display: none ，因为前者只会引起重绘，后者会引发回流（**改变了布局**）
- 把 DOM **离线后修改**，⽐如：先把 DOM 给 display:none (有⼀次 Reflow )，然后你修改 100 次，然后再把它显示出来
- 不要把 DOM 结点的属性值放在⼀个循环⾥当成循环⾥的变量
```js
for(let i = 0; i < 1000; i++) {
 // 获取 offsetTop 会导致回流，因为需要去获取正确的值
 console.log(document.querySelector('.test').style.offsetTop)
}
```
- 不要使⽤ **table** 布局，可能很⼩的⼀个⼩改动会造成整个 table 的重新布局 动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使⽤requestAnimationFrame
- CSS 选择符从右往左匹配查找，避免 DOM 深度过深
- 将频繁运⾏的动画变为图层，图层能够阻⽌该节点回流影响别的元素。⽐如对于 **video** 标签，浏览器会⾃动将该节点变为图层。