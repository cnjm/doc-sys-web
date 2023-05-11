<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { goodsTypeFormSchema } from './goodsType.data';
  import { addGoodsType, editGoodsType } from '/@/api/goods/goodsType';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'GoodsTypeModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');
      const rowPid = ref('');

      const { createMessage } = useMessage();

      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 120,
        schemas: goodsTypeFormSchema,
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
          rowPid.value = data.record.pid;
          setFieldsValue({
            ...data.record,
          });
        }

        updateSchema([
          {
            field: 'password',
            ifShow: !unref(isUpdate),
          },
        ]);
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增商品分类' : '编辑商品分类'));
      // 确认提交
      async function handleSubmit() {
        try {
          let isChange = false;
          // 数据格式校验
          const values = await validate();
          setModalProps({ confirmLoading: true });
          values.url = values.url[0];
          values.pid = values.pid || 0;
          // 编辑或添加
          if (unref(isUpdate)) {
            if (values.pid === rowId.value) {
              return createMessage.warn('上级商品分类不能是自身');
            }
            await editGoodsType({ ...values, id: rowId.value });
            isChange = rowPid.value !== values.pid;
          } else {
            await addGoodsType(values);
            isChange = values.pid === 0;
          }
          closeModal();

          if (isChange) {
            updateSchema({
              field: 'pid',
              componentProps: { params: { pid: 0, t: new Date().getTime() } },
            });
          }
          emit('success', { isUpdate: isChange });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
