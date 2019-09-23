import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index.vue'

const idx = () => import("../views/index.vue")
const home= () => import("../views/home/home.vue")
const list = () => import("../views/list/list.vue")
const found = () => import("../views/found/found.vue")
const message = () => import("../views/message/message.vue")
const mine = () => import("../views/mine/mine.vue")
const details = () => import("../views/details/details.vue")



Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", redirect: "/idx" },
    { path:"/idx",component:idx},
    { path:"/list",component:list},
    { path:"/found",component:found},
    { path:"/message",component:message},
    { path:"/mine",component:mine},
    { path:"/details",component:details}

  ]
})
