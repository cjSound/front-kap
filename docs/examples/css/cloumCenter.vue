<!--
 * @Author: 曹捷
 * @Date: 2022-06-02 14:44:07
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-02 14:51:52
 * @Description: 垂直居中
-->
<template>
  <div class="cloumCenter">
    <p>⽅法⼀：已知元素的⾼宽</p>
    <div class="relative m-b-20">
      <div id="div1"></div>
    </div>
    <p>方法2：margin:auto;</p>
    <div class="relative m-b-20">
      <div id="div2"></div>
    </div>
    <p>方法3：flex</p>
    <div class="relative m-b-20 flex-h-c">
      <div id="div3"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.relative {
  position: relative;
  height: 300px;
  background: rgb(52, 143, 34);
}
.flex-h-c {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/**⽅法⼀：已知元素的⾼宽**/
#div1 {
  background-color: #6699ff;
  width: 200px;
  height: 200px;
  position: absolute; //⽗元素需要相对定位
  top: 50%;
  left: 50%;
  margin-top: -100px; //⼆分之⼀的height，width
  margin-left: -100px;
}
#div2 {
  width: 200px;
  height: 200px;
  background-color: #6699ff;
  margin: auto;
  position: absolute; //⽗元素需要相对定位
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
#div3 {
  width: 200px;
  height: 200px;
  background-color: #871e9c;
}
</style>