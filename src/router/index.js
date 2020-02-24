import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home =()=>import('../views/Home/Home')
const Search =()=>import('../views/Search/Search')
const Order =()=>import('../views/Order/Order')
const Profile =()=>import('../views/Profile/Profile')
const Login =()=>import('../views/Login/Login')
const Shop =()=>import('../views/Shop/Shop')
const ShopGoods =()=>import('../views/Shop/ShopGoods/ShopGoods')
const ShopRating =()=>import('../views/Shop/ShopRating/ShopRating')
const ShopInfo =()=>import('../views/Shop/ShopInfo/ShopInfo')

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
      path:'/shop',
      component:Shop,
      children:[
          {
              path:'/shop/goods',
              component:ShopGoods
          },
          {
              path:'/shop/info',
              component:ShopInfo
          },
          {
              path:'/shop/ratings',
              component:ShopRating
          },
          {
              path:'',
              redirect:'/shop/goods'
          }
      ]
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
