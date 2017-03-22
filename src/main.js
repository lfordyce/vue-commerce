// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import ProductCatalog from './components/ProductCatalog'
import ManageProducts from './components/ManageProducts'

Vue.use(VueRouter)
Vue.use(VueMaterial)

Vue.config.productionTip = false

Vue.material.registerTheme('default', {
  primary: 'cyan',
  accent: 'red',
  warn: 'red',
  background: 'white'
})

const routes = [
  { path: '/home', alias: '/', component: ProductCatalog },
  { path: '/mangage-products', component: ManageProducts }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
