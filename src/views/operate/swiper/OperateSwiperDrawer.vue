<template>
  <BasicModal v-bind="$attrs" @register="registerDrawer" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { swiperFormSchema } from './swiper.data';
  import { addSwiper, editSwiper } from '/@/api/operate/swiper';
  import { getGoodsListByType } from '/@/api/goods/goods';

  export default defineComponent({
    name: 'OperateSwiperDrawer',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');

      const [registerForm, { setFieldsValue, resetFields, validate, updateSchema }] = useForm({
        labelWidth: 120,
        schemas: swiperFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerDrawer, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          Object.keys(data.record).forEach((item) => {
            if (!data.record[item]) {
              delete data.record[item];
            }
          });
          rowId.value = data.record.id;
          setFieldsValue({
            ...data.record,
          });
        }
        updateSchema({
          field: 'goods_id',
          componentProps: ({ formModel }) => {
            return {
              api: getGoodsListByType,
              labelField: 'name',
              valueField: 'id',
              params: {
                type_id: formModel.type_id || 0,
              },
            };
          },
        });
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增轮播' : '编辑轮播'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          console.log(values);
          // 编辑或添加
          if (unref(isUpdate)) {
            await editSwiper({ ...values, id: rowId.value });
          } else {
            await addSwiper(values);
          }
          closeModal();
          emit('success', { isUpdate: true });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerDrawer, registerForm, getTitle, handleSubmit };
    },
  });
</script>
