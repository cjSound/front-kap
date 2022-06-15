# HTML、HTTP、web综合问题

## ❤前端需要注意哪些SEO
- 合理的  <ofont color="red" bold>title 、 description 、 keywords：</ofont>     搜索对着三项的权重逐个减⼩， title值强调重点即可，重要关键词出现不要超过2次，⽽且要靠前，不同⻚⾯ title 要有所不同； description 把⻚⾯内容⾼度概括，⻓度合适，不可过分堆砌关键词，不同⻚⾯description 有所不同； keywords 列举出重要关键词即可
- 语义化的 HTML 代码，符合W3C规范：语义化代码让搜索引擎容易理解⽹⻚
- 重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，有的搜索引擎对抓取⻓度有限制，保证重要内容⼀定会被抓取
- 重要内容不要⽤ js 输出：爬⾍不会执⾏js获取内容
- 少⽤ iframe ：搜索引擎不会抓取 iframe 中的内容
- ⾮装饰性图⽚必须加   <ofont color="red" bold>alt</ofont>    
- 提⾼⽹站速度：⽹站速度是搜索引擎排序的⼀个重要指标

##   img 的 title 和 alt 有什么区别
- 通常当⿏标滑动到元素上的时候显示
- alt 是 img 的特有属性，是图⽚内容的等价描述，⽤于图⽚⽆法加载时显示、读屏器阅读图⽚。可提图⽚⾼可访问性，除了纯装饰图⽚外都必须设置有意义的值，搜索引擎会重点分析。
## HTTP的⼏种请求⽅法⽤途
- GET ⽅法
  - 发送⼀个请求来取得服务器上的某⼀资源
- POST ⽅法
  - 向 URL 指定的资源提交数据或附加新的数据
- PUT ⽅法
  - 跟 POST ⽅法很像，也是想服务器提交数据。但是，它们之间有不同。 PUT 指定了资源在服务器上的位置，⽽ POST 没有
- HEAD ⽅法
  - 只请求⻚⾯的⾸部
- DELETE ⽅法
  - 删除服务器上的某资源
- OPTIONS ⽅法
  - 它⽤于获取当前 URL 所⽀持的⽅法。如果请求成功，会有⼀个 Allow 的头包含类似 “GET,POST” 这样的信息
- TRACE ⽅法
  - TRACE ⽅法被⽤于激发⼀个远程的，应⽤层的请求消息回路
- CONNECT ⽅法
  - 把请求连接转换到透明的 TCP/IP 通道




##  HTTP状态码及其含义
- 1XX ：信息状态码
  - 100 Continue 继续，⼀般在发送 post 请求时，已发送了 http header 之后服务端 将返回此信息，表示确认，之后发送具体参数信息
- 2XX ：成功状态码
  - **200 OK** 正常返回信息
  - 201 Created 请求成功并且服务器创建了新的资源
  - 202 Accepted 服务器已接受请求，但尚未处理
- 3XX ：重定向
  - 301 Moved Permanently 请求的⽹⻚已永久移动到新位置。
  - 302 Found 临时性重定向。
  - 303 See Other 临时性重定向，且总是使⽤ GET 请求新的 URI 。
  - **304 Not Modified** ⾃从上次请求后，请求的⽹⻚未修改过。
- 4XX ：客户端错误
  - **400 Bad Request** 服务器⽆法理解请求的格式，客户端不应当尝试再次使⽤相同的内 容发起请求。
  - **401 Unauthorized** 请求未授权。
  - **403 Forbidden** 禁⽌访问。
  - **404 Not Found** 找不到如何与 URI 相匹配的资源。
- 5XX: 服务器错误
  - **500 Internal Server Error** 最常⻅的服务器端错误。
  - **503 Service Unavailable** 服务器端暂时⽆法处理请求（可能是过载或维护）。

## 语义化的理解
- ⽤正确的标签做正确的事情！
- **HTML** 语义化就是让⻚⾯的内容结构化，便于对浏览器、搜索引擎解析； 
- 在没有样式 **CSS** 情况下也以⼀种⽂档格式显示，并且是容易阅读的。 
- 搜索引擎的爬⾍依赖于标记来确定上下⽂和各个关键字的权重，利于 **SEO** 。 
- 使阅读源代码的⼈对⽹站更容易将⽹站分块，便于阅读维护理解

