import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import Cart from '../pages/cart/Cart.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
   
  ]
})
