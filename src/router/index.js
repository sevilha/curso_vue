import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const Credentials = () => import('../views/Credentials/index.vue')
const FeedBacks = () => import('../views/Feedbacks/index.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/credentials',
    name: 'Credentails',
    component: Credentials,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/feedbacks',
    name: 'feedbacks',
    component: FeedBacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
