import { BasicFetchResult, BasicPageParams } from '/@/api/model/baseModel';

export interface AdListItem {
  productId: string;
  operateName: string;
  adName: string;
  adId: string;
  spend: number;
}
export type AdParams = BasicPageParams & {
  productId?: string;
};

export type AdListGetResultModel = BasicFetchResult<AdListItem>;

export type AdListAllItem = {
  adName: string;
  operateName: string;
  adId: string;
  spend: number;
};
export type AdListAllGetResultModel = {
  [key: string]: AdListAllItem;
};
