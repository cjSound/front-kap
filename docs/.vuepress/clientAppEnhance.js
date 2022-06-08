/*
 * @Author: 曹捷
 * @Date: 2020-03-05 20:27:42
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-08 12:06:59
 * @Description: file content
 */
// import VueHighlightJS from 'vue-highlightjs'
import Antd from 'ant-design-vue'
import './styles/index.less'
import 'ant-design-vue/dist/antd.css'
import { defineClientAppEnhance } from '@vuepress/client'
import Components from './components'
export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.use(Antd)
    let mount = app.mount
    // vuepress 打包部署会编译成ssr文件，在nodejs环境无法识别document等元素，需要moount再引入组件
    // app.mount = function () {
    //     mount(...arguments)
    // }

    Components(app)
})
// 使用异步函数也是可以的
// export default ({
//     Vue, // VuePress 正在使用的 Vue 构造函数
//     options, // 附加到根实例的一些选项
//     router, // 当前应用的路由实例
//     siteData, // 站点元数据
//     isServer // 当前应用配置是处于 服务端渲染 或 客户端
// }) => {
//     // ...做一些其他的应用级别的优化
//     Vue.use(Element)
//     Vue.use(VueHighlightJS)
//     Object.keys(componets).map((key) => {
//         Vue.component(key, componets[key])
//     })
// }