import { BasicFetchResult, BasicPageParams } from '/@/api/model/baseModel';

export type GoodsParamsItem = {
  id?: number;
  name: string;
  weight: number;
  label?: string;
  urls: string;
  details?: string;
  status: string;
  des?: string;
};

export interface GoodsListItem {
  id: number;
  name: string;
  weight: string;
  label: string;
  urls: string;
  details: string;
  status: string;
  des: string;
  update_at: string;
}
export type GoodsParams = BasicPageParams & {
  name?: string;
  status?: string;
  id?: string;
  goods_id?: string;
};

export type GoodsTypeByPidParams = {
  pid: number;
};

export type GoodsListGetResultModel = BasicFetchResult<GoodsListItem>;
