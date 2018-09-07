<template>
  <div>
    <div class="location">
      <group v-for="(item,index) in common_address" :key="index" v-if="item.mobile">
        <x-switch :title="item.name+'  '+item.mobile" prevent-default v-model="item.isUsed" @on-click="changeSwitch(item)"></x-switch>
        <cell :title="item.addrName" :inline-desc="item.address" :link="{path:'/locationForm',query:{id:item.id}}"></cell>
      </group>
    </div>
    <div>
      <x-button @click.native="doShowToast">新增</x-button>
    </div>
  </div>
</template>

<script>
import { ViewBox, XHeader, XSwitch, Actionsheet, Group, GroupTitle, Cell, Toast, XAddress, TransferDomDirective as TransferDom, ChinaAddressData, XTextarea, XInput, Value2nameFilter } from 'vux'

import { mapState } from 'vuex'

export default {
  name: 'location',
  directives: {
    TransferDom
  },
  components: {
    ViewBox, XHeader, XSwitch, Actionsheet, Group, GroupTitle, Cell, Toast, XAddress, XTextarea, XInput, Value2nameFilter
  },
  data () {
    return {
      showToast: false,
      gTitle: '添加地址',
      addressId: 0,
      menusFlag: false,
      addressData: ChinaAddressData,
      address: {
        name: '',
        phone: '',
        addrName: ['浙江省', '杭州市', '西湖区'],
        addrDetail: ''
      },
      common_address: []
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created () {
    this.$store.dispatch('getAddress')
  },
  mounted () {
    this.addressList()
  },
  methods: {
    async addressList () {
      const params = {
        url: '/address/list',
        payload: {

        },
        auth: true
      }
      const result = await this.get(params)
      if (result.code === 1) {
        this.common_address = result.data
      }
    },
    changeSwitch (item, newVal, oldVal) {
      if (item.id !== 'undefined' && item.id.length === 32) {
        // 清除所有
        this.common_address.forEach((item, index) => {
          item.isUsed = false
        })

        // 设置当前
        item.isUsed = true

        this.$store.dispatch('selectAddress', item.id).then(res => {
          if (res.code === 200) {
            // 清除所有
            this.common_address.forEach((item, index) => {
              item.isUsed = false
            })

            // 设置当前
            item.isUsed = !item.isUsed

            this.$vux.loading.show({
              text: res.data
            })
            setTimeout(() => {
              this.$vux.loading.hide()
            }, 1000)
            this.$router.replace({
              name: 'location',
              query: { flag: 'select' }
            })
          }
        })
      }
    },
    createAddress () {
      this.$router.replace({
        name: 'locationForm',
        query: { act: 'add' }
      })
    },
    doShowToast () {
      this.$router.push({ path: '/home/address/add' })
    }
  }
}
</script>

<style lang="less">
.location {
  .weui-cells__title {
    font-size: 12px;
  }
  .weui-cell_switch {
    .weui-label {
      font-size: 16px;
    }
  }
  .vux-cell-bd {
    .vux-label {
      font-size: 16px;
    }
  }
}
.dialog-demo {
  .weui-dialog {
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .img-box {
    height: 350px;
    overflow: hidden;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
.locationForm {
  .weui-input,
  .weui-label,
  .vux-popup-picker-value,
  .weui-textarea {
    font-size: 14px;
    color: #666;
  }
  textarea::placeholder {
    font-size: 14px;
  }
  .vux-header-right {
    position: absolute;
    top: 10px;
  }
}

.vux-popup-dialog {
  z-index: 1000 !important;
}
</style>
