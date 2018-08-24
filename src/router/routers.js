import Main from '@/view/main'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存1
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
    children: [{
        path: 'price_index',
        name: 'price_index',
        meta: {
          icon: '_price',
          title: 'price'
        },
        component: () =>
          import ('@/view/price/price.vue')
      },
      {
        path: 'Portal',
        name: 'Portal',
        meta: {
          icon: 'Portal',
          title: 'Portal'
        },
        component: () =>
          import ('@/view/price/Portal.vue')
      },
      {
        path: 'CTO_Config',
        name: 'CTO_Config',
        meta: {
          icon: 'CTO_Config',
          title: 'CTO_Config'
        },
        component: () =>
          import ('@/view/price/CTO_Config.vue')
      },
      {
        path: 'CTO_ListPrice',
        name: 'CTO_ListPrice',
        meta: {
          icon: 'CTO_ListPrice',
          title: 'CTO_ListPrice'
        },
        component: () =>
          import ('@/view/price/CTO_ListPrice.vue')
      },
      {
        path: 'Exec_Summary',
        name: 'Exec_Summary',
        meta: {
          icon: 'Exec_Summary',
          title: 'Exec_Summary'
        },
        component: () =>
          import ('@/view/price/Exec_Summary.vue')
      },
      {
        path: 'Pricing_Simulation',
        name: 'Pricing_Simulation',
        meta: {
          icon: 'Pricing_Simulation',
          title: 'Pricing_Simulation'
        },
        component: () =>
          import ('@/view/price/Pricing_Simulation.vue')
      }
    ]
  },
  {
    path: '/price_lists',
    name: 'price_lists',
    component: Main,
    children: [
      {
        path: 'price_list',
        name: 'price_list',
        meta: {
          icon: '_price',
          title: 'price_list'
        },
        component: () => import('@/view/price_list/index/index.vue')
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
      },
       {
        path: 'excel_empty',
        name: 'excel_empty',
        meta: {
          icon: 'excel_PEsale',
          title: 'excel_PEsale'
        },
        component: () => import('@/view/excel/excel_PEsales.vue')
      },
    ]
  },
  {
    path: '/mtm',
    name: 'mtm',
    component: Main,
    children: [
      {
        path: 'mtm_index',
        name: 'mtm_index',
        meta: {
          icon: 'mtm_index',
          title: 'mtm_index'
        },
        component: () => import('@/view/mtm/index.vue')
      },
      {
        path: 'mtm_mtm',
        name: 'mtm_mtm',
        meta: {
          icon: 'mtm_mtm',
          title: 'mtm_mtm'
        },
        component: () => import('@/view/mtm/mtm.vue')
      },
      {
        path: 'mtm_Cost',
        name: 'mtm_Cost',
        meta: {
          icon: 'mtm_Cost',
          title: 'mtm_Cost'
        },
        component: () => import('@/view/mtm/mtmCost.vue')
      },
      {
        path: 'mtm_mtmCv',
        name: 'mtm_mtmCv',
        meta: {
          icon: 'mtm_mtmCv',
          title: 'mtm_mtmCv'
        },
        component: () => import('@/view/mtm/mtmCv.vue')
      },
      {
        path: 'mtm_mtmFormula',
        name: 'mtm_mtmFormula',
        meta: {
          icon: 'mtm_mtmFormula',
          title: 'mtm_mtmFormula'
        },
        component: () => import('@/view/mtm/mtmFormula.vue')
      }
    ]
  },
  {
    path: '/iframe',
    name: 'iframe',
    component: Main,
    children: [
      {
        path: 'iframe_clv',
        name: 'iframe_clv',
        meta: {
          icon: 'iframe_clv',
          title: 'iframe_clv'
        },
        component: () => import('@/view/iframe/clv.vue')
      },
      {
        path: 'iframe_DealTracking',
        name: 'iframe_DealTracking',
        meta: {
          icon: 'iframe_DealTracking',
          title: 'iframe_DealTracking'
        },
        component: () => import('@/view/iframe/DealTracking.vue')
      },
      {
        path: 'iframe_HistoricalSummary',
        name: 'iframe_HistoricalSummary',
        meta: {
          icon: 'iframe_HistoricalSummary',
          title: 'iframe_HistoricalSummary'
        },
        component: () => import('@/view/iframe/HistoricalSummary.vue')
      },
      {
        path: 'iframe_PricingProfitMargin',
        name: 'iframe_PricingProfitMargin',
        meta: {
          icon: 'iframe_PricingProfitMargin',
          title: 'iframe_PricingProfitMargin'
        },
        component: () => import('@/view/iframe/PricingProfitMargin.vue')
      },
      {
        path: 'iframe_FinanceReview',
        name: 'iframe_FinanceReview',
        meta: {
          icon: 'iframe_FinanceReview',
          title: 'iframe_FinanceReview'
        },
        component: () => import('@/view/iframe/FinanceReview.vue')
      }
    ]
  }
]
