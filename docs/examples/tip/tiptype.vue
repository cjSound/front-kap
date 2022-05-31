<!--
 * @Author: 曹捷
 * @Date: 2022-01-22 09:20:23
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-01-24 13:18:10
 * @Description: fileContent
-->
<template>
  <div>
    <obitTip title="提示标题">
      <div>
        请输入你要提示的内容
      </div>
    </obitTip>
    <obitTip title="警告" type="warning">
      <div>
        请输入你要提示的内容
      </div>
    </obitTip>
  </div>

</template>

<script>
import obitTip from 'obit-wui/components/obit-tip'
export default {
  components: { obitTip }
}
</script>

<style>
</style>