<template>
  <card>
    <ul slot="content">
      <li v-for="prod in shop" :key="prod.id">
        <cart-product :prod="prod" @change="checkProduct" @on-total-price="onTotalPrice" :ref="'prod'+prod.id"></cart-product>
      </li>
    </ul>
  </card>
</template>

<script>
import { Card, CheckIcon } from 'vux'
import CartProduct from 'components/CartProduct'

export default {
  name: 'cart-shop',
  components: {
    Card,
    CheckIcon,
    CartProduct
  },
  props: {
    shop: Object
  },
  data: function () {
    return {
      // checkedNum: this.shop.products.length,
      // checked: true,
      // total: 0
    }
  },
  methods: {
    checkProduct: function (checked) {
      if (checked) {
        this.checkedNum += 1
      } else {
        this.checkedNum -= 1
      }
      this.checked = (this.checkedNum === this.shop.products.length)
      this.onTotalPrice()
    },

    checkSub: function (checked) {
      for (let i in this.$refs) {
        this.$refs[i][0].setChecked(checked)
      }
    },

    onTotalPrice: function () {
      let total = 0
      for (let i in this.$refs) {
        let prod = this.$refs[i][0]
        if (prod.getChecked()) {
          total += prod.getTotal()
        }
      }

      this.total = total
      this.$emit('totalChange', this.total)
    },

    getTotal: function () {
      return this.total
    },

    isChecked() {
      return this.checked
    },

    getAllProdNumber() {
      let total = 0
      for (let i in this.$refs) {
        let prod = this.$refs[i][0]
        if (prod.getChecked()) {
          total += prod.getNumber()
        }
      }

      return total
    }
  },
  mounted() {
    console.log(this.shop)
  },

  watch: {
    checked: function (newChecked) {
      this.$emit('checkChange', newChecked)
    }
  }
}
</script>
