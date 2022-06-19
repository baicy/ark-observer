import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import { Lvlmax } from '@arkobsr/lvlmax'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/lvlmax',
    name: 'Lvlmax',
    component: Lvlmax,
  },
]

export default createRouter({
  routes,
  history: createWebHashHistory(),
})
