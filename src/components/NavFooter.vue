<template>
  <div class="z-foot">
    <tabbar>
      <tabbar-item v-for="item in bottomBar" :link="item.link" :key="item.name">
        <icon slot="icon" class="b-icon" :name="item.icon"></icon>
        <span slot="label">
          {{item.name}}
        </span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  props: [],
  data () {
    return {
      bottomBar: [
        {
          name: '首页',
          iconCls: 'zui-icon-INDEX_1',
          link: '/home/index',
          icon: 'home'
        },
        {
          name: '精彩',
          iconCls: 'zui-icon-TEA',
          link: '/home/active',
          icon: 'calendar'
        },
        {
          name: '优惠券',
          iconCls: 'zui-icon-SHOPPING-CART-EMPTY',
          link: '/home/coupon',
          icon: 'birthday-cake'
        },
        {
          name: '我的',
          iconCls: 'zui-icon-MINE_1',
          link: '/home/user',
          icon: 'user'
        }
      ]
    }
  },
  methods: {
    go () {
      alert('asf')
    }
  }
}
</script>
<style lang="less">
.b-icon {
  width: 80%;
  height: 80%;
  margin-top: 10%;
}
</style>
