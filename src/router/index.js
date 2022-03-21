import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/Signup.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue'),
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue'),
  },
  {
    path: '/product/:uname',
    name: 'product',
    component: () => import('../components/ProductList.vue'),
  },
  {
    path: '/edit/:uname,:data',
    name: 'edit',
    component: () => import('../components/EditProduct.vue'),
  },
  {
    path: '/add/:uname',
    name: 'add',
    component: () => import('../components/AddProduct.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
