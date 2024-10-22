import{_ as s,a}from"./app.705be9e1.js";const p={};function t(o,n){return n[0]||(n[0]=a(`<h1 id="\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7A0B" aria-hidden="true">#</a> \u7F16\u7A0B</h1><h2 id="\u5192\u6CE1\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5192\u6CE1\u6392\u5E8F" aria-hidden="true">#</a> \u5192\u6CE1\u6392\u5E8F</h2><ul><li>\u7531\u5C0F\u5230\u5927</li><li>\u6BCF\u6B21\u2F50\u8F83\u76F8\u90BB\u7684\u4E24\u4E2A\u6570\uFF0C\u5982\u679C\u540E\u2F00\u4E2A\u2F50\u524D\u2F00\u4E2A\u2F29\uFF0C\u6362\u4F4D\u7F6E</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">bubbleSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">var</span> temp<span class="token punctuation">;</span>
                temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">bubbleSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[1, 2, 3, 4, 5, 6, 7]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u5FEB\u901F\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u6392\u5E8F" aria-hidden="true">#</a> \u5FEB\u901F\u6392\u5E8F</h2><ul><li>\u91C7\u2F64\u2F06\u5206\u6CD5\uFF0C\u53D6\u51FA\u4E2D\u95F4\u6570\uFF0C\u6570\u7EC4\u6BCF\u6B21\u548C\u4E2D\u95F4\u6570\u2F50\u8F83\uFF0C\u2F29\u7684\u653E\u5230\u5DE6\u8FB9\uFF0C\u2F24\u7684\u653E\u5230\u53F3\u8FB9</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE\u7A7A\u6570\u7EC4</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> cIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> c <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>cIndex<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> l <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> r <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            l<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            r<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">quickSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u7F16\u5199\u4E00\u4E2A\u65B9\u6CD5-\u6C42\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u5B57\u8282\u2ED3\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u4E00\u4E2A\u65B9\u6CD5-\u6C42\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u5B57\u8282\u2ED3\u5EA6" aria-hidden="true">#</a> \u7F16\u5199\u2F00\u4E2A\u2F45\u6CD5 \u6C42\u2F00\u4E2A\u5B57\u7B26\u4E32\u7684\u5B57\u8282\u2ED3\u5EA6</h2><ul><li>\u5047\u8BBE\uFF1A\u2F00\u4E2A\u82F1\u2F42\u5B57\u7B26\u5360\u2F64\u2F00\u4E2A\u5B57\u8282\uFF0C\u2F00\u4E2A\u4E2D\u2F42\u5B57\u7B26\u5360\u2F64\u4E24\u4E2A\u5B57\u8282</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">GetBytes</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> len <span class="token operator">=</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">var</span> bytes <span class="token operator">=</span> len<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">255</span><span class="token punctuation">)</span> bytes<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> bytes<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token function">GetBytes</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u597D,as&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="bind\u7684\u7528\u6CD5-\u4EE5\u53CA\u5982\u4F55\u5B9E\u73B0bind\u7684\u51FD\u6570\u548C\u9700\u8981\u6CE8\u610F\u7684\u70B9" tabindex="-1"><a class="header-anchor" href="#bind\u7684\u7528\u6CD5-\u4EE5\u53CA\u5982\u4F55\u5B9E\u73B0bind\u7684\u51FD\u6570\u548C\u9700\u8981\u6CE8\u610F\u7684\u70B9" aria-hidden="true">#</a> bind\u7684\u2F64\u6CD5\uFF0C\u4EE5\u53CA\u5982\u4F55\u5B9E\u73B0bind\u7684\u51FD\u6570\u548C\u9700\u8981\u6CE8\u610F\u7684\u70B9</h2><ul><li>bind \u7684\u4F5C\u2F64\u4E0E call \u548C apply \u76F8\u540C\uFF0C\u533A\u522B\u662F call \u548C apply \u662F\u2F74\u5373\u8C03\u2F64\u51FD\u6570\uFF0C\u2F7Dbind \u662F\u8FD4\u56DE\u4E86\u2F00\u4E2A\u51FD\u6570\uFF0C\u9700\u8981\u8C03\u2F64\u7684\u65F6\u5019\u518D\u6267\u2F8F\u3002</li><li>\u2F00\u4E2A\u7B80\u5355\u7684 bind \u51FD\u6570\u5B9E\u73B0\u5982\u4E0B</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u8F93\u51FA\u4ECA\u5929\u7684\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA\u4ECA\u5929\u7684\u65E5\u671F" aria-hidden="true">#</a> \u8F93\u51FA\u4ECA\u5929\u7684\u2F47\u671F</h2><blockquote><p>\u4EE5 YYYY-MM-DD \u7684\u2F45\u5F0F\uFF0C\u2F50\u5982\u4ECA\u5929\u662F2014\u5E749\u2F4926\u2F47\uFF0C\u5219\u8F93\u51FA2014-09-26</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// \u83B7\u53D6\u5E74\uFF0CgetFullYear()\u8FD4\u56DE4\u4F4D\u7684\u6570\u5B57</span>
 <span class="token keyword">var</span> year <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// \u83B7\u53D6\u2F49\uFF0C\u2F49\u4EFD\u2F50\u8F83\u7279\u6B8A\uFF0C0\u662F1\u2F49\uFF0C11\u662F12\u2F49</span>
 <span class="token keyword">var</span> month <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
 <span class="token comment">// \u53D8\u6210\u4E24\u4F4D</span>
 month <span class="token operator">=</span> month <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">+</span> month <span class="token operator">:</span> month<span class="token punctuation">;</span>
 <span class="token comment">// \u83B7\u53D6\u2F47</span>
 <span class="token keyword">var</span> day <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 day <span class="token operator">=</span> day <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">+</span> day <span class="token operator">:</span> day<span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>year <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> month <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> day<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u7528js\u5B9E\u73B0\u968F\u673A\u9009\u53D610\u2013100\u4E4B\u95F4\u768410\u4E2A\u6570\u5B57-\u5B58\u5165\u4E00\u4E2A\u6570\u7EC4-\u5E76\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u7528js\u5B9E\u73B0\u968F\u673A\u9009\u53D610\u2013100\u4E4B\u95F4\u768410\u4E2A\u6570\u5B57-\u5B58\u5165\u4E00\u4E2A\u6570\u7EC4-\u5E76\u6392\u5E8F" aria-hidden="true">#</a> \u2F64js\u5B9E\u73B0\u968F\u673A\u9009\u53D610\u2013100\u4E4B\u95F4\u768410\u4E2A\u6570\u5B57\uFF0C\u5B58\u2F0A\u2F00\u4E2A\u6570\u7EC4\uFF0C\u5E76\u6392\u5E8F</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> iArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    funtion <span class="token function">getRandom</span><span class="token punctuation">(</span><span class="token parameter">istart<span class="token punctuation">,</span> iend</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> iChoice <span class="token operator">=</span> istart <span class="token operator">-</span> iend <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> iChoice <span class="token operator">+</span> istart<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    iArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">getRandom</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
iArray<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,18))}var c=s(p,[["render",t],["__file","code.html.vue"]]);export{c as default};