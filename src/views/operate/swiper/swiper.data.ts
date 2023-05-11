import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { uploadApi } from '/@/api/sys/upload';
import { UploadEnum } from '/@/enums/uploadEnum';
import { getGoodsTypeListByPid } from '/@/api/goods/goodsType';
import { getGoodsListByType } from '/@/api/goods/goods';

export const columns: BasicColumn[] = [
  {
    title: '轮播ID',
    dataIndex: 'id',
    width: 100,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 180,
    customRender: ({ record }) => {
      const textObj = { '1': '启用', '2': '禁用' };
      return textObj[record.status];
    },
  },
  {
    title: '商品ID',
    dataIndex: 'goods_id',
    width: 100,
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
    field: 'status',
    label: '状态',
    component: 'Select',
    defaultValue: '1',
    colProps: { span: 6 },
    componentProps: {
      options: [
        {
          label: '启用',
          value: '1',
          key: '1',
        },
        {
          label: '禁用',
          value: '2',
          key: '2',
        },
      ],
    },
  },
];

export const swiperFormSchema: FormSchema[] = [
  {
    field: 'url',
    component: 'Upload',
    label: '图片',
    colProps: {
      span: 16,
    },
    rules: [{ required: true, message: '请选择上传图片' }],
    componentProps: {
      api: uploadApi,
      accept: ['image/*'],
      helpText: 'image/*格式并且不可大于1M,只允许上传一张',
      maxSize: 1,
      maxNumber: 1,
      multiple: false,
      uploadParams: { path: UploadEnum.GOODS_SWIPER },
    },
  },
  {
    field: 'type_id',
    component: 'ApiSelect',
    label: '商品分类',
    required: true,
    componentProps: ({ formModel, formActionType }) => {
      return {
        api: getGoodsTypeListByPid,
        labelField: 'name',
        valueField: 'id',
        params: {
          pid: 0,
          reverse: true,
        },
        placeholder: '请先选择商品分类',
        onChange: (e: any) => {
          let type_id = 0;
          if (e) {
            type_id = e;
          }
          formModel.goods_id = undefined; //  reset goods_id value
          const { updateSchema } = formActionType;
          updateSchema({
            field: 'goods_id',
            componentProps: () => {
              return {
                api: getGoodsListByType,
                labelField: 'name',
                valueField: 'id',
                params: {
                  type_id,
                },
              };
            },
          });
        },
      };
    },
  },
  {
    field: 'goods_id',
    component: 'ApiSelect',
    label: '商品',
    required: true,
    componentProps: ({ formModel }) => {
      return {
        api: getGoodsListByType,
        labelField: 'name',
        valueField: 'id',
        params: {
          type_id: formModel.type_id || 0,
        },
      };
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
          label: '启用',
          value: '1',
          key: '1',
        },
        {
          label: '禁用',
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
