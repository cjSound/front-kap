import{_ as t,g as l,o as c,c as i,a as e,b as s,f as a,h as r,F as o}from"./app.705be9e1.js";const u={},b={href:"https://console.cloud.tencent.com/ssl",target:"_blank",rel:"noopener noreferrer"};function d(k,n){const p=l("ExternalLinkIcon");return c(),i(o,null,[n[4]||(n[4]=e(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><h2 id="service-\u57FA\u7840\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#service-\u57FA\u7840\u914D\u7F6E" aria-hidden="true">#</a> service \u57FA\u7840\u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server
    <span class="token punctuation">{</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>
        server_name cjsound.cn<span class="token punctuation">;</span>
        index index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u91CD\u5B9A\u5411" tabindex="-1"><a class="header-anchor" href="#\u91CD\u5B9A\u5411" aria-hidden="true">#</a> \u91CD\u5B9A\u5411</h2><p>\u6839\u8DEF\u5F84 / \u91CD\u5B9A\u5411\u5230 /xxx</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>location / <span class="token punctuation">{</span>
    rewrite ^/$ /xxx permanent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

location /xxx <span class="token punctuation">{</span>
    <span class="token comment"># \u5904\u7406 /xxx \u8DEF\u5F84\u7684\u914D\u7F6E</span>
    <span class="token comment"># ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u524D\u7AEF\u9759\u6001\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u9759\u6001\u90E8\u7F72" aria-hidden="true">#</a> \u524D\u7AEF\u9759\u6001\u90E8\u7F72</h2><br> \u524D\u7AEF\u90E8\u7F72\u7684\u9759\u6001\u8D44\u6E90\u5B58\u653E\u4F4D\u7F6E\u548C\u8BBF\u95EE\u5982\u4E0B\uFF1A <br><ul><li>\u9879\u76EE\u90E8\u7F72\u5230\u670D\u52A1\u5668\u5B9E\u9645\u8DEF\u5F84 <code>/www/nginx/html/test</code></li><li>\u9875\u9762\u8BBF\u95EE\u8DEF\u5F84 <code>xxx.com/test</code></li></ul><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /test</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /www/nginx/html</span><span class="token punctuation">;</span>  <span class="token comment"># \u6CE8\u610F\uFF0Croot\u4E0D\u9700\u8981\u586B\u5199\u6587\u4EF6\u5B9E\u9645\u5730\u5740\uFF0C\u5B9E\u9645\u5730\u5740\u4E3Aroot+location\u7684path</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u524D\u7AEF\u9879\u76EE\u4E3A <strong>history</strong> \u90E8\u7F72\u6A21\u5F0F</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /test</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /www/nginx/html</span><span class="token punctuation">;</span>  <span class="token comment"># \u6CE8\u610F\uFF0Croot\u4E0D\u9700\u8981\u586B\u5199\u6587\u4EF6\u5B9E\u9645\u5730\u5740\uFF0C\u5B9E\u9645\u5730\u5740\u4E3Aroot+location\u7684path</span>
    <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /test/index.html</span><span class="token punctuation">;</span> <span class="token comment"># \u524D\u7AEF\u8DEF\u7531\u8DEF\u5F84\u91CD\u5B9A\u5411</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u6E05\u7406\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u6E05\u7406\u7F13\u5B58" aria-hidden="true">#</a> \u6E05\u7406\u7F13\u5B58</h2><div class="custom-container tip"><p class="custom-container-title">\u539F\u56E0</p><br><ul><li>\u4E7E\u5764\u901A\u8FC7 Fetch \u83B7\u53D6\u5B50\u670D\u52A1 html</li><li>\u670D\u52A1\u7AEF\u8FD4\u56DE\u4E3A Content-Type: text/html \u9ED8\u8BA4\u4F1A\u5F53\u505A\u8D44\u6E90\u5904\u7406\uFF0C\u8FDB\u884C\u7F13\u5B58</li><li>\u518D\u6B21\u5237\u65B0\u4F1A\u76F4\u63A5\u4ECE<strong>\u78C1\u76D8\u7F13\u5B58\u83B7\u53D6\uFF0C\u4E0D\u4F1A\u91CD\u65B0\u8BF7\u6C42\u670D\u52A1\u5668</strong></li></ul></div><h3 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6848</h3><ul><li>Nginx \u7981\u6B62\u7F13\u5B58 \u670D\u52A1\u8DEF\u5F84 \u4F8B\u5982<code>/iot/</code></li></ul><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /iot</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>  /usr/share/nginx/html</span><span class="token punctuation">;</span>  <span class="token comment"># \u7269\u8054\u7F51\u670D\u52A1</span>
    <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /iot/index.html</span><span class="token punctuation">;</span>
    <span class="token comment"># \u8BBE\u7F6E\u7F13\u5B58\u8FC7\u671F \u9632\u6B62\u5B50\u670D\u52A1\u66F4\u65B0 \u4E3B\u670D\u52A1\u8FD8\u662F\u8C03\u7528\u4E4B\u524D\u7684\u7F13\u5B58\u4FE1\u606F</span>
    <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$request_uri</span> ~* /iot/$)</span>
    <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">expires</span> -1s</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="ssl\u8BC1\u4E66\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#ssl\u8BC1\u4E66\u90E8\u7F72" aria-hidden="true">#</a> ssl\u8BC1\u4E66\u90E8\u7F72</h2>`,20)),s("ul",null,[s("li",null,[n[1]||(n[1]=a("1\u3001\u524D\u5F80\u4E91\u670D\u52A1\u5382\u5546\u4E0B\u8F7D ssl \u8BC1\u4E66 ")),s("a",b,[n[0]||(n[0]=a("\u817E\u8BAF\u4E91SSL")),r(p)])]),n[2]||(n[2]=s("li",null,[a("2\u3001\u4E0B\u8F7DSSL\u8BC1\u4E66 \u5230 "),s("code",null,"nginx/ssl/www.xxx.cn_nginx")],-1)),n[3]||(n[3]=s("li",null,"3\u3001\u5982\u4E0B\u914D\u7F6E",-1))]),n[5]||(n[5]=e(`<div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
     <span class="token comment">#SSL \u9ED8\u8BA4\u8BBF\u95EE\u7AEF\u53E3\u53F7\u4E3A 443</span>
     <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl</span><span class="token punctuation">;</span> 
     <span class="token comment">#\u8BF7\u586B\u5199\u7ED1\u5B9A\u8BC1\u4E66\u7684\u57DF\u540D</span>
     <span class="token directive"><span class="token keyword">server_name</span> www.xxx.cn</span><span class="token punctuation">;</span> 
     <span class="token comment">#\u8BF7\u586B\u5199\u8BC1\u4E66\u6587\u4EF6\u7684\u76F8\u5BF9\u8DEF\u5F84\u6216\u7EDD\u5BF9\u8DEF\u5F84</span>
     <span class="token directive"><span class="token keyword">ssl_certificate</span> /www/nginx/ssl/www.xxx.cn_nginx/www.xxx.cn_bundle.crt</span><span class="token punctuation">;</span> 
     <span class="token comment">#\u8BF7\u586B\u5199\u79C1\u94A5\u6587\u4EF6\u7684\u76F8\u5BF9\u8DEF\u5F84\u6216\u7EDD\u5BF9\u8DEF\u5F84</span>
     <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /www/nginx/ssl/www.xxx.cn_nginx/www.xxx.cn.key</span><span class="token punctuation">;</span> 
     <span class="token directive"><span class="token keyword">ssl_session_timeout</span> <span class="token number">5m</span></span><span class="token punctuation">;</span>
     <span class="token comment">#\u8BF7\u6309\u7167\u4EE5\u4E0B\u534F\u8BAE\u914D\u7F6E</span>
     <span class="token directive"><span class="token keyword">ssl_protocols</span> TLSv1.2 TLSv1.3</span><span class="token punctuation">;</span> 
     <span class="token comment">#\u8BF7\u6309\u7167\u4EE5\u4E0B\u5957\u4EF6\u914D\u7F6E\uFF0C\u914D\u7F6E\u52A0\u5BC6\u5957\u4EF6\uFF0C\u5199\u6CD5\u9075\u5FAA openssl \u6807\u51C6\u3002</span>
     <span class="token directive"><span class="token keyword">ssl_ciphers</span> ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE</span><span class="token punctuation">;</span> 
     <span class="token directive"><span class="token keyword">ssl_prefer_server_ciphers</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">rewrite</span> ^/$ /xxx permanent</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">location</span> /xxx</span> <span class="token punctuation">{</span>
        <span class="token comment"># \u5904\u7406 /xxx \u8DEF\u5F84\u7684\u914D\u7F6E</span>
        <span class="token comment"># ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="http\u91CD\u5B9A\u5411https" tabindex="-1"><a class="header-anchor" href="#http\u91CD\u5B9A\u5411https" aria-hidden="true">#</a> http\u91CD\u5B9A\u5411https</h2><p>\u5982\u679C\u90E8\u7F72\u4E86https\uFF0C\u9ED8\u8BA4\u91C7\u7528https\uFF0C\u53EF\u4EE5\u5C06http\u94FE\u63A5\u5168\u90E8\u91CD\u5B9A\u5411\u5230\u5BF9\u5E94\u7684https\u94FE\u63A5</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> 
    <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span> xxx.cn</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
          <span class="token directive"><span class="token keyword">return</span> <span class="token number">301</span> https://<span class="token variable">$host</span><span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,4))],64)}var x=t(u,[["render",d],["__file","nginx.html.vue"]]);export{x as default};
