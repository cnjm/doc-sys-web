import { defHttp } from '/@/utils/http/axios';
import { UserListGetResultModel, UserListParams } from './model/userListModel';
import { ErrorMessageMode } from '/#/axios';

enum Api {
  USER_LIST = '/admin/user/getUserList',
}

// Get personal center-basic settings
export const getUserList = (params: UserListParams, mode: ErrorMessageMode = 'message') =>
  defHttp.get<UserListGetResultModel>({ url: Api.USER_LIST, params }, { errorMessageMode: mode });
