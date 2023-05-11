import { BasicFetchResult, BasicPageParams } from '/@/api/model/baseModel';

export type SwiperParamsItem = {
  id?: number;
  url: string;
  goods_id: string;
  status: string;
  des?: string;
};

export interface SwiperListItem {
  id: number;
  url: string;
  goods_id: number;
  status: string;
  des: string;
  update_at: string;
}
export type SwiperParams = BasicPageParams & {
  status?: string;
  id?: string;
};

export type GoodsTypeByPidParams = {
  pid: number;
};

export type SwiperListGetResultModel = BasicFetchResult<SwiperListItem>;
