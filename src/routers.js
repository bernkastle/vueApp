/**
 * Created by karlwang on 8/22/2017.
 */
import Router from 'Router'

import home from './pages/home.vue'


const router=[
    {path:'/home', component:home}
];

export default new Router({
    routes:router
})