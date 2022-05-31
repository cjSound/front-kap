<!--
 * @Author: 曹捷
 * @Date: 2021-11-09 14:57:52
 * @LastEditors: 曹捷
 * @LastEditTime: 2021-11-09 15:11:35
 * @Description: fileContent
-->
<template>
  <span class="color-main">
    <span class="showcolor" :style="{'background':color}">
    </span>
    {{color}}
  </span>

</template>

<script>
export default {
  props: {
    color: {
      type: String
    }
  }
}
</script>

<style lang="less"  >
.color-main {
  display: inline-flex;
  align-items: center;
}
.showcolor {
  width: 20px;
  height: 20px;
  display: inline-block;
  border-radius: 20px;
  margin: 0 10px;
}
</style>