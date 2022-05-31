<!--
 * @Author: 曹捷
 * @Date: 2022-01-22 09:20:23
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-01-24 13:30:47
 * @Description: 暗黑主题
-->
<template>
  <div>
    <obitTip title="提示标题" dark>
      <div>
        请输入你要提示的内容
      </div>
    </obitTip>

    <obitTip title="警告" type="warning" dark>
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