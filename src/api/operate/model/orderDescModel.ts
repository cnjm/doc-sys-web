import { BasicFetchResult } from '/@/api/model/baseModel';

export interface OrderDescItem {
  id: number;
  total_price: number;
  status: string;
  user_id: number;
  nickName: string;
  avatarUrl: Array<string>;
  name: string;
  phone: string;
  address: string;
  express_no: string;
  create_at: string;
  update_at: string;
  carts: any;
  userData: any;
}
export interface OrderCartItem {
  id: number;
  goods_name: string;
  status: string;
  urls: Array<string>;
  price: string;
  goods_num: string;
  total_price: string;
  create_at: string;
  update_at: string;
}
export interface OrderDescParams {
  id: string;
}

export type OrderDescGetResultModel = BasicFetchResult<OrderDescItem>;
