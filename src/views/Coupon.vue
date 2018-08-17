<template>
  <div class="z-page">
    <view-box class="z-content">
      <div style="margin: 10px;overflow: hidden;" v-for="item in list" :key="item.title">
        <masker style="border-radius: 2px;">
          <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
          <div slot="content" class="m-title">
            {{item.title}}
            <br/>
            <p class="m-time">
              {{item.deduction}}
            </p>
          </div>
        </masker>
      </div>
    </view-box>
  </div>
</template>

<script>
import { Masker } from 'vux'

export default {
  components: {
    Masker
  },
  data () {
    return {
      list: [{
        title: '电动车行业领导者！更时尚的电动车',
        img: 'http://www.yadea.com.cn/uploads/images/20180207/9434617a0314372f77944a96b76bf434.jpg',
        deduction: '现金折扣 ¥1000'
      }, {
        title: '电动车首选！跑得更远的电动车',
        img: 'http://www.aaebike.com:9090/data/img/7a7f9b_1513907596737.jpg',
        deduction: '现金折扣 ¥800'
      }, {
        title: '安心可靠麻烦少。安全·续航·防盗',
        img: 'http://www.aimatech.com/r/front/images/index/201801202.jpg',
        deduction: '现金折扣 ¥800'
      }]
    }
  }
}
</script>

<style lang="less">
.m-img {
  padding-bottom: 45%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: 18px;
  font-weight: bold;
  padding-top: 14px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>
