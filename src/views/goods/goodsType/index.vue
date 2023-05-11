<template>
  <PageWrapper dense contentFullHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增商品分类</a-button>
      </template>

      <template #img="{ text }">
        <TableImg :size="60" :simpleShow="true" :imgList="text" :srcPrefix="MEDIA_CNJM_TOP" />
      </template>

      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑商品分类',
              onClick: handleEdit.bind(null, record),
              auth: [GOODS],
            },
          ]"
        />
      </template>
    </BasicTable>
    <GoodsTypeModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { PreFixEnum } from '/@/enums/preFixEnum';

  import { BasicTable, useTable, TableImg, TableAction } from '/@/components/Table';
  import { getGoodsTypeList } from '/@/api/goods/goodsType';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  import GoodsTypeModal from './GoodsTypeModal.vue';

  import { columns, searchFormSchema } from './goodsType.data';
  import { RoleEnum } from '/@/enums/roleEnum';

  export default defineComponent({
    name: 'GoodsTypeListManagement',
    components: { BasicTable, PageWrapper, GoodsTypeModal, TableImg, TableAction },
    setup() {
      const GOODS = RoleEnum.GOODS;
      const MEDIA_CNJM_TOP = PreFixEnum.MEDIA_CNJM_TOP;
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      // 使用table组件
      const [registerTable, { reload, getForm }] = useTable({
        title: '商品类型列表',
        api: getGoodsTypeList,
        rowKey: 'id',
        columns,
        formConfig: {
          labelWidth: 80,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
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
      // 新增
      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }
      // 编辑
      function handleEdit(record: Recordable) {
        const data = { ...record };
        openModal(true, {
          record: data,
          isUpdate: true,
        });
      }

      function handleSuccess({ isUpdate }) {
        if (isUpdate) {
          const formObj = getForm();
          formObj.updateSchema({
            field: 'pid',
            componentProps: { params: { pid: 0, t: new Date().getTime() } },
          });
        }

        reload();
      }

      return {
        GOODS,
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
