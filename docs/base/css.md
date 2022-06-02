# CSS模块
## css sprite是什么,有什么优缺点
- 概念：将多个⼩图⽚拼接到⼀个图⽚中。通过 background-position 和元素尺⼨调节需要显示的背景图案。
- 优点：
    - 减少 HTTP 请求数，极⼤地提⾼⻚⾯加载速度
    - 增加图⽚信息重复度，提⾼压缩⽐，减少图⽚⼤⼩
    - 更换⻛格⽅便，只需在⼀张或⼏张图⽚上修改颜⾊或样式即可实现
- 缺点：
    - 图⽚合并麻烦
    - 维护麻烦，修改⼀个图⽚可能需要从新布局整个图⽚，样式

## display: none; 与 visibility: hidden; 的区别
- 联系：它们都能让元素不可⻅

- 区别：
    - display:none ;会让元素完全从渲染树中消失，渲染的时候不占据任何空间；
    - visibility: hidden ;不会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可⻅
    - display: none ;是⾮继承属性，⼦孙节点消失由于元素从渲染树消失造成，通过修改⼦孙节点属性⽆法显示 ；visibility: hidden; 是继承属性，⼦孙节点消失由于继承了 hidden ，通过设置 **visibility: visible; 可以让⼦孙节点显式**
    - 修改常规流中元素的 display 通常会造成⽂档重排。修改 visibility 属性只会造成本元素的重绘。
    - 读屏器不会读取 display: none ;元素内容；会读取 visibility: hidden; 元素内容
## link 与 @import 的区别
1. link 是 HTML ⽅式， @import 是CSS⽅式
2. link **最⼤限度⽀持并⾏下载**， @import 过多**嵌套导致串⾏下载**，出现 FOUC (⽂档样式短暂失效)
3. link 可以通过 rel="alternate stylesheet" 指定候选样式
4. 浏览器对 link ⽀持早于 @import ，可以使⽤ @import 对⽼浏览器隐藏样式
5. @import 必须在样式规则之前，可以在**css⽂件中引⽤其他⽂件**
6. 总体来说： link 优于 @import

## 什么是FOUC?如何避免

- **Flash Of Unstyled Content** ：⽤户定义样式表加载之前浏览器使⽤默认样式显示⽂档，⽤户样式加载渲染之后再从新显示⽂档，造成⻚⾯闪烁。
- 解决⽅法：把样式表放到⽂档的 `<head>`

## ❤如何创建块级格式化上下⽂(block formatting context),BFC有什么⽤
### 什么是BFC
- BFC - Block Formatting Context 块级格式化上下文 BFC的定义，在官方文档到中是这么介绍的：
- 一个BFC区域 <ofont>包含创建该上下文元素的所有子元素</ofont>，但是不包括创建了新的BFC的子元素的内部元素，BFC是 <ofont>一块块独立的渲染区域</ofont>，可以将BFC看成是元素的一种属性，拥有了这种属性的元素就会使他的<ofont>子元素与世隔绝，不会影响到外部其他元素</ofont>
### 如何创建
- 创建规则：
    - 根元素
    - 浮动元素（ float 不取值为 none ）
    - 绝对定位元素（ position 取值为 absolute 或 fixed ）
- display 取值为 inline-block 、 table-cell 、 table-caption 、 flex
- inline-flex 之⼀的元素
- overflow 不取值为 visible 的元素
- 作⽤：  
    - 可以包含浮动元素
    - 不被浮动元素覆盖
    - 阻⽌⽗⼦元素的 margin 折叠

## display、float、position的关系

- 如果 display 取值为 none ，那么 position 和 float 都不起作⽤，这种情况下元素不产⽣框
- 否则，如果 position 取值为 absolute 或者 fixed ，框就是绝对定位的， float 的计算值为 none ， display 根据下⾯的表格进⾏调整。
- 否则，如果 float 不是 none ，框是浮动的， display 根据下表进⾏调整
- 否则，如果元素是根元素， display 根据下表进⾏调整
- 其他情况下 display 的值为指定值
- 总结起来：绝对定位、浮动、根元素都需要调整 display


