import { EditParams, EditAccountByOwnResultModel } from './model/passwordModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  EDIT_ACCONUT_BY_OWN = '/admin/administrators/editAccountByOwn',
}

export const editAccountByOwn = (params: EditParams) =>
  defHttp.post<EditAccountByOwnResultModel>({ url: Api.EDIT_ACCONUT_BY_OWN, params });
