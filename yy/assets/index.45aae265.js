import{B as f}from"./TableImg.8fa1a465.js";import{T as b}from"./BasicForm.b5d6094e.js";import{u as j}from"./useTable.54a2c50f.js";import{g as x}from"./system.a924eb76.js";import{u as h}from"./index.b811b2f1.js";import{D as g,c as C,s as _}from"./DeptModal.f9f45362.js";import{_ as T}from"./index.5678fbaf.js";import{A as D,a0 as t,B,D as M,w as n,a6 as r,ae as E}from"./vendor.e08ba229.js";/* empty css                *//* empty css              */import"./useForm.5db1be8a.js";import"./index.1f2bc229.js";/* empty css               *//* empty css                */import"./onMountedOrActivated.af9416e3.js";import"./useWindowSizeFn.5dd3a6d6.js";import"./useContentViewHeight.bb79e080.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.1226a91f.js";/* empty css               */import"./useSortable.06293d2d.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.f6db3164.js";import"./upload.486231f6.js";/* empty css                *//* empty css                */import"./download.2b91008f.js";import"./base64Conver.08b9f4ec.js";import"./index.2b7dfa36.js";const S=D({name:"DeptManagement",components:{BasicTable:f,DeptModal:g,TableAction:b},setup(){const[e,{openModal:i}]=h(),[d,{reload:l}]=j({title:"\u90E8\u95E8\u5217\u8868",api:x,columns:C,formConfig:{labelWidth:120,schemas:_},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function m(){i(!0,{isUpdate:!1})}function p(o){i(!0,{record:o,isUpdate:!0})}function s(o){console.log(o)}function a(){l()}return{registerTable:d,registerModal:e,handleCreate:m,handleEdit:p,handleDelete:s,handleSuccess:a}}}),w=E(" \u65B0\u589E\u90E8\u95E8 ");function v(e,i,d,l,m,p){const s=t("a-button"),a=t("TableAction"),o=t("BasicTable"),u=t("DeptModal");return B(),M("div",null,[n(o,{onRegister:e.registerTable},{toolbar:r(()=>[n(s,{type:"primary",onClick:e.handleCreate},{default:r(()=>[w]),_:1},8,["onClick"])]),action:r(({record:c})=>[n(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,c)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,c)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),n(u,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var me=T(S,[["render",v]]);export{me as default};