import{B as f,M as v,f as g,N as d,g as l,O as h,C as _,E as r}from"./entry.221ab5ec.js";import{q as C,w as m,h as p,e as y,s as w,j as N,u as P,a as $}from"./query.ffc9a309.js";import{_ as j}from"./nuxt-link.2934e833.js";import{u as E}from"./preview.79d40364.js";const T=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${y(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(w())return(await v(()=>import("./client-db.e7599ad6.js"),["./client-db.e7599ad6.js","./entry.221ab5ec.js","./entry.1bb75adc.css","./query.ffc9a309.js","./preview.79d40364.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:N(a),previewToken:E().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=l(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=P();return{navigation:n}}const{data:s}=await $(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=_(),{navigation:a}=e,s=o=>r(j,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),Q=D;export{Q as default};