## ☆清除浮动的⼏种⽅式，各⾃的优缺点
- ⽗级 div 定义 height
- 结尾处加空 div 标签 clear:both
- ⽗级 div 定义伪类 :after 和 zoom
- ⽗级 div 定义 overflow:hidden
- ⽗级 div 也浮动，需要定义宽度
- 结尾处加 br 标签 clear:both

:::demo xxx 支持md
css/float
:::


## css3有哪些新特性 新增各种 css 选择器 圆⻆ border-radius
- 多列布局
- 阴影和反射 ⽂字特效 text-shadow
- 线性渐变 旋转 transform

## CSS3新增伪类有那些？
- p:first-of-type 选择属于其⽗元素的⾸个 `<p>` 元素的每个 `<p>` 元素。
- p:last-of-type 选择属于其⽗元素的最后 `<p>` 元素的每个 `<p>` 元素。
- p:only-of-type 选择属于其⽗元素唯⼀的 `<p>` 元素的每个 `<p>` 元素。
- p:only-child 选择属于其⽗元素的唯⼀⼦元素的每个 `<p>` 元素。
- p:nth-child(2) 选择属于其⽗元素的第⼆个⼦元素的每个 `<p>` 元素。
- :after 在元素之前添加内容,也可以⽤来做清除浮动。
- :before 在元素之后添加内容。
- :enabled 已启⽤的表单元素。
- :disabled 已禁⽤的表单元素。
- :checked 单选框或复选框被选中。

## 10 display有哪些值？说明他们的作⽤
- block 转换成块状元素。
- inline 转换成⾏内元素。
- none 设置元素不可⻅。
- inline-block 象⾏内元素⼀样显示，但其内容象块类型元素⼀样显示。
- list-item 象块类型元素⼀样显示，并添加样式列表标记。
- table 此元素会作为块级表格来显示
- inherit 规定应该从⽗元素继承 display 属性的值


## 介绍⼀下标准的CSS的盒⼦模型？低版本IE的盒⼦模型有什么不同 的？
- 有两种， IE 盒⼦模型、 W3C 盒⼦模型； 
- 盒模型： 内容(content)、填充( padding )、边界( margin )、 边框( border )； 
- 区 别： IE 的c ontent 部分把 border 和 padding 计算了进去;


## CSS优先级算法如何计算？ 
- 优先级就近原则，同权重情况下样式定义最近者为准 
- 载⼊样式以最后载⼊的定位为准 
- 优先级为: !important > id > class > tag ; !important ⽐ 内联优先级⾼
## 对BFC规范的理解？
- 它决定了元素如何对其内容进⾏定位,以及与其他元素的关系和相互作⽤

## 谈谈浮动和清除浮动
- 浮动的框可以向左或向右移动，直到他的外边缘碰到包含框或另⼀个浮动框的边框为⽌。 由于浮动框不在⽂档的普通流中，所以⽂档的普通流的块框表现得就像浮动框不存在⼀ 样。浮动的块框会漂浮在⽂档普通流的块框上
## position的值， relative和absolute定位原点是
- absolute ：⽣成绝对定位的元素，相对于 static 定位以外的第⼀个⽗元素进⾏定位
- fixed ：⽣成绝对定位的元素，相对于浏览器窗⼝进⾏定位
- relative ：⽣成相对定位的元素，相对于其正常位置进⾏定位
- static 默认值。没有定位，元素出现在正常的流中
- inherit 规定从⽗元素继承 position 属性的值


## display:inline-block 什么时候不会显示间隙？

- 移除空格 
- 使⽤ margin 负值

- 使⽤ font-size:0
- letter-spacing
- word-spacing

## PNG\GIF\JPG的区别及如何选

- GIF
    - 8 位像素， 256 ⾊
    - ⽆损压缩 
    - ⽀持简单动画 
    - ⽀持 boolean 透明 
    - 适合简单动画
