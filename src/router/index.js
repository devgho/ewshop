import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import("../views/home/Home");
const Category = () => import("../views/category/Category");
const Shopcart = () => import("../views/shopcart/Shopcart");
const Profile = () => import("../views/profile/Profile");

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:"图书兄弟-首页"
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/category',
    name:'Category',
    component: Category,
    meta:{
      title:"图书兄弟-商品分类"
    }
  },
  {
    path:'/shopcart',
    name:'Shopcart',
    component: Shopcart,
    meta:{
      title:"图书兄弟-购物车"
    }
  },
  {
    path:'/profile',
    name:'Profile',
    component: Profile,
    meta:{
      title:"图书兄弟-个人中心"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to)=>{
  document.title = to.meta.title;
})

export default router
