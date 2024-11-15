import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 200,
  },
  {
    title: '店铺',
    dataIndex: 'shopName',
    width: 200,
  },
  {
    title: '发货内容',
    dataIndex: 'goodName',
    width: 200,
  },
  {
    title: '发货时间',
    dataIndex: 'time',
    width: 200,
    slots: {
      customRender: 'avatar',
    },
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
