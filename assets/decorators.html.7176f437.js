import{_ as s,a}from"./app.705be9e1.js";const p={};function e(t,n){return n[0]||(n[0]=a(`<h1 id="\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#\u88C5\u9970\u5668" aria-hidden="true">#</a> \u88C5\u9970\u5668</h1><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><h3 id="\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56" aria-hidden="true">#</a> \u4F9D\u8D56</h3><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>&quot;@babel/plugin-proposal-class-properties&quot;: &quot;^7.4.0&quot;
&quot;@babel/plugin-proposal-decorators&quot;: &quot;^7.4.0&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>|\u6CE8: \u4E3A\u4E86\u8BA9vscode \u652F\u6301decorator\u8BED\u6CD5, \u9700\u8981\u5728tsconfig.ts\u4E2D\u8FDB\u884C\u5982\u4E0B\u8BBE\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token string-property property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> Babel</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-proposal-decorators&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;legacy&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-proposal-class-properties&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;loose&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u88C5\u9970\u5668\u7684\u5E94\u7528\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u88C5\u9970\u5668\u7684\u5E94\u7528\u4F8B\u5B50" aria-hidden="true">#</a> \u88C5\u9970\u5668\u7684\u5E94\u7528\u4F8B\u5B50</h2><h3 id="_1\u3001\u4E3A\u6240\u6709\u88AB\u88C5\u9970\u7684\u9875\u9762\u8BBE\u7F6E\u7EDF\u4E00\u7684\u80CC\u666F\u8272" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u4E3A\u6240\u6709\u88AB\u88C5\u9970\u7684\u9875\u9762\u8BBE\u7F6E\u7EDF\u4E00\u7684\u80CC\u666F\u8272" aria-hidden="true">#</a> 1\u3001\u4E3A\u6240\u6709\u88AB\u88C5\u9970\u7684\u9875\u9762\u8BBE\u7F6E\u7EDF\u4E00\u7684\u80CC\u666F\u8272</h3><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>
<span class="token comment">/*  \u88C5\u9970\u5668  PageDecorator*/</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">PageDecorator</span> <span class="token operator">=</span> <span class="token parameter">param</span><span class="token operator">=&gt;</span> <span class="token parameter">WrappedComponent</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">PageNormal</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token punctuation">{</span>

        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token keyword">let</span> bgColor <span class="token operator">=</span> param <span class="token operator">&amp;&amp;</span> param<span class="token punctuation">.</span>background <span class="token operator">?</span> param<span class="token punctuation">.</span>background <span class="token operator">:</span> <span class="token string">&#39;rgb(244,245,250)&#39;</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">backgroundColor</span><span class="token operator">:</span>bgColor<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">WrappedComponent</span></span>  <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span></span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">WrappedComponent</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*  \u88AB\u88C5\u9970\u9875\u9762*/</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>PageDecorator<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;....&#39;</span>  <span class="token comment">// &#39;...&#39; \u5185\u662F\u4F60\u7684\u6587\u4EF6\u8DEF\u5F84</span>

@<span class="token function">PageDecorator</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">background</span><span class="token operator">:</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span>  <span class="token keyword">class</span> <span class="token class-name">Page</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>

<span class="token comment">/*.   \u6B64\u5904\u7565\u53BB\u4E00\u4E07\u884C */</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>\u6B64\u5904\u53EA\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u5B9E\u9645\u5E94\u7528\u4E2D \u88C5\u9970\u5668\u6240\u505A\u7684\u4E0D\u6B62\u662F\u8FD9\u4E9B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u62BD\u8C61\u51FA\u67D0\u4E9B\u9875\u9762\u5171\u540C\u7684\u7279\u70B9\uFF0C\u4F7F\u7528\u88C5\u9970\u5668\u521B\u5EFA\u516C\u5171\u7684\u6A21\u7248\uFF0C\u5176\u4ED6\u88AB\u88C5\u9970\u7684\u9875\u9762\u53EA\u8981\u5B9E\u73B0\u81EA\u5DF1\u72EC\u7279\u7684\u90E8\u5206\u5C31\u53EF\u4EE5\u4E86\u3002</p><h3 id="_2\u3001\u4E00\u4E2A\u88C5\u9970\u5668\u5C01\u88C5\u5F39\u51FA\u5C42\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4E00\u4E2A\u88C5\u9970\u5668\u5C01\u88C5\u5F39\u51FA\u5C42\u7684\u4F8B\u5B50" aria-hidden="true">#</a> 2\u3001\u4E00\u4E2A\u88C5\u9970\u5668\u5C01\u88C5\u5F39\u51FA\u5C42\u7684\u4F8B\u5B50</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Modal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;antd-mobile&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">ShowModalDecorator</span> <span class="token operator">=</span> <span class="token parameter">param</span> <span class="token operator">=&gt;</span> <span class="token parameter">WrappedComponent</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">ShowModal</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>

        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>

            <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">item</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>

        <span class="token function-variable function">showModal</span> <span class="token operator">=</span> <span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

            <span class="token doc-comment comment">/****** item \u4F20\u5165\u7684\u53C2\u6570 modal \u4E0D\u9700\u8981\u53C2\u6570\u53EF\u4EE5\u4E0D\u586B *********/</span>

            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">item</span><span class="token operator">:</span> item <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span>

        <span class="token function-variable function">hiddenModal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span>

        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token keyword">let</span> props <span class="token operator">=</span> <span class="token punctuation">{</span>

                <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>show

            <span class="token punctuation">}</span>

            <span class="token comment">// \u81EA\u5B9A\u4E49className \u9ED8\u8BA4\u7684 activityModal \u662F\u8981\u81EA\u5DF1\u5199title\u7684</span>

            props<span class="token punctuation">.</span>className <span class="token operator">=</span>

                param <span class="token operator">&amp;&amp;</span> param<span class="token punctuation">.</span>className <span class="token operator">?</span> param<span class="token punctuation">.</span>className <span class="token operator">:</span> <span class="token string">&#39;activityModal&#39;</span>

            <span class="token comment">// \u662F\u5426\u5C55\u793A\u5173\u95ED\u6309\u94AE</span>

            props<span class="token punctuation">.</span>closable <span class="token operator">=</span> param <span class="token operator">&amp;&amp;</span> param<span class="token punctuation">.</span>closable <span class="token operator">?</span> param<span class="token punctuation">.</span>closable <span class="token operator">:</span> <span class="token boolean">false</span>

            <span class="token comment">// title</span>

            props<span class="token punctuation">.</span>title <span class="token operator">=</span> param <span class="token operator">&amp;&amp;</span> param<span class="token punctuation">.</span>title <span class="token operator">?</span> param<span class="token punctuation">.</span>title <span class="token operator">:</span> <span class="token keyword">null</span>

            <span class="token comment">// \u53EF\u9009: &#39;slide-down / up&#39; / &#39;fade&#39; / &#39;slide&#39;</span>

            props<span class="token punctuation">.</span>animationType <span class="token operator">=</span>

                param <span class="token operator">&amp;&amp;</span> param<span class="token punctuation">.</span>animationType <span class="token operator">?</span> param<span class="token punctuation">.</span>animationType <span class="token operator">:</span> <span class="token string">&#39;fade&#39;</span>

            <span class="token comment">//\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED</span>

            props<span class="token punctuation">.</span>maskClosable <span class="token operator">=</span>

                param <span class="token operator">&amp;&amp;</span> param<span class="token punctuation">.</span>maskClosable <span class="token operator">?</span> param<span class="token punctuation">.</span>maskClosable <span class="token operator">:</span> <span class="token boolean">true</span>

            <span class="token keyword">return</span> <span class="token punctuation">(</span>

                <span class="token operator">&lt;</span>Modal

                    transparent

                    <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span>

                    onClose<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

                        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hiddenModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

                    <span class="token punctuation">}</span><span class="token punctuation">}</span>

                <span class="token operator">&gt;</span>

                    <span class="token comment">/* \u88AB\u88C5\u9970\u7684\u5BF9\u8C61\uFF0C\u4E00\u4E9B\u53C2\u6570\u53EF\u4EE5\u901A\u8FC7props \u4F20\u9012*/</span>

                     <span class="token operator">&lt;</span>WrappedComponent

                        hiddenModal<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hiddenModal</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

                        item<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>item<span class="token punctuation">}</span>

                        <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span>

                    <span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>WrappedComponent<span class="token operator">&gt;</span>

                <span class="token operator">&lt;</span><span class="token operator">/</span>Modal<span class="token operator">&gt;</span>

            <span class="token punctuation">)</span>

        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br></div></div><p>\u540E\u7EED\u6240\u6709\u5177\u6709\u76F8\u540C\u98CE\u683C\u6837\u5F0F\u7684modal \u90FD\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2Amodal\u88C5\u9970</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ShowModalDecorator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;..&#39;</span>

@<span class="token function">ShowModalDecorator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">SendModal</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">return</span> <span class="token punctuation">(</span>

            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>

                <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>

                    <span class="token punctuation">{</span><span class="token string">&#39;\u4F60\u731C\u731C\u300B\u300B\u300B\u300B\u300B\u300B\u300B\u300B\u300B\u3002\u3002\u3002\uFF01&#39;</span><span class="token punctuation">}</span>

                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

                <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>

                    <span class="token operator">&lt;</span>div

                        className<span class="token operator">=</span><span class="token string">&quot;sure&quot;</span>

                        onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

                            <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">hiddenModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

                        <span class="token punctuation">}</span><span class="token punctuation">}</span>

                    <span class="token operator">&gt;</span>

                        <span class="token punctuation">{</span><span class="token string">&#39;\u786E\u8BA4&#39;</span><span class="token punctuation">}</span>

                    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

        <span class="token punctuation">)</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div>`,16))}var l=s(p,[["render",e],["__file","decorators.html.vue"]]);export{l as default};
