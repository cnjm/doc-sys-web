import { BasicFetchResult, BasicPageParams } from '/@/api/model/baseModel';

export interface CollectListItem {
  id: number;
  user_id: string;
  goods_id: string;
  goods_name: string;
  urls: string;
  update_at: string;
}
export type CollectParams = BasicPageParams & {
  id?: string;
  user_id?: string;
  goods_id?: string;
};

export type CollectListGetResultModel = BasicFetchResult<CollectListItem>;
