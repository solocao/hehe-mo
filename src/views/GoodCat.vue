<template>
  <div class="z-page">
    <view-box class="z-content">
      <div class="catresult-catbar-wrap">
        <router-link class="catresult-catbar-back zui-icon zui-icon-back" :to="{name: 'index'}">
        </router-link>
        <scroller class="" lock-y :scrollbar-x='false'>
          <scroller-box :scrollerItemStyle="{
							width: 60,
							marginLeft: 0,
							surplus: 20
						}" :datas="brandList">
            <template slot-scope="props">
              <div class="catresult-catbar-item" :class="props.data.id === ItemSelected ? 'catbar-item-active' : ''" :tag="props.data.id" @click="catBarClick(props.data.id)">
                {{props.data.name}}
              </div>
            </template>
          </scroller-box>
        </scroller>
      </div>

      <div class="catresult-result-wrap" v-show="!loading">
        <swiper :list="catBanner"></swiper>
        <good-grid :data="catGood"></good-grid>
        <!-- <ending-tip :showLoading="true"></ending-tip> -->
      </div>
    </view-box>
  </div>
</template>
<script>
import { catTags, catBanner, catResult } from '../data/data.js'

import ScrollerBox from 'components/ScrollerBox.vue'
import EndingTip from 'components/EndingTip.vue'
import GoodGrid from 'components/GoodGrid.vue'
import { Tab, TabItem, Swiper, SwiperItem, ViewBox, Scroller } from 'vux'

export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    ViewBox,
    GoodGrid,
    Scroller,
    EndingTip,
    ScrollerBox
  },
  data () {
    return {
      index: 0,
      tag: '',
      ItemSelected: false,
      catTags: catTags,
      catResult: catResult,
      catBanner: catBanner,
      brandList: [],
      catGood: []
    }
  },
  created () {
    this.getBrand()
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.catGood = []
      vm.getCatGood(to.query.brandId)
    })
  },
  computed: {
    computedTag () {
      return this.$route.query.tag
    },
    loading () {
      return false
    }
  },
  methods: {
    catBarClick (brandId) {
      this.getCatGood(brandId)
      this.ItemSelected = brandId
    },
    // 获取分类的商品
    async getCatGood (brandId) {
      const params = { rows: 100 }
      // brandId = 0 则查找全部
      if (brandId !== 0) {
        params.brandId = brandId
      }
      const result = await this.get('api/product/list', params)
      if (result.success) {
        this.catGood = result.data.list.map(x => { x.cover = 'http://www.aaebike.com:9090' + x.cover; return x })
      }
    },
    // 获取品牌
    async  getBrand () {
      const result = await this.get('api/brand/list')
      if (result.success) {
        result.data.list.unshift({ id: 0, name: '全部' })
        this.brandList = result.data.list
      }
    }
  }
}
</script>
<style lang="less">
.catresult-catbar-wrap {
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #efeff4;
  z-index: 98;
}
.catresult-catbar-back {
  float: left;
  display: block;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  padding-left: 4px;
  padding-right: 4px;
  color: #404040;
  z-index: 99;
  background-color: #fff;
}
.catresult-catbar-item {
  background: #fff;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  border-bottom: 2px solid #fff;
}
.catresult-catbar-item.catbar-item-active {
  color: #4bae4f;
  border-bottom: 2px solid #4bae4f;
}
.catresult-result-wrap {
  margin-top: 42px;
}
</style>
