<template>
  <div :class="[prefixCls, { fullscreen }]">
    <Upload
      name="file"
      multiple
      @change="handleChange"
      :action="uploadUrl"
      :data="objData.qiniu"
      :before-upload="beforeUpload"
      :showUploadList="false"
      accept=".jpg,.jpeg,.gif,.png,.webp"
    >
      <a-button type="primary" v-bind="{ ...getButtonProps }">
        {{ t('component.upload.imgUpload') }}
      </a-button>
    </Upload>
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed, reactive } from 'vue';

  import { Upload } from 'ant-design-vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useGlobSetting } from '/@/hooks/setting';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { RawEditorSettings } from 'tinymce';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { getQiniuToken } from '/@/api/sys/upload';
  import { PreFixEnum } from '/@/enums/preFixEnum';

  const { createMessage } = useMessage();

  export default defineComponent({
    name: 'TinymceImageUpload',
    components: { Upload },
    props: {
      options: {
        type: Object as PropType<Partial<RawEditorSettings>>,
        default: () => {},
      },
      fullscreen: {
        type: Boolean,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['uploading', 'done', 'error'],
    setup(props, { emit }) {
      let uploading = false;

      const { uploadUrl } = useGlobSetting();
      const { t } = useI18n();
      const { prefixCls } = useDesign('tinymce-img-upload');

      const getButtonProps = computed(() => {
        const { disabled } = props;
        return {
          disabled,
        };
      });

      let objData = reactive({ qiniu: { token: '', key: '' } });

      // 上传前校验
      async function beforeUpload(file: File) {
        const { size, name } = file;
        const { maxSize = 1, uploadParams } = props.options;
        // 设置最大值，则判断
        if (maxSize && size / 1024 / 1024 >= maxSize) {
          createMessage.error(t('component.upload.maxSizeMultiple', [maxSize]));
          return false;
        }
        const { token, key } = await getQiniuToken({ fileName: name, ...(uploadParams || {}) });
        objData.qiniu = { token, key };
        return true;
      }

      function handleChange(info: Recordable) {
        const file = info.file;
        const status = file?.status;
        const url = file?.response?.url;
        const name = file?.name;

        if (status === 'uploading') {
          if (!uploading) {
            emit('uploading', name);
            uploading = true;
          }
        } else if (status === 'done') {
          emit('done', name, PreFixEnum.MEDIA_CNJM_TOP + url);
          uploading = false;
        } else if (status === 'error') {
          emit('error');
          uploading = false;
        }
      }

      return {
        prefixCls,
        beforeUpload,
        handleChange,
        uploadUrl,
        objData,
        t,
        getButtonProps,
      };
    },
  });
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-tinymce-img-upload';

  .@{prefix-cls} {
    position: absolute;
    top: 4px;
    right: 10px;
    z-index: 20;

    &.fullscreen {
      position: fixed;
      z-index: 10000;
    }
  }
</style>
