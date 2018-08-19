<template>
  <div class="wrap-link">
    <flexbox>
      <flexbox-item v-for="d in data" :key="d.title">
        <card-entry :data="d"></card-entry>
      </flexbox-item>
    </flexbox>
  </div>
</template>
<script>
import CardEntry from './CardEntry.vue'
export default {
  components: {
    CardEntry
  },
  data () {
    return {
      data: [
        {
          title: '电动车',
          sub: '购买有福利',
          img: 'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1586009247.jpg',
          path: '/home/category'
        },
        {
          title: '精彩活动',
          sub: '参加活动，领取优惠券',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534503529118&di=d45dd5d8d785967f4491256dd07451b8&imgtype=0&src=http%3A%2F%2Fimg005.hc360.cn%2Fm1%2FM00%2F54%2FAE%2FwKhQcFQs4jqEPGBJAAAAAO8D5oU670.jpg',
          path: ''
        },
        {
          title: '信用卡',
          sub: '开通信用卡，购车享折扣',
          img: 'http://img2.imgtn.bdimg.com/it/u=2723615521,359532631&fm=11&gp=0.jpg',
          path: ''
        }
      ]

    }
  }
}
</script>
<style lang="stylus">
.wrap-link {
  width: 100%;
  padding: 0px 4px;
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>
