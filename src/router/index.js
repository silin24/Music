/* 
向外暴露路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

//vue项目重复点击某个可以跳转的路由时出现一下报错  连续点击同一个导航时报错，该报错不影响功能
//解决办法
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
return originalPush.call(this, location).catch(err => err)
}

// 声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter({

  mode: 'history', // 路由路径没有#

  // 项目中所有路由
  routes
})