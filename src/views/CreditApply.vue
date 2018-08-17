<template>
  <div class="z-content credit">
    <div class="address-edit-wrap">
      <div class="credit-apply">
        <span>信用卡申请</span>
      </div>
      <group title="禁用内置验证及显示成功或者错误样式">
        <x-input v-model="name" title="姓名" placeholder="请输入用户名" />
        <x-input v-model="idNumber" title="身份证" placeholder="请输入身份证号码" />
        <div class="sex-div">
          <span class="sex-span">
            <label>性别</label>
          </span>

          <input type="radio" id="one" value="0" v-model="sex">
          <label style="margin-right:8px">男</label>
          <input type="radio" id="two" value="1" v-model="sex">
          <label>女</label>
        </div>
        <x-input v-model="age" title="年龄" placeholder="请输入年龄" />
        <x-input v-model="tel" title="电话" placeholder="请输入电话" />
        <x-input v-model="qq" title="QQ号码" placeholder="请输入QQ号码" />
        <x-input v-model="college" title="学院" placeholder="请输入学院" />
        <x-input v-model="major" title="专业" placeholder="请输入专业" />
        <x-input v-model="address" title="地址" placeholder="请输入地址" />

      </group>

    </div>
    <div style="padding:15px;">
      <x-button @click.native="submit" type="primary">提交</x-button>
    </div>
    <toast v-model="toastShow" type="text" position="middle" width="20em">{{toastText}}</toast>
  </div>
</template>
<script>
import { XInput, XButton, Toast, PopupRadio } from 'vux'
import { db } from 'lib/db'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    XInput,
    XButton,
    Toast,
    PopupRadio
  },
  data() {
    return {
      toastText: '',
      toastShow: false,
      name: '曹伟',
      sex: 0,
      age: 12,
      tel: '17768118393',
      qq: '2123123123',
      address: '百慕大',
      college: '百慕大',
      major: '百慕大',
      idNumber: '百慕大',
      frontSideUrl: '123',
      backSideUrl: '123'
    }
  },
  computed: {
    ...mapState({
      demo: 'demo',
      user: 'user'
    })
  },
  methods: {
    ...mapMutations({
      set: 'set'
    }),
    async submit() {
      const parms = {
        userId: this.user.id,
        name: this.name,
        sex: this.sex,
        age: this.age,
        tel: this.tel,
        qq: this.qq,
        address: this.address,
        college: this.college,
        major: this.major,
        idNumber: this.idNumber,
        frontSideUrl: '',
        backSideUrl: ''
      }
      const result = await this.post('/api/credit/save', parms)
      if (result.success) {
        alert('上传成功')
      } else {
        alert('失败')
      }
    }
  },
  mounted() {
  }
}
</script>
<style lang="less">
.address-edit-wrap {
  background-color: #fff;
  color: #404040;
}
.address-edit-wrap .weui-label {
  color: #404040;
}
.address-edit-wrap textarea {
  font-size: 15px;
  color: #404040;
}
.address-edit-btn {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 40px;
  line-height: 40px;
  display: block;
  width: 100%;
  background-color: #ed7a5d;
  color: #fff;
  text-align: center;
}
.slot-label-icon {
  width: 30px;
  height: 100%;
  padding-right: 10px;
  display: flex;
  justify-content: center;
}

.address-edit-wrap .weui-label {
  width: 80px !important;
  text-align: right !important;
  margin-right: 15px !important;
}

.credit .vux-label {
  width: 80px;
  text-align: right !important;
  margin-right: 15px !important;
}

.sex-div {
  width: 100%;
  display: flex;
  height: 40px;
  align-items: center;
  border-top: 1px solid #80808038;
  margin: 0 16px;
  .sex-span {
    width: 78px;
    text-align: right;
    margin-right: 15px;
  }
}
.credit-apply {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 30px;
    font-weight: bold;
    color: #1aad19;
  }
}
</style>
