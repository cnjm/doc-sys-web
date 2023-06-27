<template>
  <PageWrapper dense contentFullHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #tableTitle>
        <ImpExcel @success="loadDataSuccess" dateFormat="YYYY-MM-DD">
          <a-button class="m-3"> 导入Excel </a-button>
        </ImpExcel>
        <a-button @click="openModal"> 导出统计数据 </a-button>
        <a-button class="m-3" @click="delAds"> 清除 </a-button>
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
  import {
    getOrderList,
    getOrderListAll,
    importOrder,
    receivedGoods,
    delOrderListAll,
  } from '/@/api/operate/order';
  import { getAdListAll } from '/@/api/operate/ad';
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
  // import { data as datae } from '../../demo/excel/data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { AdListAllItem } from '/@/api/operate/model/adModel';

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
      const { createConfirm } = useMessage();
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
        // actionColumn: {
        //   width: 120,
        //   title: '操作',
        //   dataIndex: 'action',
        //   slots: { customRender: 'action' },
        // },
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

      async function delAds() {
        createConfirm({
          iconType: 'warning',
          title: '温馨提示',
          content: '确认删除吗？',
          onOk: async () => {
            await delOrderListAll({});
            reload();
          },
        });
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
        reload();
      }

      async function defaultHeader({ filename, bookType }: ExportModalResult) {
        const results = await getOrderListAll({});
        const ids = await getAdListAll({});
        const productIds = Object.keys(ids);

        const orderIdList = results.items.map((item) => item.productId);

        const obj = {};
        for (const value of results.items) {
          if (productIds.includes(value.productId)) {
            if (value.productId in obj) {
              calc(value, ids[value.productId]);
            } else {
              obj[value.productId] = [];
              calc(value, ids[value.productId]);
            }
          }
        }
        for (const id in ids) {
          if (!orderIdList.includes(id) && ids[id].spend > 0) {
            obj[id] = [];
            obj[id].push({
              shopName: '无',
              productName: '无',
              productId: id,
              amount: 0,
              orderNum: 0,
              adName: ids[id].adName,
              adId: ids[id].adId,
              operateName: ids[id].operateName,
              spend: ids[id].spend,
            });
          }
        }

        function calc(value, adItem: AdListAllItem) {
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
              adName: adItem.adName,
              adId: adItem.adId,
              operateName: adItem.operateName,
              spend: adItem.spend,
            });
          }
        }

        let data: any[] = [];
        for (const key in obj) {
          data = [...data, ...obj[key]];
        }
        data.sort((a, b) => {
          if (a.operateName === b.operateName) {
            if (a.productId === b.productId) {
              if (a.amount > b.amount) {
                return 1;
              } else {
                return -1;
              }
            } else {
              if (a.productId > b.productId) {
                return 1;
              } else {
                return -1;
              }
            }
          } else {
            if (a.operateName > b.operateName) {
              return 1;
            } else {
              return -1;
            }
          }
        });
        console.log(data);
        // return;
        // 默认Object.keys(data[0])作为header
        jsonToSheetXlsx({
          data,
          header: {
            shopName: '店铺名称',
            productId: '商品ID',
            productName: '商品全名',
            adName: '广告主名',
            orderNum: '下单件数',
            amount: '实付金额',
            adId: '账户ID',
            operateName: '运营人员',
            spend: '消耗账户币',
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
        delAds,
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
