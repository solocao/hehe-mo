<template>
  <div class="user-login">
    <div class="address-edit-wrap">
      <div class="w-logo">
        <img class="a-logo" src="static/img/logo-round.png" alt="">
        <span class="a-title">
          AA电单车
        </span>
      </div>
      <group title="mask">
        <x-input v-model="username" title="用户名" name="username" placeholder="用户名" is-type="china-name">
          <span slot="label" class="slot-label-icon">
            <icon slot="icon" name="user"></icon>
          </span>
        </x-input>
        <x-input v-model="password" title="密码" name="password" type="password" placeholder="请输入密码">
          <span slot="label" class="slot-label-icon">
            <icon slot="icon" name="key"></icon>
          </span>
        </x-input>
      </group>
    </div>

    <div style="padding:15px;">
      <x-button @click.native="login" type="primary">登录</x-button>
    </div>
    <div class="a-info">
      新用户自动注册登录。
    </div>
    <div class="a-back">
      <span @click="goHome">返回首页</span>
    </div>
    <toast v-model="toastShow" type="text" position="middle" width="20em">{{toastText}}</toast>
  </div>
</template>
<script>
import { XInput, XButton, Toast } from 'vux'
import { db } from 'lib/db'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    XInput,
    XButton,
    Toast
  },
  data() {
    return {
      username: '',
      password: '',
      kaptcha: '',
      kaptchaUrl: 'http://aaebike.com:9090/kaptcha/image',
      toastText: '',
      toastShow: false
    }
  },
  computed: {
    ...mapState({
      demo: 'demo'
    })
  },
  methods: {
    ...mapMutations({
      set: 'set'
    }),
    goHome() {
      this.$router.push({
        path: '/home/index'
      })
    },
    async login() {
      const parms = {
        username: this.username,
        password: this.password,
        kaptcha: this.kaptcha
      }
      const result = await this.post('/api/user/login', parms)
      if (result.success) {
        db.set('login', true).write()
        db.set('user', result.data).write()
        this.set({ login: true, user: result.data })
        console.log('user')
        console.log(db.get('user').value())
        return this.$router.push('/index')
      } else {
        this.toastText = result.errorMsg
        this.toastShow = true
      }
    },
    // 刷新验证码
    refreshKaptcha() {
      this.kaptchaUrl = this.kaptchaUrl + '?'
    }

  },
  mounted() {
    this.set({ haha: 'ceshi', niubi: 1231 })
  }
}
</script>
<style lang="less">
.user-login {
  .w-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .a-logo {
      margin-top: 30px;
      width: 25%;
      height: 25%;
    }
    .a-title {
      margin-top: 20px;
      margin-bottom: 40px;
      font-size: 30px;
      font-weight: bold;
      color: #66ab5a;
    }
  }
  .a-info {
    font-size: 12px;
    color: #1aad19;
    font-weight: bold;
    width: 100%;
    text-align: center;
  }
  .a-back {
    position: absolute;
    bottom: 2px;
    text-align: center;
    font-size: 14px;
    color: #1aad19;
    font-weight: bold;
    width: 100%;
  }
}
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
</style>
