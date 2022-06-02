<!--
 * @Author: 曹捷
 * @Date: 2022-06-02 15:46:12
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-02 17:01:28
 * @Description: 拷⻉继承
-->
<template>
  <div>
    <div v-for="(item,key) of data">
      <b>{{key}} ：</b>
      <span>{{item}}</span>
    </div>
    {{cat}}
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup () {
    console.log(' ---------------------------------  拷⻉继承 ---------------------------------',)
    function Parents (name) {
      // 属性
      this.name = name || 'Parents';
      // 实例方法
      this.sleep = function () {
        let msg = `实例方法继承：我是${this.name}`
        console.log(msg);
        return msg
      }
    }
    Parents.prototype.eat = function (food) {
      let msg = `原型方法也继承了， ${this.name}正在吃：${food}`
      console.log(msg);
      return msg
    }
    // 原型继承
    function Cat (name) {
      var animal = new Parents();
      for (var p in animal) {
        Cat.prototype[p] = animal[p];
      }
      this.name = name || 'Tom';
    }

    var cat = new Cat('我是继承者');
    console.log('🚀 ~ file: extendPro.vue ~ line 43 ~ setup ~ cat', cat)

    let data = reactive({
      name: cat.name,
      '原型方法Eat': cat.eat('吃西瓜'),
      'cat instanceof Cat': cat instanceof Cat,
      'cat instanceof Parents': cat instanceof Parents,
      "sleep": cat.sleep()
    })
    return {
      cat,
      data
    }
  }
}
</script>

<style>
</style>