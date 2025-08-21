import { createRouter, createWebHistory } from 'vue-router'
import Counter1Page from '@/counter/pages/Counter1Page.vue';
import CounterSetupPage from '@/counter/pages/CounterSetupPage.vue';
import ClientLayout from '@/clients/layout/ClientLayout.vue';
import ListPage from '@/clients/pages/ListPage.vue';
import ClientPage from '@/clients/pages/ClientPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter-1',
      component: Counter1Page
    },
    {
      path: '/counter-2',
      name: 'counter-2',
      component: CounterSetupPage
    },
    {
      path: '/clients',
      name: 'clients',
      component: ClientLayout,
      children: [
        {path: '/clients/list', name: 'list', component: ListPage},
        {path: '/clients/:id', name: 'client-page', component: ClientPage}
      ]
    },
    
  ]
})

export default router
