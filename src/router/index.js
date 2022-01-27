import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import list from '../views/list.vue'
import file from '../views/file.vue'



const routes = [
  {
    path: '/',
    component: list
  },
  {
    path: '/login',
    name: '登入',
    component: login
  },
  {
    path: '/list',
    name: '人員列表',
    component: list
  },
  {
    path: '/file',
    name: '上傳檔案',
    component: file
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
