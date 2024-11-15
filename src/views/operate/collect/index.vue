<template>
  <PageWrapper dense contentFullHeight contentClass="flex">
    <ImpExcel @success="loadDataSuccess" dateFormat="YYYY-MM-DD">
      <a-button class="m-3"> 导入Excel </a-button>
    </ImpExcel>
    <a-button @click="openModal" class="m-3"> 导出统计数据 </a-button>
    <a-button class="m-3" @click="delAds"> 清除 </a-button>
    <ExpExcelModal @register="registerModal" @success="defaultHeader" />

    <div>当前导入数据数量：{{ dataLen }}条</div>
  </PageWrapper>
</template>
<script lang="ts">
  import { computed, defineComponent, reactive, ref } from 'vue';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { useRouter } from 'vue-router';
  import { BasicTable, useTable, TableImg, TableAction } from '/@/components/Table';
  import {
    getStatisticsOrderList,
    getStatisticsOrderListAll,
    importStatisticsOrder,
    receivedGoods,
    delStatisticsOrderListAll,
  } from '/@/api/operate/order';
  // import { getAdListAll } from '/@/api/operate/ad';
  import {
    ImpExcel,
    ExcelData,
    ExportModalResult,
    jsonToSheetXlsx,
    ExpExcelModal,
  } from '/@/components/Excel';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  // import OperateOrderModal from './OperateOrderModal.vue';

  import { columns, searchFormSchema } from './collect.data';
  import { PageEnum } from '/@/enums/pageEnum';
  // import { data as datae } from '../../demo/excel/data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import dayjs from 'dayjs';

  export default defineComponent({
    name: 'OperateOrderManagement',
    components: {
      BasicTable,
      PageWrapper,
      ExpExcelModal,
      TableImg,
      TableAction,
      ImpExcel,
    },
    setup() {
      const excelData = ref();
      const OPERATE = RoleEnum.OPERATE;
      const [registerModal, { openModal }] = useModal();
      const { createConfirm } = useMessage();
      const searchInfo = reactive<Recordable>({});
      const { push } = useRouter();
      const [registerTable, { reload }] = useTable({
        title: '订单列表',
        rowKey: 'id',
        formConfig: {
          labelWidth: 80,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        showIndexColumn: false,
        useSearchForm: false,
        showTableSetting: false,
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

      const dataLen = computed(() => {
        return excelData.value?.length || 0;
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
            excelData.value = [];
          },
        });
      }

      function handleSuccess() {
        reload();
      }

      async function loadDataSuccess(excelDataList: ExcelData[]) {
        let columns: any[] = [];
        for (const excelData of excelDataList) {
          const { results } = excelData;
          console.log(results);
          columns.push(
            ...results.map((item) => {
              return {
                shopName: item['店铺'],
                goodName: item['发货内容'],
                time: dayjs(item['发货时间']).format('MM月DD日'),
              };
            }),
          );
        }
        excelData.value = columns;
        // console.log(columns);
        // await importStatisticsOrder({ orders: columns });
        // reload();
      }

      async function defaultHeader({ filename, bookType }: ExportModalResult) {
        // const { items } = await getStatisticsOrderListAll({});

        let obj = {};

        let data: any[] = [];
        excelData.value.forEach((element) => {
          if (element.time in obj) {
            if (element.shopName in obj[element.time]) {
              if (element.goodName in obj[element.time][element.shopName]) {
                obj[element.time][element.shopName][element.goodName] += 1;
              } else {
                obj[element.time][element.shopName][element.goodName] = 1;
              }
            } else {
              obj[element.time][element.shopName] = {
                [element.goodName]: 1,
              };
            }
          } else {
            obj[element.time] = {
              [element.shopName]: {
                [element.goodName]: 1,
              },
            };
          }
        });
        console.log(obj);
        for (const key in obj) {
          for (const k in obj[key]) {
            for (const e in obj[key][k]) {
              data.push({
                date: key,
                shop: k,
                productName: e,
                num: obj[key][k][e],
              });
            }
          }
        }
        data.sort((a, b) => {
          if (a.date === b.date) {
            if (a.shop === b.shop) {
              if (a.productName > b.productName) {
                return 1;
              } else {
                return -1;
              }
            } else {
              if (a.shop > b.shop) {
                return 1;
              } else {
                return -1;
              }
            }
          } else {
            if (a.date > b.date) {
              return 1;
            } else {
              return -1;
            }
          }
        });

        let formulas: any = {};
        let merges: any[] = [];
        // console.log(merges);
        // return;
        // 默认Object.keys(data[0])作为header
        jsonToSheetXlsx({
          data,
          header: {
            date: '日期',
            shop: '店铺',
            productName: '产品',
            num: '数量',
          },
          filename,
          merges,
          formulas,
          write2excelOpts: {
            bookType,
          },
        });
      }

      return {
        dataLen,
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
