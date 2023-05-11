import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { uploadApi } from '/@/api/sys/upload';
import { UploadEnum } from '/@/enums/uploadEnum';

import { getGoodsTypeListByPid } from '/@/api/goods/goodsType';
import { h } from 'vue';
import { Tinymce } from '/@/components/Tinymce';
// 表格的列配置
export const columns: BasicColumn[] = [
  {
    title: '商品ID',
    dataIndex: 'id',
    width: 100,
  },
  {
    title: '商品名称',
    dataIndex: 'name',
    width: 180,
  },
  {
    title: '商品状态',
    dataIndex: 'status',
    width: 180,
    customRender: ({ record }) => {
      const textObj = { '1': '在售', '2': '下架', '3': '缺货' };
      return textObj[record.status];
    },
  },
  {
    title: '商品重量(KG)',
    dataIndex: 'weight',
    width: 120,
  },
  {
    title: '商品价格(元)',
    dataIndex: 'price',
    width: 120,
    customRender: ({ record }) => {
      return record.price / 100;
    },
  },
  {
    title: '商品库存(件)',
    dataIndex: 'stock',
    width: 120,
  },
  {
    title: '商品分类',
    dataIndex: 'goods_types',
    width: 180,
    customRender: ({ record }) => {
      const types = record.goods_types.map((item) => item.name);
      return types.join(',') || '未知分类';
    },
  },
  {
    title: '商品标签',
    dataIndex: 'label',
    width: 180,
  },
  {
    title: '缩略图',
    dataIndex: 'urls',
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
// 搜索区域的配置
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
    field: 'status',
    label: '状态',
    component: 'Select',
    defaultValue: '1',
    colProps: { span: 6 },
    componentProps: {
      options: [
        {
          label: '在售',
          value: '1',
          key: '1',
        },
        {
          label: '下架',
          value: '2',
          key: '2',
        },
        {
          label: '缺货',
          value: '3',
          key: '3',
        },
      ],
    },
  },
];
// 弹框中from表单的配置
export const goodsFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '商品名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'goods_types',
    label: '商品分类',
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: getGoodsTypeListByPid,
      mode: 'multiple',
      labelField: 'name',
      valueField: 'id',
      params: {
        pid: 0,
        reverse: true,
      },
    },
  },
  {
    field: 'label',
    label: '商品标签',
    component: 'Input',
    componentProps: {
      placeholder: '可输入多个，使用‘,‘隔开',
    },
  },
  {
    field: 'brief',
    label: '商品简介',
    required: true,
    component: 'InputTextArea',
    componentProps: {
      placeholder: '简短的商品简介',
    },
  },
  {
    field: 'weight',
    label: '商品重量',
    required: true,
    component: 'InputNumber',
    colProps: {
      span: 8,
    },
    componentProps: {
      max: 100,
      min: 0.1,
    },
    suffix: 'KG',
  },
  {
    field: 'price',
    label: '商品价格',
    required: true,
    component: 'InputNumber',
    colProps: {
      span: 8,
    },
    componentProps: {
      max: 1000000,
      min: 0.01,
    },
    suffix: '元',
  },
  {
    field: 'stock',
    label: '商品库存',
    required: true,
    component: 'InputNumber',
    colProps: {
      span: 8,
    },
    componentProps: {
      max: 1000,
      min: 0,
    },
    suffix: '件',
  },
  {
    field: 'recommend',
    component: 'Slider',
    label: '推荐指数',
    componentProps: {
      min: 0,
      max: 100,
      range: false,
      marks: {
        25: '普通',
        50: '着力',
        75: '极力',
        100: '顶级',
      },
    },
  },
  {
    field: 'urls',
    component: 'Upload',
    label: '商品图片',
    colProps: {
      span: 16,
    },
    rules: [{ required: true, message: '请选择上传图片' }],
    componentProps: {
      api: uploadApi,
      accept: ['image/*'],
      helpText: 'image/*格式并且不可大于1M,最多不超过五张',
      maxSize: 1,
      maxNumber: 5,
      multiple: true,
      uploadParams: { path: UploadEnum.GOODS },
    },
  },
  {
    field: 'details',
    component: 'Input',
    label: '商品详情',
    defaultValue: '商品详情...',
    rules: [{ required: true }],
    render: ({ model, field }) => {
      return h(Tinymce, {
        value: model[field],
        options: {
          maxSize: 1,
          uploadParams: { path: UploadEnum.GOODS_DETAILS },
        },
        onChange: (value: string) => {
          model[field] = value;
        },
      });
    },
  },
  {
    field: 'status',
    component: 'Select',
    label: '状态',
    required: true,
    defaultValue: '1',
    componentProps: {
      options: [
        {
          label: '在售',
          value: '1',
          key: '1',
        },
        {
          label: '下架',
          value: '2',
          key: '2',
        },
      ],
    },
  },
  {
    label: '备注',
    field: 'des',
    component: 'InputTextArea',
  },
];
