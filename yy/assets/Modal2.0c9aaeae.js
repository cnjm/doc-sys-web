import{B as l,b as u}from"./index.b811b2f1.js";import{_ as c}from"./index.5678fbaf.js";import{A as p,a0 as n,B as _,a1 as m,a6 as o,w as r,ae as i}from"./vendor.e08ba229.js";import"./useWindowSizeFn.5dd3a6d6.js";const f=p({components:{BasicModal:l},setup(){const[e,{closeModal:t,setModalProps:s}]=u();return{register:e,closeModal:t,setModalProps:()=>{s({title:"Modal New Title"})}}}}),M=i(" \u4ECE\u5185\u90E8\u5173\u95ED\u5F39\u7A97 "),C=i(" \u4ECE\u5185\u90E8\u4FEE\u6539title ");function E(e,t,s,b,B,k){const a=n("a-button"),d=n("BasicModal");return _(),m(d,{onRegister:e.register,title:"Modal Title",helpMessage:["\u63D0\u793A1","\u63D0\u793A2"],okButtonProps:{disabled:!0}},{default:o(()=>[r(a,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:o(()=>[M]),_:1},8,["onClick"]),r(a,{type:"primary",onClick:e.setModalProps},{default:o(()=>[C]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}var x=c(f,[["render",E]]);export{x as default};