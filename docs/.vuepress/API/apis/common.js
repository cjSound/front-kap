
/*
 * @Author: 曹捷
 * @Date: 2021-03-15 17:07:52
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-01-25 10:32:35
 * @Description: 基础示例
 */
import { BaseUrl, ServiceUrl } from './../url'
export default function (api) {
  return {
    get (url, data) {
      return api.get(`${ServiceUrl}${url}`, data)
    },
    // 自定义查询组件相关
    getDataByUrl (url, data = {}, type = 'get') {
      return api[type === 'post' ? 'post' : 'get'](`${BaseUrl}${url}`, data)
    },
    // 根据code查询子字典
    getCommonDictValueList (data) {
      return api.post(`${BaseUrl}dict`, { dictCode: data })
    },
    basePost (url, data) {
      return api.post(`${BaseUrl}${url}`, data)
    },
    post (url, data) {
      return api.post(`${ServiceUrl}${url}`, data)
    },
    sysTablePost (url, data) {
      return api.tablePost(`${ServiceUrl}${url}`, data)
    },
    uploadFiles (url, file) {
      return api.upload(`${ServiceUrl}${url}`, file)
    },
  }
}