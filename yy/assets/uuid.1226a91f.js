var o;(function(t){t.MEDIA_CNJM_TOP="http://media.cnjm.top/"})(o||(o={}));const n=[];for(let t=0;t<=15;t++)n[t]=t.toString(16);function a(){let t="";for(let e=1;e<=36;e++)e===9||e===14||e===19||e===24?t+="-":e===15?t+=4:e===20?t+=n[Math.random()*4|8]:t+=n[Math.random()*16|0];return t.replace(/-/g,"")}let i=0;function u(t=""){const e=Date.now(),r=Math.floor(Math.random()*1e9);return i++,t+"_"+r+i+String(e)}export{o as P,u as a,a as b};