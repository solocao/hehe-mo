<template>
  <div class="z-page">
    <view-box class="z-content" v-show="!loading">
      <div class="article-list-head">
        <swiper :list="banners" style="width:100;"></swiper>
      </div>
      <div class="article-list-body">
        <article-card :articleList="advListArr">
        </article-card>
        <ending-tip :showLoading="true"></ending-tip>
      </div>
    </view-box>
  </div>
</template>
<script>
import { articles, articleBanner } from '../data/data.js'

import EndingTip from 'components/EndingTip.vue'
import ArticleCard from 'components/ArticleCard.vue'
import { Card, Swiper, SwiperItem, ViewBox, Loading } from 'vux'

export default {
  components: {
    EndingTip,
    ArticleCard,
    Swiper,
    SwiperItem,
    ViewBox,
    Loading
  },
  data () {
    return {
      articles: articles,
      banners: articleBanner,
      advListArr: []
    }
  },
  created () {

  },
  computed: {
    // 用于控制是否显示
    loading () {
      return false
    }
  },
  methods: {
    async advList () {
      const result = await this.get('api/adv/list')
      if (result.success) {
        let advListArr = []
        result.data.forEach((x) => {
          const aaa = x.advertisementList.map(z => {
            return Object.assign({}, z, { typeName: x.typeName, imgUrl: 'http://www.aaebike.com:9090' + z.imgUrl })
          })
          advListArr = advListArr.concat(aaa)
        })
        this.advListArr = advListArr
        console.log(this.advListArr)
      }
    }

  },
  mounted () {
    this.advList()
  }
}
</script>

<style lang="less">
.article-list-head {
  margin-bottom: 8px;
}
.article-list-body {
  margin-bottom: 55px;
}
</style>
