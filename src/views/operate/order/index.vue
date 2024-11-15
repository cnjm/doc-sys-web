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

      // async function defaultHeader({ filename, bookType }: ExportModalResult) {
      //   const results = await getOrderListAll({});
      //   const ids = await getAdListAll({});
      //   const productIds = Object.keys(ids);

      //   const orderIdList = results.items.map((item) => item.productId);

      //   const date = '8.24';

      //   const obj = {};
      //   for (const value of results.items) {
      //     if (productIds.includes(value.productId)) {
      //       if (value.productId in obj) {
      //         calc(value, ids[value.productId]);
      //       } else {
      //         obj[value.productId] = [];
      //         calc(value, ids[value.productId]);
      //       }
      //     }
      //   }
      //   for (const id in ids) {
      //     if (!orderIdList.includes(id) && ids[id].spend > 0) {
      //       obj[id] = [];
      //       obj[id].push({
      //         date,
      //         shopName: '无',
      //         productName: '无',
      //         productId: id,
      //         amount: 0,
      //         orderNum: 0,
      //         adName: ids[id].adName,
      //         adId: ids[id].adId,
      //         operateName: ids[id].operateName,
      //         spend: ids[id].spend,
      //         consume: '',
      //         accumulateRmb: '',
      //         accumulateOrder: '',
      //         // 产品成本
      //         productCost: 1,
      //         packageFee: 0,
      //         houseFee: 0,
      //         expressFee: 1,
      //         operateCost: 1,
      //         returnExpress: 1,
      //         returnPackageFee: 0,
      //         signingRate: '85%',
      //         refusalRate: '',
      //         signingProfit: '',
      //         refusalCost: '',
      //         adCritical: '',
      //         averageExpressFee: '',
      //         transformCost: '',
      //         yesterdayProfit: '',
      //         accrualProfit: '',
      //         grossMargin: '',
      //       });
      //     }
      //   }

      //   function calc(value, adItem: AdListAllItem) {
      //     if (value.orderNum <= 0) {
      //       console.log('订单数量出错了');
      //       return;
      //     }
      //     const amount = parseFloat((value.amount / value.orderNum).toFixed(2));
      //     const index = obj[value.productId].findIndex((item) => item.amount === amount);
      //     if (index > -1) {
      //       obj[value.productId][index].orderNum += value.orderNum;
      //     } else {
      //       obj[value.productId].push({
      //         date,
      //         shopName: value.shopName,
      //         productName: value.productName,
      //         productId: value.productId,
      //         amount,
      //         orderNum: value.orderNum,
      //         adName: adItem.adName,
      //         adId: adItem.adId,
      //         operateName: adItem.operateName,
      //         spend: adItem.spend,
      //         consume: '',
      //         accumulateRmb: '',
      //         accumulateOrder: '',
      //         // 产品成本
      //         productCost: 1,
      //         packageFee: 0,
      //         houseFee: 0,
      //         expressFee: 1,
      //         operateCost: 1,
      //         returnExpress: 1,
      //         returnPackageFee: 0,
      //         signingRate: '85%',
      //         refusalRate: '',
      //         signingProfit: '',
      //         refusalCost: '',
      //         adCritical: '',
      //         averageExpressFee: '',
      //         transformCost: '',
      //         yesterdayProfit: '',
      //         accrualProfit: '',
      //         grossMargin: '',
      //       });
      //     }
      //   }

      //   let data: any[] = [];
      //   for (const key in obj) {
      //     data = [...data, ...obj[key]];
      //   }
      //   data.sort((a, b) => {
      //     if (a.operateName === b.operateName) {
      //       if (a.productId === b.productId) {
      //         if (a.amount > b.amount) {
      //           return 1;
      //         } else {
      //           return -1;
      //         }
      //       } else {
      //         if (a.productId > b.productId) {
      //           return 1;
      //         } else {
      //           return -1;
      //         }
      //       }
      //     } else {
      //       if (a.operateName > b.operateName) {
      //         return 1;
      //       } else {
      //         return -1;
      //       }
      //     }
      //   });

      //   let formulas: any = {};
      //   let merges: any[] = [];
      //   let productId = data[0].productId;
      //   let sr = 1;
      //   let er = 0;
      //   data.forEach((element, num) => {
      //     let fnum = num + 2;

      //     if (productId !== element.productId || num === data.length - 1) {
      //       er += num === data.length - 1 ? num + 1 : num;
      //       merges = [
      //         ...merges,
      //         ...[0, 1, 2, 3, 5, 6, 7, 8, 25].map((c) => ({ s: { r: sr, c }, e: { r: er, c } })),
      //       ];
      //       let fsr = sr + 1;
      //       let fer = er + 1;
      //       formulas['G' + fsr] = { t: 'n', f: `F${fsr}/1.03` };
      //       formulas['H' + fsr] = { t: 'n', f: `SUM(E${fsr}:E${fer})` };
      //       formulas['I' + fsr] = { t: 'n', f: `G${fsr}` };

      //       formulas['Z' + fsr] = { t: 'n', f: `SUM(Y${fsr}:Y${fer})` };

      //       productId = element.productId;
      //       if (num !== data.length - 1) {
      //         sr = er + 1;
      //       }
      //       er = 0;
      //     }

      //     formulas['S' + fnum] = { t: 'n', f: `1-R${fnum}` };
      //     formulas['T' + fnum] = {
      //       t: 'n',
      //       f: `(J${fnum}-K${fnum}-L${fnum}-N${fnum}-O${fnum})-(J${fnum}*0.05)`,
      //     };
      //     formulas['U' + fnum] = { t: 'n', f: `N${fnum}+P${fnum}+Q${fnum}` };
      //     formulas['V' + fnum] = { t: 'n', f: `(T${fnum}*R${fnum})-(U${fnum}*S${fnum})` };
      //     formulas['W' + fnum] = {
      //       t: 'n',
      //       f: `((N${fnum}+L${fnum})*R${fnum})+(J${fnum}*0.01*R${fnum})+((N${fnum}+P${fnum}+Q${fnum})*S${fnum})`,
      //     };
      //     formulas['X' + fnum] = { t: 'n', f: `G${sr + 1}/H${sr + 1}` };
      //     formulas['Y' + fnum] = { t: 'n', f: `E${fnum}*(V${fnum}-X${fnum})-M${fnum}` };
      //     formulas['AA' + fnum] = { t: 'n', f: `T${fnum}/J${fnum}` };
      //   });
      //   // console.log(merges);
      //   // return;
      //   // 默认Object.keys(data[0])作为header
      //   jsonToSheetXlsx({
      //     data,
      //     header: {
      //       date: '日期',
      //       adId: '账户ID',
      //       productName: '产品',
      //       productId: '商品ID',
      //       orderNum: '总订单',
      //       spend: '消耗账户币',
      //       consume: '消耗人民币',
      //       accumulateOrder: '累积订单',
      //       accumulateRmb: '累积人民币',
      //       amount: '产品客单价',
      //       productCost: '产品成本',
      //       packageFee: '包材费',
      //       houseFee: '到仓费用',
      //       expressFee: '快递费',
      //       operateCost: '运营成本',
      //       returnExpress: '退回快递',
      //       returnPackageFee: '退回包装损耗',
      //       signingRate: '签收率',
      //       refusalRate: '拒签率',
      //       signingProfit: '签收每单利润',
      //       refusalCost: '拒签每单成本',
      //       adCritical: '广告临界点',
      //       averageExpressFee: '平均运费',
      //       transformCost: '后台转化成本',
      //       yesterdayProfit: '昨日利润',
      //       accrualProfit: '累积利润',
      //       grossMargin: '毛利率',
      //       operateName: '运营人员',
      //       adName: '广告主名',
      //       shopName: '店铺名称',
      //     },
      //     filename,
      //     merges,
      //     formulas,
      //     write2excelOpts: {
      //       bookType,
      //     },
      //   });
      // }

      async function defaultHeader({ filename, bookType }: ExportModalResult) {
        const date = new Date().getTime();
        const data = new Array(100000).fill({ date: date });
        jsonToSheetXlsx({
          data,
          header: {
            date: '日期',
          },
          filename,
          merges: [],
          formulas: {},
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
