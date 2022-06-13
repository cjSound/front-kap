# vue3 相关

## v-if和v-for的比较
- vue2
    - 1、v-for优先于v-if被解析 
    - 2、如果同时出现，每次渲染都会先执行循环在判断条件，无论如何循环都不可避免，浪费了性能
    - 3、要避免出现这种情况，在外层嵌套template，在这一层进行v-if判断，然后在内部进行v-for循环
- vue3
    - 当 v-if 与 v-for 一起使用时，v-if 具有比 v-for 更高的优先级。

## Vue3.0有什么更新
## defineProperty和proxy的区别
## Vue3.0 为什么要用 proxy？
## Vue 3.0 中的 Vue Composition API？
## Composition API与React Hook很像，区别是什么