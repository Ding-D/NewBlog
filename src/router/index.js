import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    redirect: '/articleListHome', // 重定向
    children: [
      { path: '/articleListHome', component: () => import('../components/article/article-home.vue') },
      { path: '/cssRevelationLight', component: () => import('../components/article/articleList/css-revelation-light.vue') }
      // { path: '/cssFaultTypeBtn', component: cssFaultTypeBtn }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
