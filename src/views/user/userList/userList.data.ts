import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '用户id',
    dataIndex: 'id',
    width: 80,
  },
  {
    title: '用户名称',
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
    title: 'openid',
    dataIndex: 'openid',
    width: 180,
  },
  {
    title: '性别',
    dataIndex: 'gender',
    width: 80,
    customRender: ({ record }) => {
      if (record.gender === '1') {
        return '男';
      }
      if (record.gender === '2') {
        return '女';
      }
      return '未知';
    },
  },
  {
    title: '省',
    dataIndex: 'province',
    width: 120,
  },
  {
    title: '市',
    dataIndex: 'city',
    width: 120,
  },
  {
    title: '区',
    dataIndex: 'country',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'create_at',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '用户id',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'nickName',
    label: '用户名',
    component: 'Input',
    colProps: { span: 6 },
  },
];
