var x=Object.defineProperty;var b=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var g=(e,o,t)=>o in e?x(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,h=(e,o)=>{for(var t in o||(o={}))_.call(o,t)&&g(e,t,o[t]);if(b)for(var t of b(o))C.call(o,t)&&g(e,t,o[t]);return e};import{P as T}from"./uuid.1226a91f.js";import{B as w,T as F}from"./TableImg.8fa1a465.js";import{T as D}from"./BasicForm.b5d6094e.js";import{u as E}from"./useTable.54a2c50f.js";import{g as S}from"./goods.5d826801.js";import{P as B}from"./index.1f2bc229.js";import{u as I}from"./index.d7dad99a.js";import{G as P,c as O,s as G}from"./GoodsListDrawer.94f5966d.js";import{_ as A,aj as L}from"./index.5678fbaf.js";import{A as M,P as v,a0 as n,B as R,a1 as k,a6 as r,w as a,ae as N}from"./vendor.e08ba229.js";/* empty css                *//* empty css              */import"./useForm.5db1be8a.js";/* empty css                *//* empty css                *//* empty css               */import"./useWindowSizeFn.5dd3a6d6.js";import"./index.b811b2f1.js";import"./onMountedOrActivated.af9416e3.js";/* empty css               */import"./useSortable.06293d2d.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.f6db3164.js";import"./upload.486231f6.js";/* empty css                *//* empty css                */import"./download.2b91008f.js";import"./base64Conver.08b9f4ec.js";import"./index.2b7dfa36.js";/* empty css               *//* empty css                */import"./useContentViewHeight.bb79e080.js";/* empty css               */import"./uploadEnum.0c123c22.js";import"./index.aa8da8a3.js";const W=M({name:"GoodsListManagement",components:{BasicTable:w,PageWrapper:B,GoodsListDrawer:P,TableImg:F,TableAction:D},setup(){const e=L.GOODS,o=T.MEDIA_CNJM_TOP,[t,{openDrawer:i}]=I(),f=v({}),[j,{reload:d}]=E({title:"\u5546\u54C1\u5217\u8868",api:S,rowKey:"id",columns:O,formConfig:{labelWidth:80,schemas:G,autoSubmitOnEnter:!0},showIndexColumn:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(s){return console.log("\u83B7\u53D6\u70B9\u51FB\u67E5\u8BE2\u65F6\uFF0C\u67E5\u8BE2\u6761\u4EF6\u7684\u4FE1\u606F",s),s},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});function u(){i(!0,{isUpdate:!1})}function m(s){const p=h({},s);i(!0,{record:p,isUpdate:!0})}function c(){d()}return{GOODS:e,registerTable:j,searchInfo:f,registerDrawer:t,handleCreate:u,handleEdit:m,handleSuccess:c,MEDIA_CNJM_TOP:o}}}),y=N("\u65B0\u589E\u5546\u54C1");function $(e,o,t,i,f,j){const d=n("a-button"),u=n("TableImg"),m=n("TableAction"),c=n("BasicTable"),s=n("GoodsListDrawer"),p=n("PageWrapper");return R(),k(p,{dense:"",contentFullHeight:"",contentClass:"flex"},{default:r(()=>[a(c,{onRegister:e.registerTable,searchInfo:e.searchInfo},{toolbar:r(()=>[a(d,{type:"primary",onClick:e.handleCreate},{default:r(()=>[y]),_:1},8,["onClick"])]),img:r(({text:l})=>[a(u,{size:60,simpleShow:!0,imgList:l,srcPrefix:e.MEDIA_CNJM_TOP},null,8,["imgList","srcPrefix"])]),action:r(({record:l})=>[a(m,{actions:[{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91\u5546\u54C1",onClick:e.handleEdit.bind(null,l),auth:[e.GOODS]}]},null,8,["actions"])]),_:1},8,["onRegister","searchInfo"]),a(s,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var Be=A(W,[["render",$]]);export{Be as default};