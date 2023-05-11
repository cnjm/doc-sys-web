import { defHttp } from '/@/utils/http/axios';
import { AccountListGetResultModel, AccountParams, DelItem } from './model/accountModel';
import { ErrorMessageMode } from '/#/axios';

enum Api {
  ACCOUNT_LIST = '/admin/administrators/getAccountList',
  ADD_ACCOUNT = '/admin/administrators/addAccount',
  EDIT_ACCOUNT = '/admin/administrators/editAccount',
  DEL_ACCOUNT = '/admin/administrators/delAccount',
}

// Get personal center-basic settings
export const getAccountList = (params: AccountParams, mode: ErrorMessageMode = 'message') =>
  defHttp.get<AccountListGetResultModel>(
    { url: Api.ACCOUNT_LIST, params },
    { errorMessageMode: mode },
  );

export const addAccount = (params: AccountParams, mode: ErrorMessageMode = 'message') =>
  defHttp.post<string>({ url: Api.ADD_ACCOUNT, params }, { errorMessageMode: mode });

export const editAccount = (params: AccountParams, mode: ErrorMessageMode = 'message') =>
  defHttp.post<string>({ url: Api.EDIT_ACCOUNT, params }, { errorMessageMode: mode });

export const delAccount = (params: DelItem, mode: ErrorMessageMode = 'message') =>
  defHttp.post<string>({ url: Api.DEL_ACCOUNT, params }, { errorMessageMode: mode });
