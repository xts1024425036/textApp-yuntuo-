import Vue from 'vue'
import Router from 'vue-router'
// 登入页面
import Login from '@/pages/login/Login';
import Register from '@/pages/login/register';
import ServiceAgreement from '@/pages/login/serviceAgreement';
import PrivacyPolicy from '@/pages/login/privacyPolicy';
// serviceAgreement
// privacyPolicy

// 首页
import Home from '@/pages/home/Home';
    // 仓储服务
import Serve from '@/pages/home/menu/serve/index';


import AfterSale from '@/pages/afterSale/afterSale';
import DownOrder from '@/pages/downOrder/downOrder';
import ShoppingCart from '@/pages/shoppingCart/shoppingCart';
import My from '@/pages/my/my';

Vue.use(Router)

export default new Router({
    routes: [
        //   {
        //     path: '/',
        //     name: 'Index',
        //     redirect: '/home',
        //     meta: {
        //         title: 'Index Page'
        //     }
        // },
        {
          path: '/login',
          name: 'Login',
          component: Login,
          meta: {
              title: '登陆'
          }
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            title: '注册'
        }
      },
      {
        path: '/serviceAgreement',
        name: 'serviceAgreement',
        component: ServiceAgreement,
        meta: {
            title: '用户协议'
        }
    },
    {
      path: '/privacyPolicy',
      name: 'privacyPolicy',
      component: PrivacyPolicy,
      meta: {
          title: '隐私'
      }
  },
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title: '主页'
        }
      },
      {
        path: '/home/serve',
        name: 'Serve',
        component: Serve,
        meta: {
            title: '仓储服务'
        }
      },
      {
        path: '/afterSale',
        name: 'afterSale',
        component: AfterSale,
        meta: {
            title: '售后'
        }
      },
      {
        path: '/downOrder',
        name: 'downOrder',
        component: DownOrder,
        meta: {
            title: '下单'
        }
      },
      {
        path: '/shoppingCart',
        name: 'shoppingCart',
        component: ShoppingCart,
        meta: {
            title: '购物车'
        }
      },
      {
        path: '/my',
        name: 'my',
        component: My,
        meta: {
            title: '主页'
        }
      },
    ]
})
