<!--
 * @Author: 曹捷
 * @Date: 2022-06-08 17:34:39
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-09 15:52:54
 * @Description: fileContent
-->
# Webpack相关
[webpack官方文档](https://webpack.docschina.org/concepts/)
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
##  Babel 原理
- 本质就是编译器，当代码转为字符串⽣成 **AST** ，对 AST 进⾏转变最后再⽣成新的代码
- 分为三步：
    - 词法分析⽣成 Token ，
    - 语法分析⽣成 AST ，
    - 遍历 AST ，根据插件变换相应的节点，最后把 AST 转换为代码



## Loader
[Loader](https://webpack.docschina.org/concepts/loaders) 用于对模块的**源代码进行转换**。loader 可以使你在 import 或 "load(加载)" 模块时预处理文件。
因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的得力方式。

loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS 文件！

webpack 只能理解 JavaScript 和 JSON 文件，这是 webpack 开箱可用的自带能力。 loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效 模块，以供应用程序使用，以及被添加到依赖图中。
:::warning
webpack 的其中一个强大的特性就是能通过 import 导入任何类型的模块（例如 .css 文件），其他打包程序或任务执行器的可能并不支持。我们认为这种语言扩展是很有必要的，因为这可以使开发人员创建出更准确的依赖关系图。
:::

在更高层面，在 webpack 的配置中，loader 有两个属性：
- test 属性，识别出哪些文件会被转换。
- use 属性，定义出在进行转换时，应该使用哪个 loader。

[编写⼀个loader](https://webpack.docschina.org/contribute/writing-a-loader/)
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

## ❤插件
[**插件**](https://webpack.docschina.org/concepts/plugins/) 是 webpack 的 支柱 功能。Webpack 自身也是构建于你在 webpack 配置中用到的 **相同的插件系统** 之上！

插件目的在于解决 loader 无法实现的其他事。Webpack 提供很多[开箱即用的插件](https://webpack.docschina.org/plugins/)

loader 用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。包括：**打包优化，资源管理，注入环境变量**。

webpack 插件是一个具有 apply 方法的 JavaScript 对象。apply 方法会被 webpack compiler 调用，并且在 **整个** 编译生命周期都可以访问 compiler 对象。


- 调⽤插件 apply 函数传⼊ compiler 对象
- 通过 **compiler** 对象监听事件
⽐如你想实现⼀个编译结束退出命令的插件
```js
apply (compiler) {
 const afterEmit = (compilation, cb) => {
    cb()
    setTimeout(function () {
        process.exit(0)
    }, 1000)
 }
 compiler.plugin('after-emit', afterEmit)
}
module.exports = BuildEndPlugin
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

