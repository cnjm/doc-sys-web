var h=(e,m,n)=>new Promise((p,i)=>{var r=o=>{try{a(n.next(o))}catch(s){i(s)}},d=o=>{try{a(n.throw(o))}catch(s){i(s)}},a=o=>o.done?p(o.value):Promise.resolve(o.value).then(r,d);a((n=n.apply(e,m)).next())});import{B as _}from"./TableImg.8fa1a465.js";import{T as x}from"./BasicForm.b5d6094e.js";import{u as C}from"./useTable.54a2c50f.js";import{A as F,g as T,c as A,s as S,d as w}from"./AccountModal.e4948d98.js";import{P as B}from"./index.1f2bc229.js";import{u as M}from"./index.b811b2f1.js";import{_ as D,k}from"./index.5678fbaf.js";import{A as y,P as I,a0 as l,B as R,a1 as v,a6 as f,w as b,ae as E}from"./vendor.e08ba229.js";/* empty css                *//* empty css              */import"./useForm.5db1be8a.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.1226a91f.js";import"./useWindowSizeFn.5dd3a6d6.js";import"./onMountedOrActivated.af9416e3.js";/* empty css               */import"./useSortable.06293d2d.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.f6db3164.js";import"./upload.486231f6.js";/* empty css                *//* empty css                */import"./download.2b91008f.js";import"./base64Conver.08b9f4ec.js";import"./index.2b7dfa36.js";import"./auth.04d33883.js";/* empty css               *//* empty css                */import"./useContentViewHeight.bb79e080.js";const P=y({name:"AccountManagement",components:{BasicTable:_,PageWrapper:B,AccountModal:F,TableAction:x},setup(){const e=k(),[m,{openModal:n}]=M(),p=I({}),[i,{reload:r,updateTableDataRecord:d}]=C({title:"\u8D26\u53F7\u5217\u8868",api:T,rowKey:"id",columns:A,formConfig:{labelWidth:80,schemas:S,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(t){return console.log("handleSearchInfoFn",t),t},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});function a(){n(!0,{isUpdate:!1})}function o(t){const u=t;u.auth_key=t.auth_key.split(","),n(!0,{record:u,isUpdate:!0})}function s(t){return h(this,null,function*(){yield w({id:t.id}),r()})}function j({isUpdate:t,values:u}){if(t){const g=d(u.id,u);console.log(g)}else r()}function c(t){e("/system/account_detail/"+t.id)}return{registerTable:i,registerModal:m,handleCreate:a,handleEdit:o,handleDelete:s,handleSuccess:j,handleView:c,searchInfo:p}}}),W=E("\u65B0\u589E\u8D26\u53F7");function V(e,m,n,p,i,r){const d=l("a-button"),a=l("TableAction"),o=l("BasicTable"),s=l("AccountModal"),j=l("PageWrapper");return R(),v(j,{dense:"",contentFullHeight:"",contentClass:"flex"},{default:f(()=>[b(o,{onRegister:e.registerTable,searchInfo:e.searchInfo},{toolbar:f(()=>[b(d,{type:"primary",onClick:e.handleCreate},{default:f(()=>[W]),_:1},8,["onClick"])]),action:f(({record:c})=>[b(a,{actions:[{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91\u8D26\u53F7\u8D44\u6599",onClick:e.handleEdit.bind(null,c)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664\u6B64\u8D26\u53F7",ifShow:c.id!==1,popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,c)}}]},null,8,["actions"])]),_:1},8,["onRegister","searchInfo"]),b(s,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var xe=D(P,[["render",V]]);export{xe as default};