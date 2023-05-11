import { defHttp } from '/@/utils/http/axios';
import { CollectListGetResultModel, CollectParams } from './model/collectModel';
import { ErrorMessageMode } from '/#/axios';

enum Api {
  COLLECT_LIST = '/admin/collect/getCollectList',
}

export const getCollectList = (params: CollectParams, mode: ErrorMessageMode = 'message') =>
  defHttp.get<CollectListGetResultModel>(
    { url: Api.COLLECT_LIST, params },
    { errorMessageMode: mode },
  );