## 介绍⼀下你对浏览器内核的理解？
- 主要分成两部分：渲染引擎( **layout engineer 或 Rendering Engine** )和 **JS** 引擎 
- 渲染引擎：负责取得⽹⻚的内容（ HTML 、 XML 、图像等等）、整理讯息（例如加⼊CSS 等），以及计算⽹⻚的显示⽅式，然后会输出⾄显示器或打印机。浏览器的内核的不 同对于⽹⻚的语法解释会有不同，所以渲染的效果也不相同。所有⽹⻚浏览器、电⼦邮件 客户端以及其它需要编辑、显示⽹络内容的应⽤程序都需要内核
- JS 引擎则：解析和执⾏ **javascript** 来实现⽹⻚的动态效果 
- 最开始渲染引擎和 JS 引擎并没有区分的很明确，后来JS引擎越来越独⽴，内核就倾向于 只指渲染引擎
## html5有哪些新特性、移除了那些元素？
- HTML5 现在已经不是 SGML 的⼦集，主要是关于图像，位置，存储，多任务等功能的增加
  - 绘画 canvas
  - ⽤于媒介回放的 video 和 audio 元素
  - 本地离线存储 **localStorage** ⻓期存储数据，浏览器关闭后数据不丢失
  - **sessionStorage** 的数据在浏览器关闭后⾃动删除
  - 语意化更好的内容元素，⽐如 **article 、 footer 、 header 、 nav 、 section**
  - 表单控件， **calendar 、 date 、 time 、 email 、 url 、 search**
  - 新的技术 **webworker 、 websocket 、 Geolocation**
- 移除的元素：
  - 纯表现的元素： **basefont 、 big 、 center 、 font 、 s 、 strike 、 tt 、 u**
  - 对可⽤性产⽣负⾯影响的元素： **frame 、 frameset 、 noframes**

- ⽀持 HTML5 新标签：
  - IE8/IE7/IE6 ⽀持通过 document.createElement ⽅法产⽣的标签
  - 可以利⽤这⼀特性让这些浏览器⽀持 HTML5 新标签
  - 浏览器⽀持新标签后，还需要添加标签默认的样式  
- 当然也可以直接使⽤成熟的框架、⽐如 <ofont>html5shim</ofont>   


## HTML5 的离线储存怎么使用，工作原理是什么

- 在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。
### 原理：
- HTML5 的离线存储是基于一个新建的 .appcache 文件的缓存机制（不是存储技术）
- 通过这个文件上的解析清单离线存储资源，这些资源就会像 cookie 一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。
### 如何使用：
- （1）创建一个和 html 同名的 manifest 文件，然后在页面头部像下面一样加入一个
manifest 的属性。
`<html lang="en" manifest="index.manifest">`
- （2）在如下 cache.manifest 文件的编写离线存储的资源。
    ```
    CACHE MANIFEST
    #v0.11
    CACHE:
    js/app.js
    css/style.css
    NETWORK:
    resourse/logo.png
    FALLBACK:
    / /offline.html
    ```
  - CACHE: 表示需要离线存储的资源列表，由于包含 manifest 文件的页面将被自动离线存储，所以不需要把页面自身也列出来。
  - NETWORK: 表示在它下面列出来的资源只有在在线的情况下才能访问，他们不会被离线存储，所以在离线情况下无法使用这些资源。不过，如果在 CACHE 和 NETWORK 中有一个相同的资源，那么这个资源还是会被离线存储，也就是说 **CACHE 的优先级更高。**
  - FALLBACK: 表示如果访问第一个资源失败，那么就使用第二个资源来替换他，比如上面 这 个 文 件 表 示 的 就 是 如 果 访 问 根 目 录 下 任 何 一 个 资 源 失 败 了 ， 那 么 就 去 访 问offline.html 。
- （3）在离线状态时，操作 window.applicationCache 进行离线缓存的操作。
  如何更新缓存：
  - （1）更新 manifest 文件
  - （2）通过 javascript 操作
  - （3）清除浏览器缓存
