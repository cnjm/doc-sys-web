import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { RoleEnum } from '/@/enums/roleEnum';

const operate: AppRouteModule = {
  path: '/operate',
  name: 'Operate',
  component: LAYOUT,
  redirect: '/operate/swiper',
  meta: {
    orderNo: 200,
    icon: 'ant-design:qrcode-outlined',
    title: '运营管理',
    roles: [RoleEnum.OPERATE, RoleEnum.OPERATE_VIEW],
  },
  children: [
    // {
    //   path: 'swiper',
    //   name: 'OperateSwiperManagement',
    //   meta: {
    //     title: 'swiper管理',
    //     ignoreKeepAlive: true,
    //     roles: [RoleEnum.OPERATE, RoleEnum.OPERATE_VIEW],
    //   },
    //   component: () => import('/@/views/operate/swiper/index.vue'),
    // },
    // {
    //   path: 'collect',
    //   name: 'OperateCollectManagement',
    //   meta: {
    //     title: '收藏列表',
    //     ignoreKeepAlive: true,
    //     roles: [RoleEnum.OPERATE, RoleEnum.OPERATE_VIEW],
    //   },
    //   component: () => import('/@/views/operate/collect/index.vue'),
    // },
    {
      path: 'order',
      name: 'OperateOrderManagement',
      meta: {
        title: '订单管理',
        ignoreKeepAlive: true,
        // roles: [RoleEnum.OPERATE, RoleEnum.OPERATE_VIEW],
      },
      component: () => import('/@/views/operate/order/index.vue'),
    },
    {
      path: 'ad',
      name: 'OperateAdManagement',
      meta: {
        title: '广告流水',
        ignoreKeepAlive: true,
        // roles: [RoleEnum.OPERATE, RoleEnum.OPERATE_VIEW],
      },
      component: () => import('/@/views/operate/ad/index.vue'),
    },
    // {
    //   path: 'orderDesc',
    //   name: 'OperateOrderDesc',
    //   meta: {
    //     title: '订单详情',
    //     ignoreKeepAlive: true,
    //     hideMenu: true,
    //     roles: [RoleEnum.OPERATE, RoleEnum.OPERATE_VIEW],
    //   },
    //   component: () => import('/@/views/operate/orderDesc/index.vue'),
    // },
  ],
};

export default operate;
