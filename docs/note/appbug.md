# app遇到的坑

## provide inject
- App.vue setup 设置 provide ，在子页面setup  inject无法获取得到，H5端有效，APP端无效

## 重装+清空npm缓存+删除package.lock

## node_modules proxy 不是同一个对象，无法拿到主代理

## uniappzz+VUE3中的自定义模板template.h5.html不生效?
- 根据做项目的时候发现在使用VUE3模式下，自定义模板template.h5.html不生效，而生效是默认的index.html，那么就可以直接在index.html中写：
- 注意：这里还有个坑，uni.webView应该在初始的时候就用变量保存下来，后面直接用变量，不能在document.addEventListener(‘UniAppJSBridgeReady’, function() {})中去保存，否则拿不到uni.webView

## webView 向APP端通信 无效？巨坑
- **接收的消息 一定要写在methods对象下面，不能写在setup里面返回的对象**
- 示例如下
```vue
<template>
  <div>
    <view class="status_bar"> </view>
    <web-view :src="webUrl" :webview-styles="webviewStyles" @message="getMessage"></web-view>
  </div>
</template>

<script>
import { reactive, toRefs, getCurrentInstance, onMounted } from 'vue'
export default {
  props: {
    /**
     * 嵌套的页面
     */
    url: {
      type: String
    },
    /**
     * 是否要标题
     */
    title: {
      type: String
    }
  },
  setup (props, context) {
    let { proxy } = getCurrentInstance()
    let _data = reactive({
      webviewStyles: {
        progress: {
          color: '#6200EE',
        },
      },
      webUrl: '',
      barHeight: ''
    })
    return {
      ...toRefs(_data)
    }
  },
  methods: {
    //   注意  接收的消息 一定要写在methods对象下面，不能写在setup里面返回的对象
    getMessage (e) {
      uni.showModal({
        content: JSON.stringify(e.detail),
        showCancel: false
      })
    }
  }

}
</script>
```
## uniapp H5 配置失效

### 需求 
需要给H5 添加basePath

官网文档介绍可以直接在 manifest.json H5相关配置，但是在脚手架版本中 **manifest.json H5相关配置失效**

- 在 vite.config.js 添加base路径，在H5有效，**但是带来连锁bug**
  **导致的连锁bug**
  - **APP端路径失效**，会导致图片等资源文件全部失效
  - 增加了基础路径，在index.html，**引入的静态js脚本，前缀没有带上基础路径，打包部署会导致脚本引入失败**
  - vite.config.js 中**条件编译失效**

### 解决方案

APP端路径失效和条件编译失效问题

- 不使用条件编译，通过 **process.env.UNI_PLATFORM** ==='H5' 来判断当前平台

- 通过 **UNI_PLATFORM** ，APP端 不设置base ，只有H5端配置base

- index.html静态js脚本问题 

  - vite.config.js 配置打包对应的index.html，示例如下

  - ```js
    build: {
        rollupOptions: {
          input: {
            index: resolve(__dirname, 'build.html'),
          }
        },
      }
    ```
    
  - 带来的问题，打包完成之后，dist生成的文件中，默认的html不是index.html ,而是选择的模板 build.html

    - 为了解决此问题，在打包完成之后，调用node脚本，将对应的 **build.html 重命名为index.html**