- 注意事项：
  - （1）浏览器对缓存数据的容量限制可能不太一样（某些浏览器设置的限制是**每个站点5MB**）。
  - （2）如果 manifest 文件，或者内部列举的某**一个文件不能正常下载，整个更新过程都将失败**，浏览器继续全部使用老的缓存。
  - （3）引用 manifest 的 **html 必须与 manifest 文件同源，在同一个域下**。
  - （4）FALLBACK 中的资源必须和 manifest 文件**同源**。
  - （5）当一个资源被缓存后，该浏览器直接请求这个绝对路径也会访问缓存中的资源。
  - （6）站点中的其他页面即使没有设置 manifest 属性，**请求的资源如果在缓存中也从缓存中访问**。
  - （7）当 **manifest 文件发生改变时，资源请求本身也会触发更新**

## 浏览器是怎么对 HTML5 的离线储存资源进行管理和加载的呢？
- 在线的情况下，浏览器发现 html 头部有 **manifest** 属性，它会请求 manifest 文件，如果是第一次访问 **app** ，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。如果已经访问过 app 并且资源已经离线存储了，那么浏览器就会**使用离线的资源加载页面**，然后浏览器会*对比新的 manifest 文件与旧的 manifest 文件*，如果文件**没有发生改变，就不做任何操作**，如果文件改变了，那么就会**重新下载文件中的资源并进行离线存储**。
- 离线的情况下，浏览器就直接使用离线存储的资源

## 请描述⼀下 cookies ， sessionStorage 和 localStorage 的区别？
- cookie 是⽹站为了标示⽤户身份⽽储存在⽤户本地终端（Client Side）上的数据（通常
经过加密）
- cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回
传递
-  <ofont>sessionStorage 和 localStorage</ofont>      不会⾃动把数据发给服务器，仅在本地保存
- 存储⼤⼩：
  - cookie 数据⼤⼩不能超过4k
  - sessionStorage 和 localStorage 虽然也有存储⼤⼩的限制，但⽐ cookie ⼤得多，<ofont>可以达到5M或更⼤</ofont>
- 有期时间：
  - localStorage 存储持久数据，浏览器关闭后数据 <ofont>不丢失除⾮主动删除数据</ofont>
  - sessionStorage 数据在当前浏览器窗⼝关闭后 <ofont>⾃动删除</ofont>
  - cookie 设置的 cookie 过期时间之前⼀直有效，即使窗⼝或浏览器关闭

##  iframe有那些缺点？
- iframe 会<ofont>阻塞主⻚⾯的 Onload </ofont>事件
- 搜索引擎的检索程序⽆法解读这种⻚⾯，不利于 SEO
- iframe 和<ofont>主⻚⾯共享连接池</ofont>，⽽浏览器对相同域的连接有限制，所以会<ofont> 影响⻚⾯的并⾏加载</ofont>
- 使⽤ iframe 之前需要考虑这两个缺点。如果需要使⽤ iframe ，最好是通过 <ofont>javascript 动态给 iframe 添加 src 属性值</ofont>，这样可以绕开以上两个问题

## xhtml和html有什么区别?
- ⼀个是功能上的差别 <ofont>XHTML 是更严格更纯净的 HTML 代码。</ofont>
  - 主要是 <ofont>XHTML 可兼容各⼤浏览器</ofont>、⼿机以及 PDA ，并且浏览器也能快速正确地编译⽹⻚
- 文档结构
  - XHTML **DOCTYPE** 是强制性的
  - `<html> 中的 XML namespace 属性是强制性的`
  - `<html>、<head>、<title> 以及 <body> 也是强制性的`
- 元素语法
  - XHTML 元素必须正确嵌套
  - XHTML 元素必须始终关闭
  - XHTML 元素必须小写
  - XHTML 文档必须有一个根元素
- 属性语法
  - XHTML 属性必须使用小写
  - XHTML 属性值必须用引号包围
  - XHTML 属性最小化也是禁止的
## Doctype作⽤? 严格模式与混杂模式如何区分？它们有何意义?

