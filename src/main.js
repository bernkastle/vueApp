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