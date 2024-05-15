import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/pages/index.vue'
import SearchPage from '@/views/SearchPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
