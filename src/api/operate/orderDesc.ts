import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { OrderDescParams, OrderDescItem, OrderCartItem } from './model/orderDescModel';

enum Api {
  ORDER_BY_ID = '/admin/order/getOrderById',
  ORDER_CART_BY_ID = '/admin/order/getOrderCartById',
}

export const getOrderById = (params: OrderDescParams, mode: ErrorMessageMode = 'message') =>
  defHttp.get<OrderDescItem>({ url: Api.ORDER_BY_ID, params }, { errorMessageMode: mode });

export const getOrderCartById = (params: OrderDescParams, mode: ErrorMessageMode = 'message') =>
  defHttp.get<OrderCartItem>({ url: Api.ORDER_CART_BY_ID, params }, { errorMessageMode: mode });
