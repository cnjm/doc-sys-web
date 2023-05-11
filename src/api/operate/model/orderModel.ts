import { BasicFetchResult, BasicPageParams } from '/@/api/model/baseModel';

export interface OrderListItem {
  id: number;
  shopName: string;
  merchantId: number;
  shopCode: string;
  orderNo: string;
  orderSource: string;
  adChannel: string;
  adAccountId: string;
  adId: string;
  orderStatus: string;
  orderAt: string;
  paymentAt: string;
  deliveryAt: string;
  completionAt: string;
  paymentMethod: string;
  paymentNo: string;
  totalPrice: number;
  freight: number;
  totalDiscount: number;
  amount: number;
  productId: string;
  productName: string;
  productDes: string;
  specsCode: string;
  productSpecs: string;
  orderNum: number;
  expressName: string;
  expressNo: string;
  salesStatus: string;
  salesType: string;
  recipientName: string;
  recipientPhone: string;
  message: string;
  notes: string;
}
export type OrderParams = BasicPageParams & {
  id?: string;
  status?: string;
  phone?: string;
};
export interface deliverGoodsParams {
  id: number;
  express_no: string;
}
export interface receivedGoodsParams {
  id: number;
}

export type OrderListGetResultModel = BasicFetchResult<OrderListItem>;
