import{_ as d,A as f,B as p,C as v,g as k,o as L,c as g,b as o,t as l,h as x,w as B,D as r,f as C}from"./app.705be9e1.js";const N={class:"theme-container"},T={class:"theme-default-content"},b=f({__name:"404",setup(D){var a,s,n;const u=p(),e=v(),t=(a=e.value.notFound)!=null?a:["Not Found"],m=()=>t[Math.floor(Math.random()*t.length)],_=(s=e.value.home)!=null?s:u.value,h=(n=e.value.backToHome)!=null?n:"Back to home";return(M,c)=>{const i=k("RouterLink");return L(),g("div",N,[o("div",T,[c[0]||(c[0]=o("h1",null,"404",-1)),o("blockquote",null,l(m()),1),x(i,{to:r(_)},{default:B(()=>[C(l(r(h)),1)]),_:1},8,["to"])])])}}});var V=d(b,[["__file","404.vue"]]);export{V as default};