// router/index.js
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import User from "@/views/User.vue";
import CreateUser from "@/views/UsersForm"

// Sample Authorization Guard
// function checkAuth(to, from, next) {
//   if (IsAuthenticated()) next();
//   else next("/login");
// }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
{
  path: '/user',
  name: 'User',
  component: User,
  //beforeEnter: checkAuth,
  children: [

  ]
},
  {
    path: '/createUser',
    name: 'CreateUser',
    component: CreateUser

  },
  { 
    path: '/:pathMatch(.*)*', 
    redirect: "/" 
  },
]

const router = createRouter({
  //history: createWebHistory(),
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(`Navigating to: ${to.name}`);
  next();
});

export default router
