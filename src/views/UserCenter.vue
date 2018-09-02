<template>
  <!-- 个人中心 -->
  <div class="user">
    <div class="user-info">
      <div class="user-img">
        <img src="http://img4.imgtn.bdimg.com/it/u=4030727620,1326552346&fm=26&gp=0.jpg" />
      </div>
      <div class="name-mobile">
        <p>{{user.name}}</p>
        <p>{{user.mobile}}</p>
      </div>
    </div>
    <card :header="{title:'我的数据'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r" @click="go('books',{act:'pay'})">
          <x-icon slot="overwrite-left" type="card" size="24" style="fill:#666;"></x-icon>
          <p>信用卡</p>
        </div>
        <div class="vux-1px-r" @click="go('/home/love',{act:'wait'})">
          <x-icon slot="overwrite-left" type="heart" size="24" style="fill:#666;"></x-icon>
          <p>心愿单</p>
        </div>
        <div @click="go('/home/user/order',{act:'all'})">
          <x-icon slot="overwrite-left" type="ios-paper-outline" size="24" style="fill:#666;"></x-icon>
          <p>全部订单</p>
        </div>
      </div>
    </card>

    <card :header="{title:'我的钱包'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r">
          <span>0</span>
          <p>余额</p>
        </div>
        <div class="vux-1px-r">
          <span>0</span>
          <p>积分</p>
        </div>
        <div @click="go('cart')">
          <span>{{goods_count}}</span>
          <p>购物车</p>
        </div>
      </div>
    </card>

    <group class="setting" :title="'设置'">
      <cell is-link link="/home/address">
        <div slot="title">
          <span>收货地址</span>
        </div>
      </cell>
    </group>

    <group class="dispatch" :title="'配送'">
      <cell is-link :title="'支付配送'" :border-intent="false" :arrow-direction="showCell ? 'up' : 'down'" @click.native="showCell = !showCell"></cell>

      <template v-if="showCell">
        <cell :title="'支付方式'" :value="'在线支付'" :border-intent="false"></cell>
        <cell :title="'快递公司'" :value="'随机'"></cell>
      </template>
    </group>

  </div>
</template>

<script>
import {
  ViewBox, XHeader, Card, GroupTitle, Group, Cell, CellBox
} from 'vux'
import {
  mapState, mapMutations, mapGetters, mapActions
} from 'vuex'

export default {
  name: 'user',
  components: {
    ViewBox, XHeader, Card, GroupTitle, Group, Cell, CellBox
  },
  data () {
    return {
      showCell: false
    }
  },
  computed: {
    ...mapState([
      'user'
    ]),
    ...mapGetters([

      'common_menus'
    ]),
    goods_count () {
      let goodsNumber = 0
      // this.$store.getters.common_goods_list.forEach(item => {
      //   goodsNumber += item.num
      // })
      return goodsNumber
    }
  },
  created () {
    this.$store.dispatch('cartGoodsList')
  },
  mounted () {

  },
  methods: {
    go (path) {
      this.$router.push({ path: path })
    },
    onLogout () {
      this.$store.commit('LOGOUT')
      this.$router.replace({
        path: 'signUp'
      })
    }
  }
}
</script>

<style lang="less">
@import "~vux/src/styles/1px.less";

.user {
  .user-info {
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;
    @width77: 77px;
    > div {
      height: @width77;
    }
    .user-img {
      width: @width77;
      border-radius: 50%;
      overflow: hidden;
      margin-left: 30px;
      background-color: #b0b6c4;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .name-mobile {
      padding: 5px 10px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
  .card-demo-flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    .vux-1px-l {
      &:before {
        content: normal;
      }
    }
    & > div {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      text-align: center;
      font-size: 12px;
      p {
        color: #666;
      }
    }
    span {
      color: #f74c31;
    }
  }
  .setting {
    .vux-label {
      color: #333;
      font-size: 14px;
    }
    .weui-cell__ft {
      font-size: 13px;
    }
  }
  .dispatch {
    .vux-tap-active {
      .vux-label {
        color: #333;
        font-size: 14px;
      }
    }
    .vux-label,
    .weui-cell__ft {
      color: #888;
      font-size: 13px;
    }
  }
  .card-demo-content01 {
    padding: 10px 0;
  }
}
</style>
