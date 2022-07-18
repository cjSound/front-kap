/*
 * @Author: 曹捷
 * @Date: 2021-11-09 14:59:12
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-07-17 19:53:56
 * @Description: 引入组件
 */
import obitColor from './obit-color/obit-color.vue'
import obitGif from './obit-gif.vue'
import ofont from './ofont/ofont.vue'
import planShun from './plan-shun/plan-shun.vue'
export default function (app) {
  app.component('obitColor', obitColor)
  app.component('obitGif', obitGif)
  app.component('ofont', ofont)
  app.component('planShun', planShun)
}