<template>
  <div class="z-head life-index-head">
    <div class="logo">
      <img src="../../static/img/logo-round.png" alt="">
    </div>
    <span class="title">{{shop.title}}</span>
    <div class="icon-tool">
      <router-link :to="{name: 'index'}">
        <icon name="sync" class="refresh-icon"></icon>
      </router-link>
      <share-popup :shareCls="'zui-icon-SHARE2'" :share="shop.shareInfo">
      </share-popup>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      shop: {
        logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525357369&di=2717825c23b0fa14fccd3cafeb20a099&imgtype=jpg&er=1&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201502%2F19%2F20150219180534_MZkMk.jpeg',
        title: 'AA电单车'
      }
    }
  }

}
</script>
<style lang="stylus">
</style>
