export interface UploadApiResult {
  message: string;
  code: number;
  url: string;
}

export interface QiniuTokenResult {
  token: string;
  key: string;
}
