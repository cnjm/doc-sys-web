import{B as m,b as l}from"./index.b811b2f1.js";import{B as c}from"./BasicForm.b5d6094e.js";import{u as f}from"./useForm.5db1be8a.js";import{_ as u}from"./index.5678fbaf.js";import{A as j,r as b,a0 as r,B,a1 as x,a6 as g,H as h,w as _,a4 as C,$ as F}from"./vendor.e08ba229.js";import"./useWindowSizeFn.5dd3a6d6.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.f6db3164.js";import"./upload.486231f6.js";/* empty css                *//* empty css                *//* empty css                */import"./uuid.1226a91f.js";import"./download.2b91008f.js";import"./base64Conver.08b9f4ec.js";import"./index.2b7dfa36.js";const d=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:24}}],v=j({components:{BasicModal:m,BasicForm:c},props:{userData:{type:Object}},setup(o){const s=b({}),[n,{}]=f({labelWidth:120,schemas:d,showActionButtonGroup:!1,actionColOptions:{span:24}}),[t]=l(e=>{e&&i(e)});function i(e){console.log("Data Received",e),s.value={field2:e.data,field1:e.info}}function a(e){e&&o.userData&&F(()=>i(o.userData))}return{register:t,schemas:d,registerForm:n,model:s,handleVisibleChange:a}}}),R={class:"pt-3px pr-3px"};function V(o,s,n,t,i,a){const e=r("BasicForm"),p=r("BasicModal");return B(),x(p,C(o.$attrs,{onRegister:o.register,title:"Modal Title",onVisibleChange:o.handleVisibleChange}),{default:g(()=>[h("div",R,[_(e,{onRegister:o.registerForm,model:o.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}var U=u(v,[["render",V]]);export{U as default};
