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

export default new Router({
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
    // 优惠券
    {
      path: '/coupon',
      name: 'coupon',
      component: Coupon
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
