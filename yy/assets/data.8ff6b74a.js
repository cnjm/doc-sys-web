const n=[{title:"ID",dataIndex:"id",width:80},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u5E74\u9F84",dataIndex:"age",width:80},{title:"\u7F16\u53F7",dataIndex:"no",width:80},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime"}],t=(()=>{const a=[];for(let e=0;e<40;e++)a.push({id:`${e}`,name:`${e} John Brown`,age:`${e+10}`,no:`${e}98678`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()});return a})();console.log(t);const d=n.map(a=>a.title),o=t.map(a=>Object.keys(a).map(e=>a[e]));export{o as a,d as b,n as c,t as d};