import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { RoleEnum } from '/@/enums/roleEnum';

const goods: AppRouteModule = {
  path: '/goods', //一级访问路径
  name: 'Goods',
  component: LAYOUT,
  redirect: '/goods/goodsList', //一个一级菜单
  meta: {
    orderNo: 300,
    icon: 'ant-design:code-sandbox-outlined',
    title: '商品管理',
    roles: [RoleEnum.GOODS, RoleEnum.GOODS_VIEW],
  },
  children: [
    //子菜单
    {
      path: 'goodsType',
      name: 'GoodsTypeManagement', //路由命名，只要唯一就行
      meta: {
        title: '商品类型',
        ignoreKeepAlive: false,
        roles: [RoleEnum.GOODS, RoleEnum.GOODS_VIEW], //哪些角色可以访问这个页面
      },
      //这个路由对应的页面文件是哪个
      component: () => import('/@/views/goods/goodsType/index.vue'),
    },
    {
      path: 'goodsList',
      name: 'GoodsListManagement',
      meta: {
        title: '商品列表',
        ignoreKeepAlive: false,
        roles: [RoleEnum.GOODS, RoleEnum.GOODS_VIEW],
      },
      component: () => import('/@/views/goods/goodsList/index.vue'),
    },
  ],
};

export default goods;
