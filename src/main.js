// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import { get, post } from './api/index.js'
import store from './store'
import { Flexbox, FlexboxItem, XHeader, Loading } from 'vux'
import './style/app.styl'
import 'vux/src/styles/1px.less'
Vue.component('icon', Icon)

// 全局注册vux组件
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('x-header', XHeader)
Vue.component('loading', Loading)

Vue.config.productionTip = false

// 全局请求数据
Vue.prototype.get = get
Vue.prototype.post = post

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
