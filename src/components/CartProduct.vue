<template>
  <div class="cart-goods">
    <div class="check-wrap">
      <check-icon :value.sync="checked"></check-icon>
    </div>
    <div class="goods-info">
      <div class="goods-img">
        <img :src="prod.img" />
      </div>
      <div class="goods-name">
        {{prod.name}}
      </div>
      <div class="goods-prop">
        <i class="prop" style="font-style:normal">重量:11.24kg</i>
        <span class="prop">颜色:23.8英寸一体机电脑</span>
        <span class="prop">版本:i5-7200U 8G 1T 2G独显 白</span>
      </div>
      <div class="goods-price-wrap">
        <span>￥</span>
        <strong>{{prod.price}}</strong>
        <span style="float:right">
          <inline-x-number width="30px" :min="0" :value="prod.count" @on-change="numChange"></inline-x-number>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon, XNumber } from 'vux'
export default {
  name: 'cart-prod',
  components: {
    CheckIcon,
    XNumber
  },
  props: {
    prod: Object
  },
  data: function () {
    return {
      checked: true
    }
  },

  watch: {
    checked: function (newChecked) {
      this.$emit('change', newChecked)
    }
  },

  methods: {
    numChange (value) {
      this.prod.num = value
      this.prod.total = this.prod.num * this.prod.price
      this.$emit('on-total-price', this.prod.total)
    },
    setChecked (checked) {
      this.checked = checked
    },
    getChecked () {
      return this.checked
    },
    getTotal () {
      return this.prod.total
    },
    getNumber () {
      return this.prod.num
    }
  }
}
</script>
<style lang="less">
.goods-price-wrap {
  color: red;
  .weui-cell {
    width: 50%;
    padding: 0;
    .vux-number-input {
      font-size: 13px;
    }
    .vux-number-selector-plus,
    .vux-number-selector-sub {
      padding: 1px 4px 2px 4px;
      svg {
        transform: scale(0.7);
      }
    }
    .vux-number-selector-plus {
      padding-top: 0;
    }
  }

  strong {
    font-weight: 400;
    font-size: 14px;
  }
}
.goods-prop {
  display: flex;
  flex-wrap: wrap;
  height: 14px;
  line-height: 12px;
  margin-bottom: 3px;
  font-size: 11px;
  color: #81838e;
  white-space: nowrap;
  .prop {
    display: block;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.cart-goods {
  display: flex;
  flex-direction: row;
  height: 100px;
  padding: 10px;
}
.goods-name {
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  width: 100%;
  word-break: break-all;
  line-height: 15px;
  vertical-align: middle;
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: start;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.goods-img {
  width: 80px;
  height: 80px;
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid #eee;
  border-radius: 4px;
  img {
    display: block;
    max-width: 100%;
  }
}
.check-wrap {
  margin-top: 28px;
  vertical-align: middle;
}
.goods-info {
  flex: 1;
  padding-left: 90px;
  position: relative;
}
</style>
