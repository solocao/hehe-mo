<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <div class="top-tip" style="height:40px;background:blue">
        上拉刷新
      </div>
      <ul>
        <li v-for="item in data">{{item}}</li>
      </ul>
      <div class="bottom-tip" style="height:40px;background:blue">
        加载更多
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      data: ['我就像那一只林中的小鸟', '努力挣脱冲向蓝天怀抱']
    }
  },
  methods: {
    loadData () {
      this.data.data.conca(this.data.data)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        // pullDownRefresh: {
        //   threshold: 50,
        //   stop: 20
        // }
      })
      this.scroll.on('touchend', (pos) => {
        if (pos.y > 50) {
          alert('需要熟悉')
        }
      })
    })
  }
}
</script>

<style lang='less' scoped>
.wrapper {
  position: relative;
  height: 200px;
  z-index: 1;
  background: yellow;
  overflow-y: hidden;
}
.content {
  li {
    background: red;
    height: 300px;
  }
}

.top-tip {
  position: absolute;
  top: -40px;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #555;
}
.bottom-tip {
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: #777;
  background: #f2f2f2;
}
</style>
