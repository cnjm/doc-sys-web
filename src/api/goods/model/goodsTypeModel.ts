import { BasicFetchResult, BasicPageParams } from '/@/api/model/baseModel';
export interface GoodsTypeListItem {
  id: number;
  name: string;
  url: string;
  pid: string;
  pname: string;
  city: string;
  des: string;
  update_at: string;
}
export type GoodsTypeParams = BasicPageParams & {
  name: string;
  url: string;
  id?: string;
  pid?: number;
};

export interface OptionsItem {
  label: string;
  value: string;
}

export type GoodsTypeByPidParams = {
  pid: number;
};

export type GoodsTypeListGetResultModel = BasicFetchResult<GoodsTypeListItem>;