- ⻚⾯被加载的时， link 会同时被加载，⽽ @import ⻚⾯被加载的时， link 会同时被加
载，⽽ @import 引⽤的 CSS 会**等到⻚⾯被加载完再加**载 
- import 只在 IE5 以上才能识别，⽽ link 是 XHTML 标签，**⽆兼容问题** link ⽅式的样式的 **权重 ⾼于 @import 的权重**
- `<!DOCTYPE>` 声明位于⽂档中的最前⾯，处于 `<html>` 标签之前。告知浏览器的解析器， ⽤什么⽂档类型 规范来解析这个⽂档
- 严格模式的排版和 JS 运作模式是 以该浏览器⽀持的最⾼标准运⾏
- 在混杂模式中，⻚⾯以宽松的向后兼容的⽅式显示。模拟⽼式浏览器的⾏为以防⽌站点⽆法⼯作。 DOCTYPE 不存在或格式不正确会导致⽂档以混杂模式呈现

## ❤⾏内元素有哪些？块级元素有哪些？ 空(void)元素有那些？⾏内元素和块级元素有什么区别？

- ⾏内元素有：<ofont> a b span img input select strong</ofont>
- 块级元素有： <ofont>div ul ol li dl dt dd h1 h2 h3 h4… p</ofont>
- 空元素：  **`<br> <hr> <img> <input> <link> <meta>`**
- ⾏内元素不可以设置宽⾼，不独占⼀⾏
- 块级元素可以设置宽⾼，独占⼀⾏


## HTML全局属性(global attribute)有哪些
  - class :为元素设置类标识
  - **data-*** : 为元素增加⾃定义属性
  - draggable : 设置元素是否可拖拽
  - id : 元素 id ，⽂档内唯⼀
  - **lang** : 元素内容的的语⾔
  - style : ⾏内 css 样式
  - title : 元素相关的建议信息

## Canvas和SVG有什么区别？

- svg 绘制出来的每⼀个图形的元素都是独⽴的** DOM 节点**，能够⽅便的**绑定事件或⽤来修改**。 canvas 输出的是 **⼀整幅画布**

- svg 输出的图形是⽮量图形，后期可以修改参数来⾃由放⼤缩⼩，**不会失真和锯⻮**。⽽canvas 输出标量画布，就像⼀张图⽚⼀样，放⼤会失真或者锯⻮


## HTML5 为什么只需要写 `<!DOCTYPE HTML>`
- HTML5 不基于 SGML ，因此不需要对 DTD 进⾏引⽤，但是需要 doctype 来规范浏览器的⾏为
- ⽽ HTML4.01 基于 SGML ,所以需要对 DTD 进⾏引⽤，才能告知浏览器⽂档所使⽤的⽂档类型

##  如何在⻚⾯上实现⼀个圆形的可点击区域？
- svg
- border-radius
- 纯 js 实现 需要求⼀个点在不在圆上简单算法、获取⿏标坐标等等


## ⽹⻚验证码是⼲嘛的，是为了解决什么安全问题
- 区分⽤户是计算机还是⼈的公共全⾃动程序。可以防⽌恶意破解密码、刷票、论坛灌⽔
- 有效防⽌⿊客对某⼀个特定注册⽤户⽤特定程序暴⼒破解⽅式进⾏不断的登陆尝试

## ❤viewport

```HTML
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimu
 // width 设置viewport宽度，为⼀个正整数，或字符串‘device-width’
 // device-width 设备宽度
 // height 设置viewport⾼度，⼀般设置了宽度，会⾃动解析出⾼度，可以不⽤设置
 // initial-scale 默认缩放⽐例（初始缩放⽐例），为⼀个数字，可以带⼩数
 // minimum-scale 允许⽤户最⼩缩放⽐例，为⼀个数字，可以带⼩数
 // maximum-scale 允许⽤户最⼤缩放⽐例，为⼀个数字，可以带⼩数
 // user-scalable 是否允许⼿动缩放
```
### 延伸提问 怎样处理 移动端 1px 被 渲染成 2px 问题
- 局部处理
  - mate 标签中的 viewport 属性 ， initial-scale 设置为 1
  - rem 按照设计稿标准⾛，外加利⽤ transfrome 的 scale(0.5) 缩⼩⼀倍即可
- 全局处理
  - mate 标签中的 viewport 属性 ， initial-scale 设置为 0.5
  - rem 按照设计稿标准⾛即可

