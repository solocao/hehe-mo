<template>
  <div class="z-page">
    <div class="z-content">
      <view-box>
        <div class="good-detail-bottombar">
          <div class="cart">
            <router-link class="zui-icon zui-icon-SHOPPING-CART-EMPTY" :to="{
						name: 'cart'
					}">
            </router-link>
          </div>
          <div class="like">
            <span class="zui-icon" :class="isLike
						? 'zui-icon-follow-solid active'
						: 'zui-icon-follow-hollow'" @click="likeHandler($event)">
            </span>
          </div>
          <div class="addcart" @click="toggerSpeciPopup(1)">
            加入购物车
          </div>
          <div class="buynow" @click="toggerSpeciPopup(2)">
            立即购买
          </div>
        </div>

        <swiper class="a" :aspect-ratio="1/1" dots-position="center">
          <swiper-item v-for="item in good.imgUrlList" :key="item.id">
            <img class="swipe-img" :src="item">
          </swiper-item>
        </swiper>

        <div class="good-detail-head">
          <div class="title z-ellipsis-2">{{good.name}}</div>
          <div class="subtitle">
            <div class="params price">￥{{good.salePrice}}</div>

            <div class="params">已售{{good.soleNum}}</div>

            <div class="params">库存{{good.maxInventory}}件</div>
          </div>
        </div>

        <div v-if="false" class="good-detail-specification">
          <cell class="z-cell-item" :title="'选择: 规格 / 颜色'" is-link @click.native="toggerSpeciPopup(0)">
          </cell>
        </div>

        <div class="good-detail-brand">
          <div v-if="good.brand" class="gd-brand-head">
            <img :src="good.brand.logo" alt="">
            <div class="gd-brand-desc">
              <div class="gd-brand-suptitle">{{good.brand.title}}</div>
              <div class="gd-brand-subtitle">{{good.brand.subtitle}}</div>
              <share-popup class="share" :shareCls="'zui-icon-QR-code'" :share="kefu">
              </share-popup>
            </div>
          </div>

          <div class="gd-brand-foot">
            <div class="server">
              <div class="share-wrap">
                <!-- :shareCls="'zui-icon-KEFU'" -->
                <share-popup class="share" :share="shareInfo">
                </share-popup>
                联系客服
              </div>
            </div>
            <div class="back2index">
              <router-link class="back" :to="{
							name: 'index'
						}">
                <!-- <span class="zui-icon zui-icon-INDEX_1"></span> -->
                进入生活馆
              </router-link>
            </div>
          </div>
        </div>

        <div class="good-detail-introduce">
          <div class="head">——— 详情 ———</div>
          <div class="content" v-html="good.description"></div>
        </div>

        <div class="good-detail-comment">
          <div class="head">
            评价
            <span class="comment-num">({{good.commentsLength}}人评价)</span>
            <router-link class="comment-all" :to="{
						name: 'commentList'
					}">
              查看全部
            </router-link>
          </div>
          <comment-card :type="'part'" v-for="item in good.commentsPart" :comment="item" :key="item.id">
          </comment-card>
        </div>

        <popup v-model="show" height="400px" @on-hide="log('hide')" @on-show="log('show')" @on-first-show="resetScroller">
          <div class="good-params-popup-wrap">
            <div class="head">
              <div class="img">
                <img src="/static/img/good-default.jpg" alt="">
              </div>
              <div class="title">
                <span class="price">￥{{good.salePrice}}</span>
                <span class="inventory">(库存{{good.maxInventory}}件)</span>
              </div>
            </div>
            <scroller height="260px" lock-x ref="scroller">
              <div class="body">
                <div class="param-item" v-for="(item,pIndex) in good.params" :key="item.id">
                  <good-param :item="item" @paramChange="paramChange" />
                </div>
                <div class="param-item">
                  <x-number class="add-num" :title="'数量'" :value="1" :min="1" :step="1" width="30px">
                  </x-number>
                </div>
              </div>
            </scroller>
            <div class="foot">
              <div class="btn" v-show="btnType === 0">
                <div class="left">加入购物车</div>
                <div class="right">立即购买</div>
              </div>
              <div class="btn" v-show="btnType === 1">
                加入购物车
              </div>
              <router-link class="btn" @click.native="handleBuy" v-show="btnType === 2" :to="{
							name: 'goodPay'
						}">
                立即购买
              </router-link>
            </div>
          </div>
        </popup>
      </view-box>
    </div>
  </div>
</template>
<script>