- JPEG
    - 颜⾊限于 256
    - 有损压缩 
    - 可控制压缩质量
    - 不⽀持透明 
    - 适合照⽚
- PNG
    - 有 PNG8 和 truecolor PNG
    - PNG8 类似 GIF 颜⾊上限为 256 ，⽂件⼩，⽀持 alpha 透明度，⽆动画 
    - 适合图标、背景、按钮
## ⾏内元素float:left后是否变为块级元素？

::: tip 
- ⾏内元素设置成浮动之后变得更加像是 inline-block （⾏内块级元素，设置 成这个属性的元素会同时拥有⾏内和块级的特性，最明显的不同是它的默认宽 度不是 100% ），这时候给⾏内元素设置 padding-top 和 padding-bottom
- 或者 width 、 height 都是有效果的
:::
## 在⽹⻚中的应该使⽤奇数还是偶数的字体？为什么呢？
- 偶数字号相对更容易和 web 设计的其他部分构成⽐例关系

## ::before 和 :after中双冒号和单冒号 有什么区别？解释⼀下这2个 伪元素的作⽤
- 单冒号( : )⽤于 CSS3 伪类，双冒号( :: )⽤于 CSS3 伪元素 
- ⽤于区分伪类和伪元素

## 如果需要⼿动写动画，你认为最⼩时间间隔是多久，为什么？（阿 ⾥）
- 多数显示器默认频率是 60Hz ，即 1 秒刷新 60 次，所以理论上最⼩间隔为
- 1/60*1000ms ＝ 16.7ms
## CSS合并⽅法
- 避免使⽤ @import 引⼊多个 css ⽂件，可以使⽤ CSS ⼯具将 CSS 合并为⼀个 CSS ⽂ 件，例如使⽤ Sass\Compass 等


## CSS不同选择器的权重(CSS层叠的规则)
- ！important 规则最重要，⼤于其它规则 
- ⾏内样式规则，加 1000
- 对于选择器中给定的各个 ID 属性值，加 100
- 对于选择器中给定的各个类属性、属性选择器或者伪类选择器，加 10
- 对于选择其中给定的各个元素标签选择器，加1 如果权值⼀样，则按照样式规则的先后顺序来应⽤，顺序靠后的覆盖靠前的规则



## 列出你所知道可以改变⻚⾯布局的属性

- position 、 display 、 float 、 width 、 height 、 margin 、 padding 、top 、 left 、 right


## CSS在性能优化⽅⾯的实践

- css 压缩与合并、 Gzip 压缩
- css ⽂件放在 head ⾥、不要⽤ @import
- 尽量⽤缩写、避免⽤滤镜、合理使⽤选择器

## CSS3动画（简单动画的实现，如旋转等）

- 依靠 CSS3 中提出的三个属性： transition 、 transform 、 animation
- transition ：定义了元素在变化过程中是怎么样的，包含 transition-property 、
- transition-duration 、 transition-timing-function 、 transition-delay 。
- transform ：定义元素的变化结果，包含 rotate 、 scale 、 skew 、 translate 。
- animation ：动画定义了动作的每⼀帧（ @keyframes ）有什么效果，包括 animation-name ， animation-duration 、 animation-timing-function 、 animation-delay 、animation-iteration-count 、 animation-direction


## base64的原理及优缺点
- 优点可以加密，减少了 HTTTP 请求 
- 缺点是需要消耗 CPU 进⾏编解码

## ⼏种常⻅的CSS布局
### 流体布局
::: demo 
css/layout
:::
### 双⻜翼布局
::: demo 
css/layoutB
:::

## stylus/sass/less区别
- 均具有“变量”、“混合”、“嵌套”、“继承”、“颜⾊混合”五⼤基本特性
- Scss 和 LESS 语法较为严谨， LESS 要求⼀定要使⽤⼤括号“{}”， Scss 和 Stylus 可 以通过缩进表示层次与嵌套关系
- Scss ⽆全局变量的概念， LESS 和 Stylus 有类似于其它语⾔的作⽤域概念
- Sass 是基于 Ruby 语⾔的，⽽ LESS 和 Stylus 可以基于 NodeJS NPM 下载相应库后 进⾏编译

