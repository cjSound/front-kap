/*
 * @Author: 曹捷
 * @Date: 2021-11-09 14:59:12
 * @LastEditors: cjSound 876304802@qq.com
 * @LastEditTime: 2023-03-24 10:58:43
 * @Description: 引入组件
 */
import obitColor from './obit-color/obit-color.vue'
import obitGif from './obit-gif.vue'
import ofont from './ofont/ofont.vue'
import planShun from './plan-shun/plan-shun.vue'
import chatGpt from './chat-gpt/chat-gpt.vue'

export default function (app) {
  app.component('obitColor', obitColor)
  app.component('obitGif', obitGif)
  app.component('ofont', ofont)
  app.component('planShun', planShun)
  app.component('chatGpt', chatGpt)
}