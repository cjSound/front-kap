import{_ as p,r as d,o as r,c,F as m,e as _,f as g,t as l,b as i}from"./app.705be9e1.js";const v={setup(){console.log(" ---------------------------------  \u5B9E\u4F8B\u7EE7\u627F ---------------------------------");function a(n){this.name=n||"Parents",this.sleep=function(){let e=`\u5B9E\u4F8B\u65B9\u6CD5\u7EE7\u627F\uFF1A\u6211\u662F${this.name}`;return console.log(e),e}}a.prototype.eat=function(n){let e=`\u539F\u578B\u65B9\u6CD5\u4E5F\u7EE7\u627F\u4E86\uFF0C ${this.name}\u6B63\u5728\u5403\uFF1A${n}`;return console.log(e),e};function o(n){var e=new a;return e.name=n||"\u5B50Cat",e}var t=new o("\u6211\u662F\u7EE7\u627F\u8005");console.log("\u{1F680} ~ file: extendPro.vue ~ line 43 ~ setup ~ cat",t);let s=d({name:t.name,\u539F\u578B\u65B9\u6CD5Eat:t.eat("\u5403\u897F\u74DC"),"cat instanceof Cat":t instanceof o,"cat instanceof Parents":t instanceof a,sleep:t.sleep()});return{cat:t,data:s}}};function x(a,o,t,s,n,e){return r(),c("div",null,[(r(!0),c(m,null,_(s.data,(u,f)=>(r(),c("div",null,[i("b",null,l(f)+" \uFF1A",1),i("span",null,l(u),1)]))),256)),g(" "+l(s.cat),1)])}var $=p(v,[["render",x],["__file","extendIns.vue"]]);export{$ as default};
