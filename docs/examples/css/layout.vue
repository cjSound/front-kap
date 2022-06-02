<!--
 * @Author: 曹捷
 * @Date: 2022-06-01 11:07:57
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-02 11:06:04
 * @Description: CSS布局
-->
<template>
  <div class="container">
    <div class="left"></div>
    <div class="right"></div>
    <div class="main"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.left {
  float: left;
  width: 100px;
  height: 200px;
  background: red;
}
.right {
  float: right;
  width: 200px;
  height: 200px;
  background: blue;
}
.main {
  margin-left: 120px;
  margin-right: 220px;
  height: 200px;
  background: green;
}
</style>