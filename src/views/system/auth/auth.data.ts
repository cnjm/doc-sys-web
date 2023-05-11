import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '权限名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '权限指令',
    dataIndex: 'key',
    width: 180,
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
    field: 'name',
    label: '权限名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'key',
    label: '权限指令',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '权限名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'key',
    label: '权限指令',
    required: true,
    component: 'Input',
  },
  {
    label: '备注',
    field: 'des',
    component: 'InputTextArea',
  },
];
