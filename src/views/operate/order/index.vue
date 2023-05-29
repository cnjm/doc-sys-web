<template>
  <PageWrapper dense contentFullHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #tableTitle>
        <ImpExcel @success="loadDataSuccess" dateFormat="YYYY-MM-DD">
          <a-button class="m-3"> 导入Excel </a-button>
        </ImpExcel>
        <a-button @click="openModal"> 导出 </a-button>
        <a-button class="m-3" @click="openModal"> 清除 </a-button>
      </template>

      <template #img="{ text }">
        <TableImg :size="60" :simpleShow="true" :imgList="text" />
      </template>

      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'ant-design:eye-outlined',
              tooltip: '查看订单',
              onClick: handleEye.bind(null, record),
            },
            {
              icon: 'ant-design:car-twotone',
              tooltip: '标记发货',
              onClick: handleDeliver.bind(null, record),
              auth: [OPERATE],
              ifShow: (_action) => {
                return record.status === '2';
              },
            },
            {
              icon: 'ant-design:check-outlined',
              tooltip: '完成订单',
              popConfirm: {
                title: '是否确认完成订单？',
                confirm: handleReceived.bind(null, record),
              },
              auth: [OPERATE],
              ifShow: (_action) => {
                return record.status === '3';
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <OperateOrderModal @register="registerModal" @success="handleSuccess" />
    <ExpExcelModal @register="registerModal" @success="defaultHeader" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { useRouter } from 'vue-router';
  import { BasicTable, useTable, TableImg, TableAction } from '/@/components/Table';
  import { getOrderList, getOrderListAll, importOrder, receivedGoods } from '/@/api/operate/order';
  import {
    ImpExcel,
    ExcelData,
    ExportModalResult,
    jsonToSheetXlsx,
    ExpExcelModal,
  } from '/@/components/Excel';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  import OperateOrderModal from './OperateOrderModal.vue';

  import { columns, searchFormSchema } from './order.data';
  import { PageEnum } from '/@/enums/pageEnum';
  import { data as datae } from '../../demo/excel/data';

  export default defineComponent({
    name: 'OperateOrderManagement',
    components: {
      BasicTable,
      PageWrapper,
      OperateOrderModal,
      ExpExcelModal,
      TableImg,
      TableAction,
      ImpExcel,
    },
    setup() {
      const OPERATE = RoleEnum.OPERATE;
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const { push } = useRouter();
      const [registerTable, { reload }] = useTable({
        title: '订单列表',
        api: getOrderList,
        rowKey: 'id',
        columns,
        formConfig: {
          labelWidth: 80,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        showIndexColumn: false,
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      function handleDeliver(record: Recordable) {
        const data = { ...record };
        openModal(true, {
          record: data,
          isUpdate: true,
        });
      }
      async function handleReceived(record: Recordable) {
        await receivedGoods({ id: record.id });
        reload();
      }
      async function handleEye(record: Recordable) {
        const data = { ...record };
        push({ path: PageEnum.ORDER_DESC, query: { id: data.id } });
      }

      function handleSuccess() {
        reload();
      }

      async function loadDataSuccess(excelDataList: ExcelData[]) {
        const columns: any[] = [];
        for (const excelData of excelDataList) {
          const { results } = excelData;
          for (const item of results) {
            if (['待发货', '已发货', '已完成'].includes(item['订单状态'])) {
              columns.push({
                shopName: item['店铺名称'],
                merchantId: item['商户号'],
                shopCode: item['店铺编码'],
                orderNo: item['订单号'],
                // orderSource: item['订单来源'],
                // adChannel: item['广告渠道'],
                // adAccountId: item['广告账户ID'],
                // adId: item['广告ID'],
                orderStatus: item['订单状态'],
                // orderAt: item['订单创建时间'],
                // paymentAt: item['买家付款时间'],
                // deliveryAt: item['发货时间'],
                // completionAt: item['交易成功/关闭时间'],
                // paymentMethod: item['付款方式'],
                // paymentNo: item['支付流水号'],
                totalPrice: item['商品总价'],
                freight: item['运费'],
                totalDiscount: item['优惠总额'],
                amount: item['实付金额'],
                productId: item['商品ID'],
                productName: item['商品全名'],
                // productDes: item['商品备注'],
                // specsCode: item['规格编码/套餐编码'],
                // productSpecs: item['商品规格'],
                orderNum: item['下单件数'],
                // expressName: item['快递公司'],
                // expressNo: item['快递单号'],
                // salesStatus: item['售后状态'],
                // salesType: item['售后类型'],
                // address: item['收件人地址'],
                // recipientName: item['收件人'],
                // recipientPhone: item['收件人手机号'],
                // message: item['买家留言'],
                // notes: item['商家备注'],
              });
            }
          }

          // console.log(results);
          // for (const title of header) {
          //   columns.push({ title, dataIndex: title });
          // }
        }
        console.log(columns);
        await importOrder({ orders: columns });
      }

      async function defaultHeader({ filename, bookType }: ExportModalResult) {
        const results = await getOrderListAll({});

        console.log(datae);
        const obj = {};
        for (const value of results.items) {
          if (value.productId in obj) {
            calc(value);
          } else {
            obj[value.productId] = [];
            calc(value);
          }
        }
        function calc(value) {
          if (value.orderNum <= 0) {
            console.log('订单数量出错了');
            return;
          }
          const amount = parseFloat((value.amount / value.orderNum).toFixed(2));
          const index = obj[value.productId].findIndex((item) => item.amount === amount);
          if (index > -1) {
            obj[value.productId][index].orderNum += value.orderNum;
          } else {
            obj[value.productId].push({
              shopName: value.shopName,
              productName: value.productName,
              productId: value.productId,
              amount,
              orderNum: value.orderNum,
            });
          }
        }

        let data: any[] = [];
        for (const key in obj) {
          data = [...data, ...obj[key]];
        }
        console.log(data);
        // 默认Object.keys(data[0])作为header
        jsonToSheetXlsx({
          data,
          header: {
            shopName: '店铺名称',
            productId: '商品ID',
            productName: '商品全名',
            orderNum: '下单件数',
            amount: '实付金额',
          },
          filename,
          merges: [],
          write2excelOpts: {
            bookType,
          },
        });
      }

      return {
        registerTable,
        searchInfo,
        registerModal,
        handleReceived,
        handleDeliver,
        handleEye,
        handleSuccess,
        OPERATE,
        loadDataSuccess,
        defaultHeader,
        openModal,
      };
    },
  });
</script>
