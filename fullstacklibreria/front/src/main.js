import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios' 
import VueAxios from 'vue-axios' 

Vue.use(VueAxios, axios) 

axios.defaults.baseURL = 'http://localhost:3000/api';

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')



