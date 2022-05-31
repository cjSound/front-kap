/*
 * @Author: 曹捷
 * @Date: 2021-02-04 11:59:02
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-01-25 09:46:23
 * @Description: 调用API
 */
import { ObitAjax } from '../../../api'
import apiCommon from './apis/common'
import { message } from 'ant-design-vue';
export default function (router) {
  let name = 'obit-doc'
  let ajaxInfo = new ObitAjax({
    modules: [],
    successCode: 200,
    beforeRequest (config) {
      return config
    },
    parseUrl (url) {
      return url
    },
    /**
     * 自定义参数校验提示
     * @param {*} param0 
     */
    responseError (response) {
      message.error(`${JSON.stringify(response)}`)
    },
    router
  }, name)
  let modules = {}
  Object.assign(modules, apiCommon(ajaxInfo.api, name))
  ajaxInfo.init(modules)
  return {
    item: ajaxInfo,
    methods: ajaxInfo.methods,
    API: ajaxInfo.API
  }
}

