<!--
 * @Author: 曹捷
 * @Date: 2020-12-16 15:29:19
 * @LastEditors: 曹捷
 * @LastEditTime: 2021-06-01 22:36:37
 * @Description: fileContent
-->
<template>
  <div class="img">
    <img :src="$withBase('img/cherry_tree.gif')" alt="">
  </div>
</template>
<script>
export default {
  name: 'sakura-gif'
}
</script>
<style lang="less" >
.img {
  margin-left: auto;
  width: 500px;
  img {
    width: 100%;
  }
}
</style>
