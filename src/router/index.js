import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FoodDetail from '../views/Food_detail.vue'
import Mall from '../views/Mall.vue'
import MallDetail from '../views/Mall_detail.vue'
import Profile from '../views/Profile.vue'
import Collection from '../views/Collection.vue'
import Cart from '../views/Cart.vue'
Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // children:[
    //   {path:'/xxx',component:x...}
    // ]
  },
  {
    path:'/FoodDetail',
    name:'FoodDetail',
    component :FoodDetail
  },
  {
    path:'/Mall',
    name:'Mall',
    component: Mall
  },
  {
    path:'/MallDetail',
    name:'MallDetail',
    component:MallDetail
  },
  {
    path:'/Profile',
    name:'Profile',
    component:Profile
  },
  {
    path:'/Collection',
    name:'Collection',
    component:Collection
  },
  {
    path:'/Cart',
    name:'Cart',
    component:Cart
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
