var I=Object.defineProperty;var B=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var C=(e,t,u)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,E=(e,t)=>{for(var u in t||(t={}))P.call(t,u)&&C(e,u,t[u]);if(B)for(var u of B(t))y.call(t,u)&&C(e,u,t[u]);return e};var c=(e,t,u)=>new Promise((r,n)=>{var p=a=>{try{s(u.next(a))}catch(i){n(i)}},l=a=>{try{s(u.throw(a))}catch(i){n(i)}},s=a=>a.done?r(a.value):Promise.resolve(a.value).then(p,l);s((u=u.apply(e,t)).next())});import{B as _}from"./BasicForm.b5d6094e.js";import{u as v}from"./useForm.5db1be8a.js";import{u as A}from"./upload.486231f6.js";import{a as j,U as b,c as S}from"./uploadEnum.0c123c22.js";import{T as G}from"./index.aa8da8a3.js";import{z as k,A as T,r as f,j as O,u as F,a0 as g,B as q,a1 as L,a6 as R,w as $,a4 as N}from"./vendor.e08ba229.js";import{B as U,a as V}from"./index.d7dad99a.js";import{a as z,e as W}from"./goods.5d826801.js";import{_ as K}from"./index.5678fbaf.js";const ne=[{title:"\u5546\u54C1ID",dataIndex:"id",width:100},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"name",width:180},{title:"\u5546\u54C1\u72B6\u6001",dataIndex:"status",width:180,customRender:({record:e})=>({"1":"\u5728\u552E","2":"\u4E0B\u67B6","3":"\u7F3A\u8D27"})[e.status]},{title:"\u5546\u54C1\u91CD\u91CF(KG)",dataIndex:"weight",width:120},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"price",width:120,customRender:({record:e})=>e.price/100},{title:"\u5546\u54C1\u5E93\u5B58(\u4EF6)",dataIndex:"stock",width:120},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_types",width:180,customRender:({record:e})=>e.goods_types.map(u=>u.name).join(",")||"\u672A\u77E5\u5206\u7C7B"},{title:"\u5546\u54C1\u6807\u7B7E",dataIndex:"label",width:180},{title:"\u7F29\u7565\u56FE",dataIndex:"urls",width:180,slots:{customRender:"img"}},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"update_at",width:180},{title:"\u5907\u6CE8",dataIndex:"des"}],le=[{field:"id",label:"ID",component:"Input",labelWidth:80,colProps:{span:4}},{field:"name",label:"\u540D\u79F0",component:"Input",labelWidth:80,colProps:{span:5}},{field:"status",label:"\u72B6\u6001",component:"Select",defaultValue:"1",colProps:{span:6},componentProps:{options:[{label:"\u5728\u552E",value:"1",key:"1"},{label:"\u4E0B\u67B6",value:"2",key:"2"},{label:"\u7F3A\u8D27",value:"3",key:"3"}]}}],M=[{field:"name",label:"\u5546\u54C1\u540D\u79F0",required:!0,component:"Input"},{field:"goods_types",label:"\u5546\u54C1\u5206\u7C7B",required:!0,component:"ApiSelect",componentProps:{api:j,mode:"multiple",labelField:"name",valueField:"id",params:{pid:0,reverse:!0}}},{field:"label",label:"\u5546\u54C1\u6807\u7B7E",component:"Input",componentProps:{placeholder:"\u53EF\u8F93\u5165\u591A\u4E2A\uFF0C\u4F7F\u7528\u2018,\u2018\u9694\u5F00"}},{field:"brief",label:"\u5546\u54C1\u7B80\u4ECB",required:!0,component:"InputTextArea",componentProps:{placeholder:"\u7B80\u77ED\u7684\u5546\u54C1\u7B80\u4ECB"}},{field:"weight",label:"\u5546\u54C1\u91CD\u91CF",required:!0,component:"InputNumber",colProps:{span:8},componentProps:{max:100,min:.1},suffix:"KG"},{field:"price",label:"\u5546\u54C1\u4EF7\u683C",required:!0,component:"InputNumber",colProps:{span:8},componentProps:{max:1e6,min:.01},suffix:"\u5143"},{field:"stock",label:"\u5546\u54C1\u5E93\u5B58",required:!0,component:"InputNumber",colProps:{span:8},componentProps:{max:1e3,min:0},suffix:"\u4EF6"},{field:"recommend",component:"Slider",label:"\u63A8\u8350\u6307\u6570",componentProps:{min:0,max:100,range:!1,marks:{25:"\u666E\u901A",50:"\u7740\u529B",75:"\u6781\u529B",100:"\u9876\u7EA7"}}},{field:"urls",component:"Upload",label:"\u5546\u54C1\u56FE\u7247",colProps:{span:16},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u4F20\u56FE\u7247"}],componentProps:{api:A,accept:["image/*"],helpText:"image/*\u683C\u5F0F\u5E76\u4E14\u4E0D\u53EF\u5927\u4E8E1M,\u6700\u591A\u4E0D\u8D85\u8FC7\u4E94\u5F20",maxSize:1,maxNumber:5,multiple:!0,uploadParams:{path:b.GOODS}}},{field:"details",component:"Input",label:"\u5546\u54C1\u8BE6\u60C5",defaultValue:"\u5546\u54C1\u8BE6\u60C5...",rules:[{required:!0}],render:({model:e,field:t})=>k(G,{value:e[t],options:{maxSize:1,uploadParams:{path:b.GOODS_DETAILS}},onChange:u=>{e[t]=u}})},{field:"status",component:"Select",label:"\u72B6\u6001",required:!0,defaultValue:"1",componentProps:{options:[{label:"\u5728\u552E",value:"1",key:"1"},{label:"\u4E0B\u67B6",value:"2",key:"2"}]}},{label:"\u5907\u6CE8",field:"des",component:"InputTextArea"}],H=T({name:"GoodsListDrawer",components:{BasicDrawer:U,BasicForm:_},emits:["success","register"],setup(e,{emit:t}){const u=f(!0),r=f(""),n=f([]),[p,{resetFields:l,setFieldsValue:s,validate:a}]=v({labelWidth:90,schemas:M,showActionButtonGroup:!1}),[i,{setDrawerProps:m,closeDrawer:h}]=V(o=>c(this,null,function*(){if(l(),m({confirmLoading:!1}),u.value=!!(o==null?void 0:o.isUpdate),F(u)){r.value=o.record.id;const d=o.record;d.goods_types=d.goods_types.map(D=>D.id),d.price=d.price/100,s(E({},d))}})),w=O(()=>F(u)?"\u7F16\u8F91\u5546\u54C1":"\u65B0\u589E\u5546\u54C1");function x(){return c(this,null,function*(){try{const o=yield a();o.urls=o.urls.join(","),console.log(o),m({confirmLoading:!0}),F(u)?(o.id=r.value,yield W(o)):yield z(o),h(),t("success")}finally{m({confirmLoading:!1})}})}return{registerDrawer:i,registerForm:p,getTitle:w,handleSubmit:x,getGoodsTypeListByPidOptions:S,treeData:n}}});function J(e,t,u,r,n,p){const l=g("BasicForm"),s=g("BasicDrawer");return q(),L(s,N(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"800px",onOk:e.handleSubmit}),{default:R(()=>[$(l,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Q=K(H,[["render",J]]),ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q});export{Q as G,ie as a,ne as c,le as s};
