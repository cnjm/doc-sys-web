import{h as d,B as c}from"./BasicForm.b5d6094e.js";import{_ as l,h as f}from"./index.5678fbaf.js";import{u as j}from"./useForm.5db1be8a.js";import{P as x}from"./index.1f2bc229.js";import{A as b,bV as r,a0 as o,B as g,a1 as F,a6 as B,w as s}from"./vendor.e08ba229.js";/* empty css                */import{u as t}from"./upload.486231f6.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.f6db3164.js";/* empty css                */import"./index.b811b2f1.js";import"./useWindowSizeFn.5dd3a6d6.js";/* empty css                */import"./uuid.1226a91f.js";import"./download.2b91008f.js";import"./base64Conver.08b9f4ec.js";import"./index.2b7dfa36.js";/* empty css               *//* empty css                */import"./onMountedOrActivated.af9416e3.js";import"./useContentViewHeight.bb79e080.js";const _=[{field:"field1",component:"Upload",label:"\u5B57\u6BB51",colProps:{span:8},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6"}],componentProps:{api:t}}],h=b({components:{BasicUpload:d,BasicForm:c,PageWrapper:x,[r.name]:r},setup(){const{createMessage:e}=f(),[a]=j({labelWidth:120,schemas:_,actionColOptions:{span:16}});return{handleChange:i=>{e.info(`\u5DF2\u4E0A\u4F20\u6587\u4EF6${JSON.stringify(i)}`)},uploadApi:t,register:a}}});function A(e,a,i,C,E,P){const n=o("a-alert"),p=o("BasicUpload"),m=o("BasicForm"),u=o("PageWrapper");return g(),F(u,{title:"\u4E0A\u4F20\u7EC4\u4EF6\u793A\u4F8B"},{default:B(()=>[s(n,{message:"\u57FA\u7840\u793A\u4F8B"}),s(p,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi,class:"my-5",uploadParams:{path:"test1"},accept:["image/*"]},null,8,["onChange","api"]),s(n,{message:"\u5D4C\u5165\u8868\u5355,\u52A0\u5165\u8868\u5355\u6821\u9A8C"}),s(m,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])]),_:1})}var oe=l(h,[["render",A]]);export{oe as default};
