<template>
  <empty-view v-show="!loading" v-if="cart.length === 0" :iconCls="'zui-icon-SHOPPING-CART-EMPTY'" :text="'您的购物车空空如也，赶紧去逛逛吧！'">
  </empty-view>
  <div v-else v-show="!loading">
    <swipeout>
      <swipeout-item v-for="(item,index) in cart" transition-mode="follow" @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" :key="item.id">
        <div slot="right-menu">
          <swipeout-button type="warn">
            删除
          </swipeout-button>
        </div>
        <div slot="content">
          <cart-card @on-selected-good="selectGood(index)" @on-selected-num="selectNum" :data="item">
          </cart-card>
        </div>
      </swipeout-item>
    </swipeout>

    <div class="cart-bottom-bar">
      <div class="icon-wrap">
        <icon @click.native="selectAllHandler" class="icon" :type="selectAll ? 'success' : 'circle'">
        </icon>
        全选
      </div>

      <div class="sum">合计:</div>
      <div class="btn">结算({{selectList.length}})</div>
    </div>
  </div>
</template>
<script>

import EmptyView from 'components/EmptyView.vue'
import CartCard from 'components/CartCard.vue'
import { Icon, Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'

export default {
  components: {
    EmptyView,
    Icon,
    CartCard,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton
  },
  data () {
    return {
      selectList: [],
      num: 1,
      selectAll: false,
      cart: [{ name: '小毛驴', title: '小毛驴', subInfo: '附属标题', price: 1322, img: 'http://www.aaebike.com:9090/data/img/167c08_1513910159315.jpg' }]
    }
  },
  computed: {
    loading () {
      return false
    }
  },
  methods: {
    handleEvents (type) {
      console.log('event: ', type)
    },
    selectAllHandler () {
      this.selectAll = !this.selectAll
    },
    selectGood (index) {
      if (this.selectList.includes(index)) {
        this.selectList.splice(this.selectList.indexOf(index), 1)
      } else {
        this.selectList.push(index)
      }
      // console.log(this.selectList)
    },
    selectNum () {

    }
  }
}
</script>

<style lang="less">
.cart-bottom-bar {
  position: fixed;
  bottom: 53px;
  left: 0;
  right: 0;
  height: 40px;
  line-height: 40px;
  width: 100%;
  background-color: #f7f7fa;
  overflow: hidden;
}
.cart-bottom-bar .icon-wrap {
  float: left;
  width: 25%;
  font-size: 14px;
  text-align: left;
}
.cart-bottom-bar .icon-wrap .icon {
  color: #ed7a5d;
  font-size: 20px;
}
.cart-bottom-bar .sum {
  float: left;
  width: 50%;
  text-align: left;
  font-size: 14px;
}
.cart-bottom-bar .btn {
  float: left;
  width: 25%;
  background-color: #ed7a5d;
  font-size: 14px;
  color: #fff;
  text-align: center;
}
</style>
