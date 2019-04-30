import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Suppliers from './components/SuppliersList.vue'
import SuppliersMap from './components/SuppliersMap.vue'
import Supplier from './components/Supplier.vue'
import * as VueGoogleMaps from 'vue2-google-maps'


// import HelloWorld from './components/HelloWorld.vue'
Vue.use(VueRouter)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB_rUFcZii_mHfRgddtI0e_lgK6cQj7fG4',
     }
})

Vue.config.productionTip = true

const router = new VueRouter({

  mode: 'history',

  routes: [{

    path: '/list',

    component: Suppliers
  }, {

    path: '/map',

    component: SuppliersMap
  },{

    path: '/suppliers',

    component: Supplier
  }
  // ,  {
  //   path: '*',
  //   redirect: '/helloWorld'
  // }
  ]
})

new Vue({
  //el: '#app',

  router,
  render: h => h(App)
}).$mount('#app')
