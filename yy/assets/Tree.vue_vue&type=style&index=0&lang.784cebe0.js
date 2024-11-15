var Ve=Object.defineProperty,Ue=Object.defineProperties;var He=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var ze=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable;var ue=(e,o,k)=>o in e?Ve(e,o,{enumerable:!0,configurable:!0,writable:!0,value:k}):e[o]=k,D=(e,o)=>{for(var k in o||(o={}))ze.call(o,k)&&ue(e,k,o[k]);if(de)for(var k of de(o))Xe.call(o,k)&&ue(e,k,o[k]);return e},G=(e,o)=>Ue(e,He(o));var he=(e,o,k)=>new Promise((K,L)=>{var a=C=>{try{A(k.next(C))}catch(v){L(v)}},p=C=>{try{A(k.throw(C))}catch(v){L(v)}},A=C=>C.done?K(C.value):Promise.resolve(C.value).then(a,p);A((k=k.apply(e,o)).next())});import{z as Ye,A as ye,aB as Ge,aA as W,ao as qe,r as fe,j as O,S as j,T as Je,a0 as w,B as F,D as U,a7 as Qe,ad as P,a1 as Z,a6 as H,ae as ke,J as ge,K as We,w as x,ab as R,ap as Ze,aC as Re,aS as et,ay as tt,u as h,n as pe,P as Ke,t as z,c3 as nt,o as Se,am as X,_ as st,bq as at,F as xe,G as be,c4 as _e,a4 as ve,as as Ce,br as ee}from"./vendor.e08ba229.js";import{j as ct,I as te,at as lt,p as b,b as rt,_ as it,aL as Ae,a as ot,am as dt,i as ne,aM as ut,an as ht,aH as Te,S as yt,aN as ft,B as Le,ae as kt}from"./index.5678fbaf.js";import{u as gt}from"./useContextMenu.cb6b587f.js";const pt=({icon:e})=>e?ct(e)?Ye(te,{icon:e,class:"mr-1"}):te:null;var Ne;(function(e){e[e.SELECT_ALL=0]="SELECT_ALL",e[e.UN_SELECT_ALL=1]="UN_SELECT_ALL",e[e.EXPAND_ALL=2]="EXPAND_ALL",e[e.UN_EXPAND_ALL=3]="UN_EXPAND_ALL",e[e.CHECK_STRICTLY=4]="CHECK_STRICTLY",e[e.CHECK_UN_STRICTLY=5]="CHECK_UN_STRICTLY"})(Ne||(Ne={}));const Kt=ye({name:"BasicTreeHeader",components:{BasicTitle:lt,Icon:te,Dropdown:Ge,Menu:W,MenuItem:W.Item,MenuDivider:W.Divider,InputSearch:qe.Search},props:{helpMessage:{type:[String,Array],default:""},title:b.string,toolbar:b.bool,checkable:b.bool,search:b.bool,checkAll:b.func,expandAll:b.func,searchText:b.string},emits:["strictly-change","search"],setup(e,{emit:o,slots:k}){const{t:K}=rt(),L=fe(""),a=O(()=>{const n=k.headerTitle||e.title;return["mr-1","w-full",{["ml-5"]:n}]}),p=O(()=>{const{checkable:n}=e,c=[{label:K("component.tree.expandAll"),value:2},{label:K("component.tree.unExpandAll"),value:3,divider:n}];return n?[{label:K("component.tree.selectAll"),value:0},{label:K("component.tree.unSelectAll"),value:1,divider:n},...c,{label:K("component.tree.checkStrictly"),value:4},{label:K("component.tree.checkUnStrictly"),value:5}]:c});function A(n){var r,s,d,l;const{key:c}=n;switch(c){case 0:(r=e.checkAll)==null||r.call(e,!0);break;case 1:(s=e.checkAll)==null||s.call(e,!1);break;case 2:(d=e.expandAll)==null||d.call(e,!0);break;case 3:(l=e.expandAll)==null||l.call(e,!1);break;case 4:o("strictly-change",!1);break;case 5:o("strictly-change",!0);break}}function C(n){o("search",n)}const v=Je(C,200);return j(()=>L.value,n=>{v(n)}),j(()=>e.searchText,n=>{n!==L.value&&(L.value=n)}),{t:K,toolbarList:p,handleMenuClick:A,searchValue:L,getInputSearchCls:a}}}),St={class:"flex px-2 py-1.5 items-center basic-tree-header"},xt={key:2,class:"flex flex-1 justify-self-stretch items-center cursor-pointer"};function bt(e,o,k,K,L,a){const p=w("BasicTitle"),A=w("InputSearch"),C=w("Icon"),v=w("MenuItem"),n=w("MenuDivider"),c=w("Menu"),r=w("Dropdown");return F(),U("div",St,[e.$slots.headerTitle?Qe(e.$slots,"headerTitle",{key:0},void 0,!0):P("",!0),!e.$slots.headerTitle&&e.title?(F(),Z(p,{key:1,helpMessage:e.helpMessage},{default:H(()=>[ke(ge(e.title),1)]),_:1},8,["helpMessage"])):P("",!0),e.search||e.toolbar?(F(),U("div",xt,[e.search?(F(),U("div",{key:0,class:We(e.getInputSearchCls)},[x(A,{placeholder:e.t("common.searchText"),size:"small",allowClear:"",value:e.searchValue,"onUpdate:value":o[0]||(o[0]=s=>e.searchValue=s)},null,8,["placeholder","value"])],2)):P("",!0),e.toolbar?(F(),Z(r,{key:1,onClick:o[1]||(o[1]=tt(()=>{},["prevent"]))},{overlay:H(()=>[x(c,{onClick:e.handleMenuClick},{default:H(()=>[(F(!0),U(R,null,Ze(e.toolbarList,s=>(F(),U(R,{key:s.value},[x(v,Re(et({key:s.value})),{default:H(()=>[ke(ge(s.label),1)]),_:2},1040),s.divider?(F(),Z(n,{key:0})):P("",!0)],64))),128))]),_:1},8,["onClick"])]),default:H(()=>[x(C,{icon:"ion:ellipsis-vertical"})]),_:1})):P("",!0)])):P("",!0)])}var _t=it(Kt,[["render",bt],["__scopeId","data-v-0443acce"]]);function vt(e,o){function k(n){const c=[],r=n||h(e),{key:s,children:d}=h(o);if(!d||!s)return c;for(let l=0;l<r.length;l++){const i=r[l];c.push(i[s]);const f=i[d];f&&f.length&&c.push(...k(f))}return c}function K(n){const c=[],r=n||h(e),{key:s,children:d}=h(o);if(!d||!s)return c;for(let l=0;l<r.length;l++){const i=r[l];i.disabled!==!0&&i.selectable!==!1&&c.push(i[s]);const f=i[d];f&&f.length&&c.push(...K(f))}return c}function L(n,c){const r=[],s=c||h(e),{key:d,children:l}=h(o);if(!l||!d)return r;for(let i=0;i<s.length;i++){const f=s[i],T=f[l];n===f[d]?(r.push(f[d]),T&&T.length&&r.push(...k(T))):T&&T.length&&r.push(...L(n,T))}return r}function a(n,c,r){if(!n)return;const s=r||h(e),{key:d,children:l}=h(o);if(!(!l||!d))for(let i=0;i<s.length;i++){const f=s[i],T=f[l];if(f[d]===n){s[i]=D(D({},s[i]),c);break}else T&&T.length&&a(n,c,f[l])}}function p(n=1,c,r=1){if(!n)return[];const s=[],d=c||h(e)||[];for(let l=0;l<d.length;l++){const i=d[l],{key:f,children:T}=h(o),q=f?i[f]:"",V=T?i[T]:[];s.push(q),V&&V.length&&r<n&&(r+=1,s.push(...p(n,V,r)))}return s}function A({parentKey:n=null,node:c,push:r="push"}){const s=pe(h(e));if(!n){s[r](c),e.value=s;return}const{key:d,children:l}=h(o);!l||!d||(Ae(s,i=>{if(i[d]===n)return i[l]=i[l]||[],i[l][r](c),!0}),e.value=s)}function C({parentKey:n=null,list:c,push:r="push"}){const s=pe(h(e));if(!(!c||c.length<1))if(n){const{key:d,children:l}=h(o);if(!l||!d)return;Ae(s,i=>{if(i[d]===n){i[l]=i[l]||[];for(let f=0;f<c.length;f++)i[l][r](c[f]);return e.value=s,!0}})}else for(let d=0;d<c.length;d++)s[r](c[d])}function v(n,c){if(!n)return;const r=c||h(e),{key:s,children:d}=h(o);if(!(!d||!s))for(let l=0;l<r.length;l++){const i=r[l],f=i[d];if(i[s]===n){r.splice(l,1);break}else f&&f.length&&v(n,i[d])}}return{deleteNodeByKey:v,insertNodeByKey:A,insertNodesByKey:C,filterByLevel:p,updateNodeByKey:a,getAllKeys:k,getChildrenKeys:L,getEnabledKeys:K}}const Ct={value:{type:[Object,Array]},renderIcon:{type:Function},helpMessage:{type:[String,Array],default:""},title:b.string,toolbar:b.bool,search:b.bool,searchValue:b.string,checkStrictly:b.bool,clickRowToExpand:b.bool.def(!0),checkable:b.bool.def(!1),defaultExpandLevel:{type:[String,Number],default:""},defaultExpandAll:b.bool.def(!1),replaceFields:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},beforeRightClick:{type:Function,default:null},rightMenuList:{type:Array},filterFn:{type:Function,default:null},highlight:{type:[Boolean,String],default:!1},expandOnSearch:b.bool.def(!1),checkOnSearch:b.bool.def(!1),selectedOnSearch:b.bool.def(!1)};function At(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!at(e)}var Dt=ye({name:"BasicTree",inheritAttrs:!1,props:Ct,emits:["update:expandedKeys","update:selectedKeys","update:value","change","check","update:searchValue"],setup(e,{attrs:o,slots:k,emit:K,expose:L}){const a=Ke({checkStrictly:e.checkStrictly,expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),p=Ke({startSearch:!1,searchText:"",searchData:[]}),A=fe([]),[C]=gt(),{prefixCls:v}=ot("basic-tree"),n=O(()=>{const{replaceFields:t}=e;return D({children:"children",title:"title",key:"key"},t)}),c=O(()=>{let t=G(D(D({blockNode:!0},o),e),{expandedKeys:a.expandedKeys,selectedKeys:a.selectedKeys,checkedKeys:a.checkedKeys,checkStrictly:a.checkStrictly,replaceFields:h(n),"onUpdate:expandedKeys":y=>{a.expandedKeys=y,K("update:expandedKeys",y)},"onUpdate:selectedKeys":y=>{a.selectedKeys=y,K("update:selectedKeys",y)},onCheck:(y,g)=>{let S=z(a.checkedKeys);if(dt(S)&&p.startSearch){const{key:_}=h(n);S=nt(S,V(g.node.$attrs.node[_])),g.checked&&S.push(g.node.$attrs.node[_]),a.checkedKeys=S}else a.checkedKeys=y;const u=z(a.checkedKeys);K("update:value",u),K("check",u,g)},onRightClick:De});return Se(t,"treeData","class")}),r=O(()=>p.startSearch?p.searchData:h(A)),s=O(()=>!r.value||r.value.length===0),{deleteNodeByKey:d,insertNodeByKey:l,insertNodesByKey:i,filterByLevel:f,updateNodeByKey:T,getAllKeys:q,getChildrenKeys:V,getEnabledKeys:Ee}=vt(A,n);function Me(t,y){return!y&&e.renderIcon&&ne(e.renderIcon)?e.renderIcon(t):y}function De(g){return he(this,arguments,function*({event:t,node:y}){var M;const{rightMenuList:S=[],beforeRightClick:u}=e;let _={event:t,items:[]};if(u&&ne(u)){let N=yield u(y,t);Array.isArray(N)?_.items=N:Object.assign(_,N)}else _.items=S;!((M=_.items)==null?void 0:M.length)||C(_)})}function Y(t){a.expandedKeys=t}function Fe(){return a.expandedKeys}function se(t){a.selectedKeys=t}function me(){return a.selectedKeys}function ae(t){a.checkedKeys=t}function Ie(){return a.checkedKeys}function ce(t){a.checkedKeys=t?Ee():[]}function J(t){a.expandedKeys=t?q():[]}function we(t){a.checkStrictly=t}j(()=>e.searchValue,t=>{t!==p.searchText&&(p.searchText=t)},{immediate:!0}),j(()=>e.treeData,t=>{t&&Q(p.searchText)});function Q(t){if(t!==p.searchText&&(p.searchText=t),K("update:searchValue",t),!t){p.startSearch=!1;return}const{filterFn:y,checkable:g,expandOnSearch:S,checkOnSearch:u,selectedOnSearch:_}=h(e);p.startSearch=!0;const{title:M,key:N}=h(n),m=[];if(p.searchData=ut(h(A),E=>{var I,$;const B=y?y(t,E,h(n)):($=(I=E[M])==null?void 0:I.includes(t))!=null?$:!1;return B&&m.push(E[N]),B},h(n)),S){const E=ht(p.searchData).map(B=>B[N]);E&&E.length&&Y(E)}u&&g&&m.length&&ae(m),_&&m.length&&se(m)}function Be(t,y){if(!(!e.clickRowToExpand||!y||y.length===0))if(!a.expandedKeys.includes(t))Y([...a.expandedKeys,t]);else{const g=[...a.expandedKeys],S=g.findIndex(u=>u===t);S!==-1&&g.splice(S,1),Y(g)}}X(()=>{A.value=e.treeData}),st(()=>{const t=parseInt(e.defaultExpandLevel);t>0?a.expandedKeys=f(t):e.defaultExpandAll&&J(!0)}),X(()=>{a.expandedKeys=e.expandedKeys}),X(()=>{a.selectedKeys=e.selectedKeys}),X(()=>{a.checkedKeys=e.checkedKeys}),j(()=>e.value,()=>{a.checkedKeys=z(e.value||[])}),j(()=>a.checkedKeys,()=>{const t=z(a.checkedKeys);K("update:value",t),K("change",t)}),X(()=>{a.checkStrictly=e.checkStrictly}),L({setExpandedKeys:Y,getExpandedKeys:Fe,setSelectedKeys:se,getSelectedKeys:me,setCheckedKeys:ae,getCheckedKeys:Ie,insertNodeByKey:l,insertNodesByKey:i,deleteNodeByKey:d,updateNodeByKey:T,checkAll:ce,expandAll:J,filterByLevel:t=>{a.expandedKeys=f(t)},setSearchValue:t=>{Q(t)},getSearchValue:()=>p.searchText});function $e(t){const{actionList:y}=e;if(!(!y||y.length===0))return y.map((g,S)=>{var _;let u=!0;return ne(g.show)?u=(_=g.show)==null?void 0:_.call(g,t):Le(g.show)&&(u=g.show),u?x("span",{key:S,class:`${v}__action`},[g.render(t)]):null})}function le({data:t,level:y}){if(!t)return null;const g=p.searchText,{highlight:S}=h(e);return t.map(u=>{var re;const{title:_,key:M,children:N}=h(n),m=Se(u,"title"),E=Me(G(D({},u),{level:y}),u.icon),B=ee(u,N)||[],I=ee(u,_),$=g?I.indexOf(g):-1,Oe=p.startSearch&&!ft(g)&&S&&$!==-1,je=`color: ${Le(S)?"#f50":S}`,Pe=Oe?x("span",{class:((re=h(c))==null?void 0:re.blockNode)?`${v}__content`:""},[x("span",null,[I.substr(0,$)]),x("span",{style:je},[g]),x("span",null,[I.substr($+g.length)])]):I;return x(_e.TreeNode,ve(m,{node:z(u),key:ee(u,M)}),{title:()=>{var ie,oe;return x("span",{class:`${v}-title pl-2`,onClick:Be.bind(null,u[M],u[N])},[((ie=u.slots)==null?void 0:ie.title)?kt(k,(oe=u.slots)==null?void 0:oe.title,u):x(R,null,[E&&x(pt,{icon:E},null),Pe,x("span",{class:`${v}__actions`},[$e(G(D({},u),{level:y}))])])])},default:()=>le({data:B,level:y+1})})})}return()=>{let t;const{title:y,helpMessage:g,toolbar:S,search:u,checkable:_}=e,M=y||S||u||k.headerTitle,N={height:"calc(100% - 38px)"};return x("div",{class:[v,"h-full",o.class]},[M&&x(_t,{checkable:_,checkAll:ce,expandAll:J,title:y,search:u,toolbar:S,helpMessage:g,onStrictlyChange:we,onSearch:Q,searchText:p.searchText},At(t=Te(k))?t:{default:()=>[t]}),xe(x(yt,{style:N},{default:()=>[x(_e,ve(h(c),{showIcon:!1}),D({default:()=>le({data:h(r),level:1})},Te(k)))]}),[[be,!h(s)]]),xe(x(Ce,{image:Ce.PRESENTED_IMAGE_SIMPLE,class:"!mt-4"},null),[[be,h(s)]])])}}});export{Dt as _};