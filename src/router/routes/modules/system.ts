import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import { RoleEnum } from '/@/enums/roleEnum';

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/account',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.demo.system.moduleName'),
  },
  children: [
    {
      path: 'account',
      name: 'AccountManagement',
      meta: {
        title: t('routes.demo.system.account'),
        ignoreKeepAlive: false,
        roles: [RoleEnum.SUPER],
      },
      component: () => import('/@/views/system/account/index.vue'),
    },
    {
      path: 'auth',
      name: 'AuthManagement',
      meta: {
        title: t('routes.demo.system.auth'),
        ignoreKeepAlive: true,
        roles: [RoleEnum.SUPER],
      },
      component: () => import('/@/views/system/auth/index.vue'),
    },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      meta: {
        title: t('routes.demo.system.password'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/system/password/index.vue'),
    },
  ],
};

export default system;
