import{M as k,a as C}from"./index.421268fe.js";import{P as h}from"./index.1f2bc229.js";import{A as g,bu as j,r as l,a0 as a,B as b,a1 as V,a6 as r,H as c,w as t,u as D,ae as p}from"./vendor.e08ba229.js";/* empty css                *//* empty css               *//* empty css               */import{_ as M}from"./index.5678fbaf.js";import"./index.b811b2f1.js";import"./useWindowSizeFn.5dd3a6d6.js";import"./onMountedOrActivated.af9416e3.js";/* empty css               *//* empty css                */import"./useContentViewHeight.bb79e080.js";const x=g({components:{MarkDown:k,PageWrapper:h,MarkdownViewer:C,ACard:j},setup(){const e=l(null),o=l(`
# title

# content
`);function u(){const n=D(e);if(!n)return;n.getVditor().setTheme("dark")}function i(n){o.value=n}function d(){o.value=""}return{value:o,toggleTheme:u,markDownRef:e,handleChange:i,clearValue:d}}}),B=p(" \u9ED1\u6697\u4E3B\u9898 "),F=p(" \u6E05\u7A7A\u5185\u5BB9 "),A={class:"mt-2"};function E(e,o,u,i,d,n){const s=a("a-button"),m=a("MarkDown"),f=a("MarkdownViewer"),_=a("a-card"),v=a("PageWrapper");return b(),V(v,{title:"MarkDown\u7EC4\u4EF6\u793A\u4F8B"},{default:r(()=>[c("div",null,[t(s,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:r(()=>[B]),_:1},8,["onClick"]),t(s,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:r(()=>[F]),_:1},8,["onClick"]),t(m,{value:e.value,"onUpdate:value":o[0]||(o[0]=w=>e.value=w),onChange:e.handleChange,ref:"markDownRef",placeholder:"\u8FD9\u662F\u5360\u4F4D\u6587\u672C"},null,8,["value","onChange"])]),c("div",A,[t(_,{title:"Markdown Viewer \u7EC4\u4EF6\u6F14\u793A"},{default:r(()=>[t(f,{value:e.value},null,8,["value"])]),_:1})])]),_:1})}var G=M(x,[["render",E]]);export{G as default};
