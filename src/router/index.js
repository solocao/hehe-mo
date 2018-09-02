import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from 'views/index'
import mine from 'views/MyCenter'
import UserLogin from 'views/UserLogin'
import BetterScroll from '@/components/BetterScroll'
import GoodDetail from 'views/GoodDetail'
import ArticleList from 'views/ArticleList'
import TheCart from 'views/TheCart'
import GoodCat from 'views/GoodCat'
import Coupon from 'views/Coupon'
import CreditApply from 'views/CreditApply'

import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      component: () => import('@/views/TheHome.vue'),
      children: [
        {
          path: 'index',
          name: 'index',
          meta: {
            title: 'AA电单车'
          },
          component: index
        },
        {
          path: 'category',
          name: 'index',
          component: () => import('@/views/CategoryBike.vue')
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('@/views/UserCenter.vue')
        },
        {
          path: 'user1',
          name: 'user1',
          component: () => import('@/views/user/TheCenter.vue')
        },
        {
          path: 'address',
          name: 'address',
          component: () => import('@/views/UserAddress.vue')
        },
        {
          path: 'address/add',
          name: 'addressAdd',
          component: () => import('@/views/UserAddressAdd.vue')
        },
        {
          path: 'love',
          name: 'love',
          component: () => import('@/views/user/ListLove.vue')
        },
        {
          path: 'shop/cart',
          name: 'shop_cart',
          component: () => import('@/views/ShopCart.vue')
        },
        {
          path: 'coupon',
          name: '优惠券',
          component: () => import('@/views/CouponList.vue')
        },
        {
          path: 'active',
          name: '活动',
          component: () => import('@/views/ActiveList.vue')
        },
        {
          path: 'credit',
          name: '信用卡申请',
          component: () => import('@/views/CreditList.vue')
        }
      ]

    },
    {
      path: '/',
      redirect: '/index'
    },

    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/sign',
      name: 'index',
      component: () => import('@/views/UserSign.vue')
    },
    {
      path: '/weixin',
      name: 'weixin',
      component: () => import('@/views/UserWeixin.vue')
    },
    {
      path: '/category',
      name: 'index',
      component: () => import('@/views/CategoryBike.vue')
    },
    {
      path: '/user',
      name: 'mine',
      component: mine,
      beforeEnter: async (to, from, next) => {
        console.log(store.state.login)
        if (store.state.login) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: UserLogin
    },
    {
      path: '/better',
      name: 'better',
      component: BetterScroll
    },
    {
      path: '/good/:id',
      name: 'good',
      component: GoodDetail
    },
    {
      path: '/articles',
      name: 'articleList',
      component: ArticleList
    },
    {
      path: '/cart',
      name: 'cart',
      component: TheCart
    },
    {
      path: '/cat',
      name: 'cat',
      component: GoodCat
    },
    // 信用卡申请
    {
      path: '/apply',
      name: 'apply',
      component: CreditApply
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  console.log(to.path)
  if (to.path === '/home/user') {
    if (store.state.login !== true) {
      return next('/login')
    }
  }
  // // 无需进行验证的路由
  // if (contains(['/index', '/register', '/forget', '/legal_agreement', '/oauth/grant'], to.path)) {
  //   return next();
  // }
  // // 需要进行登录状态检测的路由
  // if (!store.getters['global/login'] && to.path !== '/login') {
  //   next({
  //     path: '/login'
  //   });
  // }
  // if (contains(['/routine/live_2d', '/routine/live_3d', '/nofly/report_2d', '/nofly/report_3d', '/flight/apply_2d', '/flight/apply_3d'], to.path)) {
  //   store.dispatch('global/set', { key: 'setting', data: true });
  // } else {
  //   store.dispatch('global/set', { key: 'setting', data: false });
  // }
  // if (to.path !== '/login') {
  //   // 判断是否登录
  //   const token = get('token');
  //   const form = get('form');
  //   // 权限为false,则不进行跳转
  //   if (checkUserRole(to.path) === false) {
  //     return;
  //   }
  //   if (token === null || token.expires < parseInt(new Date() / 1000, 10)) {
  //     return next({
  //       path: '/login',
  //       query: {
  //         redirect: to.fullPath === '/logout' ? '/' : to.fullPath
  //       }
  //     });
  //   }
  // }
  // store.dispatch('global/set', { key: 'breadcrumb', data: `${to.name}` });
  return next()
})

export default router
