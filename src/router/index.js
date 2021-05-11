import Vue from 'vue'
import Router from 'vue-router'
import profile from '@/views/profile.vue'
import homepage from '@/views/homepage.vue'
import reservation from '@/views/reservation.vue'
import Picktime from '@/views/Picktime.vue'
import Matchresult from '@/views/Matchresult.vue'
import Reservationsuccess from '@/views/Reservationsuccess.vue'
import reserve from '@/views/reserve.vue'
import start from '@/views/start.vue'
import analysis from '@/views/analysis.vue'

Vue.use(Router)

export default new Router({
  // 添加 mode: 'history' 之后将使用 HTML5 history 模式，该模式下没有 # 前缀
  mode: 'history',
  routes: [
    {
      path: '/profile',
      component: profile
    },
    {
      path: '/homepage',
      component: homepage
    },
    {
      path:'/reservation',
      component:reservation
    },
    {
      path: '/Matchresult',
      name: 'Matchresult',
      component: Matchresult
    },
    {
      path: '/Picktime',
      name: 'Picktime',
      component: Picktime
    },
    {
      path: '/Reservationsuccess',
      name: 'Reservationsuccess',
      component: Reservationsuccess
    },
    {
      path: '/reserve',
      component: reserve
    },
    {
      path: '/start',
      component: start
    },
    {
      path: '/analysis',
      component: analysis
    }
  ]
})
