var F=Object.defineProperty;var k=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var z=(r,t,n)=>t in r?F(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,D=(r,t)=>{for(var n in t||(t={}))M.call(t,n)&&z(r,n,t[n]);if(k)for(var n of k(t))h.call(t,n)&&z(r,n,t[n]);return r};import{Q as x,r as p,ah as C,ai as S}from"./index.5678fbaf.js";import{e as O}from"./echarts.e2e9ce24.js";import{j as b,r as T,u as i,$ as y,S as H,ag as R,T as B}from"./vendor.e08ba229.js";function q(r,t="default"){const{getDarkMode:n}=x(),u=b(()=>t==="default"?n.value:t);let e=null,l=v;const a=T({});let m=()=>{};l=B(v,200);const g=b(()=>u.value!=="dark"?a.value:D({backgroundColor:"transparent"},a.value));function c(o=t){const s=i(r);if(!s||!i(s))return;e=O.init(s,o);const{removeEvent:f}=C({el:window,name:"resize",listener:l});m=f;const{widthRef:w,screenEnum:E}=S();(i(w)<=E.MD||s.offsetHeight===0)&&p(()=>{l()},30)}function d(o,s=!0){var f;if(a.value=o,((f=i(r))==null?void 0:f.offsetHeight)===0){p(()=>{d(i(g))},30);return}y(()=>{p(()=>{!e&&(c(u.value),!e)||(s&&(e==null||e.clear()),e==null||e.setOption(i(g)))},30)})}function v(){e==null||e.resize()}H(()=>u.value,o=>{e&&(e.dispose(),c(o),d(a.value))}),R(()=>{!e||(m(),e.dispose(),e=null)});function j(){return e||c(u.value),e}return{setOptions:d,resize:v,echarts:O,getInstance:j}}export{q as u};
