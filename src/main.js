import Vue from 'vue'
import App from './App.vue'

import pinia from './pinia'

import './assets/main.css'
import vuetify from './plugins/vuetify'

import router from './router'

new Vue({
  pinia,
  vuetify,
  router,
  render: (h) => h(App)
}).$mount('#app')
