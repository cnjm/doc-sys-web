import { QiniuTokenResult, UploadApiResult } from './model/uploadModel';
import { defHttp } from '/@/utils/http/axios';
import { UploadFileParams, QiniuTokenParams, ErrorMessageMode } from '/#/axios';
import { useGlobSetting } from '/@/hooks/setting';

enum Api {
  GET_QINIU_TOKEN = '/common/upload/getQiniuToken',
}
const { uploadUrl = '' } = useGlobSetting();

/**
 * @description: Upload interface
 */
export function uploadApi(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void,
) {
  return defHttp.uploadFile<UploadApiResult>(
    {
      url: uploadUrl,
      onUploadProgress,
    },
    params,
  );
}

// 向自己服务器获取七牛云上传需要的token和key
export const getQiniuToken = (params: QiniuTokenParams, mode: ErrorMessageMode = 'none') =>
  defHttp.get<QiniuTokenResult>({ url: Api.GET_QINIU_TOKEN, params }, { errorMessageMode: mode });
