import{_ as s,a}from"./app.705be9e1.js";const t={};function p(e,n){return n[0]||(n[0]=a(`<h1 id="\u6D4F\u89C8\u5668\u6027\u80FD\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u6027\u80FD\u95EE\u9898" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u6027\u80FD\u95EE\u9898</h1><h2 id="\u91CD\u7ED8-repaint-\u548C\u56DE\u6D41-reflow" tabindex="-1"><a class="header-anchor" href="#\u91CD\u7ED8-repaint-\u548C\u56DE\u6D41-reflow" aria-hidden="true">#</a> \u91CD\u7ED8\uFF08Repaint\uFF09\u548C\u56DE\u6D41\uFF08Reflow\uFF09</h2><ul><li>\u91CD\u7ED8\u548C\u56DE\u6D41\u662F\u6E32\u67D3\u6B65\u9AA4\u4E2D\u7684\u2F00\u2F29\u8282\uFF0C\u4F46\u662F\u8FD9\u4E24\u4E2A\u6B65\u9AA4\u5BF9\u4E8E\u6027\u80FD\u5F71\u54CD\u5F88\u2F24\u3002</li><li>\u91CD\u7ED8\u662F\u5F53\u8282\u70B9\u9700\u8981\u66F4\u6539\u5916\u89C2\u2F7D\u4E0D\u4F1A\u5F71\u54CD\u5E03\u5C40\u7684\uFF0C\u2F50\u5982\u6539\u53D8 <strong>color</strong> \u5C31\u53EB\u79F0\u4E3A\u91CD\u7ED8</li><li>\u56DE\u6D41\u662F<strong>\u5E03\u5C40</strong>\u6216\u8005<strong>\u2F0F\u4F55\u5C5E\u6027</strong>\u9700\u8981\u6539\u53D8\u5C31\u79F0\u4E3A\u56DE\u6D41\u3002</li><li>\u56DE\u6D41\u5FC5\u5B9A\u4F1A\u53D1\u2F63\u91CD\u7ED8\uFF0C\u91CD\u7ED8\u4E0D\u2F00\u5B9A\u4F1A\u5F15\u53D1\u56DE\u6D41\u3002<strong>\u56DE\u6D41\u6240\u9700\u7684\u6210\u672C\u2F50\u91CD\u7ED8\u2FBC\u7684\u591A</strong>\uFF0C\u6539\u53D8\u6DF1\u5C42\u6B21\u7684\u8282\u70B9\u5F88\u53EF\u80FD\u5BFC\u81F4\u2F57\u8282\u70B9\u7684 <strong>\u2F00\u7CFB\u5217\u56DE\u6D41</strong></li></ul><blockquote><p>\u6240\u4EE5\u4EE5\u4E0B\u2F0F\u4E2A\u52A8\u4F5C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6027\u80FD\u95EE\u9898\uFF1A</p></blockquote><ul><li>\u6539\u53D8 window \u2F24\u2F29</li><li>\u6539\u53D8\u5B57\u4F53</li><li>\u6DFB\u52A0\u6216\u5220\u9664\u6837\u5F0F</li><li>\u2F42\u5B57\u6539\u53D8</li><li>\u5B9A\u4F4D\u6216\u8005\u6D6E\u52A8</li><li>\u76D2\u6A21\u578B</li></ul><p><strong>\u5F88\u591A\u2F08\u4E0D\u77E5\u9053\u7684\u662F\uFF0C\u91CD\u7ED8\u548C\u56DE\u6D41\u5176\u5B9E\u548C Event loop \u6709\u5173\u3002</strong></p><ul><li>\u5F53 Event loop \u6267\u2F8F\u5B8C Microtasks \u540E\uFF0C\u4F1A\u5224\u65AD document \u662F\u5426\u9700\u8981\u66F4\u65B0\u3002- \u56E0\u4E3A\u6D4F\u89C8\u5668\u662F 60Hz \u7684\u5237\u65B0\u7387\uFF0C\u6BCF 16ms \u624D\u4F1A\u66F4\u65B0\u2F00\u6B21\u3002</li><li>\u7136\u540E\u5224\u65AD\u662F\u5426\u6709 resize \u6216\u8005 scroll \uFF0C\u6709\u7684\u8BDD\u4F1A\u53BB\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u6240\u4EE5 <strong>resize</strong> <strong>\u548Cscroll</strong> \u4E8B\u4EF6\u4E5F\u662F\u2F84\u5C11 16ms \u624D\u4F1A\u89E6\u53D1\u2F00\u6B21\uFF0C\u5E76\u4E14\u2F83\u5E26\u8282\u6D41\u529F\u80FD\u3002</li><li>\u5224\u65AD\u662F\u5426\u89E6\u53D1\u4E86 <strong>media query</strong></li><li>\u66F4\u65B0\u52A8\u753B\u5E76\u4E14\u53D1\u9001\u4E8B\u4EF6</li><li>\u5224\u65AD\u662F\u5426\u6709\u5168\u5C4F\u64CD\u4F5C\u4E8B\u4EF6</li><li>\u6267\u2F8F <strong>requestAnimationFrame</strong> \u56DE\u8C03</li><li>\u6267\u2F8F <strong>IntersectionObserver</strong> \u56DE\u8C03\uFF0C\u8BE5\u2F45\u6CD5\u2F64\u4E8E\u5224\u65AD\u5143\u7D20\u662F\u5426\u53EF\u2EC5\uFF0C\u53EF\u4EE5\u2F64\u4E8E\u61D2\u52A0\u8F7D\u4E0A\uFF0C\u4F46\u662F\u517C\u5BB9\u6027\u4E0D\u597D</li><li>\u66F4\u65B0\u754C\u2FAF</li><li>\u4EE5\u4E0A\u5C31\u662F\u2F00\u5E27\u4E2D\u53EF\u80FD\u4F1A\u505A\u7684\u4E8B\u60C5\u3002\u5982\u679C\u5728\u2F00\u5E27\u4E2D\u6709\u7A7A\u95F2\u65F6\u95F4\uFF0C\u5C31\u4F1A\u53BB\u6267\u2F8F <strong>requestIdleCallback</strong> \u56DE\u8C03\u3002</li></ul><h3 id="\u51CF\u5C11\u91CD\u7ED8\u548C\u56DE\u6D41" tabindex="-1"><a class="header-anchor" href="#\u51CF\u5C11\u91CD\u7ED8\u548C\u56DE\u6D41" aria-hidden="true">#</a> \u51CF\u5C11\u91CD\u7ED8\u548C\u56DE\u6D41</h3><blockquote><p>\u4F7F\u2F64 translate \u66FF\u4EE3 top</p></blockquote><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.test</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5F15\u8D77\u56DE\u6D41</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token string">&#39;100px&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li>\u4F7F\u2F64 <strong>visibility</strong> \u66FF\u6362 display: none \uFF0C\u56E0\u4E3A\u524D\u8005\u53EA\u4F1A\u5F15\u8D77\u91CD\u7ED8\uFF0C\u540E\u8005\u4F1A\u5F15\u53D1\u56DE\u6D41\uFF08<strong>\u6539\u53D8\u4E86\u5E03\u5C40</strong>\uFF09</li><li>\u628A DOM <strong>\u79BB\u7EBF\u540E\u4FEE\u6539</strong>\uFF0C\u2F50\u5982\uFF1A\u5148\u628A DOM \u7ED9 display:none (\u6709\u2F00\u6B21 Reflow )\uFF0C\u7136\u540E\u4F60\u4FEE\u6539 100 \u6B21\uFF0C\u7136\u540E\u518D\u628A\u5B83\u663E\u793A\u51FA\u6765</li><li>\u4E0D\u8981\u628A DOM \u7ED3\u70B9\u7684\u5C5E\u6027\u503C\u653E\u5728\u2F00\u4E2A\u5FAA\u73AF\u2FA5\u5F53\u6210\u5FAA\u73AF\u2FA5\u7684\u53D8\u91CF</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// \u83B7\u53D6 offsetTop \u4F1A\u5BFC\u81F4\u56DE\u6D41\uFF0C\u56E0\u4E3A\u9700\u8981\u53BB\u83B7\u53D6\u6B63\u786E\u7684\u503C</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>offsetTop<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u4E0D\u8981\u4F7F\u2F64 <strong>table</strong> \u5E03\u5C40\uFF0C\u53EF\u80FD\u5F88\u2F29\u7684\u2F00\u4E2A\u2F29\u6539\u52A8\u4F1A\u9020\u6210\u6574\u4E2A table \u7684\u91CD\u65B0\u5E03\u5C40 \u52A8\u753B\u5B9E\u73B0\u7684\u901F\u5EA6\u7684\u9009\u62E9\uFF0C\u52A8\u753B\u901F\u5EA6\u8D8A\u5FEB\uFF0C\u56DE\u6D41\u6B21\u6570\u8D8A\u591A\uFF0C\u4E5F\u53EF\u4EE5\u9009\u62E9\u4F7F\u2F64requestAnimationFrame</li><li>CSS \u9009\u62E9\u7B26\u4ECE\u53F3\u5F80\u5DE6\u5339\u914D\u67E5\u627E\uFF0C\u907F\u514D DOM \u6DF1\u5EA6\u8FC7\u6DF1</li><li>\u5C06\u9891\u7E41\u8FD0\u2F8F\u7684\u52A8\u753B\u53D8\u4E3A\u56FE\u5C42\uFF0C\u56FE\u5C42\u80FD\u591F\u963B\u2F4C\u8BE5\u8282\u70B9\u56DE\u6D41\u5F71\u54CD\u522B\u7684\u5143\u7D20\u3002\u2F50\u5982\u5BF9\u4E8E <strong>video</strong> \u6807\u7B7E\uFF0C\u6D4F\u89C8\u5668\u4F1A\u2F83\u52A8\u5C06\u8BE5\u8282\u70B9\u53D8\u4E3A\u56FE\u5C42\u3002</li></ul>`,13))}var l=s(t,[["render",p],["__file","intbase.html.vue"]]);export{l as default};