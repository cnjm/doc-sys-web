import{aG as d}from"./index.5678fbaf.js";var o;(function(s){s.ADD_GOODS_TYPE="/admin/goodsType/addGoodsType",s.EDIT_GOODS_TYPE="/admin/goodsType/editGoodsType",s.GOODS_TYPE_LIST_BY_PID="/admin/goodsType/getGoodsTypeListByPid",s.GOODS_TYPE_LIST="/admin/goodsType/getGoodsTypeList"})(o||(o={}));const O=(s,e="message")=>d.post({url:o.ADD_GOODS_TYPE,params:s},{errorMessageMode:e}),_=(s,e="message")=>d.post({url:o.EDIT_GOODS_TYPE,params:s},{errorMessageMode:e}),y=(s,e="message")=>d.get({url:o.GOODS_TYPE_LIST,params:s},{errorMessageMode:e}),a=s=>d.get({url:o.GOODS_TYPE_LIST_BY_PID,params:s}),g=s=>d.get({url:o.GOODS_TYPE_LIST_BY_PID,params:s});var t;(function(s){s.GOODS_TYPE="yy/goods-type",s.GOODS="yy/goods",s.GOODS_DETAILS="yy/goods-details",s.GOODS_SWIPER="yy/goods-swiper"})(t||(t={}));export{t as U,a,O as b,g as c,_ as e,y as g};