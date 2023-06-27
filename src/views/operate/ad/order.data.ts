import { DescItem } from '/@/components/Description';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '商品Id',
    dataIndex: 'productId',
    width: 200,
  },
  {
    title: '运营人员',
    dataIndex: 'operateName',
  },
  {
    title: '广告主名',
    dataIndex: 'adName',
  },
  {
    title: '广告主ID',
    dataIndex: 'adId',
  },
  {
    title: '花费',
    dataIndex: 'spend',
  },
  {
    title: '创建时间',
    dataIndex: 'create_at',
    width: 180,
  },
  {
    title: '更新时间',
    dataIndex: 'update_at',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'productId',
    label: '商品Id',
    component: 'Input',
    labelWidth: 80,
    colProps: { span: 8 },
  },
  {
    field: 'operateName',
    label: '运营人员',
    component: 'Input',
    labelWidth: 80,
    colProps: { span: 8 },
  },
];

export const orderFormSchema: FormSchema[] = [
  {
    field: 'express_no',
    component: 'Input',
    label: '快递单号',
    required: true,
  },
];

export const personSchema: DescItem[] = [
  {
    field: 'b1',
    label: '用户昵称',
  },
  {
    field: 'b2',
    label: '用户头像',
  },
  {
    field: 'b3',
    label: '常用快递',
  },
  {
    field: 'b4',
    label: '取货地址',
  },
  {
    field: 'b5',
    label: '备注',
  },
];
export const orderSchema: DescItem[] = [
  {
    field: 'b1',
    label: '用户昵称',
  },
  {
    field: 'b2',
    label: '用户头像',
  },
  {
    field: 'b3',
    label: '常用快递',
  },
  {
    field: 'b4',
    label: '取货地址',
  },
  {
    field: 'b5',
    label: '备注',
  },
];
