import{B as l,T as p}from"./TableImg.8fa1a465.js";import"./BasicForm.b5d6094e.js";import{u as c}from"./useTable.54a2c50f.js";import{A as b,bm as g,bt as j,a0 as i,B as x,D as F,w as s,a6 as t,ae as o,J as a}from"./vendor.e08ba229.js";/* empty css               *//* empty css                */import{d as f}from"./table.66c20f5a.js";import{_}from"./index.5678fbaf.js";/* empty css                *//* empty css              */import"./useForm.5db1be8a.js";import"./index.1f2bc229.js";/* empty css               */import"./onMountedOrActivated.af9416e3.js";import"./useWindowSizeFn.5dd3a6d6.js";import"./useContentViewHeight.bb79e080.js";/* empty css                *//* empty css                */import"./uuid.1226a91f.js";import"./index.b811b2f1.js";/* empty css               */import"./useSortable.06293d2d.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.f6db3164.js";import"./upload.486231f6.js";/* empty css                *//* empty css                */import"./download.2b91008f.js";import"./base64Conver.08b9f4ec.js";import"./index.2b7dfa36.js";const E=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"\u5934\u50CF",dataIndex:"avatar",width:100,slots:{customRender:"avatar"}},{title:"\u5206\u7C7B",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u56FE\u7247\u5217\u88681",dataIndex:"imgArr",helpMessage:["\u8FD9\u662F\u7B80\u5355\u6A21\u5F0F\u7684\u56FE\u7247\u5217\u8868","\u53EA\u4F1A\u663E\u793A\u4E00\u5F20\u5728\u8868\u683C\u4E2D","\u4F46\u70B9\u51FB\u53EF\u9884\u89C8\u591A\u5F20\u56FE\u7247"],width:140,slots:{customRender:"img"}},{title:"\u7167\u7247\u5217\u88682",dataIndex:"imgs",width:160,slots:{customRender:"imgs"}},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",slots:{customRender:"no"}},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime"}],T=b({components:{BasicTable:l,TableImg:p,Tag:g,Avatar:j},setup(){const[u]=c({title:"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",titleHelpMessage:"\u8868\u683C\u4E2D\u6240\u6709\u5934\u50CF\u3001\u56FE\u7247\u5747\u4E3Amock\u751F\u6210\uFF0C\u4EC5\u7528\u4E8E\u6F14\u793A\u56FE\u7247\u5360\u4F4D",api:f,columns:E,bordered:!0,showTableSetting:!0});return{registerTable:u}}}),A={class:"p-4"};function B(u,C,I,v,h,w){const r=i("Tag"),d=i("Avatar"),n=i("TableImg"),m=i("BasicTable");return x(),F("div",A,[s(m,{onRegister:u.registerTable},{id:t(({record:e})=>[o(" ID: "+a(e.id),1)]),no:t(({record:e})=>[s(r,{color:"green"},{default:t(()=>[o(a(e.no),1)]),_:2},1024)]),avatar:t(({record:e})=>[s(d,{size:60,src:e.avatar},null,8,["src"])]),img:t(({text:e})=>[s(n,{size:60,simpleShow:!0,imgList:e},null,8,["imgList"])]),imgs:t(({text:e})=>[s(n,{size:60,imgList:e},null,8,["imgList"])]),category:t(({record:e})=>[s(r,{color:"green"},{default:t(()=>[o(a(e.no),1)]),_:2},1024)]),_:1},8,["onRegister"])])}var de=_(T,[["render",B]]);export{de as default};