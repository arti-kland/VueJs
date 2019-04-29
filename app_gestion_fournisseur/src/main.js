import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Suppliers from './components/SuppliersList.vue'
import SuppliersMap from './components/SuppliersMap.vue'
import Supplier from './components/Supplier.vue'
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
