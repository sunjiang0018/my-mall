import Vue from 'vue'
import VueRouter from 'vue-router'

const Cart = () => import('../views/cart/cart')
const Home = () => import('../views/home/home')
const Profile = () => import('../views/profile/profile')
const Category = () => import('../views/category/category')

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/cart',
      component: Cart
    }

  ],
  mode: 'history'
})
