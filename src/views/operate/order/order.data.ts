import { DescItem } from '/@/components/Description';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '店铺名称',
    dataIndex: 'shopName',
    width: 100,
  },
  {
    title: '商户号',
    dataIndex: 'merchantId',
    width: 100,
  },
  {
    title: '店铺编码',
    dataIndex: 'shopCode',
    width: 120,
  },
  {
    title: '订单号',
    dataIndex: 'orderNo',
    width: 180,
  },
  // {
  //   title: '订单来源',
  //   dataIndex: 'orderSource',
  //   width: 100,
  // },
  // {
  //   title: '广告渠道',
  //   dataIndex: 'adChannel',
  //   width: 100,
  // },
  // {
  //   title: '广告账户ID',
  //   dataIndex: 'adAccountId',
  //   width: 100,
  // },
  // {
  //   title: '广告ID',
  //   dataIndex: 'adId',
  // },
  {
    title: '订单状态',
    dataIndex: 'orderStatus',
  },
  // {
  //   title: '订单创建时间',
  //   dataIndex: 'orderAt',
  // },
  // {
  //   title: '买家付款时间',
  //   dataIndex: 'paymentAt',
  // },
  // {
  //   title: '发货时间',
  //   dataIndex: 'deliveryAt',
  // },
  // {
  //   title: '交易成功/关闭时间',
  //   dataIndex: 'completionAt',
  // },
  // {
  //   title: '付款方式',
  //   dataIndex: 'paymentMethod',
  // },
  // {
  //   title: '支付流水号',
  //   dataIndex: 'paymentNo',
  // },
  {
    title: '商品总价',
    dataIndex: 'totalPrice',
  },
  {
    title: '运费',
    dataIndex: 'freight',
  },
  {
    title: '优惠总额',
    dataIndex: 'totalDiscount',
  },
  {
    title: '实付金额',
    dataIndex: 'amount',
  },
  {
    title: '商品ID',
    dataIndex: 'productId',
  },
  {
    title: '商品全名',
    dataIndex: 'productName',
  },
  // {
  //   title: '商品备注',
  //   dataIndex: 'productDes',
  // },
  // {
  //   title: '规格编码/套餐编码',
  //   dataIndex: 'specsCode',
  // },
  // {
  //   title: '商品规格',
  //   dataIndex: 'productSpecs',
  // },
  {
    title: '下单件数',
    dataIndex: 'orderNum',
  },
  // {
  //   title: '快递公司',
  //   dataIndex: 'expressName',
  // },
  // {
  //   title: '快递单号',
  //   dataIndex: 'expressNo',
  // },
  // {
  //   title: '售后状态',
  //   dataIndex: 'salesStatus',
  // },
  // {
  //   title: '售后类型',
  //   dataIndex: 'salesType',
  // },
  // {
  //   title: '收件人地址',
  //   dataIndex: 'address',
  // },
  // {
  //   title: '收件人',
  //   dataIndex: 'recipientName',
  // },
  // {
  //   title: '收件人手机号',
  //   dataIndex: 'recipientPhone',
  // },
  // {
  //   title: '买家留言',
  //   dataIndex: 'message',
  // },
  // {
  //   title: '商家备注',
  //   dataIndex: 'notes',
  // },
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
    field: 'orderNo',
    label: '订单号',
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
