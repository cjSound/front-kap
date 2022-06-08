# Webpack相关
## 打包体积 优化思路
- 提取第三⽅库或通过引⽤外部⽂件的⽅式引⼊第三⽅库
- 代码压缩插件 **UglifyJsPlugin**
- 服务器启⽤**gzip**压缩
- 按需加载资源⽂件 require.ensure
- 优化 devtool 中的 source-map
- 剥离 **css** ⽂件，单独打包
- 去除不必要插件，通常就是开发环境与⽣产环境⽤同⼀套配置⽂件导致

## 打包效率
- 开发环境采⽤增量构建，启⽤热更新
- 开发环境不做⽆意义的⼯作如提取 css 计算⽂件hash等
- 配置 devtool
- 选择合适的 loader
- 个别 loader 开启 cache 如 babel-loader
- 第三⽅库采⽤引⼊⽅式
- 提取公共代码
- 优化构建时的搜索路径 指明需要构建⽬录及不需要构建⽬录
- 模块化引⼊需要的部分
## Loader
编写⼀个loader
:::tip loader
loader 就是⼀个 node 模块，它输出了⼀个函数。当某种资源需要⽤这个
loader 转换时，这个函数会被调⽤。并且，这个函数可以通过提供给它的
this 上下⽂访问 **Loader API** 。 **reverse-txt-loader**
:::
```js
// 定义
module.exports = function(src) {
 //src是原⽂件内容（abcde），下⾯对内容进⾏处理，这⾥是反转
 var result = src.split('').reverse().join('');
 //返回JavaScript源码，必须是String或者Buffer
 return `module.exports = '${result}'`;
}
//使⽤
{
    test: /\.txt$/,
    use: [
        {
        './path/reverse-txt-loader'
        }
    ]
},
```
## 常用的webpack的⼀些plugin
- 构建优化
    - 减少编译体积 ContextReplacementPugin 、 IgnorePlugin 、 babel-pluginimport 、 babel-plugin-transform-runtime
    - 并⾏编译 happypack 、 **thread-loader** 、 uglifyjsWebpackPlugin 开启并⾏
    - 缓存 cache-loader 、 hard-source-webpack-plugin 、 uglifyjsWebpackPlugin 开启缓存、 babel-loader 开启缓存
    - 预编译 **dllWebpackPlugin** && DllReferencePlugin 、 **auto-dll-webapck-plugin**
- 性能优化
    - 减少编译体积 Tree-shaking 、 Scope Hositing
    - hash 缓存 **webpack-md5-plugin**
    - 拆包 **splitChunksPlugin** 、 import() 、 require.ensure

