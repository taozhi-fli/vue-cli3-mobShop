import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from '@/store/store.js'///引入vuex


Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()//初始化事件总线//page1里 scroll和page1模块 距离太远 可通过事件总线传递事件 更方便

new Vue({
  render: h => h(App),
	router,
	store
}).$mount('#app')

