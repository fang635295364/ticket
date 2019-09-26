import Vue from 'vue'
import Router from 'vue-router'

import mintUi from 'mint-ui'
import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Cell } from 'mint-ui';
import "../../node_modules/mint-ui/lib/style.min.css"
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);

const idx = () => import("../views/index.vue")
const home = () => import("../views/home/home.vue")
const list = () => import("../views/list/list.vue")
const found = () => import("../views/found/found.vue")
const message = () => import("../views/message/message.vue")
const mine = () => import("../views/mine/mine.vue")
const details = () => import("../views/details/details.vue")
const piaoniu = () => import("../views/message/xiaoxi/piaoniu.vue")
const xitong = () => import("../views/message/xiaoxi/xitong.vue")
const hudong = () => import("../views/message/xiaoxi/hudong.vue")
const kefu = () => import("../views/message/xiaoxi/kefu.vue")


Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/idx", component: idx },
    { path: "/home", component: home},
    { path: "/list", component: list },
    { path: "/found", component: found },
    { path: "/message", component: message },
    { path: "/mine", component: mine },
    { path: "/details", component: details },
    { path: "/piaoniu", component: piaoniu },
    { path: "/xitong", component: xitong },
    { path: "/hudong", component: hudong },
    { path: "/kefu", component: kefu }
  ]
})
