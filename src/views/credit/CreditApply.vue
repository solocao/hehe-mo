<template>
  <div class="credit-apply">
    <div class="a-step">
      <step v-model="step2" background-color='#fbf9fe' gutter="20px">
        <step-item title="填写信息"></step-item>
        <step-item title="银行出卡"></step-item>
        <step-item title="收卡使用"></step-item>
      </step>
    </div>

    <div class="bindCardStep1">
      <group title="请写本人相关信息">
        <x-input title="持卡人" placeholder="请输入持卡人姓名" v-model="name" required text-align="left" label-width="80px"></x-input>
        <x-input title="卡号" placeholder="请输入银行卡号" mask="9999 9999 9999 9999 9999" :min="19" :max="23" v-model="card" keyboard="number" required text-align="left" label-width="80px"></x-input>
        <x-input title="卡类型" v-model="cardType" text-align="left" :show-clear="false" label-width="80px" disabled></x-input>
        <x-input title="手机号" name="mobile" placeholder="请输入手机号码" v-model="mobile" keyboard="number" is-type="china-mobile" required text-align="left" label-width="80px"></x-input>
      </group>
      <box gap="50px 25px">
        <x-button type="primary">下一步</x-button>
      </box>
    </div>
  </div>

</template>

<script>
import { XInput, Box, Group, XButton } from 'vux'
export default {
  name: 'bindCardStep1',
  data () {
    return {
      name: '',
      card: '',
      step1: 1,
      step2: 0,
      cardType: '招商银行储蓄卡',
      mobile: ''
    }
  },
  components: {
    XInput,
    Box,
    Group,
    XButton
  },
  watch: {
    card: function (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="stylus">
.credit-apply {
  .a-step {
    width: 95%;
    margin: 10px auto;
    margin-top: 20px;
  }
}
</style>
