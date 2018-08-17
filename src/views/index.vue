<template>
  <div class="z-page">
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
    <view-box class="z-content">
      <!-- swiper 导航栏目 -->
      <div class="life-index-banner">
        <swiper :list="shopBanner">
        </swiper>
      </div>
      <!-- 品牌 -->
      <cat-box :cats="brandList" :title="'单车品牌'">
      </cat-box>
      <sale-floor v-if="false" :type="'floorA'" :hasAll="true" :floorTitle="'精选好物'" :floorData="floor1">
      </sale-floor>
      <product-wrap title="热门商品" :products="products">
      </product-wrap>
      <ending-tip :showLoading="false"></ending-tip>
    </view-box>

  </div>
</template>
<script>
import { shopBanner, shopCat, floor1 } from '../data/data.js'

import SharePopup from 'components/SharePopup.vue'
import CatBox from 'components/CatBox.vue'
import SaleFloor from 'components/SaleFloor.vue'
import EndingTip from 'components/EndingTip.vue'
import ProductWrap from 'components/ProductWrap.vue'
import ProductItem from 'components/ProductItem.vue'
import ScrollerBox from 'components/ScrollerBox.vue'
import GoodGrid from 'components/GoodGrid.vue'
import { Swiper, SwiperItem, Popup, ViewBox } from 'vux'
import BScroll from 'better-scroll'

export default {
  components: {
    Popup,
    CatBox,
    SaleFloor,
    EndingTip,
    ProductItem,
    GoodGrid,
    Swiper,
    SwiperItem,
    ScrollerBox,
    SharePopup,
    ViewBox,
    ProductWrap
  },
  data () {
    return {
      shop: {
        logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525357369&di=2717825c23b0fa14fccd3cafeb20a099&imgtype=jpg&er=1&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201502%2F19%2F20150219180534_MZkMk.jpeg',
        title: 'AA电单车'
      },
      shopBanner: shopBanner,
      shopCat: shopCat,
      floor1: floor1,
      products: [],
      goods: [],
      brandList: []
    }
  },
  created () {
    this.advCarousel()
    this.productList()
    this.getBrand()
  },
  mounted () {
    this.$nextTick(() => {
      // this.scroll = new BScroll(this.$refs.wrapper, {})
    })
    this.index()
  },

  methods: {
    // 获取头部的bander
    async advCarousel () {
      this.shopBanner = [{
        url: 'javascript:',
        img: 'https://www.aimatech.com/r/front/images/index/201805292.jpg',
        title: '送你一朵fua'
      }, {
        url: 'javascript:',
        img: 'https://www.aimatech.com/r/front/images/index/201805294.jpg',
        title: '送你一次旅行',
        fallbackImg: 'https://www.aimatech.com/r/front/images/index/201805294.jpg'
      }]
    },
    async productList () {
      const parms = {
        page: 1,
        rows: 8
      }
      const result = await this.get('/api/product/list', parms)
      if (result.success) {
        this.goods = result.data.list.map(x => { x.cover = 'http://www.aaebike.com:9090' + x.cover; return x })
        console.log('goods', this.goods)
      }
    },
    // 获取品牌
    async  getBrand () {
      const result = await this.get('api/brand/list')
      if (result.success) {
        result.data.list.unshift({ id: 0, name: '全部' })
        this.brandList = result.data.list
      }
    },
    async index () {
      const params = {
        url: 'bike/index',
        payload: {
        }
      }
      const result = await this.get(params)
      if (result.code === 1) {
        const data = result.data
        this.products = data.product
      }
      console.log('看看bike')
      console.log(result)
    }
  }
}
</script>

<style lang='less'>
.life-index-head {
  box-sizing: border-box;
  height: 44px;
  line-height: 2;
  padding: 5px 10px;
  background: #fff;
  border-bottom: 1px solid #f8f8f8;
  z-index: 502;
}
.life-index-head .logo {
  float: left;
  width: 34px;
  height: 34px;
}
.life-index-head .logo img {
  width: 100%;
  border-radius: 50%;
  display: block;
}
.life-index-head .title {
  font-size: 18px;
  padding-left: 10px;
  overflow: hidden;
}
.life-index-head .icon-tool {
  float: right;
}
.life-index-head .icon-tool .zui-icon {
  display: inline-block;
  text-align: center;
  width: 30px;
  height: 30px;
  color: #404040;
  line-height: 1.6;
  font-size: 24px;
}

.life-index-banner {
  background-color: #fff;
  margin-top: 44px;
}

.refresh-icon {
  color: #404040;
}
</style>
