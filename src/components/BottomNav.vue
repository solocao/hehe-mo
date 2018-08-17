<template>
  <tabbar>
    <tabbar-item v-for="item in bottomBar" :link="item.link" :key="item.name">
      <icon slot="icon" class="b-icon" :name="item.icon"></icon>
      <span slot="label">
        {{item.name}}
      </span>
    </tabbar-item>
  </tabbar>
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
          link: 'index',
          icon: 'home'
        },
        {
          name: '精彩',
          iconCls: 'zui-icon-TEA',
          link: 'articles',
          icon: 'calendar'
        },
        {
          name: '优惠券',
          iconCls: 'zui-icon-SHOPPING-CART-EMPTY',
          link: 'coupon',
          icon: 'birthday-cake'
        },
        {
          name: '我的',
          iconCls: 'zui-icon-MINE_1',
          link: 'user',
          icon: 'user'
        }
      ]
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
