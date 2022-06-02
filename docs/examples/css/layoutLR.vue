<!--
 * @Author: 曹捷
 * @Date: 2022-06-01 11:07:57
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-02 15:04:08
 * @Description: 左侧固定宽度，右侧⾃适应宽度的两列布局实现
-->
<template>
  <b class="m-b-20">⽅法1：左侧div设置成浮动：float: left，右侧div宽度会⾃拉升适应</b>
  <div class="outer method1">
    <div class="left">左侧固定宽度</div>
    <div class="right">右侧⾃适应宽度</div>
  </div>
  <b class="m-b-20">⽅法2：对右侧:div进⾏绝对定位，然后再设置right=0，即可以实现宽度⾃适应</b>
  <div class="outer method2">
    <div class="left">左侧固定宽度</div>
    <div class="right">右侧⾃适应宽度</div>
  </div>
  <b class="m-b-20">⽅法3：将左侧div进⾏绝对定位，然后右侧div设置margin-left: 200px</b>
  <div class="outer method3">
    <div class="left">左侧固定宽度</div>
    <div class="right">右侧⾃适应宽度</div>
  </div>
  <b class="m-b-20">⽅法4：使⽤flex布局</b>
  <div class="outer method4">
    <div class="left">左侧固定宽度</div>
    <div class="right">右侧⾃适应宽度</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.outer {
  width: 100%;
  height: 200px;
  background-color: yellow;
  margin-bottom: 20px;
  color: #fff;
}
.method4 {
  display: flex;
  flex-direction: row;
  .left {
    width: 200px;
    height: 200px;
    background-color: red;
  }
  .right {
    height: 200px;
    background-color: blue;
    flex: 1;
  }
}
.method3 {
  position: relative;
  background: blueviolet;
  .left {
    width: 200px;
    height: 200px;
    background-color: red;
    position: absolute;
  }
  .right {
    height: 200px;
    background-color: blue;
    margin-left: 200px;
  }
}

.method2 {
  position: relative;
  .left {
    width: 200px;
    height: 200px;
    background-color: red;
  }
  .right {
    height: 200px;
    background-color: blue;
    position: absolute;
    left: 200px;
    top: 0;
    right: 0;
  }
}

.method1 {
  .left {
    width: 200px;
    height: 200px;
    background-color: red;
    float: left;
  }
  .right {
    height: 200px;
    background-color: blue;
  }
}
</style>