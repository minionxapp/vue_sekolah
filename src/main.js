import Vue from 'vue'
import App from './App.vue'

//import router
import router from './router/router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// document.cookie = "Lax" 