import GoodParam from 'components/Goodparam.vue'
import SharePopup from 'components/SharePopup.vue'
import CommentCard from 'components/CommentCard.vue'
import { Flexbox, FlexboxItem, Swiper, SwiperItem, Cell, Popup, Scroller, Toast, ViewBox, XSwitch, XNumber } from 'vux'

export default {
  components: {
    Popup,
    Scroller,
    Toast,
    Swiper,
    SwiperItem,
    Cell,
    CommentCard,
    Flexbox,
    FlexboxItem,
    ViewBox,
    XSwitch,
    XNumber,
    SharePopup,
    GoodParam
  },
  data () {
    return {
      selectParams: [],
      isActive: false,
      btnType: '',
      show: false,
      showToast: false,
      isLike: false,
      shareInfo: {
        qrcode: '/static/img/good-default.jpg',
        text: '长按二维码分享'
      },
      kefu: {
        qrcode: '/static/img/good-default.jpg',
        text: '长按二维码分享'
      },
      good: []
    }
  },
  computed: {
    scrollerHeight () {
      return 'cale(100%-130px)'
    }
  },
  created () {
    this.productDetail(this.$route.params.id)
  },
  methods: {
    // 获取商品详情
    async productDetail (id) {
      const result = await this.get('/api/product/detail', { productId: id })
      if (result.success) {
        result.data.cover = 'http://www.aaebike.com:9090' + result.data.cover
        result.data.imgUrlList = result.data.imgUrlList.map(x => 'http://www.aaebike.com:9090' + x)
        this.good = result.data
      }
    },

    likeHandler ($event) {
      console.log($event)
      if (this.isLike) {
        this.isLike = false
        this.good.likeNum--
      } else {
        this.isLike = true
        this.good.likeNum++
      }
    },
    resetScroller () {
      this.$nextTick(() => {
        this.$refs.scroller.reset()
      })
    },
    log (str) {
      console.log(str)
    },
    toggerSpeciPopup (type) {
      switch (type) {
        case 0:
          this.btnType = 0
          this.show = !this.show
          break
        case 1:
          this.btnType = 1
          this.show = !this.show
          break
        case 2:
          this.btnType = 2
          this.show = !this.show
          break
      }
    },
    paramChange (param) {
      // data 存引用类型会出现奇怪的事情
      var pos = this.selectParams.indexOf(param.name)
      console.log(pos)
      if (pos > -1) {
        this.selectParams[pos + 1] = param.val
      } else {
        this.selectParams.push(param.name, param.val)
      }

      console.log(this.selectParams)
    },
    handleBuy () {
      console.log(1111)
      this.show = false
    }
  }
}
</script>

<style lang="less">
.good-detail-bottombar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 42px;
  line-height: 42px;
  background-color: #fff;
  z-index: 98;
}
.good-detail-bottombar .cart,
.good-detail-bottombar .like {
  float: left;
  width: 15%;
  height: 100%;
  text-align: center;
  color: #404040;
}
.good-detail-bottombar .cart .zui-icon,
.good-detail-bottombar .like .zui-icon {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 42px;
  color: #404040;
}
.good-detail-bottombar .addcart,
.good-detail-bottombar .buynow {
  float: left;
  width: 35%;
  text-align: center;
  font-size: 16px;
  color: #fff;
}
.good-detail-bottombar .addcart {
  background-color: #404040;
}
.good-detail-bottombar .buynow {
  background-color: #ed7a5d;
}
.good-detail-head {
  padding: 8px 8px 14px;
  background-color: #fff;
  overflow: hidden;
  border-bottom: 8px solid #efeff4;
}
.good-detail-head .title {
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 1.4;
  color: #404040;
}
.good-detail-head .subtitle {
  height: 30px;
  line-height: 30px;
  padding-top: 4px;
  overflow: hidden;
  color: #868686;
  font-size: 12px;
}
.good-detail-head .subtitle .params {
  float: left;
  width: 25%;
  text-align: right;
}
.good-detail-head .subtitle .price {
  width: 50%;
  font-size: 16px;
  color: #ed7a5d;
  text-align: left;
}
.good-detail-head .icontool {
  width: 80%;
  margin: 8px auto 0;
}
.good-detail-head .icontool .zui-icon {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
}
.good-detail-head .icontool .zui-icon.active {
  color: #ed7a5d;
}
.good-detail-head .icontool .like-num {
  font-size: 12px;
  color: #404040;
}
.good-detail-specification {
  border-bottom: 8px solid #efeff4;
}
.good-detail-specification .z-cell-item {
  height: 40px;
  line-height: 40px;
  padding-left: 8px;
}
.good-detail-brand {
  padding: 10px;
  border-bottom: 8px solid #efeff4;
  background-color: #fff;
}
.good-detail-brand .gd-brand-head {
  overflow: hidden;
  height: 70px;
}
.good-detail-brand .gd-brand-head > img {
  float: left;
  width: 60px;
  height: 60px;
}
.good-detail-brand .gd-brand-desc {
  position: relative;
  overflow: hidden;
  padding-left: 8px;
}
.good-detail-brand .gd-brand-desc .gd-brand-suptitle {
  color: #404040;
  font-size: 16px;
  font-weight: 700;
}
.good-detail-brand .gd-brand-desc .gd-brand-subtitle {
  padding-top: 6px;
  font-size: 14px;
  color: #868686;
}
.good-detail-brand .gd-brand-desc .share {
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 10px;
  font-size: 20px;
  color: #404040;
}
.good-detail-brand .gd-brand-foot {
  overflow: hidden;
  padding-top: 20px;
}
.gd-brand-foot .server,
.gd-brand-foot .back2index {
  float: left;
  width: 50%;
  height: 36px;
  line-height: 36px;
}
.gd-brand-foot .server {
  padding: 2px 40px 2px 40px;
  line-height: 2.2;
}
.gd-brand-foot .server .share-wrap {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 14px;
  color: #404040;
  border: 1px solid #404040;
  border-radius: 3px;
}
.gd-brand-foot .server .share-wrap .share {
  font-size: 12px;
}
.gd-brand-foot .back2index {
  padding: 2px 40px 2px 40px;
  line-height: 2.2;
}
.gd-brand-foot .back2index .back {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 14px;
  color: #404040;
  border: 1px solid #404040;
  border-radius: 3px;
}

