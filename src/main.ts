import Vue from 'vue'
//import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.ts'
import i18n from './i18n'
import moment from 'moment'//导入文件

Vue.prototype.$moment = moment;//赋值使用

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
