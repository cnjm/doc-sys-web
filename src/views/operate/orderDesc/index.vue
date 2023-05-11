<template>
  <PageWrapper title="订单详情" contentBackground>
    <Description
      size="middle"
      title="用户信息"
      :bordered="false"
      :column="3"
      :data="reactiveData.userData"
      :schema="userSchema"
    />
    <a-divider />
    <Description
      size="middle"
      title="订单信息"
      :bordered="false"
      :column="3"
      :data="reactiveData.orderData"
      :schema="orderSchema"
    />
    <a-divider />

    <BasicTable @register="registerRefundTable">
      <template #img="{ text }">
        <TableImg :size="60" :simpleShow="true" :imgList="text" :srcPrefix="MEDIA_CNJM_TOP" />
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { useRouter } from 'vue-router';
  import { Description } from '/@/components/Description/index';
  import { BasicTable, useTable, TableImg } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { Divider } from 'ant-design-vue';
  import { getOrderById, getOrderCartById } from '/@/api/operate/orderDesc';

  import { userSchema, orderSchema, goodsSchema } from './data';
  import { PreFixEnum } from '/@/enums/preFixEnum';
  export default defineComponent({
    components: { Description, BasicTable, PageWrapper, TableImg, [Divider.name]: Divider },
    setup() {
      const MEDIA_CNJM_TOP = PreFixEnum.MEDIA_CNJM_TOP;
      const router = useRouter();
      const id: any = router.currentRoute.value.query.id; //获取参数
      const reactiveData = reactive<any>({ userData: {}, orderData: {}, goodsData: [] });

      const [registerRefundTable] = useTable({
        title: '订单商品',
        api: getOrderCartById,
        rowKey: 'id',
        columns: goodsSchema,
        pagination: false,
        showIndexColumn: false,
        scroll: { y: 300 },
        showSummary: true,
        summaryFunc: handleSummary,
      });

      getOrderById({ id }).then((res) => {
        const {
          id,
          status,
          total_price,
          name,
          phone,
          address,
          express_no,
          create_at,
          update_at,
          userData,
          carts,
        } = res;
        reactiveData.userData = userData;
        reactiveData.orderData = {
          id,
          status,
          total_price,
          name,
          phone,
          address,
          express_no,
          create_at,
          update_at,
        };
        reactiveData.goodsData = carts;
      });

      function handleSummary(tableData: any[]) {
        let goods_num = 0;
        let total_price = 0;
        tableData.forEach((item) => {
          goods_num += item.goods_num;
          total_price += item.total_price;
        });
        return [
          {
            id: '总计',
            goods_num,
            total_price,
          },
        ];
      }

      return {
        MEDIA_CNJM_TOP,
        registerRefundTable,
        reactiveData,
        userSchema,
        orderSchema,
      };
    },
  });
</script>
<style lang="less" scoped>
  .desc-wrap {
    padding: 16px;
    background-color: @component-background;
  }
</style>
