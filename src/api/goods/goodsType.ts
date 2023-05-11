import { defHttp } from '/@/utils/http/axios';
import {
  GoodsTypeByPidParams,
  GoodsTypeListGetResultModel,
  GoodsTypeParams,
  OptionsItem,
} from './model/goodsTypeModel';
import { ErrorMessageMode } from '/#/axios';

enum Api {
  ADD_GOODS_TYPE = '/admin/goodsType/addGoodsType',
  EDIT_GOODS_TYPE = '/admin/goodsType/editGoodsType',
  GOODS_TYPE_LIST_BY_PID = '/admin/goodsType/getGoodsTypeListByPid',
  GOODS_TYPE_LIST = '/admin/goodsType/getGoodsTypeList',
}

// Get personal center-basic settings
// 添加
export const addGoodsType = (params: GoodsTypeParams, mode: ErrorMessageMode = 'message') =>
  defHttp.post<string>({ url: Api.ADD_GOODS_TYPE, params }, { errorMessageMode: mode });
// 编辑
export const editGoodsType = (params: GoodsTypeParams, mode: ErrorMessageMode = 'message') =>
  defHttp.post<string>({ url: Api.EDIT_GOODS_TYPE, params }, { errorMessageMode: mode });

// 获取商品分类列表
export const getGoodsTypeList = (params: GoodsTypeParams, mode: ErrorMessageMode = 'message') =>
  defHttp.get<GoodsTypeListGetResultModel>(
    { url: Api.GOODS_TYPE_LIST, params },
    { errorMessageMode: mode },
  );
// 获取商品分类列表  根据父级Id
export const getGoodsTypeListByPid = (params: GoodsTypeByPidParams) =>
  defHttp.get<GoodsTypeListGetResultModel>({
    url: Api.GOODS_TYPE_LIST_BY_PID,
    params,
  });

export const getGoodsTypeListByPidOptions = (params: GoodsTypeByPidParams) =>
  defHttp.get<OptionsItem>({
    url: Api.GOODS_TYPE_LIST_BY_PID,
    params,
  });
