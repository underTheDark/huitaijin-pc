import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      
      component: Index,
      redirect:"/home"
    },
    {
      path:"/index",
      component:()=>import("@/components/index"),
      redirect:"/home",
      children:[
        {
          path:"/home",
          component:()=>import("@/components/home")
        },
        {
             path:"/detail1",
             component:()=>import("@/components/detail1")
        },
        {
          path:"/detail2",
          component:()=>import("@/components/detail2")
        },
       {
       path:"/detail3",
       component:()=>import("@/components/detail3")
      },
      {
        path:"/about",
        component:()=>import("@/components/about")
       },
       {
        path:"/connect",
        component:()=>import("@/components/connect")
       },
      ]
    }
  ]
})
