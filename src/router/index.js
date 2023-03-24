import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../pages/Home.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: "Home",
    component: HomePage,
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