##  meta viewport相关

```html
<!DOCTYPE html> <!--H5标准声明，使⽤ HTML5 doctype，不区分⼤⼩写-->
<head lang=”en”> <!--标准的 lang 属性写法-->
<meta charset=’utf-8′> <!--声明⽂档使⽤的字符编码-->
<meta http-equiv=”X-UA-Compatible” content=”IE=edge,chrome=1″/> <!--优先使
<meta name=”description” content=”不超过150个字符”/> <!--⻚⾯描述-->
<meta name=”keywords” content=””/> <!-- ⻚⾯关键词-->
<meta name=”author” content=”name, email@gmail.com”/> <!--⽹⻚作者-->
<meta name=”robots” content=”index,follow”/> <!--搜索引擎抓取-->
<meta name=”viewport” content=”initial-scale=1, maximum-scale=3, minimum-sc
<meta name=”apple-mobile-web-app-title” content=”标题”> <!--iOS 设备 begin-->
<meta name=”apple-mobile-web-app-capable” content=”yes”/> <!--添加到主屏后的标
是否启⽤ WebApp 全屏模式，删除苹果默认的⼯具栏和菜单栏-->
<meta name=”apple-itunes-app” content=”app-id=myAppStoreID, affiliate-data=
<!--添加智能 App ⼴告条 Smart App Banner（iOS 6+ Safari）-->
<meta name=”apple-mobile-web-app-status-bar-style” content=”black”/>
<meta name=”format-detection” content=”telphone=no, email=no”/> <!--设置苹果
<meta name=”renderer” content=”webkit”> <!-- 启⽤360浏览器的极速模式(webkit)-->
<meta http-equiv=”X-UA-Compatible” content=”IE=edge”> <!--避免IE使⽤兼容模
<meta http-equiv=”Cache-Control” content=”no-siteapp” /> <!--不让百度转码-
<meta name=”HandheldFriendly” content=”true”> <!--针对⼿持设备优化，主要是针
<meta name=”MobileOptimized” content=”320″> <!--微软的⽼式浏览器-->
<meta name=”screen-orientation” content=”portrait”> <!--uc强制竖屏-->
<meta name=”x5-orientation” content=”portrait”> <!--QQ强制竖屏-->
<meta name=”full-screen” content=”yes”> <!--UC强制全屏-->
<meta name=”x5-fullscreen” content=”true”> <!--QQ强制全屏-->
<meta name=”browsermode” content=”application”> <!--UC应⽤模式-->
<meta name=”x5-page-mode” content=”app”> <!-- QQ应⽤模式-->
<meta name=”msapplication-tap-highlight” content=”no”> <!--windows phone
设置⻚⾯不缓存-->
<meta http-equiv=”pragma” content=”no-cache”>
<meta http-equiv=”cache-control” content=”no-cache”>
<meta http-equiv=”expires” content=”0″>

```
## div+css的布局较table布局有什么优点
- 改版的时候更⽅便 只要改 css ⽂件。
- ⻚⾯加载速度更快、结构化清晰、⻚⾯显示简洁。
- 表现与结构相分离。
- 易于优化（ seo ）搜索引擎更友好，排名更容易靠前。

## img的alt与title有何异同？
- alt(alt text) :倘若图片加载不成功未能显示出来，就 **`会在图片未显示的地方出现一段文字`**。这一作用是为了给未加载出来的图片提供信息，方便用户浏览网页，同时也方便开发人员维护网页。
- title(tool tip) :该属性为设置该属性的元素提供 **建议性的信息**

## strong与em的异同？
- strong : 粗体**强调标签**，强调，表示内容的重要性
- em :斜体强调标签，**更强烈强调**，表示内容的强调点  

## 渐进增强和优雅降级之间的异同
- 渐进增强：针对低版本浏览器进⾏构建⻚⾯，保证最基本的功能，然后再针对⾼级浏览器进⾏效果、交互等改进和追加功能达到更好的⽤户体验。
- 优雅降级：⼀开始就构建完整的功能，然后再针对低版本浏览器进⾏兼容。

::: tip  区别
优雅降级是从复杂的现状开始，并试图减少⽤户体验的供给，⽽渐进增强则是从⼀个⾮常基础的，能够起作⽤的版本开始，并不断扩充，以适应未来环境的需要。

