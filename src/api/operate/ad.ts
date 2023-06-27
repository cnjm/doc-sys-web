import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { AdListAllGetResultModel, AdListGetResultModel, AdParams } from './model/adModel';

enum Api {
  AD_LIST = '/admin/ad/getAdList',
  AD_LIST_ALL = '/admin/ad/getAdListAll',
  IMPORT_AD = '/admin/ad/ImportAds',
  DEL = '/admin/ad/delAdListAll',
}

export const getAdList = (params: AdParams, mode: ErrorMessageMode = 'message') =>
  defHttp.get<AdListGetResultModel>({ url: Api.AD_LIST, params }, { errorMessageMode: mode });

export const getAdListAll = (params: any, mode: ErrorMessageMode = 'message') =>
  defHttp.get<AdListAllGetResultModel>(
    { url: Api.AD_LIST_ALL, params },
    { errorMessageMode: mode },
  );

export const importAds = (params: any, mode: ErrorMessageMode = 'message') =>
  defHttp.post<string>({ url: Api.IMPORT_AD, params }, { errorMessageMode: mode });

export const delAdListAll = (params: any, mode: ErrorMessageMode = 'message') =>
  defHttp.post<string>({ url: Api.DEL, params }, { errorMessageMode: mode });
