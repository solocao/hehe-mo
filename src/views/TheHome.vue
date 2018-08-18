<template>
  <div>
    <view-box ref="viewBox" body-padding-top="46px" :body-padding-bottom="isPaddingBottom">
      <x-header slot="header" :left-options="leftOptions" :right-options="rightOptions" :title="title" @on-click-more="onClickMore" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
      <keep-alive>
        <router-view class="router-view" />
      </keep-alive>

      <nav-footer slot="bottom"></nav-footer>
      <!-- <tabbar slot="bottom" style="position:fixed" v-if="!isShowTabbar">
        <tabbar-item link="/page/home" :selected="$route.path === '/page/home'">
          <span class="icon icon-home" slot="icon"></span>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/page/category" :selected="$route.path === '/page/category'">
          <span class="icon icon-category" slot="icon"></span>
          <span slot="label">分类</span>
        </tabbar-item>
        <tabbar-item link="/page/cart" :selected="$route.path === '/page/cart'">
          <span class="icon icon-cart" slot="icon"></span>
          <span slot="label">购物车</span>
        </tabbar-item>
        <tabbar-item link="/page/user" :selected="$route.path === '/page/user'">
          <span class="icon icon-user" slot="icon"></span>
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar> -->
    </view-box>
  </div>
</template>

<script>
import {
  Tabbar,
  TabbarItem,
  ViewBox,
  XHeader,
  Actionsheet,
  TransferDom
} from 'vux'
import NavFooter from '../components/NavFooter.vue'
import { mapState } from 'vuex'
export default {
  name: 'page',
  directives: {
    TransferDom
  },
  data () {
    return {
      showMenu: false,
      menus: {
        menu1: '关于 Pretty Vendor ',
        menu2: '喜欢就给我个star吧 ^_^ ',
        menu3: '退出登录'
      }
    }
  },
  created () { },
  computed: {
    ...mapState(['title']),
    leftOptions () {
      return {
        showBack: this.$route.path !== '/page/home'
      }
    },
    rightOptions () {
      return {
        showMore: true
      }
    },
    isShowTabbar () {
      if (/detail|theme|order|address|about/.test(this.$route.path)) {
        return true
      }
      return false
    },
    isPaddingBottom () {
      if (/detail|theme|order|address|about/.test(this.$route.path)) {
        return '0'
      }
      return '53px'
    }
  },
  methods: {
    onClickMore () {
      this.showMenu = true
    },
    onSelectMenu (key, item) {
      if (key === 'menu1') {
        this.$router.push({ path: '/page/about' })
      } else if (key === 'menu2') {
        window.location.href =
          'https://huahua0406.github.io/pretty-vendor/'
      } else if (key === 'menu3') {
        this.$router.push({ path: '/login' })
      }
    }
  },
  components: {
    Tabbar,
    TabbarItem,
    ViewBox,
    XHeader,
    Actionsheet,
    TransferDom,
    NavFooter
  }
}
</script>

<style scoped lang="less">
.page-view {
  height: 100%;
}
</style>