## postcss的作⽤
- 可以直观的理解为：它就是⼀个平台。为什么说它是⼀个平台呢？因为我们直接⽤它，感 觉不能⼲什么事情，但是如果让⼀些插件在它上⾯跑，那么将会很强⼤
- PostCSS 提供了⼀个解析器，它能够将 CSS 解析成抽象语法树
- 通过在 PostCSS 这个平台上，我们能够开发⼀些插件，来处理我们的 CSS ，⽐如热⻔ 的： autoprefixer
- postcss 可以对sass处理过后的 css 再处理 最常⻅的就是 autoprefixer




## 伪类和伪元素的区别
伪类表状态 
伪元素是真的有元素 
前者单冒号，后者双冒号


## ☆⾃适应布局
思路：
左侧浮动或者绝对定位，然后右侧 margin 撑开 
使⽤ `<div>` 包含，然后靠负 margin 形成 bfc
使⽤ flex


## 请⽤CSS写⼀个简单的幻灯⽚效果⻚⾯

::: tip  CSS3
知道是要⽤ CSS3 。使⽤ animation 动画实现⼀个简单的幻灯⽚效果
:::

::: demo 幻灯片
css/card
:::

## 什么是外边距重叠？重叠的结果是什么？
::: tip   
外边距重叠就是margin-collapse
:::
- 在CSS当中，相邻的两个盒⼦（可能是兄弟关系也可能是祖先关系）的外边距可以结合成
⼀个单独的外边距。这种合并外边距的⽅式被称为折叠，并且因⽽所结合成的外边距称为
折叠外边距。

- 折叠结果遵循下列计算规则：

    - 两个相邻的外边距都是正数时，折叠结果是它们两者之间较⼤的值。
    - 两个相邻的外边距都是负数时，折叠结果是两者绝对值的较⼤值。
    - 两个外边距⼀正⼀负时，折叠结果是两者的相加的和。
## rgba()和opacity的透明效果有什么不同？
- rgba() 和 opacity 都能实现透明效果，但最⼤的不同是 opacity 作⽤于元素，以及元素内的所有内容的透明度，
- ⽽ rgba() 只作⽤于元素的颜⾊或其背景⾊。（设置 rgba 透明的元素的⼦元素不会继承透明效果！）

## css中可以让⽂字在垂直和⽔平⽅向上重叠的两个属性是什么？
- 垂直⽅向： line-height
- ⽔平⽅向： letter-spacing


##  如何垂直居中⼀个浮动元素？
::: demo 
css/cloumCenter
:::


## px和em的区别

- px 和 em 都是⻓度单位，区别是， px 的值是固定的，指定是多少就是多少，计算⽐较容易。 em 得值不是固定的，并且 em 会继承⽗级元素的字体⼤⼩。
- 浏览器的默认字体⾼都是 16px 。所以未经调整的浏览器都符合: 1em=16px 。那么 **12px=0.75em , 10px=0.625em 。**

## Sass、LESS是什么？⼤家为什么要使⽤他们？


- 他们是 CSS 预处理器。他是 CSS 上的⼀种抽象层。他们是⼀种特殊的语法/语⾔编译成CSS 。
- 例如Less是⼀种动态样式语⾔. 将CSS赋予了动态语⾔的特性，如变量，继承，运算， 函数. LESS 既可以在客户端上运⾏ (⽀持 IE 6+ , Webkit , Firefox )，也可⼀在服务端运⾏ (借助 Node.js )

### 为什么要使⽤它们？

