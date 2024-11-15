import{_ as E}from"./Tree.vue_vue&type=style&index=0&lang.784cebe0.js";import{t as D}from"./data.5e96733f.js";import{_ as v,h as A}from"./index.5678fbaf.js";import{P as F}from"./index.1f2bc229.js";import{A as K,r as N,a0 as c,B as S,a1 as g,a6 as u,H as f,w as o,ae as a,u as $}from"./vendor.e08ba229.js";import"./useContextMenu.cb6b587f.js";/* empty css               *//* empty css               *//* empty css                */import"./onMountedOrActivated.af9416e3.js";import"./useWindowSizeFn.5dd3a6d6.js";import"./useContentViewHeight.bb79e080.js";const b=K({components:{BasicTree:E,PageWrapper:F},setup(){const t=N(null),{createMessage:e}=A();function l(){const n=$(t);if(!n)throw new Error("tree is null!");return n}function p(n){l().filterByLevel(n)}function m(){l().setCheckedKeys(["0-0"])}function C(){const n=l().getCheckedKeys();e.success(JSON.stringify(n))}function s(){l().setSelectedKeys(["0-0"])}function i(){const n=l().getSelectedKeys();e.success(JSON.stringify(n))}function r(){l().setExpandedKeys(["0-0"])}function d(){const n=l().getExpandedKeys();e.success(JSON.stringify(n))}function B(n){l().checkAll(n)}function k(n){l().expandAll(n)}function _(n=null){l().insertNodeByKey({parentKey:n,node:{title:"\u65B0\u589E\u8282\u70B9",key:"2-2-2"},push:"push"})}function y(n){l().deleteNodeByKey(n)}function h(n){l().updateNodeByKey(n,{title:"parent2-new"})}return{treeData:D,treeRef:t,handleLevel:p,handleSetCheckData:m,handleGetCheckData:C,handleSetSelectData:s,handleGetSelectData:i,handleSetExpandData:r,handleGetExpandData:d,appendNodeByKey:_,deleteNodeByKey:y,updateNodeByKey:h,checkAll:B,expandAll:k}}}),j={class:"mb-4"},T=a(" \u5C55\u5F00\u5168\u90E8 "),w=a(" \u6298\u53E0\u5168\u90E8 "),G=a(" \u5168\u9009 "),x=a(" \u5168\u4E0D\u9009 "),L=a(" \u663E\u793A\u5230\u7B2C2\u7EA7 "),M=a(" \u663E\u793A\u5230\u7B2C1\u7EA7 "),O={class:"mb-4"},P=a(" \u8BBE\u7F6E\u52FE\u9009\u6570\u636E "),V=a(" \u83B7\u53D6\u52FE\u9009\u6570\u636E "),W=a(" \u8BBE\u7F6E\u9009\u4E2D\u6570\u636E "),J=a(" \u83B7\u53D6\u9009\u4E2D\u6570\u636E "),H=a(" \u8BBE\u7F6E\u5C55\u5F00\u6570\u636E "),R=a(" \u83B7\u53D6\u5C55\u5F00\u6570\u636E "),z={class:"mb-4"},q=a(" \u6DFB\u52A0\u6839\u8282\u70B9 "),I=a(" \u6DFB\u52A0\u5728parent3\u5185\u6DFB\u52A0\u8282\u70B9 "),Q=a(" \u5220\u9664parent3\u8282\u70B9 "),U=a(" \u66F4\u65B0parent2\u8282\u70B9 ");function X(t,e,l,p,m,C){const s=c("a-button"),i=c("BasicTree"),r=c("PageWrapper");return S(),g(r,{title:"Tree\u51FD\u6570\u64CD\u4F5C\u793A\u4F8B",contentBackground:"",contentClass:"p-4"},{default:u(()=>[f("div",j,[o(s,{onClick:e[0]||(e[0]=d=>t.expandAll(!0)),class:"mr-2"},{default:u(()=>[T]),_:1}),o(s,{onClick:e[1]||(e[1]=d=>t.expandAll(!1)),class:"mr-2"},{default:u(()=>[w]),_:1}),o(s,{onClick:e[2]||(e[2]=d=>t.checkAll(!0)),class:"mr-2"},{default:u(()=>[G]),_:1}),o(s,{onClick:e[3]||(e[3]=d=>t.checkAll(!1)),class:"mr-2"},{default:u(()=>[x]),_:1}),o(s,{onClick:e[4]||(e[4]=d=>t.handleLevel(2)),class:"mr-2"},{default:u(()=>[L]),_:1}),o(s,{onClick:e[5]||(e[5]=d=>t.handleLevel(1)),class:"mr-2"},{default:u(()=>[M]),_:1})]),f("div",O,[o(s,{onClick:t.handleSetCheckData,class:"mr-2"},{default:u(()=>[P]),_:1},8,["onClick"]),o(s,{onClick:t.handleGetCheckData,class:"mr-2"},{default:u(()=>[V]),_:1},8,["onClick"]),o(s,{onClick:t.handleSetSelectData,class:"mr-2"},{default:u(()=>[W]),_:1},8,["onClick"]),o(s,{onClick:t.handleGetSelectData,class:"mr-2"},{default:u(()=>[J]),_:1},8,["onClick"]),o(s,{onClick:t.handleSetExpandData,class:"mr-2"},{default:u(()=>[H]),_:1},8,["onClick"]),o(s,{onClick:t.handleGetExpandData,class:"mr-2"},{default:u(()=>[R]),_:1},8,["onClick"])]),f("div",z,[o(s,{onClick:e[6]||(e[6]=d=>t.appendNodeByKey(null)),class:"mr-2"},{default:u(()=>[q]),_:1}),o(s,{onClick:e[7]||(e[7]=d=>t.appendNodeByKey("2-2")),class:"mr-2"},{default:u(()=>[I]),_:1}),o(s,{onClick:e[8]||(e[8]=d=>t.deleteNodeByKey("2-2")),class:"mr-2"},{default:u(()=>[Q]),_:1}),o(s,{onClick:e[9]||(e[9]=d=>t.updateNodeByKey("1-1")),class:"mr-2"},{default:u(()=>[U]),_:1})]),o(i,{treeData:t.treeData,title:"\u51FD\u6570\u64CD\u4F5C",ref:"treeRef",checkable:!0},null,8,["treeData"])]),_:1})}var re=v(b,[["render",X]]);export{re as default};
