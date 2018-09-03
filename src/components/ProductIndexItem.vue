<template>
  <div style="background:red">
    <router-link :to="{
      path:`/home/product/${product._id}`}">
      <div class="img_wrap">
        <img :src="product.img_list[0].url" />
      </div>
      <div class="info">
        <div class="title z-ellipsis-2">
          {{product.name}}
        </div>
        <div class="subtitle z-ellipsis-2">
          ￥{{product.sale_price}}
        </div>
      </div>

    </router-link>
    <x-icon class="good-heart" @click.native="switchLoveHeart(product._id)" type="heart" size="30" :style="{ fill: heart }"></x-icon>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  props: ['product'],
  computed: {
    ...mapState(['loves', 'login']),
    heart () {
      if (this.loves.findIndex(x => x === this.product._id) > -1) {
        return 'red'
      } else {
        return '#DCDFE6'
      }
    }
  },
  methods: {
    ...mapMutations({
      set: 'set'
    }),
    async switchLoveHeart (productID) {
      if (this.login !== true) {
        this.$router.push({ path: '/login' })
      }
      const index = this.loves.findIndex(x => x === productID)
      if (index > -1) {
        this.loves.splice(index, 1)
        this.set({ loves: this.loves })
        const params = {
          url: 'user/loves/delete',
          payload: {
            product_id: productID
          },
          auth: true
        }
        const result = await this.post(params)
        console.log(result)
      } else {
        this.loves.push(productID)
        this.set({ loves: this.loves })
        // 后台新增
        const params = {
          url: 'user/loves/add',
          payload: {
            product_id: productID
          },
          auth: true
        }
        const result = await this.post(params)
        console.log(result)
      }
    }
  }

}
</script>
<style lang="less">
</style>
