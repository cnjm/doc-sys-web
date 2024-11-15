<template>
  <PageWrapper dense contentFullHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #tableTitle>
        <ImpExcel @success="loadDataSuccess" dateFormat="YYYY-MM-DD">
          <a-button class="m-3"> 导入Excel </a-button>
        </ImpExcel>
        <!-- <a-button @click="openModal"> 导出统计数据 </a-button> -->
        <a-button class="m-3" @click="delAds"> 清除 </a-button>
      </template>

      <template #img="{ text }">
        <TableImg :size="60" :simpleShow="true" :imgList="text" />
      </template>
    </BasicTable>
    <OperateOrderModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { BasicTable, useTable, TableImg } from '/@/components/Table';
  import { getAdList, importAds, delAdListAll } from '/@/api/operate/ad';
  import { ImpExcel, ExcelData } from '/@/components/Excel';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  import OperateOrderModal from './OperateOrderModal.vue';

  import { columns, searchFormSchema } from './order.data';

  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'OperateOrderManagement',
    components: {
      BasicTable,
      PageWrapper,
      OperateOrderModal,
      TableImg,
      ImpExcel,
    },
    setup() {
      const OPERATE = RoleEnum.OPERATE;
      const [registerModal, { openModal }] = useModal();
      const { createConfirm } = useMessage();
      const searchInfo = reactive<Recordable>({});
      // const { push } = useRouter();
      const [registerTable, { reload }] = useTable({
        title: '广告流水列表',
        api: getAdList,
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
      });

      function handleDeliver(record: Recordable) {
        const data = { ...record };
        openModal(true, {
          record: data,
          isUpdate: true,
        });
      }

      async function delAds() {
        createConfirm({
          iconType: 'warning',
          title: '温馨提示',
          content: '确认删除吗？',
          onOk: async () => {
            await delAdListAll({});
            reload();
          },
        });
      }

      function handleSuccess() {
        reload();
      }

      async function loadDataSuccess(excelDataList: ExcelData[]) {
        const columns: any[] = [];
        let reg = /cy|yt|e/g;
        let matchReg = /\d{18}/g;

        for (const excelData of excelDataList) {
          const { results } = excelData;
          for (const item of results) {
            if (reg.test(item['广告主名'])) {
              const ids = item['广告主名'].match(matchReg);
              const operates = item['广告主名'].match(reg);
              if (Array.isArray(ids) && ids.length > 0) {
                columns.push({
                  productId: ids[0],
                  operateName: operates[0],
                  adName: item['广告主名'],
                  adId: item['广告主ID'],
                  spend: item['花费'],
                });
              }
            }
          }
        }
        await importAds({ ads: columns });
        reload();
      }

      return {
        registerTable,
        searchInfo,
        registerModal,
        handleDeliver,
        delAds,
        handleSuccess,
        OPERATE,
        loadDataSuccess,
        openModal,
      };
    },
  });
</script>
