import{A as v,r as s,j as x,u as e,B as y,D as w,w as H,a6 as S,H as b,K as f,X as u,aP as j}from"./vendor.e08ba229.js";import{u as z}from"./useWindowSizeFn.5dd3a6d6.js";import{p as C,a as R,_ as B}from"./index.5678fbaf.js";import{a as F}from"./useContentViewHeight.bb79e080.js";const L=["src"],V=v({props:{frameSrc:C.string.def("")},setup(p){const i=s(!0),m=s(50),o=s(window.innerHeight),r=s(),{headerHeightRef:g}=F(),{prefixCls:c}=R("iframe-page");z(l,150,{immediate:!0});const d=x(()=>({height:`${e(o)}px`}));function l(){const n=e(r);if(!n)return;const t=g.value;m.value=t,o.value=window.innerHeight-t;const a=document.documentElement.clientHeight-t;n.style.height=`${a}px`}function _(){i.value=!1,l()}return(n,t)=>(y(),w("div",{class:f(e(c)),style:u(e(d))},[H(e(j),{spinning:i.value,size:"large",style:u(e(d))},{default:S(()=>[b("iframe",{src:p.frameSrc,class:f(`${e(c)}__main`),ref:(a,h)=>{h.frameRef=a,r.value=a},onLoad:_},null,42,L)]),_:1},8,["spinning","style"])],6))}});var E=B(V,[["__scopeId","data-v-7cb5d70d"]]);export{E as default};
