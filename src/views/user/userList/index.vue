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
  import { getUserList } from '/@/api/user/userList';
  import { PageWrapper } from '/@/components/Page';

  import { columns, searchFormSchema } from './userList.data';

  export default defineComponent({
    name: 'UserListManagement',
    components: { BasicTable, PageWrapper, TableImg },
    setup() {
      const searchInfo = reactive<Recordable>({});
      const [registerTable, {}] = useTable({
        title: '平台用户列表',
        api: getUserList,
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
      };
    },
  });
</script>
