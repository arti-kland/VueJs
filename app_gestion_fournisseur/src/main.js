import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import SuppliersList from './components/SuppliersList.vue'
import SuppliersMap from './components/SuppliersMap.vue'
import Suppliers from './components/Suppliers.vue'
// import HelloWorld from './components/HelloWorld.vue'
Vue.use(VueRouter)
Vue.config.productionTip = true

const router = new VueRouter({

  mode: 'history',
  methods: {
    // showData: function(){
    //
    // }
    },

  routes: [{

    path: '/list',

    component: SuppliersList
  }, {

    path: '/map',

    component: SuppliersMap
  },{

    path: '/suppliers',

    component: Suppliers
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
