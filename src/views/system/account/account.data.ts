import { getAuth } from '/@/api/system/auth';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '账户',
    dataIndex: 'account',
    width: 120,
  },
  {
    title: '昵称',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 80,
    customRender: ({ record }) => {
      return record.status === '1' ? '启用' : '禁用';
    },
  },
  {
    title: '权限',
    dataIndex: 'auth_key',
    width: 200,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 180,
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'create_at',
    width: 180,
  },
  {
    title: '备注',
    dataIndex: 'des',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: '账号',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'name',
    label: '昵称',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    defaultValue: '',
    colProps: { span: 6 },
    componentProps: {
      options: [
        {
          label: '全部',
          value: '',
          key: '0',
        },
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

export const accountFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: '用户名',
    required: true,
    component: 'Input',
  },
  {
    field: 'password',
    label: '密码',
    component: 'InputPassword',
    required: true,
    ifShow: false,
  },
  {
    label: '权限',
    field: 'auth_key',
    component: 'ApiSelect',
    componentProps: {
      mode: 'multiple',
      api: getAuth,
      labelField: 'name',
      valueField: 'key',
    },
    required: true,
  },
  {
    field: 'name',
    label: '昵称',
    component: 'Input',
    required: true,
  },
  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
  },
  {
    label: '手机号',
    field: 'phone',
    component: 'Input',
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
