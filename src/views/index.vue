<template>
  <div class="z-page">
    <view-box class="z-content">
      <!-- swiper 导航栏目 -->
      <div class="life-index-banner">
        <swiper :list="shopBanner">
        </swiper>
      </div>
      <!-- 3 * 1 显示 -->
      <wrap-link/>
      <sale-floor v-if="false" :type="'floorA'" :hasAll="true" :floorTitle="'精选好物'" :floorData="floor1">
      </sale-floor>
      <product-wrap title="热门商品" :products="products">
      </product-wrap>
      <!-- 品牌 -->
      <cat-box :cats="brandList" :title="'单车品牌'">
      </cat-box>
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
import WrapLink from 'components/WrapLink.vue'
import { Swiper, SwiperItem, Popup, ViewBox } from 'vux'

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
    ProductWrap,
    WrapLink
  },
  data () {
    return {

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
}

.refresh-icon {
  color: #404040;
}
</style>
