import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '地址id',
    dataIndex: 'id',
    width: 80,
  },
  {
    title: '用户id',
    dataIndex: 'user_id',
    width: 80,
  },
  {
    title: '用户昵称',
    dataIndex: 'nickName',
    width: 120,
  },
  {
    title: '用户头像',
    dataIndex: 'avatarUrl',
    width: 180,
    slots: {
      customRender: 'avatar',
    },
  },
  {
    title: '收货人姓名',
    dataIndex: 'name',
    width: 180,
  },
  {
    title: '收货人手机号',
    dataIndex: 'phone',
    width: 120,
  },
  {
    title: '省',
    dataIndex: 'province',
    width: 100,
  },
  {
    title: '市',
    dataIndex: 'city',
    width: 100,
  },
  {
    title: '区/县',
    dataIndex: 'country',
    width: 100,
  },
  {
    title: '详细地址',
    dataIndex: 'country',
    width: 220,
  },
  {
    title: '更新时间',
    dataIndex: 'update_at',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'user_id',
    label: '用户id',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'user_name',
    label: '收货人姓名',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'user_phone',
    label: '收货人手机号',
    component: 'Input',
    colProps: { span: 6 },
  },
];
