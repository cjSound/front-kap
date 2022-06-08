<!--
 * @Author: 曹捷
 * @Date: 2022-06-08 10:00:42
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-08 10:14:11
 * @Description: 单例模式
-->
<template>
  <div>
    {{data}}
  </div>
</template>

<script>
export default {
  setup () {
    var GloabData = (function () {
      let instance
      /**
       * 要创建的实例
       */
      function Construct () {
        this.name = '单例'
        this.desc = '所有属性全局唯一'
      }
      function getInstance () {
        if (instance === undefined) {
          instance = new Construct()
        }
        return instance
      }
      return {
        getInstance
      }
    })()
    let data = GloabData.getInstance()
    data.name = '单出引用改变，全局都变'
    let data1 = GloabData.getInstance()
    return {
      data: { data, data1 }
    }
  }
}
</script>

<style>
</style>