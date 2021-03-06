import Vue from 'vue'
import Router from 'vue-router'
import home from  '@/components/home'
import detail from  '@/components/detail/detail'
import setting from '@/components/setting'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path:'/setting',
      name: 'setting',
      component: setting
    }
  ]
})
