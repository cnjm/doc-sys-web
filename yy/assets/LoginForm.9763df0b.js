var C=(_,m,i)=>new Promise((r,f)=>{var o=n=>{try{u(i.next(n))}catch(c){f(c)}},g=n=>{try{u(i.throw(n))}catch(c){f(c)}},u=n=>n.done?r(n.value):Promise.resolve(n.value).then(o,g);u((i=i.apply(_,m)).next())});import{A as P,a$ as L,ao as R,r as y,P as $,j as A,u as e,B as E,D as U,F as j,G as D,w as s,a6 as t,b0 as V,ae as v,J as x,aT as I,ad as b,b1 as K,ab as M,b2 as G,b3 as O}from"./vendor.e08ba229.js";/* empty css              *//* empty css               *//* empty css               */import{u as J,a as W,L as N,_ as q,b as H}from"./LoginFormTitle.a286b8f3.js";import{b as Q,a as X,f as Y,h as Z}from"./index.5678fbaf.js";const re=P({setup(_){const m=G,i=O,r=L.Item,f=R.Password,{t:o}=Q(),{notification:g}=Z();X("login");const u=Y(),{setLoginState:n,getLoginState:c}=J(),{getFormRules:T}=W(),S=y(),w=y(!1),h=y(!1),d=$({account:"s_admin",password:"123456"}),{validForm:z}=H(S),k=A(()=>e(c)===N.LOGIN);function F(){return C(this,null,function*(){const p=yield z();if(!!p)try{w.value=!0;const a=yield u.login({password:p.password,account:p.account});a&&g.success({message:o("sys.login.loginSuccessTitle"),description:`${o("sys.login.loginSuccessDesc")}: ${a.realName}`,duration:3})}catch(a){}finally{w.value=!1}})}return(p,a)=>(E(),U(M,null,[j(s(q,{class:"enter-x"},null,512),[[D,e(k)]]),j(s(e(L),{class:"p-4 enter-x",model:e(d),rules:e(T),ref:(l,B)=>{B.formRef=l,S.value=l},onKeypress:K(F,["enter"])},{default:t(()=>[s(e(r),{name:"account",class:"enter-x"},{default:t(()=>[s(e(R),{size:"large",value:e(d).account,"onUpdate:value":a[0]||(a[0]=l=>e(d).account=l),placeholder:e(o)("sys.login.userName"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),s(e(r),{name:"password",class:"enter-x"},{default:t(()=>[s(e(f),{size:"large",visibilityToggle:"",value:e(d).password,"onUpdate:value":a[1]||(a[1]=l=>e(d).password=l),placeholder:e(o)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),s(e(i),{class:"enter-x"},{default:t(()=>[s(e(m),{span:12},{default:t(()=>[s(e(r),null,{default:t(()=>[s(e(V),{checked:h.value,"onUpdate:checked":a[2]||(a[2]=l=>h.value=l),size:"small"},{default:t(()=>[v(x(e(o)("sys.login.rememberMe")),1)]),_:1},8,["checked"])]),_:1})]),_:1}),s(e(m),{span:12},{default:t(()=>[s(e(r),{style:{"text-align":"right"}},{default:t(()=>[s(e(I),{type:"link",size:"small",onClick:a[3]||(a[3]=l=>e(n)(e(N).RESET_PASSWORD))},{default:t(()=>[v(x(e(o)("sys.login.forgetPassword")),1)]),_:1})]),_:1})]),_:1})]),_:1}),s(e(r),{class:"enter-x"},{default:t(()=>[s(e(I),{type:"primary",size:"large",block:"",onClick:F,loading:w.value},{default:t(()=>[v(x(e(o)("sys.login.loginButton")),1)]),_:1},8,["loading"])]),_:1}),b("",!0),b("",!0),b("",!0)]),_:1},8,["model","rules","onKeypress"]),[[D,e(k)]])],64))}});export{re as default};