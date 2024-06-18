import ListOfProductsPage from '@/Pages/ListOfProductsPage.vue'
import MainPage from '@/Pages/MainPage.vue'
import NotFoundPage from '@/Pages/NotFoundPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundPage
    },
    {
      path: '/ListOfProducts',
      component: ListOfProductsPage
    }
  ]
})

export default router
