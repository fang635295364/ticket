import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui'
import store from './store/store'
import './styles/index.css'
import 'amfe-flexible'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
