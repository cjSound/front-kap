<!--
 * @Author: 曹捷
 * @Date: 2022-01-21 15:37:50
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-01-24 11:49:55
 * @Description: 提示组件
-->
<template>
  <div class="obit-custom-tips " :class="clazz">
    <div class="custom-block-title" v-if="title">
      {{title}}
    </div>
    <div class="obit-tips-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import { computed } from 'vue'
export default {
  props: {
    /**
     * warning  info
     */
    type: {
      type: String,
      default: 'info'
    },
    title: {
      type: String
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  setup (props, context) {
    let _computed = {
      clazz: computed(() => {
        let res = {}
        res[props.type] = true
        res.dark = props.dark
        return res
      })
    }
    return {
      ..._computed
    }
  }
}
</script>

<style lang="less">
.obit-custom-tips {
  padding: 8px 16px;
  border-radius: 4px;
  margin: 10px 0;
  &&.warning {
    background-color: #fffae3;
    border-left: 5px solid #e7c000;
    color: #746000;
  }
  &&.warning.dark {
    background-color: #7e755b;
    border-left: 5px solid #ceab00;
    color: #cea73c;
  }
  &&.info {
    background-color: #f3f4f5;
    border-left: 5px solid #42b983;
    color: #2c3e50;
  }
  &&.info.dark {
    background-color: #2b313a;
    border-left: 5px solid #318a62;
    color: #adbac7;
  }
  .custom-block-title {
    font-weight: 700;
    margin: 0.5rem 0;
  }
  .obit-tips-content {
    margin: 0.5rem 0;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>