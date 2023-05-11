<template>
  <PageWrapper dense contentFullHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #avatar="{ text }">
        <TableImg :size="60" :simpleShow="true" :imgList="text" />
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { BasicTable, useTable, TableImg } from '/@/components/Table';
  import { getAddressList } from '/@/api/user/adress';
  import { PageWrapper } from '/@/components/Page';

  import { columns, searchFormSchema } from './address.data';

  export default defineComponent({
    name: 'UserAddressManagement',
    components: { BasicTable, PageWrapper, TableImg },
    setup() {
      const searchInfo = reactive<Recordable>({});
      const [registerTable, {}] = useTable({
        title: '用户地址列表',
        api: getAddressList,
        rowKey: 'id',
        columns,
        formConfig: {
          labelWidth: 100,
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
      };
    },
  });
</script>
