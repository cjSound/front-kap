<!--
 * @Author: 曹捷
 * @Date: 2022-06-01 11:07:57
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-02 11:11:06
 * @Description: CSS布局
-->
<template>
  <div class="content">
    <div class="main"></div>
  </div>
  <div class="left"></div>
  <div class="right"></div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.content {
  float: left;
  width: 100%;
}
.main {
  height: 200px;
  margin-left: 110px;
  margin-right: 220px;
  background: green;
}
.main::after {
  content: '';
  display: block;
  font-size: 0;
  height: 0;
  zoom: 1;
  clear: both;
}
.left {
  float: left;
  height: 200px;
  width: 100px;
  margin-left: -100%;
  background: red;
}
.right {
  float: right;
  height: 200px;
  width: 200px;
  margin-left: -200px;
  background: blue;
}
</style>