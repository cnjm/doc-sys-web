var _=Object.defineProperty;var j=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var h=(e,o,t)=>o in e?_(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,g=(e,o)=>{for(var t in o||(o={}))T.call(o,t)&&h(e,t,o[t]);if(j)for(var t of j(o))x.call(o,t)&&h(e,t,o[t]);return e};import{P as w}from"./uuid.1226a91f.js";import{B as C,T as S}from"./TableImg.8fa1a465.js";import{T as E}from"./BasicForm.b5d6094e.js";import{u as I}from"./useTable.54a2c50f.js";import{O as P,g as O,c as F,s as A}from"./OperateSwiperDrawer.ffe2ff09.js";import{P as M}from"./index.1f2bc229.js";import{u as B}from"./index.b811b2f1.js";import{_ as D,aj as R}from"./index.5678fbaf.js";import{A as v,P as k,a0 as r,B as N,a1 as W,a6 as s,w as a,ae as y}from"./vendor.e08ba229.js";/* empty css                *//* empty css              */import"./useForm.5db1be8a.js";/* empty css                *//* empty css                *//* empty css               */import"./useWindowSizeFn.5dd3a6d6.js";import"./onMountedOrActivated.af9416e3.js";/* empty css               */import"./useSortable.06293d2d.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.f6db3164.js";import"./upload.486231f6.js";/* empty css                *//* empty css                */import"./download.2b91008f.js";import"./base64Conver.08b9f4ec.js";import"./index.2b7dfa36.js";import"./uploadEnum.0c123c22.js";import"./goods.5d826801.js";/* empty css               *//* empty css                */import"./useContentViewHeight.bb79e080.js";const $=v({name:"OperateSwiperManagement",components:{BasicTable:C,PageWrapper:M,OperateSwiperDrawer:P,TableImg:S,TableAction:E},setup(){const e=R.OPERATE,o=w.MEDIA_CNJM_TOP,[t,{openModal:c}]=B(),f=k({}),[b,{reload:d}]=I({title:"\u8F6E\u64AD\u5217\u8868",api:O,rowKey:"id",columns:F,formConfig:{labelWidth:80,schemas:A,autoSubmitOnEnter:!0},showIndexColumn:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(n){return console.log("handleSearchInfoFn",n),n},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});function m(){c(!0,{isUpdate:!1})}function p(n){const i=g({},n);console.log(i),c(!0,{record:i,isUpdate:!0})}function l(){d()}return{OPERATE:e,registerTable:b,searchInfo:f,registerModal:t,handleCreate:m,handleEdit:p,handleSuccess:l,MEDIA_CNJM_TOP:o}}}),J=y("\u65B0\u589E");function L(e,o,t,c,f,b){const d=r("a-button"),m=r("TableImg"),p=r("TableAction"),l=r("BasicTable"),n=r("OperateSwiperDrawer"),i=r("PageWrapper");return N(),W(i,{dense:"",contentFullHeight:"",contentClass:"flex"},{default:s(()=>[a(l,{onRegister:e.registerTable,searchInfo:e.searchInfo},{toolbar:s(()=>[a(d,{type:"primary",onClick:e.handleCreate},{default:s(()=>[J]),_:1},8,["onClick"])]),img:s(({text:u})=>[a(m,{size:60,simpleShow:!0,imgList:u,srcPrefix:e.MEDIA_CNJM_TOP},null,8,["imgList","srcPrefix"])]),action:s(({record:u})=>[a(p,{actions:[{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91",onClick:e.handleEdit.bind(null,u),auth:[e.OPERATE]}]},null,8,["actions"])]),_:1},8,["onRegister","searchInfo"]),a(n,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var Ee=D($,[["render",L]]);export{Ee as default};