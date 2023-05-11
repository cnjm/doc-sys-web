<template>
  <PageWrapper dense contentFullHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #img="{ text }">
        <TableImg :size="60" :simpleShow="true" :imgList="text" :srcPrefix="MEDIA_CNJM_TOP" />
      </template>
      <template #avatar="{ text }">
        <TableImg :size="60" :simpleShow="true" :imgList="text" />
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { PreFixEnum } from '/@/enums/preFixEnum';

  import { BasicTable, useTable, TableImg } from '/@/components/Table';
  import { getCollectList } from '/@/api/operate/collect';
  import { PageWrapper } from '/@/components/Page';

  import { columns, searchFormSchema } from './collect.data';

  export default defineComponent({
    name: 'OperateCollectManagement',
    components: { BasicTable, PageWrapper, TableImg },
    setup() {
      const MEDIA_CNJM_TOP = PreFixEnum.MEDIA_CNJM_TOP;
      const searchInfo = reactive<Recordable>({});
      const [registerTable, {}] = useTable({
        title: '收藏列表',
        api: getCollectList,
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

      return {
        registerTable,
        searchInfo,
        MEDIA_CNJM_TOP,
      };
    },
  });
</script>
