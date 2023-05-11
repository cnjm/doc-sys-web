import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { RoleEnum } from '/@/enums/roleEnum';

const user: AppRouteModule = {
  path: '/user',
  name: 'User',
  component: LAYOUT,
  redirect: '/user/userList',
  meta: {
    orderNo: 100,
    icon: 'ant-design:user-outlined',
    title: '用户管理',
    roles: [RoleEnum.USER, RoleEnum.USER_VIEW],
  },
  children: [
    {
      path: 'userList',
      name: 'UserListManagement',
      meta: {
        title: '用户列表',
        ignoreKeepAlive: false,
        roles: [RoleEnum.USER, RoleEnum.USER_VIEW],
      },
      component: () => import('/@/views/user/userList/index.vue'),
    },
    {
      path: 'address',
      name: 'UserAddressManagement',
      meta: {
        title: '用户地址',
        ignoreKeepAlive: false,
        roles: [RoleEnum.USER, RoleEnum.USER_VIEW],
      },
      component: () => import('/@/views/user/address/index.vue'),
    },
  ],
};

export default user;
