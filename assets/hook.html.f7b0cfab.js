import{_ as e,a as s}from"./app.705be9e1.js";const a={};function r(l,n){return n[0]||(n[0]=s(`<h1 id="hook-\u5B66\u4E60" tabindex="-1"><a class="header-anchor" href="#hook-\u5B66\u4E60" aria-hidden="true">#</a> Hook \u5B66\u4E60</h1><h2 id="usedebounce" tabindex="-1"><a class="header-anchor" href="#usedebounce" aria-hidden="true">#</a> useDebounce</h2><p>\u51FD\u6570\u5F0F\u7EC4\u4EF6 \u9632\u6296 \u539F\u56E0\uFF1A</p><div class="language-typeScript ext-typeScript line-numbers-mode"><pre class="language-typeScript"><code>import { useCallback, useRef, useEffect } from &#39;react&#39;;

export const useDebounce = (fn: () =&gt; void, delay: number, dep: any[] = []) =&gt; {
    const { current } = useRef&lt;any&gt;({ fn, timer: null });
    useEffect(
        function() {
            current.fn = fn;
        },
        [fn]
    );

    return useCallback(function(this: any, ...args) {
        if (current.timer) {
            clearTimeout(current.timer);
        }
        current.timer = setTimeout(() =&gt; {
            current.fn.call(this, ...args);
        }, delay);
    }, dep);
};

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,4))}var p=e(a,[["render",r],["__file","hook.html.vue"]]);export{p as default};
