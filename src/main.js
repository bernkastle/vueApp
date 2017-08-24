/**
 * Created by karlwang on 8/22/2017.
 */
import Vue from 'vue';

import App from './app.vue'

import router from './routers'


let app = new Vue({
    router,
    render:h=>h(App)
}).$mount('#app');

// const Foo = {template: '    <div class="mui-content-padded" style="margin: 5px"><form class="mui-input-group"><div class="mui-input-row"> <label>用户名</label> <input type="text" placeholder="请输入用户名"> </div> <div class="mui-input-row"> <label>密码</label> <input class="mui-input-clear" type="password" placeholder="请输入密码"> </div> <div class="mui-button-row"> <button class="mui-btn-blue">确定</button>&nbsp;&nbsp; <button class="mui-btn-red">取消</button> </div> </form> </div>'}
// const Bar = {template: '<div>bar</div>'}
//
//
// const routes = [
//     {path: '/foo', component: Foo},
//     {path: '/bar', component: Bar}
// ];
//
//
// const router = new VueRouter({
//     routes
// });
//
// const app = new Vue({
//     el:'#app',
//     router
// })