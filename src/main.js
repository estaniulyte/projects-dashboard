import Vue from 'vue'
import App from './App.vue'

import './assets/main.css'
import vuetify from './plugins/vuetify'

import router from './router'

new Vue({
  vuetify,
  router,
  render: (h) => h(App)
}).$mount('#app')
