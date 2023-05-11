<template>
  <PageWrapper dense contentFullHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增</a-button>
      </template>

      <template #img="{ text }">
        <TableImg :size="60" :simpleShow="true" :imgList="text" :srcPrefix="MEDIA_CNJM_TOP" />
      </template>

      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑',
              onClick: handleEdit.bind(null, record),
              auth: [OPERATE],
            },
          ]"
        />
      </template>
    </BasicTable>
    <OperateSwiperDrawer @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { PreFixEnum } from '/@/enums/preFixEnum';

  import { BasicTable, useTable, TableImg, TableAction } from '/@/components/Table';
  import { getSwiperList } from '/@/api/operate/swiper';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  import OperateSwiperDrawer from './OperateSwiperDrawer.vue';
  import { columns, searchFormSchema } from './swiper.data';
  import { RoleEnum } from '/@/enums/roleEnum';

  export default defineComponent({
    name: 'OperateSwiperManagement',
    components: { BasicTable, PageWrapper, OperateSwiperDrawer, TableImg, TableAction },
    setup() {
      const OPERATE = RoleEnum.OPERATE;
      const MEDIA_CNJM_TOP = PreFixEnum.MEDIA_CNJM_TOP;
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload }] = useTable({
        title: '轮播列表',
        api: getSwiperList,
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

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        const data = { ...record };
        console.log(data);
        openModal(true, {
          record: data,
          isUpdate: true,
        });
      }

      function handleSuccess() {
        reload();
      }

      return {
        OPERATE,
        registerTable,
        searchInfo,
        registerModal,
        handleCreate,
        handleEdit,
        handleSuccess,
        MEDIA_CNJM_TOP,
      };
    },
  });
</script>
