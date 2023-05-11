<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="800px"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { goodsFormSchema } from './goodsList.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { TreeItem } from '/@/components/Tree';

  import { addGoods, editGoods } from '/@/api/goods/goods';
  import { getGoodsTypeListByPidOptions } from '/@/api/goods/goodsType';

  export default defineComponent({
    name: 'GoodsListDrawer',
    components: { BasicDrawer, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');
      const treeData = ref<TreeItem[]>([]);

      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 90,
        schemas: goodsFormSchema,
        showActionButtonGroup: false,
      });

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        resetFields();
        setDrawerProps({ confirmLoading: false });
        // 需要在setFieldsValue之前先填充treeData，否则Tree组件可能会报key not exist警告
        // if (unref(treeData).length === 0) {
        //   treeData.value = (await getMenuList()) as any as TreeItem[];
        // }
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          rowId.value = data.record.id;
          const dataRecord = data.record;
          dataRecord.goods_types = dataRecord.goods_types.map((item) => item.id);
          dataRecord.price = dataRecord.price / 100;

          setFieldsValue({
            ...dataRecord,
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增商品' : '编辑商品'));

      async function handleSubmit() {
        try {
          const values = await validate();
          values.urls = values.urls.join(',');
          console.log(values);
          setDrawerProps({ confirmLoading: true });
          if (!unref(isUpdate)) {
            await addGoods(values);
          } else {
            values.id = rowId.value;
            await editGoods(values);
          }
          closeDrawer();
          emit('success');
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }

      return {
        registerDrawer,
        registerForm,
        getTitle,
        handleSubmit,
        getGoodsTypeListByPidOptions,
        treeData,
      };
    },
  });
</script>
