<!--
 * @Author: 曹捷
 * @Date: 2022-06-09 16:00:06
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-09 18:11:46
 * @Description: Proxy
-->
<template>

</template>

<script>
export default {
  setup () {

    // 可以很⽅便的使⽤ Proxy 来实现⼀个数据绑定和监听
    // let onWatch = (obj, setBind, getLogger) => {
    //   let handler = {
    //     get (target, property, receiver) {
    //       getLogger(target, property)
    //       return Reflect.get(target, property, receiver);
    //     },
    //     set (target, property, value, receiver) {
    //       setBind(value);
    //       return Reflect.set(target, property, value);
    //     }
    //   };
    //   return new Proxy(obj, handler);
    // };
    // let obj = { a: 1 }
    // let value
    // onWatch(obj, (v) => {
    //   value = v
    // }, (target, property) => {
    //   console.log(`Get '${property}' = ${target[property]}`);
    // })
    // let p = new Proxy(target, handler);
    // // `target` 代表需要添加代理的对象
    // // `handler` ⽤来⾃定义对象中的操作
    // p.a = 2 // bind `value` to `2`
    // p.a // -> Get 'a' = 2

    return {}
  }
}
</script>

<style>
</style>