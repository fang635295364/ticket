import Vue from 'vue'
import Router from 'vue-router'

const idx = () => import("../views/index.vue")
const home = () => import("../views/home/home.vue")
const list = () => import("../views/list/list.vue")
const found = () => import("../views/found/found.vue")
const message = () => import("../views/message/message.vue")
const mine = () => import("../views/mine/mine.vue")
const details = () => import("../views/details/details.vue")
<<<<<<< HEAD
const service = () => import("../views/home/components/home-service.vue")
=======
const youhui = () => import("../views/mine/youhui.vue")
const lipinka = () => import("../views/mine/lipinka.vue")
const dingdan = () => import("../views/mine/dingdan.vue")
const geren = () => import("../views/mine/geren.vue")

>>>>>>> yy.9.25


Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/idx", component: idx },
    {
      path: "/home",
      component: home,
      meta: { navShow: true, cname: '一级页面' },
      children: [
        {
          path: 'service',
          component: service,
          meta: { navShow: false, cname: '二级页面' }
        }
      ]
    },
    { path: "/list", component: list },
    { path: "/found", component: found },
    { path: "/message", component: message },
    { path: "/mine", component: mine },
    { path: "/details", component: details },
    { path: "/youhui", component: youhui },
    { path: "/lipinka", component: lipinka },
    { path: "/dingdan", component: dingdan },
    { path: "/geren", component: geren }

  ]
})
