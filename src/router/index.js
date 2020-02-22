import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home =()=>import('../views/Home/Home')
const Search =()=>import('../views/Search/Search')
const Order =()=>import('../views/Order/Order')
const Profile =()=>import('../views/Profile/Profile')
const Login =()=>import('../views/Login/Login')

const routes = [
    {
      path:'/home',
      component:Home,
      meta:{
          showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
        meta:{
            showFooter:true
        }
    },
    {
      path:'/order',
      component:Order,
        meta:{
            showFooter:true
        }
    },
    {
      path:'/profile',
      component:Profile,
        meta:{
            showFooter:true
        }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      redirect:'/home'
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
