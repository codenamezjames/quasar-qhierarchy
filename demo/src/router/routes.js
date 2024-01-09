
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/example-zhierarchy-basic', component: () => import('pages/BasicExample') },
      { path: '/example-zhierarchy-custom', component: () => import('pages/CustomExample') },
      { path: '/example-zhierarchy-slot-demo', component: () => import('pages/SlotDemoExample') },
      { path: '/example-zhierarchy-footer-slot-demo', component: () => import('pages/FooterSlotDemoExample.vue') },
      { path: '/example-zhierarchy-footer-demo', component: () => import('pages/FooterDemoExample.vue') },
      { path: '/example-zhierarchy-header-slot-demo', component: () => import('pages/HeaderSlotDemoExample.vue') },
      { path: '/example-zhierarchy-row-click-demo', component: () => import('pages/RowClickDemoExample.vue') },
      { path: '/example-zhierarchy-default-expand-all', component: () => import('pages/ExpandAllExample') },
      { path: '/example-zhierarchy-filter-demo', component: () => import('pages/FilterDemoExample') },
      { path: '/sponsor', component: () => import('pages/Sponsor') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
