import { defHttp } from '/@/utils/http/axios';
import { GoodsListGetResultModel, GoodsParams, GoodsParamsItem } from './model/goodsModel';
import { ErrorMessageMode } from '/#/axios';
//接口路径
enum Api {
  ADD_GOODS = '/admin/goods/addGoods',
  EDIT_GOODS = '/admin/goods/editGoods',
  EDIT_GOODS_TYPE = '/admin/goodsType/editGoodsType',
  GOODS_LIST = '/admin/goods/getGoodsList',
  GOODS_LIST_BY_TYPE = '/admin/goods/getGoodsListByType',
}

// Get personal center-basic settings
//导出添加商品的接口，把上面定义的路径赋给url，vue文件就可以使用
export const addGoods = (params: GoodsParamsItem, mode: ErrorMessageMode = 'message') =>
  defHttp.post<string>({ url: Api.ADD_GOODS, params }, { errorMessageMode: mode });

export const editGoods = (params: GoodsParamsItem, mode: ErrorMessageMode = 'message') =>
  defHttp.post<string>({ url: Api.EDIT_GOODS, params }, { errorMessageMode: mode });

export const editGoodsType = (params: GoodsParamsItem, mode: ErrorMessageMode = 'message') =>
  defHttp.post<string>({ url: Api.EDIT_GOODS_TYPE, params }, { errorMessageMode: mode });

export const getGoodsList = (params: GoodsParams, mode: ErrorMessageMode = 'message') =>
  defHttp.get<GoodsListGetResultModel>({ url: Api.GOODS_LIST, params }, { errorMessageMode: mode });

export const getGoodsListByType = (params: GoodsParams, mode: ErrorMessageMode = 'message') =>
  defHttp.get<GoodsListGetResultModel>(
    { url: Api.GOODS_LIST_BY_TYPE, params },
    { errorMessageMode: mode },
  );
