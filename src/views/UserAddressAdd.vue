<template>
  <div class="locationForm">
    <!--添加地址-->
    <group class="vux-group" label-width="4.5em" label-margin-right="2em" label-align="right" v-if="!this.addressId">
      <x-input title="收货人" v-model="address.name" placeholder="请输入姓名"></x-input>
      <x-input title="手机号" v-model="address.phone" placeholder="请输入手机号"></x-input>

      <x-address title="省市区" v-model="address.addrName" :list="addressData" raw-value value-text-align="left"></x-address>
      <x-textarea title="详细地址" v-model="address.addrDetail" :show-counter="false" :rows="3" placeholder="街道/门牌号"></x-textarea>
    </group>

    <!--修改地址-->
    <group class="vux-group" label-width="4.5em" label-margin-right="2em" label-align="right" v-else>

      <x-input title="收货人" v-model="common_detail_address.name" placeholder="请输入姓名"></x-input>

      <x-input title="手机号" v-model="common_detail_address.phone" placeholder="请输入手机号"></x-input>

      <x-address title="省市区" v-model="common_detail_address.addrName" :list="addressData" raw-value value-text-align="left"></x-address>

      <x-textarea title="详细地址" v-model="common_detail_address.addrDetail" :show-counter="false" :rows="3" placeholder="街道/门牌号"></x-textarea>
    </group>

    <box gap="10px 10px">
      <x-button plain action-type="button" style="background: #fff;border-color:#ccc" @click.native="onSave" v-if="gTitle==='修改地址'">修改</x-button>

      <x-button plain action-type="button" style="background: #fff;border-color:#ccc" @click.native="onSave" v-if="gTitle==='添加地址'">添加</x-button>

      <x-button plain action-type="button" style="background: #fff;border-color:#ccc" v-if="gTitle==='修改地址'" @click.native="deleteAddress">删除
      </x-button>
    </box>

    <div transfer-dom>
      <actionsheet show-cancel v-model="menusFlag" :menus="menus" @on-click-menu="MenusClose" :close-on-clicking-menu="true">
      </actionsheet>
    </div>

  </div>
</template>

<script>
import {
  ViewBox, XHeader, Box, XButton, Group, Cell, XInput, TransferDom, Actionsheet,
  XAddress, XTextarea, Toast, ChinaAddressData, Value2nameFilter
} from 'vux'
import {
  mapState, mapMutations, mapGetters, mapActions
} from 'vuex'

export default {
  name: 'locationForm',
  components: {
    ViewBox, XHeader, Box, XButton, Group, Cell, XInput, TransferDom, Actionsheet, XAddress, XTextarea, Toast
  },
  data () {
    return {
      gTitle: '添加地址',
      addressId: 0,
      menusFlag: false,
      addressData: ChinaAddressData,
      address: {
        name: '',
        phone: '',
        addrName: ['浙江省', '杭州市', '西湖区'],
        addrDetail: ''
      }
    }
  },
  computed: {
    ...mapState([
      'menus',
      'user'
    ]),
    ...mapGetters([
      'common_detail_address'
    ])
  },
  created () {
  },
  mounted () {
    if (this.$route.query.act !== 'undefined') {
      if (this.$route.query.act === 'add') {
        this.gTitle = '添加地址'
      }
    }
    if (typeof this.$route.query.id !== 'undefined') {
      let id = this.$route.query.id
      if (id.length === 32) {
        this.$store.dispatch('detailAddress', id)
        this.gTitle = '修改地址'
        this.addressId = id
      }
    }
  },
  methods: {
    ...mapMutations(['MenusClose']),
    async onSave () {
      if (this.gTitle === '添加地址') {
        console.log(this.address)
        const { name, phone, addrDetail } = this.address
        const params = {
          url: '/address/add',
          payload: {
            name: name,
            mobile: phone,
            address: addrDetail
          },
          auth: true
        }
        const result = await this.post(params)
        console.log(result)
        if (result.code === 1) {
          this.$router.push({
            path: '/home/address'
          })
        }
      }

      if (this.gTitle === '修改地址') {
        alert('修改地址')
      }
    },
    deleteAddress () {
      this.$store.dispatch('deleteAddress', this.addressId).then(res => {
        if (res.code === 200) {
          this.$vux.toast.show({
            text: res.data
          })
          this.$router.replace({
            name: 'location',
            query: { flag: 'del' }
          })
        }
      })
    },
    onMenusClose (key, value) {
      /* this.$vux.loading.show({
       text: '跳转中...'
       }); */

      /* setTimeout(() => {
       this.$vux.loading.hide();
       }, 1000); */

      switch (key) {
        case 'menu1':
          this.menusFlag = false
          this.$router.push({
            name: 'cart'
          })
          break
        case 'menu2':
          this.menusFlag = false
          this.$router.push({
            name: 'books',
            query: {
              act: 'all'
            }
          })
          break
        case 'menu3':
          this.menusFlag = false
          this.$router.push({
            name: 'location'
          })
          break
      }
    }
  }
}
</script>

<style lang="less">
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
