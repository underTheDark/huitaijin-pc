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
      
      children:[
        {
          
            path:"/detail1",
            component:()=>import("@/components/detail1")
        }
      ]
    },
    
  ]
})