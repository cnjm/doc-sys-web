import{A as _,aU as C,ck as g,a as F,r as b,j as v,u as n,a0 as c,B as w,a1 as y,a6 as S,H as a,J as m,w as h,K as l,ad as L,L as R,N as $}from"./vendor.e08ba229.js";import{D as I,G as U,S as k}from"./siteSetting.c485f07c.js";import{_ as H,Q as j,a as B,o as D,b as G}from"./index.5678fbaf.js";import{a as V}from"./useContentViewHeight.bb79e080.js";import"./useWindowSizeFn.5dd3a6d6.js";const W=_({name:"LayoutFooter",components:{Footer:C.Footer,GithubFilled:g},setup(){const{t:e}=G(),{getShowFooter:o}=j(),{currentRoute:d}=F(),{prefixCls:p}=B("layout-footer"),r=b(null),{setFooterHeight:i}=V();return{getShowLayoutFooter:v(()=>{var s,t;if(n(o)){const u=(s=n(r))==null?void 0:s.$el;i((u==null?void 0:u.offsetHeight)||0)}else i(0);return n(o)&&!((t=n(d).meta)==null?void 0:t.hiddenFooter)}),prefixCls:p,t:e,DOC_URL:I,GITHUB_URL:U,SITE_URL:k,openWindow:D,footerRef:r}}}),N=e=>(R("data-v-0bf7ba29"),e=e(),$(),e),T=N(()=>a("div",null,"Copyright \xA92020 Vben Admin",-1));function A(e,o,d,p,r,i){const f=c("GithubFilled"),s=c("Footer");return e.getShowLayoutFooter?(w(),y(s,{key:0,class:l(e.prefixCls),ref:"footerRef"},{default:S(()=>[a("div",{class:l(`${e.prefixCls}__links`)},[a("a",{onClick:o[0]||(o[0]=t=>e.openWindow(e.SITE_URL))},m(e.t("layout.footer.onlinePreview")),1),h(f,{onClick:o[1]||(o[1]=t=>e.openWindow(e.GITHUB_URL)),class:l(`${e.prefixCls}__github`)},null,8,["class"]),a("a",{onClick:o[2]||(o[2]=t=>e.openWindow(e.DOC_URL))},m(e.t("layout.footer.onlineDocument")),1)],2),T]),_:1},8,["class"])):L("",!0)}var K=H(W,[["render",A],["__scopeId","data-v-0bf7ba29"]]);export{K as default};
