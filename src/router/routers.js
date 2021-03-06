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
          icon: '',
          title: 'price'
        },
        component: () =>
          import ('@/view/price/price.vue')
      },
      {
        path: 'list',
        name: 'price_list',
        meta: {
          icon: '',
          title: 'price_list'
        },
        component: () => import('@/view/price/pricelist.vue')
      },
      {
        path: 'price_list1',
        name: 'price_list1',
        meta: {
          icon: '',
          title: 'price_list1'
        },
        component: () => import('@/view/price/pricelist1.vue')
      },
      {
        path: 'CTOConfig',
        name: 'CTO_Config',
        meta: {
          icon: '',
          title: 'CTO_Config'
        },
        component: () =>
          import ('@/view/price/CTO_Config.vue')
      },
      {
        path: 'calculation',
        name: 'calculation',
        meta: {
          icon: '',
          title: 'calculation'
        },
        component: () =>
          import ('@/view/price/Calculation.vue')
      },
      {
        path: 'publish',
        name: 'publish',
        meta: {
          icon: '',
          title: 'publish'
        },
        component: () =>
          import ('@/view/price/Publish.vue')
      },
      {
        path: 'maintenance',
        name: 'maintenance',
        meta: {
          icon: '',
          title: 'Maitenance'
        },
        component: () =>
          import ('@/view/price/Maintenance.vue')
      },
      {
        path: 'CTO_ListPrice',
        name: 'CTO_ListPrice',
        meta: {
          icon: '',
          title: 'CTO_ListPrice'
        },
        component: () =>
          import ('@/view/price/CTO_ListPrice.vue')
      }
    ]
  },
  {
    path: '/excel',
    name: 'excel',
    component: Main,
    children: [
      {
        path: 'excel_PEsale',
        name: 'excel_PEsale',
        meta: {
          icon: '',
          title: 'excel_PEsale'
        },
        component: () => import('@/view/excel/excel_PEsale.vue')
      },
      {
        path: 'excel_PEsale1',
        name: 'excel_PEsale1',
        meta: {
          icon: '',
          title: 'excel_PEsale1'
        },
        component: () => import('@/view/excel/excel_PEsale1.vue')
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
          icon: '',
          title: 'excel_PEsales'
        },
        component: () => import('@/view/excel/excel_PEsales.vue')
      },
       {
        path: 'excel_empty1',
        name: 'excel_empty1',
        meta: {
          icon: '',
          title: 'excel_PEsales1'
        },
        component: () => import('@/view/excel/excel_PEsales1.vue')
      }
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
          icon: '',
          title: 'mtm_index'
        },
        component: () => import('@/view/mtm/index.vue')
      },
      {
        path: 'mtm_mtm',
        name: 'mtm_mtm',
        meta: {
          icon: '',
          title: 'mtm_mtm'
        },
        component: () => import('@/view/mtm/mtm.vue')
      },
      {
        path: 'mtm_Cost',
        name: 'mtm_Cost',
        meta: {
          icon: '',
          title: 'mtm_Cost'
        },
        component: () => import('@/view/mtm/mtmCost.vue')
      },
      {
        path: 'mtm_Cv',
        name: 'mtm_Cv',
        meta: {
          icon: '',
          title: 'mtm_Cv'
        },
        component: () => import('@/view/mtm/mtmCv.vue')
      },
      {
        path: 'mtm_Formula',
        name: 'mtm_Formula',
        meta: {
          icon: '',
          title: 'mtm_Formula'
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
        path: 'clv',
        name: 'iframe_clv',
        meta: {
          icon: '',
          title: 'iframe_clv'
        },
        component: () => import('@/view/iframe/clv.vue')
      },
      {
        path: 'dealTracking',
        name: 'iframe_DealTracking',
        meta: {
          icon: '',
          title: 'iframe_DealTracking'
        },
        component: () => import('@/view/iframe/DealTracking.vue')
      },
      {
        path: 'historicalSummary',
        name: 'iframe_HistoricalSummary',
        meta: {
          icon: '',
          title: 'iframe_HistoricalSummary'
        },
        component: () => import('@/view/iframe/HistoricalSummary.vue')
      },
      {
        path: 'pricingProfitMargin',
        name: 'iframe_PricingProfitMargin',
        meta: {
          icon: '',
          title: 'iframe_PricingProfitMargin'
        },
        component: () => import('@/view/iframe/PricingProfitMargin.vue')
      },
      {
        path: 'financeReview',
        name: 'FinanceReview',
        meta: {
          icon: '',
          title: 'FinanceReview'
        },
        component: () => import('@/view/iframe/FinanceReview.vue')
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Main,
    children: [
      {
        path: 'finDashboard',
        name: 'FinDashboard',
        meta: {
          icon: '',
          title: ''
        },
        component: () => import('@/view/dashboard/FinDashboard.vue')
      },
      {
        path: 'createDashboard',
        name: 'CreateDashboard',
        meta: {
          icon: '',
          title: ''
        },
        component: () => import('@/view/dashboard/CreateDashboard.vue')
      },
      {
        path: 'createNewDashboard',
        name: 'CreateNewDashboard',
        meta: {
          icon: '',
          title: ''
        },
        component: () => import('@/view/dashboard/CreateNewDashboard.vue')
      }
    ]
  }
]
