/* 
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 声明使用VueRouter
Vue.use(VueRouter)
export default new VueRouter({
    mode:'history',
    routes
})