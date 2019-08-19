/* 
所有配置路由的数组
*/
import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import PersonalCenter from '../pages/PersonalCenter/PersonalCenter.vue'
import SearchThing from '../pages/SearchThing/SearchThing.vue'
import ShopCar from '../pages/ShopCar/ShopCar.vue'

export default [{
    path:'/home',
    component:Home,
    meta:{
      showFooter:true
    }
    },
    {
      path:'/category',
      component:Category,
      meta:{
        showFooter:true
      }
    },
    {
        path:'/personalcenter',
        component:PersonalCenter,
        meta:{
          showFooter:true
        }
    },
    {
        path:'/SearchThing',
        component:SearchThing,
        meta:{
          showFooter:true
        }
    },
    {
        path:'/shopcar',
        component:ShopCar,
        meta:{
          showFooter:true
        }
    },
    {
      path:'',
      redirect:'/home'
    }
]