import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap-icons/font/bootstrap-icons.css';
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-loading-overlay/dist/vue-loading.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
