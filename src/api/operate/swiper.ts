import { defHttp } from '/@/utils/http/axios';
import { SwiperListGetResultModel, SwiperParams, SwiperParamsItem } from './model/swiperModel';
import { ErrorMessageMode } from '/#/axios';

enum Api {
  ADD_SWIPER = '/admin/swiper/addSwiper',
  EDIT_SWIPER = '/admin/swiper/editSwiper',
  EDIT_GOODS_TYPE = '/admin/goodsType/editGoodsType',
  SWIPER_LIST = '/admin/swiper/getSwiperList',
}

// Get personal center-basic settings
export const addSwiper = (params: SwiperParamsItem, mode: ErrorMessageMode = 'message') =>
  defHttp.post<string>({ url: Api.ADD_SWIPER, params }, { errorMessageMode: mode });

export const editSwiper = (params: SwiperParamsItem, mode: ErrorMessageMode = 'message') =>
  defHttp.post<string>({ url: Api.EDIT_SWIPER, params }, { errorMessageMode: mode });

export const editGoodsType = (params: SwiperParamsItem, mode: ErrorMessageMode = 'message') =>
  defHttp.post<string>({ url: Api.EDIT_GOODS_TYPE, params }, { errorMessageMode: mode });

export const getSwiperList = (params: SwiperParams, mode: ErrorMessageMode = 'message') =>
  defHttp.get<SwiperListGetResultModel>(
    { url: Api.SWIPER_LIST, params },
    { errorMessageMode: mode },
  );
