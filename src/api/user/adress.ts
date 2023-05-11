import { defHttp } from '/@/utils/http/axios';
import { AddressGetResultModel, AddressParams } from './model/addressModel';
import { ErrorMessageMode } from '/#/axios';

enum Api {
  ADDRESS_LIST = '/admin/user/getAddressList',
}

// Get personal center-basic settings
export const getAddressList = (params: AddressParams, mode: ErrorMessageMode = 'message') =>
  defHttp.get<AddressGetResultModel>({ url: Api.ADDRESS_LIST, params }, { errorMessageMode: mode });
