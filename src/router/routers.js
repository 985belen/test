import Main from '@/view/main'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */

export default [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          hideInMenu: true,
          notCache: true
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/price',
    name: 'price',
    component: Main,
    children: [
      {
        path: 'price_index',
        name: 'price_index',
        meta: {
          icon: '_price',
          title: 'price'
        },
        component: () => import('@/view/price/price.vue')
      }
    ]
  },
  {
    path: '/excel',
    name: 'excel',
    component: Main,
    children: [
      {
        path: 'excel_newpe',
        name: 'excel_newpe',
        meta: {
          icon: 'excel_newpe',
          title: 'excel_newpe'
        },
        component: () => import('@/view/excel/excel_newpe.vue')
      },
      {
        path: 'excel_PEsale',
        name: 'excel_PEsale',
        meta: {
          icon: 'excel_PEsale',
          title: 'excel_PEsale'
        },
        component: () => import('@/view/excel/excel_PEsale.vue')
      },
      {
        path: 'excel_PEpricer',
        name: 'excel_PEpricer',
        meta: {
          icon: 'excel_PEpricer',
          title: 'excel_PEpricer'
        },
        component: () => import('@/view/excel/excel_PEpricer.vue')
      },
      {
        path: 'excel_importTransaction',
        name: 'excel_importTransaction',
        meta: {
          icon: 'excel_importTransaction',
          title: 'excel_importTransaction'
        },
        component: () => import('@/view/excel/importTransaction.vue')
      },
      {
        path: 'excel_listpage',
        name: 'excel_listpage',
        meta: {
          icon: 'excel_listpage',
          title: 'excel_listpage'
        },
        component: () => import('@/view/excel/excel_listpage.vue')
      }
    ]
  }
]
