var l=(e,n,t)=>new Promise((r,s)=>{var c=o=>{try{f(t.next(o))}catch(i){s(i)}},a=o=>{try{f(t.throw(o))}catch(i){s(i)}},f=o=>o.done?r(o.value):Promise.resolve(o.value).then(c,a);f((t=t.apply(e,n)).next())});import{f as I}from"./vendor.e08ba229.js";import{a9 as u,aa as k,f as L}from"./index.5678fbaf.js";const d=I({id:"app-lock",state:()=>({lockInfo:u.getLocal(k)}),getters:{getLockInfo(){return this.lockInfo}},actions:{setLockInfo(e){this.lockInfo=Object.assign({},this.lockInfo,e),u.setLocal(k,this.lockInfo,!0)},resetLockInfo(){u.removeLocal(k,!0),this.lockInfo=null},unLock(e){return l(this,null,function*(){var r;const n=L();return((r=this.lockInfo)==null?void 0:r.pwd)===e?(this.resetLockInfo(),!0):yield(()=>l(this,null,function*(){var s;try{const c=(s=n.getUserInfo)==null?void 0:s.username,a=yield n.login({username:c,password:e,goHome:!1,mode:"none"});return a&&this.resetLockInfo(),a}catch(c){return!1}}))()})}}});export{d as u};
