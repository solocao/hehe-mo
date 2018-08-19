<template>
  <x-header slot="header" :left-options="leftOptions" :right-options="rightOptions" :title="title" @on-click-more="onClickMore" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
    AA电单车
  </x-header>
</template>
<script>
import { mapState } from 'vuex'
export default {
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
  mounted () {

  }
}
</script>
<style lang="stylus">
</style>
