import{x as b}from"./index.57c694b6.js";const{utils:i,writeFile:S}=b,_="excel-list.xlsx";function w({data:c,header:s,filename:o=_,json2sheetOpts:t={},write2excelOpts:e={bookType:"xlsx"},merges:n=[],formulas:x={}}){const r=[...c];s&&(r.unshift(s),t.skipHeader=!0);const h=i.json_to_sheet(r,t),k={SheetNames:[o],Sheets:{[o]:h}};for(const a in x)k.Sheets[o][a]=x[a];h["!merges"]=n,S(k,o,e)}function l({data:c,header:s,filename:o=_,write2excelOpts:t={bookType:"xlsx"}}){const e=[...c];s&&e.unshift(s);const n=i.aoa_to_sheet(e),x={SheetNames:[o],Sheets:{[o]:n}};S(x,o,t)}export{l as a,w as j};