降级（功能衰减）意味着往回看；⽽渐进增强则意味着朝前看，同时保证其根基处于安全地带
:::

## ❤为什么利⽤多个域名来存储⽹站资源会更有效

- CDN 缓存更⽅便
- 突破浏览器并发限制
- 节约 cookie 带宽
- 节约主域名的连接数，优化⻚⾯响应速度
- 防⽌不必要的安全问题


## ❤src与href的区别
- src ⽤于**替换当前元素**，href⽤于在当前⽂档和引⽤资源之间**确⽴联系**。
- src 是 source 的缩写，指向外部资源的位置，指向的内容将会嵌⼊到⽂档中当前标签所在位置；在请求 src 资源时会将其指向的资源下载并应⽤到⽂档内，例如<ofont> js 脚本，img 图⽚和 frame</ofont> 等元素
::: tip JS脚本会阻塞
`<script src ="js.js"></script>` 当浏览器解析到该元素时，会 <ofont> 暂停其他资源的下载和处理</ofont>，直到将该资源加载、编译、执⾏完毕

<ofont>图⽚和框架等元素也如此</ofont>，类似于将所指向资源嵌⼊当前标签内。这也是为什么 <ofont>将js脚本放在底部⽽不是头部</ofont>

::: 
- href 是 **Hypertext Reference** 的缩写，指向⽹络资源所在位置，建⽴和当前元素（锚点）或当前⽂档（链接）之间的链接，如果我们在⽂档中添加
- `<link href="common.css" rel="stylesheet"/>` 那么浏览器会识别该⽂档为 css ⽂件，就会 **并⾏下载资源**并且**不会停⽌对当前⽂档的处理**。
- 这也是为什么建议使⽤ link ⽅式来加载 css ，⽽不是使⽤ @import ⽅式



## 常⻅排序算法的时间复杂度,空间复杂度
| 排序方法| 平均情况 | 最好情况 | 最坏情况 | 辅助空间 |  
| :------ | ------ | ------ | ------ | ------ |  
| 直接插入 | O(n²) |  O(n) |O(n²) | O(1) |  
| 希尔排序 | O(nlog₂n)~ O(n²) |  O(n) |O(n²) | O(1) |  
| 冒泡排序 | O(n²) |  O(n) |O(n²) | O(1) |  
| 快速排序 | O(nlog₂n)  |  O(nlog₂n) |O(n²) | O(log₂n)~O(n) |  
| 简单选择| O(n²) |  O(n²) |O(n²) | O(1) |  
| 堆排序| O(nlog₂n) | O(nlog₂n) | O(nlog₂n) | O(1) |  

## ☆ web开发中会话跟踪的⽅法有哪些
### 回话跟踪原因
- 浏览器与服务器之间的通信是通过HTTP协议进行通信的，而HTTP协议是“无状态”的协议（早期主要用于web端获取内容，浏览了就结束，没有考虑交互的场景，所以服务器不会保留与用户交易的任何状态），客户端与服务器之间的联系是离散的、非连续的。
- 多次请求，无法根据前后的请求来判断是否是同一个用户，面对越来越多的交互场景，会话跟踪技术应运而生。
### 会话跟踪技术
- cookie
  - 当用户第一次请求服务时，Cookie信息会随着服务器端的响应发送给客户端浏览器，然后客户都浏览器会把Cookie保存起来，当下一次客户端在发起请求时携带此信息作为用户的唯一标识发送给服务器。


- session
- url 重写
  - 客户程序在每个URL的尾部添加一些额外数据（以键值对的形式传递），这些数据标识当前的会话，服务器将这个标识符与它存储的用户相关数据关联起来。通常是添加 sessionID作为会话信息的标识。
  - 对于重写的URL，服务器端程序要做许多简单但是冗长乏味的处理任务。
  - 通过Servlet容器解释URL，将对应的会话信息SessionId从URL中读取出来
  - 通过SessionId将请求和特定的Session关联，确认为同一会话
  - 完成服务处理，发送给服务端的URL也进行重写编码
- 隐藏 input
  - 隐藏form表单，

<obit-gif/>
<ofont></ofont>