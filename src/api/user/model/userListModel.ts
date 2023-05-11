import { BasicFetchResult, BasicPageParams } from '/@/api/model/baseModel';
export interface UserListItem {
  id: number;
  nickName: string;
  openid: string;
  avatarUrl: string;
  gender: number;
  province: string;
  city: string;
  country: string;
  create_at: string;
}
export type UserListParams = BasicPageParams & {
  nickName?: string;
  id?: string;
};
export type UserListGetResultModel = BasicFetchResult<UserListItem>;
