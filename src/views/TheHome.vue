<template>
  <view-box ref="viewBox" body-padding-top="46px" :body-padding-bottom="isPaddingBottom">
    <nav-header slot="header"></nav-header>
    <keep-alive>
      <router-view class="router-view" />
    </keep-alive>
    <nav-footer></nav-footer>
  </view-box>
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
import NavHeader from '../components/NavHeader.vue'
import { mapState } from 'vuex'
export default {
  name: 'page',
  directives: {
    TransferDom
  },
  data() {
    return {
      showMenu: false,
      menus: {
        menu1: '关于 Pretty Vendor ',
        menu2: '喜欢就给我个star吧 ^_^ ',
        menu3: '退出登录'
      }
    }
  },
  created() { },
  computed: {
    ...mapState(['title']),
    leftOptions() {
      return {
        showBack: this.$route.path !== '/page/home'
      }
    },
    rightOptions() {
      return {
        showMore: true
      }
    },
    isShowTabbar() {
      if (/detail|theme|order|address|about/.test(this.$route.path)) {
        return true
      }
      return false
    },
    isPaddingBottom() {
      if (/detail|theme|order|address|about/.test(this.$route.path)) {
        return '0'
      }
      return '53px'
    }
  },
  components: {
    Tabbar,
    TabbarItem,
    ViewBox,
    XHeader,
    Actionsheet,
    TransferDom,
    NavFooter,
    NavHeader
  }
}
</script>

<style scoped lang="less">
.page-view {
  height: 100%;
}
</style>
