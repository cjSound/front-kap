# css 的渲染层合成是什么 浏览器如何创建新的渲染层
在 DOM 树中每个节点都会对应一个渲染对象（RenderObject），当它们的渲染对象处于相同的坐标空间（z 轴空间）时，就会形成一个 RenderLayers，也就是渲染层。渲染层将保证页面元素以正确的顺序堆叠，这时候就会出现层合成（composite），从而正确处理透明元素和重叠元素的显示。对于有位置重叠的元素的页面，这个过程尤其重要，因为一旦图层的合并顺序出错，将会导致元素显示异常。


浏览器如何创建新的渲染层


- 根元素 document


有明确的定位属性（relative、fixed、sticky、absolute）


opacity < 1


有 CSS fliter 属性


有 CSS mask 属性


有 CSS mix-blend-mode 属性且值不为 normal


有 CSS transform 属性且值不为 none


backface-visibility 属性为 hidden


有 CSS reflection 属性


有 CSS column-count 属性且值不为 auto 或者有 CSS column-width 属性且值不为 auto


当前有对于 opacity、transform、fliter、backdrop-filter 应用动画


overflow 不为 visible

DOM 节点和渲染对象是一一对应的，满足以上条件的渲染对象就能拥有独立的渲染层。当然这里的独立是不完全准确的，并不代表着它们完全独享了渲染层，由于不满足上述条件的渲染对象将会与其第一个拥有渲染层的父元素共用同一个渲染层，因此实际上，这些渲染对象会与它的部分子元素共用这个渲染层。

