import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
// import { Button  } from 'element-ui';


import router from './router'
import store from './store'
import './veeValidate/veeValidate.js'
import * as API from './api'
import Header from './components/header/header.vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
     loading: require('./common/img/loading.png'),//加载中图片，一定要有，不然会一直重复加载占位图
     error: require('./common/img/error.png')  //加载失败图片
});
Vue.prototype.$API = API
// Vue.component(Button.name, Button);
Vue.component("Header", Header)

Vue.config.productionTip = false
new Vue({
  beforeCreate() {
    Vue.prototype.$globalEventBus = this;
  },
  router,//安装路由器
  store,
  render: h => h(App)
}).$mount('#app')
