import{A as r,ci as d,cv as p,a0 as n,B as t,D as u,a1 as s,ay as g}from"./vendor.e08ba229.js";import{_ as c,q as f}from"./index.5678fbaf.js";const m=r({name:"SiderTrigger",components:{DoubleRightOutlined:d,DoubleLeftOutlined:p},setup(){const{getCollapsed:e,toggleCollapsed:o}=f();return{getCollapsed:e,toggleCollapsed:o}}});function b(e,o,C,_,D,k){const l=n("DoubleRightOutlined"),a=n("DoubleLeftOutlined");return t(),u("div",{onClick:o[0]||(o[0]=g((...i)=>e.toggleCollapsed&&e.toggleCollapsed(...i),["stop"]))},[e.getCollapsed?(t(),s(l,{key:0})):(t(),s(a,{key:1}))])}var B=c(m,[["render",b]]);export{B as default};