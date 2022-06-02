<!--
 * @Author: 曹捷
 * @Date: 2022-06-02 15:11:41
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-02 15:24:08
 * @Description: fileContent
-->
<template>
  <div class="wraper wraper1">
    <div class="box"></div>
  </div>
  <div class="wraper wraper2">
    <div class="box"></div>
  </div>
  <div class="wraper wraper3">
    <div class="box"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.wraper {
  height: 200px;
  background: blueviolet;
  margin-bottom: 20px;
  .box {
    background: red;
    width: 100px;
    height: 100px;
  }
}
/** 1 **/
.wraper1 {
  position: relative;
  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50px 0 0 -50px;
  }
}
/** 2 **/
.wraper2 {
  position: relative;
  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
/** 3 **/
.wraper3 {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
