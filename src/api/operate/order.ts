import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import {
  OrderListGetResultModel,
  OrderParams,
  deliverGoodsParams,
  receivedGoodsParams,
  OrderListAllGetResultModel,
} from './model/orderModel';

enum Api {
  ORDER_LIST = '/admin/order/getOrderList',
  ORDER_LIST_ALL = '/admin/order/getOrderListAll',
  ORDER_DELIVER = '/admin/order/deliverGoods',
  ORDER_RECEIVED = '/admin/order/receivedGoods',
  IMPORT_ORDER = '/admin/order/importOrder',
}

export const getOrderList = (params: OrderParams, mode: ErrorMessageMode = 'message') =>
  defHttp.get<OrderListGetResultModel>({ url: Api.ORDER_LIST, params }, { errorMessageMode: mode });

export const getOrderListAll = (params: any, mode: ErrorMessageMode = 'message') =>
  defHttp.get<OrderListAllGetResultModel>(
    { url: Api.ORDER_LIST_ALL, params },
    { errorMessageMode: mode },
  );

export const deliverGoods = (params: deliverGoodsParams, mode: ErrorMessageMode = 'message') =>
  defHttp.post<string>({ url: Api.ORDER_DELIVER, params }, { errorMessageMode: mode });

export const receivedGoods = (params: receivedGoodsParams, mode: ErrorMessageMode = 'message') =>
  defHttp.post<string>({ url: Api.ORDER_RECEIVED, params }, { errorMessageMode: mode });

export const importOrder = (params: any, mode: ErrorMessageMode = 'message') =>
  defHttp.post<string>({ url: Api.IMPORT_ORDER, params }, { errorMessageMode: mode });
