<!--
 * @Author: 曹捷
 * @Date: 2021-11-09 14:57:52
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-05-30 18:36:57
 * @Description: fileContent
-->
<template>
  <span class="color-main" :style="{'color':color,'font-weight':bold?'600':'500'}">
    <slot></slot>
  </span>

</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'red'
    },
    bold: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less"  >
.color-main {
}
</style>