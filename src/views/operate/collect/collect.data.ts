import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
export const columns: BasicColumn[] = [
  {
    title: '收藏ID',
    dataIndex: 'id',
    width: 80,
  },
  {
    title: '用户ID',
    dataIndex: 'user_id',
    width: 80,
  },
  {
    title: '用户昵称',
    dataIndex: 'user_name',
    width: 100,
  },
  {
    title: '用户头像',
    dataIndex: 'user_avatar_url',
    width: 180,
    slots: {
      customRender: 'avatar',
    },
  },
  {
    title: '商品ID',
    dataIndex: 'goods_id',
    width: 80,
  },
  {
    title: '商品名称',
    dataIndex: 'goods_name',
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
    title: '收藏时间',
    dataIndex: 'update_at',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '收藏ID',
    component: 'Input',
    labelWidth: 80,
    colProps: { span: 4 },
  },
  {
    field: 'user_id',
    label: '用户ID',
    component: 'Input',
    labelWidth: 80,
    colProps: { span: 4 },
  },
  {
    field: 'goods_id',
    label: '商品ID',
    component: 'Input',
    labelWidth: 80,
    colProps: { span: 4 },
  },
];
