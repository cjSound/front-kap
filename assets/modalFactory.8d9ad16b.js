import{_ as s,o,c,t as m}from"./app.705be9e1.js";const l={setup(){var e=function(a){let t={superAdmin:function(){this.name="\u8D85\u7EA7\u7BA1\u7406\u5458",this.viewPage=["\u9996\u9875","\u7528\u6237\u7BA1\u7406","\u8BA2\u5355\u7BA1\u7406","\u5E94\u7528\u7BA1\u7406","\u6743\u9650\u7BA1\u7406"]},admin:function(){this.name="\u7BA1\u7406\u5458",this.viewPage=["\u9996\u9875","\u8BA2\u5355\u7BA1\u7406","\u5E94\u7528\u7BA1\u7406"]},normaluser:function(){this.name="\u666E\u901A\u7528\u6237",this.viewPage=["\u9996\u9875","\u8BA2\u5355\u7BA1\u7406"]}};if(Object.keys(t).indexOf(a)!==-1)return new t[a];throw new Error(`\u53C2\u6570\u9519\u8BEF,\u53EF\u9009\u53C2\u6570${Object.keys(t)}`)};let r=e("superAdmin"),i=e("admin"),n=e("normaluser");return{data:{superAdmin:r,admin:i,normalUser:n}}}};function u(e,r,i,n,a,t){return o(),c("div",null,m(n.data),1)}var f=s(l,[["render",u],["__file","modalFactory.vue"]]);export{f as default};