- 结构清晰，便于扩展。
- 可以⽅便地屏蔽浏览器私有语法差异。这个不⽤多说，封装对- 浏览器语法差异的重复处理，减少⽆意义的机械劳动。
- 可以轻松实现多重继承。
- 完全兼容 CSS 代码，可以⽅便地应⽤到⽼项⽬中。LESS 只- 是在 CSS 语法上做了扩展，
- 所以⽼的 CSS 代码也可以与 LESS 代码⼀同编译


## 知道css有个content属性吗？有什么作⽤？有什么应⽤？

:::tip content
css的 content 属性专⻔应⽤在 before/after 伪元素上，⽤于来插⼊⽣成
内容。最常⻅的应⽤是利⽤伪类清除浮动。
:::

### ⽔平居中的⽅法

- 元素为⾏内元素，设置⽗元素 text-align:center
- 如果元素宽度固定，可以设置左右 margin 为 auto ;
- 如果元素为绝对定位，设置⽗元素 position 为 relative ，元素设left:0;right:0;margin:auto;
- 使⽤ flex-box 布局，指定 justify-content 属性为center
- display 设置为 tabel-ceil


## 如何使⽤CSS实现硬件加速？
:::tip 
硬件加速是指通过创建独⽴的复合图层，让GPU来渲染这个图层，从⽽提⾼性
能，

:::

- ⼀般触发硬件加速的 CSS 属性有 transform 、 opacity 、 filter ，为了避免2D动画在 开始和结束的时候的 repaint 操作，⼀般使⽤ **tranform:translateZ(0)**


## ❤重绘和回流（重排）是什么，如何避免？
- DOM的变化影响到了元素的⼏何属性（宽⾼）,浏览器重新计算元素的⼏何属性，其他元素的⼏何
- 属性和位置也会受到影响，浏览器需要重新构造渲染树，这个过程称为重排，浏览器将受
- 到影响的部分
- 重新绘制到屏幕上的过程称为重绘。引起重排的原因有
    - 添加或者删除可⻅的DOM元素，
    - 元素位置、尺⼨、内容改变，
    - 浏览器⻚⾯初始化，
    - 浏览器窗⼝尺⼨改变，重排⼀定重绘，重绘不⼀定重排，
### 减少重绘和重排的⽅法：
- 不在布局信息改变时做 DOM 查询
- 使⽤ cssText 或者 className ⼀次性改变属性
- 使⽤ fragment
- 对于多次重排的元素，如动画，使⽤绝对定位脱离⽂档流，让他的改变不影响到其他元素

## ❤说⼀说css3的animation
- css3的 animation 是css3新增的动画属性，这个css3动画的每⼀帧是通过 @keyframes来声明的， keyframes 声明了动画的名称，通过 from 、 to 或者是百分⽐来定义
- 每⼀帧动画元素的状态，通过 animation-name 来引⽤这个动画，同时css3动画也可以定义动画运⾏的时⻓、动画开始时间、动画播放⽅向、动画循环次数、动画播放的⽅式，
- 这些相关的动画⼦属性有： animation-name 定义动画名、 animation-duration 定义动画播放的时⻓、 animation-delay 定义动画延迟播放的时间、 animationdirection 定义 动画的播放⽅向、 animation-iteration-count 定义播放次数、
- animation-fill-mode 定义动画播放之后的状态、 animation-play-state 定义播放状态，如暂停运⾏等、 animation-timing-function
- 定义播放的⽅式，如恒速播放、艰涩播放等。

## ❤ 左边宽度固定，右边⾃适应

:::tip
左侧固定宽度，右侧⾃适应宽度的两列布局实现
:::

:::demo
css/layoutLR
:::

##  ❤两种以上⽅式实现已知或者未知宽度的垂直⽔平居中
:::demo
css/center
:::

## 如何实现⼩于12px的字体效果
:::tip transform:scale()  
transform:scale() 这个属性只可以缩放可以定义宽⾼的元素，⽽⾏内元素
是没有宽⾼的，我们可以加上⼀个 display:inline-block ;
:::
- css 的属性，可以缩放⼤⼩ transform: scale(0.7);






<ofont></ofont>