<!--
 * @Author: 曹捷
 * @Date: 2022-06-02 15:46:12
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-02 16:31:14
 * @Description: 构造继承
-->
<template>
  <div>
    <div v-for="(item,key) of data">
      <b>{{key}} ：</b>
      <span>{{item}}</span>
    </div>
    {{child}}
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup () {
    console.log('---------------------------------  构造函数继承   --------------------------------- ')
    function Parents (name) {
      // 属性
      this.name = name || 'Parents';
      // 实例方法
      this.sleep = function () {
        let msg = `我是：${this.name}`
        console.log(msg);
        return msg
      }
    }
    Parents.prototype.hello = function () {
      console.log(`hello：${this.name}`);
    }
    // 构造继承
    class Cat {
      constructor(name) {
        Parents.call(this);
        this.name = name || 'Tom';
      }
    }
    let child = new Cat('构造继承')

    console.log('🚀 ~ file: extend.vue ~ line 38 ~ setup ~ child', child)
    let data = reactive({
      'child instanceof Cat': child instanceof Cat,
      'child instanceof Parents': child instanceof Parents,
      "sleep": child.sleep()
    })
    return {
      child,
      data
    }
  }
}
</script>

<style>
</style>