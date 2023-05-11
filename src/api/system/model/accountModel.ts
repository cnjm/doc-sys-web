import { BasicFetchResult, BasicPageParams } from '/@/api/model/baseModel';
export interface AccountListItem {
  id: number;
  account: string;
  email: string;
  nickname: string;
  role: number;
  createTime: string;
  des: string;
  status: number;
}
export interface DelItem {
  id: number;
}
export type AccountParams = BasicPageParams & {
  account?: string;
  name?: string;
};

export type AccountListGetResultModel = BasicFetchResult<AccountListItem>;
