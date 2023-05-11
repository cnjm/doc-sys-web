import { AuthParams, AuthListGetResultModel, AuthItem, DelItem } from './model/authModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  GET_AUTH = '/admin/auth/getAuth',
  GET_AUTH_LIST = '/admin/auth/getAuthList',
  ADD_AUTH = '/admin/auth/addAuth',
  DEL_AUTH = '/admin/auth/delAuth',
}

export const getAuth = () => defHttp.get<AuthListGetResultModel>({ url: Api.GET_AUTH });

export const getAuthList = (params: AuthParams) =>
  defHttp.get<AuthListGetResultModel>({ url: Api.GET_AUTH_LIST, params });

export const addAuth = (params: AuthItem) =>
  defHttp.post<AuthListGetResultModel>({ url: Api.ADD_AUTH, params });

export const delAuth = (params: DelItem) => defHttp.post<any>({ url: Api.DEL_AUTH, params });
