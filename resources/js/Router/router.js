import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/pages/auth/login.vue" 
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router