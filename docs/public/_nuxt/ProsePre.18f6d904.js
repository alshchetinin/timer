import{_ as l}from"./ProseCode.vue.9f47c812.js";import{f as n,o as s,h as o,w as r,a as i,a2 as g,r as u}from"./entry.221ab5ec.js";const m=n({__name:"ProsePre",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]},meta:{type:String,default:null},class:{type:String,default:null}},setup(e){return(a,f)=>{const t=l;return s(),o(t,{code:e.code,language:e.language,filename:e.filename,highlights:e.highlights,meta:e.meta},{default:r(()=>[i("pre",{class:g(a.$props.class)},[u(a.$slots,"default")],2)]),_:3},8,["code","language","filename","highlights","meta"])}}});export{m as default};