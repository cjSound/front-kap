import{_ as n,a as s}from"./app.84c19619.js";const a={},p=s(`<h1 id="react\u5B66\u4E60\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#react\u5B66\u4E60\u7B14\u8BB0" aria-hidden="true">#</a> React\u5B66\u4E60\u7B14\u8BB0</h1><h2 id="\u5F00\u53D1\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u601D\u8DEF" aria-hidden="true">#</a> \u5F00\u53D1\u601D\u8DEF</h2><ul><li>\u786E\u5B9A UI state \u7684\u6700\u5C0F\uFF08\u4E14\u5B8C\u6574\uFF09\u8868\u793A</li></ul><h2 id="\u7EC4\u4EF6react-fc-hook" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6react-fc-hook" aria-hidden="true">#</a> \u7EC4\u4EF6React.FC Hook</h2><ul><li>\u51FD\u6570\u5F0F\u7EC4\u4EF6</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> cache <span class="token operator">=</span> <span class="token keyword">undefined</span>
<span class="token keyword">const</span> <span class="token function-variable function">useState</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">defaultValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cache <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> cache <span class="token operator">=</span> defaultValue
    <span class="token keyword">return</span> <span class="token punctuation">[</span>cache<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span> cache <span class="token operator">=</span> v <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> cacheEffect
<span class="token keyword">let</span> cacheEffectDeps
<span class="token keyword">let</span> needRun
<span class="token keyword">const</span> <span class="token function-variable function">useEffect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">effect<span class="token punctuation">,</span> deps</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    needRun <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">diff</span><span class="token punctuation">(</span>deps<span class="token punctuation">,</span> cacheEffectDeps<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cacheEffect <span class="token operator">=</span> effect
        cacheEffectDeps <span class="token operator">=</span> deps
        needRun <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>needRun<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        App<span class="token punctuation">.</span><span class="token function">afterRender</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">cacheEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="classname-hash" tabindex="-1"><a class="header-anchor" href="#classname-hash" aria-hidden="true">#</a> className hash?</h2><h2 id="\u751F\u547D\u5468\u671F-\u53EA\u5728class\u7EC4\u4EF6\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F-\u53EA\u5728class\u7EC4\u4EF6\u751F\u6548" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F \u53EA\u5728class\u7EC4\u4EF6\u751F\u6548\uFF1F</h2><ul><li>\u521D\u59CB\u5316(Initialization) constructor()\u662FJS\u4E2D\u539F\u751F\u7C7B\u7684\u6784\u9020\u51FD\u6570\uFF0C\u7406\u8BBA\u4E0A\u4ED6\u4E0D\u4E13\u5C5E\u4E8E\u7EC4\u4EF6\u7684\u521D\u59CB\u5316\uFF0C\u4F46\u662F\u5982\u679C\u628A\u5B83\u5F52\u7C7B\u6210\u7EC4\u4EF6\u7EC4\u521D\u59CB\u5316\u4E5F\u662F\u53EF\u4EE5\u63A5\u53D7\u7684\u3002</li><li>\u6302\u8F7D <ul><li>componentWillMount(\u5373\u5C06\u88AB\u6302\u8F7D)\u3001</li><li>render(\u6302\u8F7D)\u3001</li><li>componentDidMount(\u6302\u8F7D\u5B8C\u6210)</li></ul></li><li>\u66F4\u65B0(Updation)\uFF1A <ul><li>props\u53D1\u751F\u53D8\u5316\u540E\u5BF9\u5E94\u7684\u66F4\u65B0\u8FC7\u7A0B <ul><li>componentWillReceiveProps(\u7236\u7EC4\u4EF6\u53D1\u751F\u6570\u636E\u66F4\u6539\uFF0C\u7236\u7EC4\u4EF6\u7684render\u91CD\u65B0\u88AB\u6267\u884C\uFF0C\u5B50\u7EC4\u4EF6\u9884\u6D4B\u5230\u53EF\u80FD\u4F1A\u53D1\u751F\u66FF\u6362\u65B0\u6570\u636E)\u3001</li><li>shouldComponentUpdate(\u8BE2\u95EE\u662F\u5426\u5E94\u8BE5\u66F4\u65B0\uFF1F\u8FD4\u56DEtrue\u5219\u66F4\u65B0\u3001\u8FD4\u56DEflash\u5219\u4E0D\u66F4\u65B0)\u3001</li><li>componentWillUpate(\u51C6\u5907\u8981\u5F00\u59CB\u66F4\u65B0)\u3001render(\u66F4\u65B0)\u3001</li><li>componentDidUpdate(\u66F4\u65B0\u5B8C\u6210)</li></ul></li><li>states\u53D1\u751F\u53D8\u5316\u540E\u5BF9\u5E94\u7684\u66F4\u65B0\u8FC7\u7A0B <ul><li>shouldComponentUpdate(\u8BE2\u95EE\u662F\u5426\u5E94\u8BE5\u66F4\u65B0\uFF1F\u8FD4\u56DEtrue\u5219\u66F4\u65B0\u3001\u8FD4\u56DEflash\u5219\u4E0D\u66F4\u65B0)\u3001</li><li>conponentWillUpdate(\u51C6\u5907\u8981\u5F00\u59CB\u66F4\u65B0)\u3001\u3001</li><li>render(\u66F4\u65B0)\u3001</li><li>componentDidUpdate(\u66F4\u65B0\u5B8C\u6210)</li></ul></li><li>componentWillReceiveProps\u89E6\u53D1\u7684\u6761\u4EF6\u662F\uFF1A <ul><li>1\u3001\u4E00\u4E2A\u7EC4\u4EF6\u8981\u4ECE\u7236\u7EC4\u4EF6\u63A5\u6536\u53C2\u6570\uFF0C\u5E76\u4E14\u5DF2\u5B58\u5728\u7236\u7EC4\u4EF6\u4E2D(\u5B50\u7EC4\u4EF6\u7B2C\u4E00\u6B21\u88AB\u521B\u5EFA\u65F6\u662F\u4E0D\u4F1A\u6267\u884CcomponentWillReceiveProps\u7684)</li><li>2\u3001\u53EA\u8981\u7236\u7EC4\u4EF6\u7684render\u51FD\u6570\u91CD\u65B0\u88AB\u6267\u884C(\u7236\u7EC4\u4EF6\u53D1\u751F\u6570\u636E\u66F4\u6539\uFF0C\u5B50\u7EC4\u4EF6\u9884\u6D4B\u5230\u53EF\u80FD\u4F1A\u53D1\u751F\u66FF\u6362\u65B0\u6570\u636E)\uFF0CcomponentWillReceiveProps\u5C31\u4F1A\u88AB\u89E6\u53D1</li></ul></li></ul></li></ul><h2 id="\u5411\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4F20\u9012\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5411\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4F20\u9012\u53C2\u6570" aria-hidden="true">#</a> \u5411\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4F20\u9012\u53C2\u6570</h2><p>\u5728\u5FAA\u73AF\u4E2D\uFF0C\u901A\u5E38\u6211\u4EEC\u4F1A\u4E3A\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4F20\u9012\u989D\u5916\u7684\u53C2\u6570\u3002\u4F8B\u5982\uFF0C\u82E5 id \u662F\u4F60\u8981\u5220\u9664\u90A3\u4E00\u884C\u7684 ID\uFF0C\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u90FD\u53EF\u4EE5\u5411\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4F20\u9012\u53C2\u6570\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;button onClick={(e) =&gt; this.deleteRow(id, e)}&gt;Delete Row<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token value javascript language-javascript"><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">deleteRow</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span></span></span></span> <span class="token attr-name">id)}</span><span class="token punctuation">&gt;</span></span>Delete Row<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E0A\u8FF0\u4E24\u79CD\u65B9\u5F0F\u662F\u7B49\u4EF7\u7684\uFF0C\u5206\u522B\u901A\u8FC7\u7BAD\u5934\u51FD\u6570\u548C Function.prototype.bind \u6765\u5B9E\u73B0\u3002</p><p>\u5728\u8FD9\u4E24\u79CD\u60C5\u51B5\u4E0B\uFF0CReact \u7684\u4E8B\u4EF6\u5BF9\u8C61 e \u4F1A\u88AB\u4F5C\u4E3A\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F20\u9012\u3002\u5982\u679C\u901A\u8FC7\u7BAD\u5934\u51FD\u6570\u7684\u65B9\u5F0F\uFF0C\u4E8B\u4EF6\u5BF9\u8C61\u5FC5\u987B\u663E\u5F0F\u7684\u8FDB\u884C\u4F20\u9012\uFF0C\u800C\u901A\u8FC7 bind \u7684\u65B9\u5F0F\uFF0C\u4E8B\u4EF6\u5BF9\u8C61\u4EE5\u53CA\u66F4\u591A\u7684\u53C2\u6570\u5C06\u4F1A\u88AB\u9690\u5F0F\u7684\u8FDB\u884C\u4F20\u9012\u3002</p><h2 id="\u548C\u7B2C\u4E09\u65B9\u5E93\u8FDB\u884C\u6574\u5408" tabindex="-1"><a class="header-anchor" href="#\u548C\u7B2C\u4E09\u65B9\u5E93\u8FDB\u884C\u6574\u5408" aria-hidden="true">#</a> \u548C\u7B2C\u4E09\u65B9\u5E93\u8FDB\u884C\u6574\u5408</h2><h2 id="react-hoc-\u9AD8\u9636\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#react-hoc-\u9AD8\u9636\u7EC4\u4EF6" aria-hidden="true">#</a> react hoc \u9AD8\u9636\u7EC4\u4EF6</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">HOC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">Comp</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">AppHoc</span> <span class="token punctuation">{</span>
        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">&lt;</span>Comp name<span class="token operator">=</span><span class="token string">&quot;123&quot;</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> AppHoc
<span class="token punctuation">}</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">connect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">opt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">Comp</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        <span class="token keyword">class</span> <span class="token class-name">AppHoc</span> <span class="token punctuation">{</span>
            <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> reduxProps <span class="token operator">=</span> opt<span class="token punctuation">.</span><span class="token function">mapStateToProps</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token operator">&lt;</span>Comp <span class="token punctuation">{</span><span class="token operator">...</span>reduxProps<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> AppHoc
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="react-router" tabindex="-1"><a class="header-anchor" href="#react-router" aria-hidden="true">#</a> react-router</h2><h2 id="react-redux" tabindex="-1"><a class="header-anchor" href="#react-redux" aria-hidden="true">#</a> react-redux</h2><h2 id="usecontext" tabindex="-1"><a class="header-anchor" href="#usecontext" aria-hidden="true">#</a> useContext</h2><h2 id="\u7EC4\u4EF6\u5D4C\u5957-\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5D4C\u5957-\u63D2\u69FD" aria-hidden="true">#</a> \u7EC4\u4EF6\u5D4C\u5957 \u63D2\u69FD\uFF5E\uFF1F</h2><p>\u4F7F\u7528props\u4F20\u9012\u6216\u8005 \u9ED8\u8BA4 props.children</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token punctuation">(</span>
    
    <span class="token operator">&lt;</span>example left<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>leftComponent <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token keyword">this</span> is childrean content
    <span class="token operator">&lt;</span><span class="token operator">/</span>example<span class="token operator">&gt;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="ref\u83B7\u53D6dom\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#ref\u83B7\u53D6dom\u5B9E\u4F8B" aria-hidden="true">#</a> ref\u83B7\u53D6dom\u5B9E\u4F8B</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">SomePlugin</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$el <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">.</span><span class="token function">somePlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">.</span><span class="token function">somePlugin</span><span class="token punctuation">(</span><span class="token string">&#39;destroy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">el</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>el <span class="token operator">=</span> el<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u6027\u80FD\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a> \u6027\u80FD\u4F18\u5316</h2><h2 id="\u5DEE\u5F02\u6027" tabindex="-1"><a class="header-anchor" href="#\u5DEE\u5F02\u6027" aria-hidden="true">#</a> \u5DEE\u5F02\u6027</h2><ul><li>vue \u662F\u6570\u636E\u9A71\u52A8\uFF0C\u6838\u5FC3\u662F\u53CC\u5411\u7ED1\u5B9A\uFF0C\u6539\u53D8\u6570\u636E\u548C\u76D1\u542C\u6570\u636E\u7684\u6539\u53D8\uFF0C\u6240\u6709\u7684\u4E8B\u4EF6\u56F4\u7ED5\u6570\u636E\u7684\u6539\u53D8</li><li>react\u4E3A\u4E8B\u4EF6\u9A71\u52A8\u6539\u53D8\uFF0C\u6570\u636E\u7684\u6539\u53D8\u53EA\u4F1A\u91CD\u7ED8render\uFF0Crender\u901A\u8FC7differ\u91CD\u65B0\u6E32\u67D3return\u7684jsx\uFF0C\u5224\u65AD\u66F4\u6539\u7684\u5730\u65B9\uFF0C\u5E76\u4E14\u91CD\u65B0\u6E32\u67D3</li></ul><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,29);function e(t,o){return p}var l=n(a,[["render",e],["__file","note.html.vue"]]);export{l as default};