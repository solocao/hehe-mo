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
    <div class="a-wechat" v-if="false">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534934543830&di=8ec2e34c313375064b3da71e5f653219&imgtype=0&src=http%3A%2F%2Fwww.sj520.cn%2Fsc%2Fima%2Fweixin_sj520_25.jpg" alt="" @click="wxRedirect">
      <span>微信登录</span>
    </div>
    <div class="a-back">
      <span @click="goHome">返回首页</span>
    </div>
    <toast v-model="toastShow" type="text" position="middle" width="20em">{{toastText}}</toast>
    <div v-transfer-dom>
      <loading :show="loadShow" :text="text1"></loading>
    </div>
  </div>
</template>
<script>
import { XInput, XButton, Toast } from 'vux'
import { db } from 'lib/db'
import { mapState, mapMutations } from 'vuex'
import { md5 } from '../lib/utils'
export default {
  components: {
    XInput,
    XButton,
    Toast
  },
  data () {
    return {
      text1: '注册登录中',
      loadShow: false,
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
    goHome () {
      this.$router.push({
        path: '/home/index'
      })
    },
    async login () {
      const params = {
        url: '/user/login',
        payload: {
          name: this.username,
          password: md5(this.password)
        }
      }
      const result = await this.post(params)
      if (result.code === 1) {
        this.set({ login: true, user: result.data })
        this.$router.push({ path: '/home/user' })
      } else {
        this.loadShow = true
        this.register()
      }
    },
    // 注册
    async register () {
      const params = {
        url: '/user/register',
        payload: {
          name: this.username,
          password: md5(this.password)
        }
      }
      // 用户名注册
      const result = await this.post(params)
      if (result.code === 1) {
        this.loadShow = false
        this.set({ login: true, user: result.data })
        this.$router.push({
          path: '/home/user'
        })
      } else {
        this.loadShow = false
        // 显示
        this.$vux.toast.show({
          type: 'text',
          text: result.msg
        })
      }
      console.log(result)
    },
    async wxRedirect () {
      const params = {
        url: 'wechat/oauth/redirect',
        payload: {}
      }
      const result = await this.get(params)
      console.log(result)
      if (result.code === 1) {
        const url = result.data
        self.location = url
      }
    }

  },
  mounted () {
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
      width: 128px;
      height: 128px;
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

  .a-wechat {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    img {
      width: 100px;
      height: 100px;
    }
    span {
      position: absolute;
      bottom: 0px;
      font-size: 12px;
      font-weight: bold;
      color: white;
    }
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
