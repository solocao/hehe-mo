<template>
  <div>
    哈哈 {{url}}
  </div>
</template>
<script>

import qs from 'qs'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      url: location.href
    }
  },
  methods: {
    ...mapMutations({
      set: 'set'
    }),
    async getUserInfo () {
      const obj = qs.parse(this.url.split('?')[1].split('#')[0])
      console.log(obj)
      const params = {
        url: `wechat/oauth/userinfo/${obj.code}`,
        payload: {}
      }
      const result = await this.get(params)
      if (result.code === 1) {
        alert('登录成功')
        this.set({ login: true, user: result.data })
        this.$router.push({
          path: '/home/user'
        })
      }
      console.log(result)
    }
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>
