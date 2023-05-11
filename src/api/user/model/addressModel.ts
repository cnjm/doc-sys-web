import { BasicFetchResult, BasicPageParams } from '/@/api/model/baseModel';
export interface AddressItem {
  id: number;
  user_id: string;
  nickName: string;
  avatarUrl: string;
  name: string;
  phone: string;
  province: string;
  city: string;
  country: string;
  detailed: string;
  update_at: string;
}
export type AddressParams = BasicPageParams & {
  address_id?: string;
  user_id?: string;
  user_name?: string;
  user_phone?: string;
};
export type AddressGetResultModel = BasicFetchResult<AddressItem>;
