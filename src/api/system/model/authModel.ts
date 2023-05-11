import { BasicFetchResult, BasicPageParams } from '/@/api/model/baseModel';

export interface AuthItem {
  id: number;
  des: string;
  key: string;
  name: string;
}
export interface DelItem {
  id: number;
}
export type AuthParams = BasicPageParams & {
  account?: string;
  name?: string;
};

export type AuthListGetResultModel = BasicFetchResult<AuthItem>;
