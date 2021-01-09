require('./bootstrap');
window.Vue = require('vue');
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

Vue.component('AppHome', require('./components/app-home.vue').default);

import router from "./Router/router.js"
import User from "./components/Helpers/User";
window.User = User;

const app = new Vue({
    el: '#app',
    Vuetify,
    router
});
