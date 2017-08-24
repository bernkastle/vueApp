/**
 * Created by karlwang on 8/22/2017.
 */
import Router from 'Router'

import home from './pages/home.vue'
import setting from './pages/setting.vue'
import order from './pages/order.vue'


const router=[
    {path:'/home', component:home},
    {path:'/setting', component:setting},
    {path:'/order', component:order},
];

export default new Router({
    routes:router
})