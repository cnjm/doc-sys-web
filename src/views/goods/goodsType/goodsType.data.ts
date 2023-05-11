import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { uploadApi } from '/@/api/sys/upload';
import { UploadEnum } from '/@/enums/uploadEnum';

import { getGoodsTypeListByPid } from '/@/api/goods/goodsType';

export const columns: BasicColumn[] = [
  {
    title: '商品类型ID',
    dataIndex: 'id',
    width: 120,
  },
  {
    title: '商品类型名称',
    dataIndex: 'name',
    width: 180,
  },
  {
    title: '父级商品类型ID',
    dataIndex: 'pid',
    width: 120,
  },
  {
    title: '父级商品类型名称',
    dataIndex: 'pname',
    width: 180,
  },
  {
    title: '缩略图',
    dataIndex: 'url',
    width: 180,
    slots: {
      customRender: 'img',
    },
  },
  {
    title: '更新时间',
    dataIndex: 'update_at',
    width: 180,
  },
  {
    title: '备注',
    dataIndex: 'des',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    labelWidth: 80,
    colProps: { span: 4 },
  },
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    labelWidth: 80,
    colProps: { span: 5 },
  },
  {
    label: '上级商品分类',
    field: 'pid',
    component: 'ApiSelect',
    labelWidth: 120,
    colProps: { span: 6 },
    componentProps: {
      api: getGoodsTypeListByPid,
      labelField: 'name',
      valueField: 'id',
      params: {
        pid: 0,
      },
    },
  },
];

export const goodsTypeFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '商品分类名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'url',
    component: 'Upload',
    label: '商品分类图片',
    colProps: {
      span: 16,
    },
    rules: [{ required: true, message: '请选择上传文件' }],
    componentProps: {
      api: uploadApi,
      accept: ['image/*'],
      helpText: 'image/*格式并且不可大于1M',
      maxSize: 1,
      maxNumber: 1,
      multiple: false,
      uploadParams: { path: UploadEnum.GOODS_TYPE },
    },
  },
  {
    label: '上级商品分类',
    field: 'pid',
    component: 'ApiSelect',
    componentProps: {
      api: getGoodsTypeListByPid,
      labelField: 'name',
      valueField: 'id',
      placeholder: '不选则默认顶级商品分类',
      params: {
        pid: 0,
      },
    },
  },
  {
    label: '备注',
    field: 'des',
    component: 'InputTextArea',
  },
];
