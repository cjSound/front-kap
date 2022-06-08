<!--
 * @Author: 曹捷
 * @Date: 2022-06-02 15:46:12
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-07 16:03:22
 * @Description: 事件模型
-->
<template>
  <div class="" id="event">
    <div class="item bubbParent">
      <button id="bubbling">事件冒泡</button>
    </div>
    <div class="item bubbParent">
      <button id="stopBubb">阻止事件冒泡</button>
    </div>
    <div class="item  " id="capParent">
      <button id="cap">事件捕获</button>
    </div>
    <div class="item " id="stopCapParent">
      <button id="stopCap">阻止事件捕获</button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'
export default {
  setup () {
    let data = reactive({
    })
    let _methods = {
      initEvent () {
        this.initBubb()
        this.initCap()
        this.stopBubb()
        this.stopCap()
      },
      /**
       * 事件冒泡
       */
      initBubb () {
        console.log('🚀 ~ file: eventModal.vue ~ li ', document.getElementsByClassName('bubbParent'))
        for (const el of document.getElementsByClassName('bubbParent')) {
          el.addEventListener('click', function () {
            alert(`父节点`)
          })
        }
        let dom = document.getElementById('bubbling')
        dom.addEventListener('click', function () {
          alert('事件冒泡 从下往上')
        })
      },
      /**
       * 阻止事件冒泡
       */
      stopBubb () {
        document.getElementById('stopBubb').addEventListener('click', function (event) {
          event.stopPropagation()
          alert('阻止事件冒泡,父节点事件不会再触发')
        })
      },
      /**
       * 事件捕获
       */
      initCap () {
        document.getElementById('capParent').addEventListener('click', function () {
          alert(`父节点捕获`)
        }, true)
        let dom = document.getElementById('cap')
        dom.addEventListener('click', function () {
          alert('事件捕获 子节点后响应')
        }, true)
      },
      /**
       * 事件捕获，不再向下传递
       */
      stopCap () {
        document.getElementById('stopCapParent').addEventListener('click', function (event) {
          event.stopPropagation()
          event.preventDefault()
          alert(`父节点捕获`)
        }, true)
        document.getElementById('stopCap').addEventListener('click', function (event) {
          alert('事件捕获')
        })
      }


    }
    onMounted(() => {
      _methods.initEvent()

    })
    return {
      data
    }
  }
}
</script>

<style lang="less">
.item {
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: red;
  color: #fff;
  margin-bottom: 20px;
}
</style>