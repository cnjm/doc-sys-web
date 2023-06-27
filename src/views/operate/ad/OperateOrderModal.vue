<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { orderFormSchema } from './order.data';
  import { deliverGoods } from '/@/api/operate/order';

  export default defineComponent({
    name: 'OperateOrderDrawer',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');

      const [registerForm, { setFieldsValue, resetFields, validate }] = useForm({
        labelWidth: 120,
        schemas: orderFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
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
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '标记发货' : '标记发货'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          console.log(values);
          // 标记发货
          await deliverGoods({ ...values, id: rowId.value });
          closeModal();
          emit('success', { isUpdate: true });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
