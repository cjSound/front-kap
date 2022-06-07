<!--
 * @Author: 曹捷
 * @Date: 2022-06-07 09:56:31
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-07 09:59:29
 * @Description: fileContent
-->

# app端注意的点
## 引入IFrame ，对应的h5页面会嵌入状态栏
### 解决方案
- 1、从APP端获取状态栏高度  **uni.getSystemInfoSync()**
- 2、全局缓存该高度  VUEX
- 3、IFrame组件，传入该高度到具体的IFrame页面
- 4、App.vue页面，解析Url数据  覆盖全局CSS变量 ``--status-bar-height`` 

## app 嵌套的 H5 页面，安卓设备原生返回按钮，不会对H5页面内部路由生效，会直接退出IFrame原生页面

### 解决方案
```vue
<obit-frame :url="webUrl" :currProxy="this"></obit-frame>
```
- 父组件传入 this
- frame组件 获取getAppWebview 对象
- 监听页面返回 左上角返回按钮或 android 返回键，触发webviewback
- 判断back层级，无法返回提示并退出系统

## APP离线打包 视频模块引入？

[APP添加模块](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/others?id=dcloud_propertiesxml%e9%9c%80%e8%a6%81%e6%b7%bb%e5%8a%a0%e5%a6%82%e4%b8%8b%e4%bb%a3%e7%a0%81-5)

## APP打包 视频错位显示不全？
- 展示界面不展示video组件 通过固定背景预览
- 点击预览进入单独的视频播放界面进行播放


# 请求
## loading 
### 需要loading时 ，众多请求会导致一闪一闪 如何处理
- 通过函数防抖 显示loading
- 增加请求中状态机制
- 请求状态结合防抖来控制loading效果

## 离线打包 无法唤醒摄像头 无法启动相机
[文档](https://nativesupport.dcloud.net.cn/AppDocs/FAQ/android?id=%E7%A6%BB%E7%BA%BF%E6%89%93%E5%8C%85android-10%E4%B8%8A%E6%97%A0%E6%B3%95%E5%90%AF%E5%8A%A8%E7%9B%B8%E6%9C%BA)

在application节点下添加provider节点

```
<provider
    android:name="io.dcloud.common.util.DCloud_FileProvider"
    android:authorities="${apk.applicationId}.dc.fileprovider"
    android:exported="false"
    android:grantUriPermissions="true">
    <meta-data
        android:name="android.support.FILE_PROVIDER_PATHS"
        android:resource="@xml/dcloud_file_provider" />
</provider>
```

## APP tabbar显示隐藏控制
登录完成之后，要根据用户权限来判断是否显示隐藏 
- 错误操作流程
    - 之前是将逻辑写在登录界面，带来的问题是，切换用户角色，tabbar还未渲染，显示或者隐藏失效
- 正确处理流程
    - 将显示隐藏逻辑，添加在tabbar页面，渲染tabbar对应的首页再判断显示隐藏