import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/pages/auth/login.vue" 
import Signup from "../components/pages/auth/signup.vue" 
import Forum from "../components/pages/forum/forum.vue"
import  SingleQuestion from "../components/pages/forum/single-question.vue"
import  CreateQuestion from "../components/pages/forum/create-question.vue"
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  {
  	path:'/signup', component:Signup
  },
  {
    path: '/forum',
    name: 'forum',
    component: Forum
  },
  { 
    path: '/question/:slug', 
    component: SingleQuestion,
    name:"question.show"
  },
  {
    path:'/create-question',
    component: CreateQuestion
  }

]
const router = new VueRouter({
  routes, // short for `routes: routes`
  mode:'history',
  hashbag:false
})

export default router