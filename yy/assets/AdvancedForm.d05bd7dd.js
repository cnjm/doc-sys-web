import{B as c}from"./BasicForm.b5d6094e.js";import{u}from"./useForm.5db1be8a.js";import{_ as m,af as f}from"./index.5678fbaf.js";import{P as B}from"./index.1f2bc229.js";import{A as b,a0 as s,B as j,a1 as x,a6 as i,w as n}from"./vendor.e08ba229.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.f6db3164.js";import"./upload.486231f6.js";/* empty css                *//* empty css                */import"./index.b811b2f1.js";import"./useWindowSizeFn.5dd3a6d6.js";/* empty css                */import"./uuid.1226a91f.js";import"./download.2b91008f.js";import"./base64Conver.08b9f4ec.js";import"./index.2b7dfa36.js";/* empty css               *//* empty css                */import"./onMountedOrActivated.af9416e3.js";import"./useContentViewHeight.bb79e080.js";const l=()=>[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:e=>{console.log(e)}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}];function C(){return[{field:"field10",component:"Input",label:"\u5B57\u6BB510",colProps:{span:8}},{field:"field11",component:"Input",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field12",component:"Input",label:"\u5B57\u6BB512",colProps:{span:8}},{field:"field13",component:"Input",label:"\u5B57\u6BB513",colProps:{span:8}}]}const F=b({components:{BasicForm:c,CollapseContainer:f,PageWrapper:B},setup(){const[e]=u({labelWidth:120,schemas:l(),actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),t=[];for(let o=14;o<30;o++)t.push({field:"field"+o,component:"Input",label:"\u5B57\u6BB5"+o,colProps:{span:8}});const[p]=u({labelWidth:120,schemas:[...l(),...C(),{field:"",component:"Divider",label:"\u66F4\u591A\u5B57\u6BB5"},...t],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0,alwaysShowLines:2});return{register:e,register1:p}}});function h(e,t,p,o,P,g){const a=s("BasicForm"),r=s("CollapseContainer"),d=s("PageWrapper");return j(),x(d,{title:"\u53EF\u6298\u53E0\u8868\u5355\u793A\u4F8B"},{default:i(()=>[n(r,{title:"\u57FA\u7840\u6536\u7F29\u793A\u4F8B"},{default:i(()=>[n(a,{onRegister:e.register},null,8,["onRegister"])]),_:1}),n(r,{title:"\u8D85\u8FC73\u884C\u81EA\u52A8\u6536\u8D77\uFF0C\u6298\u53E0\u65F6\u4FDD\u75592\u884C",class:"mt-4"},{default:i(()=>[n(a,{onRegister:e.register1},null,8,["onRegister"])]),_:1})]),_:1})}var Y=m(F,[["render",h]]);export{Y as default};