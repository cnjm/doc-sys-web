var l=(o,i,e)=>new Promise((u,t)=>{var a=s=>{try{r(e.next(s))}catch(d){t(d)}},n=s=>{try{r(e.throw(s))}catch(d){t(d)}},r=s=>s.done?u(s.value):Promise.resolve(s.value).then(a,n);r((e=e.apply(o,i)).next())});import{P as F}from"./index.1f2bc229.js";import{B}from"./BasicForm.b5d6094e.js";import{u as _}from"./useForm.5db1be8a.js";import{_ as b}from"./index.5678fbaf.js";import{A as x,a0 as p,B as w,a1 as h,a6 as m,H as f,w as c,ae as j}from"./vendor.e08ba229.js";/* empty css               *//* empty css                */import"./onMountedOrActivated.af9416e3.js";import"./useWindowSizeFn.5dd3a6d6.js";import"./useContentViewHeight.bb79e080.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.f6db3164.js";import"./upload.486231f6.js";/* empty css                *//* empty css                */import"./index.b811b2f1.js";/* empty css                */import"./uuid.1226a91f.js";import"./download.2b91008f.js";import"./base64Conver.08b9f4ec.js";import"./index.2b7dfa36.js";const C=[{field:"passwordOld",label:"\u5F53\u524D\u5BC6\u7801",component:"InputPassword",required:!0},{field:"passwordNew",label:"\u65B0\u5BC6\u7801",component:"StrengthMeter",componentProps:{placeholder:"\u65B0\u5BC6\u7801"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"}]},{field:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",component:"InputPassword",dynamicRules:({values:o})=>[{required:!0,validator:(i,e)=>e?e!==o.passwordNew?Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!"):Promise.resolve():Promise.reject("\u4E0D\u80FD\u4E3A\u7A7A")}]}],g=x({name:"ChangePassword",components:{BasicForm:B,PageWrapper:F},setup(){const[o,{validate:i,resetFields:e}]=_({size:"large",labelWidth:100,showActionButtonGroup:!1,schemas:C});function u(){return l(this,null,function*(){try{const t=yield i(),{passwordOld:a,passwordNew:n}=t;console.log(a,n)}catch(t){}})}return{register:o,resetFields:e,handleSubmit:u}}}),E={class:"py-8 bg-white flex flex-col justify-center items-center"},A={class:"flex justify-center"},P=j(" \u91CD\u7F6E "),v=j(" \u786E\u8BA4 ");function y(o,i,e,u,t,a){const n=p("BasicForm"),r=p("a-button"),s=p("PageWrapper");return w(),h(s,{title:"\u4FEE\u6539\u5F53\u524D\u7528\u6237\u5BC6\u7801",content:"\u4FEE\u6539\u6210\u529F\u540E\u4F1A\u81EA\u52A8\u9000\u51FA\u5F53\u524D\u767B\u5F55\uFF01"},{default:m(()=>[f("div",E,[c(n,{onRegister:o.register},null,8,["onRegister"]),f("div",A,[c(r,{onClick:o.resetFields},{default:m(()=>[P]),_:1},8,["onClick"]),c(r,{class:"!ml-4",type:"primary",onClick:o.handleSubmit},{default:m(()=>[v]),_:1},8,["onClick"])])])]),_:1})}var ie=b(g,[["render",y]]);export{ie as default};
