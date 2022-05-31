/*
 * @Author: 曹捷
 * @Date: 2021-11-04 17:27:07
 * @LastEditors: 曹捷
 * @LastEditTime: 2021-11-05 11:02:23
 * @Description: fileContent
 */
import { watch, reactive, defineComponent, ref, compile, toRefs, getCurrentInstance } from "vue";
const App = defineComponent({
  props: {
    value: {
      type: Object,
      default () {
        return {}
      }
    },
    template: {
      type: String
    }
  },
  setup (props,context) {
    let _data = reactive({
      formData: JSON.parse(JSON.stringify(props.value)),
      tempInfo: ''
    })
    let info = props.template
    for (const key in _data.formData) {
      info = info.replace(key, `<a-input v-model:value="this.formData.${key}" />`)
    }
    _data.tempInfo = info
    // info = `<div><input type="text"  v-model="formData.test"  />{{formData}}</div> `
    let _methods = {
      getInfo () {
        return _data.formData
      }
    }
    watch(()=>_data.formData,(value)=>{
      context.emit('update:value',_data.formData)
    },{deep:true})
    return {
      ...toRefs(_data),
      ..._methods
    }
  },
  render () {
    let rdx = compile(this.tempInfo)
    return rdx.call(this, this)
  }
});
export default App