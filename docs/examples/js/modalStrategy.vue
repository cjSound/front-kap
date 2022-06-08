<!--
 * @Author: 曹捷
 * @Date: 2022-06-08 10:00:42
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-08 12:10:14
 * @Description: 策略模式
-->
<template>
  <div>
    <p>通过策略模式 判断表单数据</p>
    <a-button @click="validate1">校验数据1</a-button>
    <a-button @click="validate2">校验数据2</a-button>
    <a-button @click="validate3">校验数据3</a-button>

  </div>
</template>
<script>
import { message } from 'ant-design-vue';

export default {
  setup () {
    let Validator = class {
      constructor(ruleList) {
        let _this = this
        /**
         * 定义策略 将需要大量的if else 判断的逻辑 独立化
         * 修改对应逻辑不会影响其他的分支判断
         */
        this.strategies = {
          noEmpty (content, item) {
            if (content === null || content === '' || content === undefined) {
              let info = item.message ? item.message : '不能为空'
              info = `${item.name ? item.name : ''}${info}`
              _this.showTip(info)
              return false
            }
            return true
          },
          number (content, item) {
            if (isNaN(content)) {
              let info = item.message ? item.message : '不是正确的数字'
              info = `${item.name ? item.name : ''}${info}`
              _this.showTip(info)
              return false
            }
            return true
          }
        }
        this.ruleList = ruleList
      }
      validate (data) {
        for (let key in this.ruleList) {
          let rule = this.ruleList[key]
          let content = data[key]
          if (!this.validateItem(content, rule)) {
            return false
          }
        }
        return true
      }
      validateItem (content, rule) {
        for (let item of rule) {
          if (item.type) {
            if (this.strategies[item.type]) {
              let result = this.strategies[item.type](content, item)
              if (!result)
                return false
            } else {
              throw new Error('当前验证的类型不存在对应策略')
            }
          }
        }
        return true
      }
      showTip (msg) {
        message.error(msg)
      }
    }
    let _data = {
      data1: {
        name: '',
        age: ''
      },
      data2: {
        name: '姓名',
        age: ''
      },
      data3: {
        name: '姓名',
        age: 'xxx'
      },
      rule1: {
        name: [{ type: 'noEmpty', message: '请输入姓名' }],
        age: [
          { type: 'noEmpty', message: '年龄不能为空' },
          { type: 'number', name: '年龄' }]
      }
    }
    let valid = new Validator(_data.rule1)
    let _methods = {
      validate1 () {
        let result = valid.validate(_data.data1)
        if (result)
          message.success('校验成功')
      },
      validate2 () {
        let result = valid.validate(_data.data2)
        if (result)
          message.success('校验成功')
      },
      validate3 () {
        let result = valid.validate(_data.data3)
        if (result)
          message.success('校验成功')
      }
    }
    return {
      ..._methods
    }
  }
}
</script>

<style>
</style>