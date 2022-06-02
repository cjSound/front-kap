<!--
 * @Author: 曹捷
 * @Date: 2022-06-01 11:07:57
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-02 14:38:32
 * @Description: fileContent
-->
<template>
  <div class="ani"></div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.ani {
  width: 480px;
  height: 620px;
  margin: 50px auto;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 1);
  background-size: cover;
  background-position: center;
  -webkit-animation-name: loops;
  -webkit-animation-duration: 20s;
  -webkit-animation-iteration-count: infinite;
}

@-webkit-keyframes loops {
  0% {
    background: url('http://qiniu.cjsound.cn/template/1.jpg');
  }
  //   25% {
  //     background: url('http://qiniu.cjsound.cn/template/apple.jpg');
  //   }
  //   50% {
  //     background: url('http://qiniu.cjsound.cn/template/1.jpg');
  //   }
  100% {
    background: url('http://qiniu.cjsound.cn/template/apple.jpg');
  }
}
</style>