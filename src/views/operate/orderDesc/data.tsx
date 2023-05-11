import { DescItem } from '/@/components/Description/index';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { Button } from '/@/components/Button';

export const userSchema: DescItem[] = [
  {
    field: 'user_id',
    label: '用户ID',
  },
  {
    field: 'nickName',
    label: '用户昵称',
  },
  {
    field: 'openid',
    label: 'openid',
  },
  {
    field: 'gender',
    label: '性别',
  },
  {
    field: 'province',
    label: '省份',
  },
  {
    field: 'city',
    label: '城市',
  },
  {
    field: 'country',
    label: '城镇',
  },
  {
    field: 'create_at',
    label: '创建时间',
  },
];
export const orderSchema: DescItem[] = [
  {
    field: 'id',
    label: '订单ID',
  },
  {
    field: 'status',
    label: '订单状态',
  },
  {
    field: 'total_price',
    label: '合计金额',
  },
  {
    field: 'name',
    label: '收货人姓名',
  },
  {
    field: 'phone',
    label: '收货号码',
  },
  {
    field: 'address',
    label: '收货地址',
  },
  {
    field: 'express_no',
    label: '快递单号',
  },
  {
    field: 'create_at',
    label: '创建时间',
  },
  {
    field: 'update_at',
    label: '更新时间',
  },
];

export const goodsSchema: BasicColumn[] = [
  {
    title: '商品ID',
    width: 100,
    dataIndex: 'id',
  },
  {
    title: '商品名称',
    width: 150,
    dataIndex: 'name',
  },
  {
    title: '缩略图',
    dataIndex: 'urls',
    width: 120,
    slots: {
      customRender: 'img',
    },
  },
  {
    title: '单价(元)',
    width: 150,
    dataIndex: 'price',
  },
  {
    title: '数量(件)',
    width: 150,
    dataIndex: 'goods_num',
  },
  {
    title: '金额(元)',
    width: 150,
    dataIndex: 'total_price',
  },
];
