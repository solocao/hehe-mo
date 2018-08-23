<template>
  <div class="coupon-list">
    <coupon-item :coupon="coupon" v-for="coupon in coupons" :key="coupon.title"></coupon-item>
  </div>
</template>
<script>
import CouponItem from '../components/CouponItem.vue'
export default {
  components: {
    CouponItem
  },
  data () {
    return {
      coupons: [{
        title: '优惠券额',
        discount: 12
      },
      {
        title: '优惠券额',
        discount: 12
      },
      {
        title: '优惠券额',
        discount: 12
      }]
    }
  }

}
</script>
<style lang="stylus">
.coupon-list {
  background: #EEECF0;
  padding: 4px;
}
</style>
