<template>
  <view-box class="cart" bodyPaddingBottom="50px" bodyPaddingTop="0">

    <grid class="vux-grid-list" v-if="common_goods_list.length > 0" v-for="(item,index) in common_goods_list" @on-item-click="onItemClick(item.id)" :key="index">
      <a href="javascript:;" class="weui-grid" style="width: 50%;">
        <img class="grid-pic" :src="item.pic">
      </a>
      <a href="javascript:;" class="weui-grid" style="width: 50%;">
        <div class="grid-padding">
          <p>烟雾传感器</p>
          <p>型号： {{item.type}}</p>
          <p>价格：{{item.price}}</p>
          <div class="weui-number-box">
            <span class="weui-number-remove" @click="removeNumber(item,index,$event)">-</span>
            <input type="tel" v-model="item.num" class="vux-number-input">
            <span class="weui-number-add" @click="addNumber(item,index,$event)">+</span>
          </div>
        </div>
      </a>
    </grid>

    <div transfer-dom>
      <actionsheet show-cancel v-model="menusFlag" :menus="menus" @on-click-menu="MenusClose" :close-on-clicking-menu="true">
      </actionsheet>
    </div>

    <div transfer-dom>
      <confirm v-model="confirmFlag" @on-confirm="confirmDel" @on-cancel="cancelDel">
        <p style="text-align:center;">确定删除吗？</p>
      </confirm>
    </div>

    <tabbar>
      <tabbar-item selected>
        <span slot="label">合计：{{common_goods_money | currency}}</span>
      </tabbar-item>
      <tabbar-item @on-item-click="onSubmit">
        <span slot="label">开始结算</span>
      </tabbar-item>
    </tabbar>

  </view-box>
</template>

<script>
import {
  ViewBox, XHeader, Grid, GridItem, GroupTitle, Group, Confirm,
  TransferDom, Actionsheet, InlineXNumber, Tabbar, TabbarItem
} from 'vux'
import {
  mapState, mapMutations, mapGetters, mapActions
} from 'vuex'

export default {
  name: 'cart',
  components: {
    ViewBox,
    XHeader,
    Grid,
    GridItem,
    GroupTitle,
    Group,
    Confirm,
    TransferDom,
    Actionsheet,
    InlineXNumber,
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      totalMoney: 0,
      cancelFlag: false,
      delIndex: -1,
      item: null,
      itemIndex: 0,
      confirmFlag: false,
      refresh: true,
      common_goods_list: [{
        id: 'w34',
        pic: 'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3084667560,3794399093&fm=202&mola=new&crop=v1',
        num: 2,
        type: 'asf',
        price: 1244

      }]
    }
  },
  computed: {
    ...mapState(['menus']),
    ...mapGetters([
      'common_goods_money'
    ]),
    menusFlag: {
      get () {
        return this.$store.state.menusFlag
      },
      set (newValue) {
        return this.$store.state.menusFlag = newValue
      }
    }
  },
  created () {
    // if (this.$route.query.act !== 'undefined') {
    //   if (this.$route.query.act === 'books') {
    //     this.$router.replace({
    //       name: 'cart',
    //       query: {}
    //     })
    //     window.location.reload()
    //   }
    // }
    // this.$store.dispatch('cartGoodsList')
  },
  mounted () {

  },
  methods: {
    ...mapMutations(['MenusClose']),
    /**
     * 提交订单
     */
    onSubmit () {
      if (this.common_goods_list.length < 1) {
        this.$vux.toast.text('请选择商品！')
        this.$router.push('home')
        return
      }

      this.$vux.loading.show({
        text: '生成订单...'
      })

      setTimeout(() => {
        this.$vux.loading.hide()
        this.$router.push({
          name: 'book',
          query: { act: 'cart' }
        })
      }, 800)
    },

    /**
     * 改变商品数
     * @param item
     * @param index
     * @param $event
     */
    addNumber (item, index, $event) {
      if (item.id !== 'undefined' && item.id.length === 32) {
        item.num++
        this.$store.dispatch('goodsAdd', item.id)
      }
    },
    removeNumber (item, index, $event) {
      if (item.id !== 'undefined' && item.id.length === 32) {
        if (--item.num < 1) {
          this.confirmFlag = true // 删除对话框
          this.delIndex = index // 删除索引
          this.item = item // 删除项
        } else {
          this.$store.dispatch('goodsRemove', item)
        }
      }
    },

    /**
     * 删除商品
     */
    delGoods (index) {
      if (index >= 0) {
        this.itemIndex = index
        this.common_goods_list.splice(this.itemIndex, 1)
      }
    },

    /**
     * 确认删除
     */
    confirmDel () {
      this.delGoods(this.delIndex)
      this.$store.dispatch('goodsRemove', this.item)
    },

    /**
     * 取消删除
     */
    cancelDel () {
      this.item.num = 1
    },

    /**
     * 计算总金额(暂时废除)
     */
    gross () {
      this.goodsMoney = 0
      this.common_goods_list.forEach(item => {
        if (item.price >= 1 && item.num >= 1) {
          this.goodsMoney += item.price * item.num
        }
      })
    }
  }
}
</script>

<style lang="less">
.cart {
  .weui-grids {
    padding-bottom: 20px;
    &:after,
    &:before {
      content: normal;
    }
  }
  .weui-tabbar {
    background-color: #fff;
    .weui-tabbar__item {
      &:last-child {
        background-color: #32beff;
        span {
          color: #fff;
        }
      }
    }
  }
  .vux-grid-list {
    background-color: #fff;
    overflow: hidden;
    position: relative;
    &:after {
      content: " ";
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      border-bottom: 1px solid #d9d9d9;
      color: #d9d9d9;
      -webkit-transform-origin: 0 100%;
      transform-origin: 0 100%;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
  }
  .weui-number-box {
    width: 80%;
    border: 1px solid #ccc;
    overflow: hidden;
    .weui-number-add,
    .weui-number-remove,
    .vux-number-input {
      float: left;
      line-height: 30px;
      text-align: center;
      color: #666;
    }
    .weui-number-add,
    .weui-number-remove {
      width: 30%;
    }
    .vux-number-input {
      width: 38%;
      font-size: 14px;
      outline: none;
      border: none;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
    }
  }
  .weui-cells__title {
    margin: 0;
    padding: 10px;
    position: relative;
    span {
      padding-left: 10px;
      border-left: 3px solid cornflowerblue;
    }
    &:after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      border-bottom: 1px solid #d9d9d9;
      color: #d9d9d9;
      -webkit-transform-origin: 0 100%;
      transform-origin: 0 100%;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
  }
  .weui-grid {
    &:after {
      border-bottom: none;
    }
    &:before {
      content: normal;
    }
    .grid-pic {
      max-width: 120px;
      max-height: 120px;
      display: block;
    }
    .grid-padding {
      padding: 0;
    }
    p {
      line-height: 22px;
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
