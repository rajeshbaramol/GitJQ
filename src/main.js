import Vue from 'vue'
import App from './App.vue'
import router from './routes'
Vue.config.productionTip = false
Vue.use(require('vue-resource'));

new Vue({
  el:'#app',
  router,
  render: h => h(App),
}).$mount('#app')
