import{A as B,bm as g,c8 as l,a0 as i,B as o,a1 as m,a6 as a,w as d,K as s,H as n,D as c,ap as _,J as p,ab as u,ad as I,ae as f}from"./vendor.e08ba229.js";/* empty css               */import{_ as k,I as y}from"./index.5678fbaf.js";import{B as w}from"./BasicForm.b5d6094e.js";import{searchList as F,actions as V,schemas as W}from"./data.cec9f45c.js";import{P as A}from"./index.1f2bc229.js";/* empty css                *//* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css                *//* empty css                */import"./index.f6db3164.js";import"./upload.486231f6.js";/* empty css                *//* empty css                */import"./index.b811b2f1.js";import"./useWindowSizeFn.5dd3a6d6.js";/* empty css                */import"./uuid.1226a91f.js";import"./download.2b91008f.js";import"./base64Conver.08b9f4ec.js";import"./index.2b7dfa36.js";/* empty css               *//* empty css                */import"./onMountedOrActivated.af9416e3.js";import"./useContentViewHeight.bb79e080.js";const L=B({components:{Icon:y,Tag:g,BasicForm:w,PageWrapper:A,[l.name]:l,[l.Item.name]:l.Item,AListItemMeta:l.Item.Meta},setup(){return{prefixCls:"list-search",list:F,actions:V,schemas:W}}});function N(e,P,T,D,M,z){const j=i("BasicForm"),x=i("Icon"),C=i("Tag"),b=i("a-list-item-meta"),v=i("a-list-item"),h=i("a-list"),$=i("PageWrapper");return o(),m($,{class:s(e.prefixCls),title:"\u641C\u7D22\u5217\u8868"},{headerContent:a(()=>[d(j,{class:s(`${e.prefixCls}__header-form`),labelWidth:100,schemas:e.schemas,showActionButtonGroup:!1},null,8,["class","schemas"])]),default:a(()=>[n("div",{class:s(`${e.prefixCls}__container`)},[d(h,null,{default:a(()=>[(o(!0),c(u,null,_(e.list,r=>(o(),m(v,{key:r.id},{default:a(()=>[d(b,null,{description:a(()=>[n("div",{class:s(`${e.prefixCls}__content`)},p(r.content),3),n("div",{class:s(`${e.prefixCls}__action`)},[(o(!0),c(u,null,_(e.actions,t=>(o(),c("div",{key:t.icon,class:s(`${e.prefixCls}__action-item`)},[t.icon?(o(),m(x,{key:0,class:s(`${e.prefixCls}__action-icon`),icon:t.icon,color:t.color},null,8,["class","icon","color"])):I("",!0),f(" "+p(t.text),1)],2))),128)),n("span",{class:s(`${e.prefixCls}__time`)},p(r.time),3)],2)]),title:a(()=>[n("p",{class:s(`${e.prefixCls}__title`)},p(r.title),3),n("div",null,[(o(!0),c(u,null,_(r.description,t=>(o(),m(C,{key:t,class:"mb-2"},{default:a(()=>[f(p(t),1)]),_:2},1024))),128))])]),_:2},1024)]),_:2},1024))),128))]),_:1})],2)]),_:1},8,["class"])}var fe=k(L,[["render",N],["__scopeId","data-v-3556505a"]]);export{fe as default};