.good-detail-introduce {
  padding: 0 8px 4px;
  background-color: #fff;
}
.good-detail-introduce .head {
  padding: 30px 0;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #404040;
}
.good-detail-comment {
  border-top: 8px solid #efeff4;
  background-color: #fff;
}
.good-detail-comment .head {
  height: 42px;
  line-height: 42px;
  font-size: 15px;
  overflow: hidden;
  padding-left: 8px;
  padding-right: 8px;
}
.good-detail-comment .head .comment-num {
  font-size: 12px;
  color: #ed7a5d;
}
.good-detail-comment .head .comment-all {
  float: right;
  color: #868686;
}

.good-params-popup-wrap {
  padding-top: 10px;
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  background-color: #fff;
}
.good-params-popup-wrap .head {
  overflow: hidden;
  padding-bottom: 8px;
  height: 88px;
}
.good-params-popup-wrap .head .img {
  float: left;
  width: 80px;
  height: 80px;
}
.good-params-popup-wrap .head .img img {
  width: 100%;
  display: block;
}
.good-params-popup-wrap .head .title {
  float: left;
  padding-left: 10px;
}
.good-params-popup-wrap .head .title .price {
  padding-right: 4px;
  font-size: 16px;
  font-weight: 500;
  color: #ed7a5d;
}
.good-params-popup-wrap .head .title .inventory {
  font-size: 12px;
  color: #868686;
}
.good-params-popup-wrap .body .param-item {
}
.good-params-popup-wrap .body .param-item p {
  font-size: 14px;
  color: #404040;
  overflow: hidden;
}
.good-params-popup-wrap .body .param-item p span {
  float: left;
  margin-right: 8px;
  margin-top: 4px;
  margin-bottom: 4px;
  padding: 2px 6px;
  border-radius: 2px;
  font-size: 14px;
  color: #404040;
  background-color: #9b9b9b;
}
.good-params-popup-wrap .body .param-item p span.active {
  color: #fff;
  background-color: #ed7a5d;
}
.good-params-popup-wrap .body .param-item .add-num {
  padding-left: 0;
  padding-top: 2px;
}
.good-params-popup-wrap .body .param-item .vux-number-selector svg {
  fill: #ed7a5d;
}
.good-params-popup-wrap .foot {
  height: 40px;
  padding-top: 2px;
  padding-bottom: 2px;
}
.good-params-popup-wrap .foot .btn {
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 2px;
  overflow: hidden;
  text-align: center;
  font-size: 15px;
  line-height: 2.3;
  color: #fff;
  background-color: #ed7a5d;
}
.good-params-popup-wrap .foot .btn .left {
  float: left;
  display: block;
  width: 50%;
  height: 100%;
  background-color: #404040;
}
.good-params-popup-wrap .foot .btn .right {
  display: block;
  float: left;
  height: 100%;
  width: 50%;
}

.swipe-img {
  width: 100%;
}
</style>
