import{I as b}from"./index.57c694b6.js";import{B as _}from"./TableImg.8fa1a465.js";import"./BasicForm.b5d6094e.js";import{P as B}from"./index.1f2bc229.js";import{_ as S}from"./index.5678fbaf.js";import{A as h,r as F,a0 as s,B as i,a1 as l,a6 as m,w as f,D as g,ap as v,ab as C,ae as E}from"./vendor.e08ba229.js";import"./index.b811b2f1.js";import"./useWindowSizeFn.5dd3a6d6.js";import"./useForm.5db1be8a.js";/* empty css                *//* empty css              *//* empty css                *//* empty css                *//* empty css               */import"./uuid.1226a91f.js";import"./onMountedOrActivated.af9416e3.js";/* empty css               */import"./useSortable.06293d2d.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.f6db3164.js";import"./upload.486231f6.js";/* empty css                *//* empty css                */import"./download.2b91008f.js";import"./base64Conver.08b9f4ec.js";import"./index.2b7dfa36.js";/* empty css               *//* empty css                */import"./useContentViewHeight.bb79e080.js";const I=h({components:{BasicTable:_,ImpExcel:b,PageWrapper:B},setup(){const e=F([]);function c(a){e.value=[],console.log(a);for(const p of a){const{header:d,results:u,meta:{sheetName:r}}=p,t=[];for(const o of d)t.push({title:o,dataIndex:o});e.value.push({title:r,dataSource:u,columns:t})}}return{loadDataSuccess:c,tableListRef:e}}}),w=E(" \u5BFC\u5165Excel ");function D(e,c,a,p,d,u){const r=s("a-button"),t=s("ImpExcel"),o=s("BasicTable"),j=s("PageWrapper");return i(),l(j,{title:"excel\u6570\u636E\u5BFC\u5165\u793A\u4F8B"},{default:m(()=>[f(t,{onSuccess:e.loadDataSuccess,dateFormat:"YYYY-MM-DD"},{default:m(()=>[f(r,{class:"m-3"},{default:m(()=>[w]),_:1})]),_:1},8,["onSuccess"]),(i(!0),g(C,null,v(e.tableListRef,(n,x)=>(i(),l(o,{key:x,title:n.title,columns:n.columns,dataSource:n.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}var me=S(I,[["render",D]]);export{me as default};
