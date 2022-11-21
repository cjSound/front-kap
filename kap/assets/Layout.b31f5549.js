import{_ as S,i as R,o as a,c as i,h as $,C as x,H as P,k as _,I as de,G as e,F as M,f as A,d as g,t as T,l as w,J as Y,s as C,w as B,v as ce,n as y,g as V,K as q,L as xe,M as Ce,N as X,O as Te,P as J,Q,q as E,R as j,S as _e,U as pe,D as he,E as D,T as me,j as O,V as Ne,y as K,z as G,W as Be,X as De,Y as Z,Z as fe,$ as be,a as Me,e as ge,B as He,a0 as U,a1 as ee,a2 as Ie,a3 as Pe,a4 as Ee,a5 as Re}from"./app.84c19619.js";const Ae={},Fe={class:"theme-default-content custom"};function Oe(v,n){const t=R("Content");return a(),i("div",Fe,[$(t)])}var ze=S(Ae,[["render",Oe],["__file","HomeContent.vue"]]);const We={key:0,class:"features"},Ue=x({__name:"HomeFeatures",setup(v){const n=P(),t=_(()=>de(n.value.features)?n.value.features:[]);return(u,o)=>e(t).length?(a(),i("div",We,[(a(!0),i(M,null,A(e(t),h=>(a(),i("div",{key:h.title,class:"feature"},[g("h2",null,T(h.title),1),g("p",null,T(h.details),1)]))),128))])):w("",!0)}});var Ve=S(Ue,[["__file","HomeFeatures.vue"]]);const je=["innerHTML"],Ke=["textContent"],Ge=x({__name:"HomeFooter",setup(v){const n=P(),t=_(()=>n.value.footer),u=_(()=>n.value.footerHtml);return(o,h)=>e(t)?(a(),i(M,{key:0},[e(u)?(a(),i("div",{key:0,class:"footer",innerHTML:e(t)},null,8,je)):(a(),i("div",{key:1,class:"footer",textContent:T(e(t))},null,8,Ke))],64)):w("",!0)}});var qe=S(Ge,[["__file","HomeFooter.vue"]]);const Xe=["href","rel","target","aria-label"],Ye=x({inheritAttrs:!1}),Je=x({...Ye,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(v){const n=v,t=X(),u=Te(),{item:o}=Y(n),h=_(()=>q(o.value.link)),m=_(()=>xe(o.value.link)||Ce(o.value.link)),p=_(()=>{if(!m.value){if(o.value.target)return o.value.target;if(h.value)return"_blank"}}),r=_(()=>p.value==="_blank"),s=_(()=>!h.value&&!m.value&&!r.value),l=_(()=>{if(!m.value){if(o.value.rel)return o.value.rel;if(r.value)return"noopener noreferrer"}}),c=_(()=>o.value.ariaLabel||o.value.text),d=_(()=>{const L=Object.keys(u.value.locales);return L.length?!L.some(f=>f===o.value.link):o.value.link!=="/"}),b=_(()=>d.value?t.path.startsWith(o.value.link):!1),k=_(()=>s.value?o.value.activeMatch?new RegExp(o.value.activeMatch).test(t.path):b.value:!1);return(L,f)=>{const N=R("RouterLink"),H=R("ExternalLinkIcon");return e(s)?(a(),C(N,ce({key:0,class:{"router-link-active":e(k)},to:e(o).link,"aria-label":e(c)},L.$attrs),{default:B(()=>[y(L.$slots,"before"),V(" "+T(e(o).text)+" ",1),y(L.$slots,"after")]),_:3},16,["class","to","aria-label"])):(a(),i("a",ce({key:1,class:"external-link",href:e(o).link,rel:e(l),target:e(p),"aria-label":e(c)},L.$attrs),[y(L.$slots,"before"),V(" "+T(e(o).text)+" ",1),e(r)?(a(),C(H,{key:0})):w("",!0),y(L.$slots,"after")],16,Xe))}}});var I=S(Je,[["__file","AutoLink.vue"]]);const Qe={class:"hero"},Ze={key:0,id:"main-title"},et={key:1,class:"description"},tt={key:2,class:"actions"},at=x({__name:"HomeHero",setup(v){const n=P(),t=J(),u=Q(),o=_(()=>u.value&&n.value.heroImageDark!==void 0?n.value.heroImageDark:n.value.heroImage),h=_(()=>n.value.heroText===null?null:n.value.heroText||t.value.title||"Hello"),m=_(()=>n.value.heroAlt||h.value||"hero"),p=_(()=>n.value.tagline===null?null:n.value.tagline||t.value.description||"Welcome to your VuePress site"),r=_(()=>de(n.value.actions)?n.value.actions.map(({text:l,link:c,type:d="primary"})=>({text:l,link:c,type:d})):[]),s=()=>{if(!o.value)return null;const l=j("img",{src:_e(o.value),alt:m.value});return n.value.heroImageDark===void 0?l:j(pe,l)};return(l,c)=>(a(),i("header",Qe,[$(s),e(h)?(a(),i("h1",Ze,T(e(h)),1)):w("",!0),e(p)?(a(),i("p",et,T(e(p)),1)):w("",!0),e(r).length?(a(),i("p",tt,[(a(!0),i(M,null,A(e(r),d=>(a(),C(I,{key:d.text,class:E(["action-button",[d.type]]),item:d},null,8,["class","item"]))),128))])):w("",!0)]))}});var nt=S(at,[["__file","HomeHero.vue"]]);const rt={class:"home"},ot=x({__name:"Home",setup(v){return(n,t)=>(a(),i("main",rt,[$(nt),$(Ve),$(ze),$(qe)]))}});var st=S(ot,[["__file","Home.vue"]]);const lt=x({__name:"NavbarBrand",setup(v){const n=he(),t=J(),u=D(),o=Q(),h=_(()=>u.value.home||n.value),m=_(()=>t.value.title),p=_(()=>o.value&&u.value.logoDark!==void 0?u.value.logoDark:u.value.logo),r=()=>{if(!p.value)return null;const s=j("img",{class:"logo",src:_e(p.value),alt:m.value});return u.value.logoDark===void 0?s:j(pe,s)};return(s,l)=>{const c=R("RouterLink");return a(),C(c,{to:e(h)},{default:B(()=>[$(r),e(m)?(a(),i("span",{key:0,class:E(["site-name",{"can-hide":e(p)}])},T(e(m)),3)):w("",!0)]),_:1},8,["to"])}}});var ut=S(lt,[["__file","NavbarBrand.vue"]]);const it=x({__name:"DropdownTransition",setup(v){const n=u=>{u.style.height=u.scrollHeight+"px"},t=u=>{u.style.height=""};return(u,o)=>(a(),C(me,{name:"dropdown",onEnter:n,onAfterEnter:t,onBeforeLeave:n},{default:B(()=>[y(u.$slots,"default")]),_:3}))}});var ke=S(it,[["__file","DropdownTransition.vue"]]);const ct=["aria-label"],vt={class:"title"},dt=g("span",{class:"arrow down"},null,-1),_t=["aria-label"],pt={class:"title"},ht={class:"navbar-dropdown"},mt={class:"navbar-dropdown-subtitle"},ft={key:1},bt={class:"navbar-dropdown-subitem-wrapper"},gt=x({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(v){const n=v,{item:t}=Y(n),u=_(()=>t.value.ariaLabel||t.value.text),o=O(!1),h=X();Ne(()=>h.path,()=>{o.value=!1});const m=r=>{r.detail===0?o.value=!o.value:o.value=!1},p=(r,s)=>s[s.length-1]===r;return(r,s)=>(a(),i("div",{class:E(["navbar-dropdown-wrapper",{open:o.value}])},[g("button",{class:"navbar-dropdown-title",type:"button","aria-label":e(u),onClick:m},[g("span",vt,T(e(t).text),1),dt],8,ct),g("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":e(u),onClick:s[0]||(s[0]=l=>o.value=!o.value)},[g("span",pt,T(e(t).text),1),g("span",{class:E(["arrow",o.value?"down":"right"])},null,2)],8,_t),$(ke,null,{default:B(()=>[K(g("ul",ht,[(a(!0),i(M,null,A(e(t).children,l=>(a(),i("li",{key:l.text,class:"navbar-dropdown-item"},[l.children?(a(),i(M,{key:0},[g("h4",mt,[l.link?(a(),C(I,{key:0,item:l,onFocusout:c=>p(l,e(t).children)&&l.children.length===0&&(o.value=!1)},null,8,["item","onFocusout"])):(a(),i("span",ft,T(l.text),1))]),g("ul",bt,[(a(!0),i(M,null,A(l.children,c=>(a(),i("li",{key:c.link,class:"navbar-dropdown-subitem"},[$(I,{item:c,onFocusout:d=>p(c,l.children)&&p(l,e(t).children)&&(o.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(a(),C(I,{key:1,item:l,onFocusout:c=>p(l,e(t).children)&&(o.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[G,o.value]])]),_:1})],2))}});var kt=S(gt,[["__file","NavbarDropdown.vue"]]);const ve=v=>decodeURI(v).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),$t=(v,n)=>{if(n.hash===v)return!0;const t=ve(n.path),u=ve(v);return t===u},$e=(v,n)=>v.link&&$t(v.link,n)?!0:v.children?v.children.some(t=>$e(t,n)):!1,Le=v=>!q(v)||/github\.com/.test(v)?"GitHub":/bitbucket\.org/.test(v)?"Bitbucket":/gitlab\.com/.test(v)?"GitLab":/gitee\.com/.test(v)?"Gitee":null,Lt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},yt=({docsRepo:v,editLinkPattern:n})=>{if(n)return n;const t=Le(v);return t!==null?Lt[t]:null},wt=({docsRepo:v,docsBranch:n,docsDir:t,filePathRelative:u,editLinkPattern:o})=>{if(!u)return null;const h=yt({docsRepo:v,editLinkPattern:o});return h?h.replace(/:repo/,q(v)?v:`https://github.com/${v}`).replace(/:branch/,n).replace(/:path/,Be(`${De(t)}/${u}`)):null},St={key:0,class:"navbar-items"},xt=x({__name:"NavbarItems",setup(v){const n=()=>{const s=Z(),l=he(),c=J(),d=D();return _(()=>{var N,H;const b=Object.keys(c.value.locales);if(b.length<2)return[];const k=s.currentRoute.value.path,L=s.currentRoute.value.fullPath;return[{text:(N=d.value.selectLanguageText)!=null?N:"unknown language",ariaLabel:(H=d.value.selectLanguageAriaLabel)!=null?H:"unkown language",children:b.map(F=>{var ne,re,oe,se,le,ue;const z=(re=(ne=c.value.locales)==null?void 0:ne[F])!=null?re:{},te=(se=(oe=d.value.locales)==null?void 0:oe[F])!=null?se:{},ae=`${z.lang}`,we=(le=te.selectLanguageName)!=null?le:ae;let W;if(ae===c.value.lang)W=L;else{const ie=k.replace(l.value,F);s.getRoutes().some(Se=>Se.path===ie)?W=ie:W=(ue=te.home)!=null?ue:F}return{text:we,link:W}})}]})},t=()=>{const s=D(),l=_(()=>s.value.repo),c=_(()=>l.value?Le(l.value):null),d=_(()=>l.value&&!q(l.value)?`https://github.com/${l.value}`:l.value),b=_(()=>d.value?s.value.repoLabel?s.value.repoLabel:c.value===null?"Source":c.value:null);return _(()=>!d.value||!b.value?[]:[{text:b.value,link:d.value}])},u=s=>fe(s)?be(s):s.children?{...s,children:s.children.map(u)}:s,h=(()=>{const s=D();return _(()=>(s.value.navbar||[]).map(u))})(),m=n(),p=t(),r=_(()=>[...h.value,...m.value,...p.value]);return(s,l)=>e(r).length?(a(),i("nav",St,[(a(!0),i(M,null,A(e(r),c=>(a(),i("div",{key:c.text,class:"navbar-item"},[c.children?(a(),C(kt,{key:0,item:c},null,8,["item"])):(a(),C(I,{key:1,item:c},null,8,["item"]))]))),128))])):w("",!0)}});var ye=S(xt,[["__file","NavbarItems.vue"]]);const Ct=["title"],Tt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Nt=Me('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Bt=[Nt],Dt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Mt=g("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Ht=[Mt],It=x({__name:"ToggleDarkModeButton",setup(v){const n=D(),t=Q(),u=()=>{t.value=!t.value};return(o,h)=>(a(),i("button",{class:"toggle-dark-button",title:e(n).toggleDarkMode,onClick:u},[K((a(),i("svg",Tt,Bt,512)),[[G,!e(t)]]),K((a(),i("svg",Dt,Ht,512)),[[G,e(t)]])],8,Ct))}});var Pt=S(It,[["__file","ToggleDarkModeButton.vue"]]);const Et=["title"],Rt=g("div",{class:"icon","aria-hidden":"true"},[g("span"),g("span"),g("span")],-1),At=[Rt],Ft=x({__name:"ToggleSidebarButton",emits:["toggle"],setup(v){const n=D();return(t,u)=>(a(),i("div",{class:"toggle-sidebar-button",title:e(n).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:u[0]||(u[0]=o=>t.$emit("toggle"))},At,8,Et))}});var Ot=S(Ft,[["__file","ToggleSidebarButton.vue"]]);const zt=x({__name:"Navbar",emits:["toggle-sidebar"],setup(v){const n=D(),t=O(null),u=O(null),o=O(0),h=_(()=>o.value?{maxWidth:o.value+"px"}:{}),m=_(()=>n.value.darkMode);ge(()=>{const s=p(t.value,"paddingLeft")+p(t.value,"paddingRight"),l=()=>{var c;window.innerWidth<=719?o.value=0:o.value=t.value.offsetWidth-s-(((c=u.value)==null?void 0:c.offsetWidth)||0)};l(),window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1)});function p(r,s){var d,b,k;const l=(k=(b=(d=r==null?void 0:r.ownerDocument)==null?void 0:d.defaultView)==null?void 0:b.getComputedStyle(r,null))==null?void 0:k[s],c=Number.parseInt(l,10);return Number.isNaN(c)?0:c}return(r,s)=>{const l=R("NavbarSearch");return a(),i("header",{ref_key:"navbar",ref:t,class:"navbar"},[$(Ot,{onToggle:s[0]||(s[0]=c=>r.$emit("toggle-sidebar"))}),g("span",{ref_key:"navbarBrand",ref:u},[$(ut)],512),g("div",{class:"navbar-items-wrapper",style:He(e(h))},[y(r.$slots,"before"),$(ye,{class:"can-hide"}),y(r.$slots,"after"),e(m)?(a(),C(Pt,{key:0})):w("",!0),$(l)],4)],512)}}});var Wt=S(zt,[["__file","Navbar.vue"]]);const Ut={class:"page-meta"},Vt={key:0,class:"meta-item edit-link"},jt={key:1,class:"meta-item last-updated"},Kt={class:"meta-item-label"},Gt={class:"meta-item-info"},qt={key:2,class:"meta-item contributors"},Xt={class:"meta-item-label"},Yt={class:"meta-item-info"},Jt=["title"],Qt=V(", "),Zt=x({__name:"PageMeta",setup(v){const n=()=>{const r=D(),s=U(),l=P();return _(()=>{var H,F,z;if(!((F=(H=l.value.editLink)!=null?H:r.value.editLink)!=null?F:!0))return null;const{repo:d,docsRepo:b=d,docsBranch:k="main",docsDir:L="",editLinkText:f}=r.value;if(!b)return null;const N=wt({docsRepo:b,docsBranch:k,docsDir:L,filePathRelative:s.value.filePathRelative,editLinkPattern:(z=l.value.editLinkPattern)!=null?z:r.value.editLinkPattern});return N?{text:f!=null?f:"Edit this page",link:N}:null})},t=()=>{const r=D(),s=U(),l=P();return _(()=>{var b,k,L,f;return!((k=(b=l.value.lastUpdated)!=null?b:r.value.lastUpdated)!=null?k:!0)||!((L=s.value.git)!=null&&L.updatedTime)?null:new Date((f=s.value.git)==null?void 0:f.updatedTime).toLocaleString()})},u=()=>{const r=D(),s=U(),l=P();return _(()=>{var d,b,k,L;return((b=(d=l.value.contributors)!=null?d:r.value.contributors)!=null?b:!0)&&(L=(k=s.value.git)==null?void 0:k.contributors)!=null?L:null})},o=D(),h=n(),m=t(),p=u();return(r,s)=>{const l=R("ClientOnly");return a(),i("footer",Ut,[e(h)?(a(),i("div",Vt,[$(I,{class:"meta-item-label",item:e(h)},null,8,["item"])])):w("",!0),e(m)?(a(),i("div",jt,[g("span",Kt,T(e(o).lastUpdatedText)+": ",1),$(l,null,{default:B(()=>[g("span",Gt,T(e(m)),1)]),_:1})])):w("",!0),e(p)&&e(p).length?(a(),i("div",qt,[g("span",Xt,T(e(o).contributorsText)+": ",1),g("span",Yt,[(a(!0),i(M,null,A(e(p),(c,d)=>(a(),i(M,{key:d},[g("span",{class:"contributor",title:`email: ${c.email}`},T(c.name),9,Jt),d!==e(p).length-1?(a(),i(M,{key:0},[Qt],64)):w("",!0)],64))),128))])])):w("",!0)])}}});var ea=S(Zt,[["__file","PageMeta.vue"]]);const ta={key:0,class:"page-nav"},aa={class:"inner"},na={key:0,class:"prev"},ra={key:1,class:"next"},oa=x({__name:"PageNav",setup(v){const n=r=>r===!1?null:fe(r)?be(r):Ie(r)?r:!1,t=(r,s,l)=>{const c=r.findIndex(d=>d.link===s);if(c!==-1){const d=r[c+l];return d!=null&&d.link?d:null}for(const d of r)if(d.children){const b=t(d.children,s,l);if(b)return b}return null},u=P(),o=ee(),h=X(),m=_(()=>{const r=n(u.value.prev);return r!==!1?r:t(o.value,h.path,-1)}),p=_(()=>{const r=n(u.value.next);return r!==!1?r:t(o.value,h.path,1)});return(r,s)=>e(m)||e(p)?(a(),i("nav",ta,[g("p",aa,[e(m)?(a(),i("span",na,[$(I,{item:e(m)},null,8,["item"])])):w("",!0),e(p)?(a(),i("span",ra,[$(I,{item:e(p)},null,8,["item"])])):w("",!0)])])):w("",!0)}});var sa=S(oa,[["__file","PageNav.vue"]]);const la={class:"page"},ua={class:"theme-default-content"},ia=x({__name:"Page",setup(v){return(n,t)=>{const u=R("Content");return a(),i("main",la,[y(n.$slots,"top"),g("div",ua,[$(u)]),$(ea),$(sa),y(n.$slots,"bottom")])}}});var ca=S(ia,[["__file","Page.vue"]]);const va={class:"sidebar-item-children"},da=x({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(v){const n=v,{item:t,depth:u}=Y(n),o=X(),h=Z(),m=_(()=>$e(t.value,o)),p=_(()=>({"sidebar-item":!0,"sidebar-heading":u.value===0,active:m.value,collapsible:t.value.collapsible})),r=O(!0),s=O(void 0);return t.value.collapsible&&(r.value=m.value,s.value=()=>{r.value=!r.value},h.afterEach(()=>{r.value=m.value})),(l,c)=>{var b;const d=R("SidebarItem",!0);return a(),i("li",null,[e(t).link?(a(),C(I,{key:0,class:E(e(p)),item:e(t)},null,8,["class","item"])):(a(),i("p",{key:1,tabindex:"0",class:E(e(p)),onClick:c[0]||(c[0]=(...k)=>s.value&&s.value(...k)),onKeydown:c[1]||(c[1]=Pe((...k)=>s.value&&s.value(...k),["enter"]))},[V(T(e(t).text)+" ",1),e(t).collapsible?(a(),i("span",{key:0,class:E(["arrow",r.value?"down":"right"])},null,2)):w("",!0)],34)),(b=e(t).children)!=null&&b.length?(a(),C(ke,{key:2},{default:B(()=>[K(g("ul",va,[(a(!0),i(M,null,A(e(t).children,k=>(a(),C(d,{key:`${e(u)}${k.text}${k.link}`,item:k,depth:e(u)+1},null,8,["item","depth"]))),128))],512),[[G,r.value]])]),_:1})):w("",!0)])}}});var _a=S(da,[["__file","SidebarItem.vue"]]);const pa={key:0,class:"sidebar-items"},ha=x({__name:"SidebarItems",setup(v){const n=ee();return(t,u)=>e(n).length?(a(),i("ul",pa,[(a(!0),i(M,null,A(e(n),o=>(a(),C(_a,{key:o.link||o.text,item:o},null,8,["item"]))),128))])):w("",!0)}});var ma=S(ha,[["__file","SidebarItems.vue"]]);const fa={class:"sidebar"},ba=x({__name:"Sidebar",setup(v){return(n,t)=>(a(),i("aside",fa,[$(ye),y(n.$slots,"top"),$(ma),y(n.$slots,"bottom")]))}});var ga=S(ba,[["__file","Sidebar.vue"]]);const ka=x({__name:"Layout",setup(v){const n=U(),t=P(),u=D(),o=_(()=>t.value.navbar!==!1&&u.value.navbar!==!1),h=ee(),m=O(!1),p=f=>{m.value=typeof f=="boolean"?f:!m.value},r={x:0,y:0},s=f=>{r.x=f.changedTouches[0].clientX,r.y=f.changedTouches[0].clientY},l=f=>{const N=f.changedTouches[0].clientX-r.x,H=f.changedTouches[0].clientY-r.y;Math.abs(N)>Math.abs(H)&&Math.abs(N)>40&&(N>0&&r.x<=80?p(!0):p(!1))},c=_(()=>[{"no-navbar":!o.value,"no-sidebar":!h.value.length,"sidebar-open":m.value},t.value.pageClass]);let d;ge(()=>{d=Z().afterEach(()=>{p(!1)})}),Ee(()=>{d()});const b=Re(),k=b.resolve,L=b.pending;return(f,N)=>(a(),i("div",{class:E(["theme-container",e(c)]),onTouchstart:s,onTouchend:l},[y(f.$slots,"navbar",{},()=>[e(o)?(a(),C(Wt,{key:0,onToggleSidebar:p},{before:B(()=>[y(f.$slots,"navbar-before")]),after:B(()=>[y(f.$slots,"navbar-after")]),_:3})):w("",!0)]),g("div",{class:"sidebar-mask",onClick:N[0]||(N[0]=H=>p(!1))}),y(f.$slots,"sidebar",{},()=>[$(ga,null,{top:B(()=>[y(f.$slots,"sidebar-top")]),bottom:B(()=>[y(f.$slots,"sidebar-bottom")]),_:3})]),y(f.$slots,"page",{},()=>[e(t).home?(a(),C(st,{key:0})):(a(),C(me,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e(k),onBeforeLeave:e(L)},{default:B(()=>[(a(),C(ca,{key:e(n).path},{top:B(()=>[y(f.$slots,"page-top")]),bottom:B(()=>[y(f.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var La=S(ka,[["__file","Layout.vue"]]);export{La as default};
