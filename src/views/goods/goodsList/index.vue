<template>
  <!-- PageWrapper 一个基础的页面组件 -->
  <PageWrapper dense contentFullHeight contentClass="flex">
    <!-- BasicTable 基础功能的table表格组件 -->
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <!-- #toolbar  新增按钮 -->
      <template #toolbar>
        <!-- @click="handleCreate" 绑定点击事件 -->
        <a-button type="primary" @click="handleCreate">新增商品</a-button>
      </template>
      <!-- #img 表格的图片列 -->
      <template #img="{ text }">
        <!-- 用tableimg组件来渲染商品图片 -->
        <TableImg :size="60" :simpleShow="true" :imgList="text" :srcPrefix="MEDIA_CNJM_TOP" />
      </template>
      <!-- #action 操作列 有个编辑商品的图标，绑定handleEdit事件-->
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑商品',
              onClick: handleEdit.bind(null, record),
              auth: [GOODS],
            },
          ]"
        />
      </template>
    </BasicTable>
    <!-- 新增、编辑的弹窗组件 -->
    <GoodsListDrawer @register="registerDrawer" @success="handleSuccess" />
  </PageWrapper>
</template>

<script lang="ts">
  // 引入所有用到的函数，组件，数据等
  import { defineComponent, reactive } from 'vue';

  import { PreFixEnum } from '/@/enums/preFixEnum';

  import { BasicTable, useTable, TableImg, TableAction } from '/@/components/Table';
  import { getGoodsList } from '/@/api/goods/goods';
  import { PageWrapper } from '/@/components/Page';
  import { useDrawer } from '/@/components/Drawer';
  import GoodsListDrawer from './GoodsListDrawer.vue';

  import { columns, searchFormSchema } from './goodsList.data';
  import { RoleEnum } from '/@/enums/roleEnum';

  export default defineComponent({
    name: 'GoodsListManagement',
    components: { BasicTable, PageWrapper, GoodsListDrawer, TableImg, TableAction },
    setup() {
      const GOODS = RoleEnum.GOODS;
      const MEDIA_CNJM_TOP = PreFixEnum.MEDIA_CNJM_TOP;
      const [registerDrawer, { openDrawer }] = useDrawer();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload }] = useTable({
        title: '商品列表',
        api: getGoodsList, // 数据请求的那个接口
        rowKey: 'id', // 唯一的key，是用id这个字段
        columns, // 表格的列数据
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
          console.log('获取点击查询时，查询条件的信息', info);
          return info;
        },
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });
      // 点击新增时
      function handleCreate() {
        // 打开对话框
        openDrawer(true, {
          isUpdate: false,
        });
      }
      // 点击新编辑时
      function handleEdit(record: Recordable) {
        const data = { ...record };
        // 打开对话框 并且把当前行的数据传递过去
        openDrawer(true, {
          record: data,
          isUpdate: true,
        });
      }
      // 弹框每次成功新增或者修改，就从新获取列表数据
      function handleSuccess() {
        reload();
      }

      return {
        GOODS,
        registerTable,
        searchInfo,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleSuccess,
        MEDIA_CNJM_TOP,
      };
    },
  });
</script>
