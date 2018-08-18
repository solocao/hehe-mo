
<template>
  <!-- 用户签到 -->
  <div class="user-sign">
    <div class="s-panel">
      <img :src="img" alt="">
      <div class="h-masker"></div>
      <div class="s-sign fc">
        <div class="s-circle fc">
          签到
        </div>
      </div>
      <div class="s-count fc">
        <div>
          今日签到:30人
        </div>
      </div>
      <div class="s-footer">
        <flexbox>
          <flexbox-item class="fc">
            <div class="a-item">
              <div>112天</div>
              <div>累计签到</div>
            </div>
          </flexbox-item>
          <flexbox-item class="fc">
            <div class="a-item">
              <div>10元</div>
              <div>现金折扣</div>
            </div>
          </flexbox-item>
        </flexbox>
      </div>

    </div>
    <Calendar ref="Calendar" :sundayStart="true" :markDateMore="arr" :markDate="arr2" v-on:isToday="clickToday" agoDayHide=1530115200 v-on:choseDay="clickDay" v-on:changeMonth="changeDate"></Calendar>
  </div>
</template>
<script>
import Calendar from '../components/calendar/calendar.vue'
export default {
  components: {
    Calendar
  },
  data () {
    return {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534587662182&di=d01bd06dc36645c2945606d56ca2b7ba&imgtype=0&src=http%3A%2F%2Fimg01.jituwang.com%2F170816%2F256827-1FQ615162446.jpg',
      arr2: [],
      arr: [
        {
          date: '2018/6/1',
          className: 'mark1'
        },
        {
          date: '2018/6/13',
          className: 'mark2'
        }
      ]
    }
  },
  methods: {
    clickDay (data) {
      console.log('选中了', data) // 选中某天
    },
    clickToday (data) {
      console.log('跳到了本月今天', data) // 跳到了本月
    },
    changeDate (data) {
      console.log('左右点击切换月份', data) // 左右点击切换月份
    },
    demo () {
      this.$refs.Calendar.ChoseMonth('2018-12-13') // 跳到12月12日选中12月12日
    }
  },
  created () {
    function format (date, index) {
      date = new Date(date)
      return `${date.getFullYear()}-${date.getMonth() + 1}-${index}`
    }
    this.arr = [
      {
        date: format(new Date(), 1),
        className: 'mark1'
      },
      {
        date: format(new Date(), 13),
        className: 'mark2'
      }
    ]
  }

}
</script>
<style lang="stylus">

.user-sign {
  .s-panel {
    height: 300px;
    width: 100%;

    img {
      position: absolute;
      width: 100%;
      height: 300px;
      top: 0px;
      left: 0px;
      z-index: -1;
    }

    .h-masker {
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: inherit;
      height: 300px;
      z-index: -1;
    }

    .s-sign {
      height: 180px;
      width: 100%;

      .s-circle {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: #ffffffeb;
        border: 7px solid rgba(99, 91, 91, 0.15);
        color: #0fc37c;
        font-size: 24px;
        font-weight: bold;
        // animation-name: "ripple";
        // animation-duration: 2s;
        // animation-timing-function: ease;
        // animation-iteration-count: infinite;
      }
    }

    .s-count {
      height: 40px;

      >div {
        background: #ffffffeb;
        padding: 3px 18px;
        border-radius: 18px;
      }
    }

    .s-footer {
      padding-top: 20px;

      .a-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;

        div:nth-child(1) {
          font-weight: bold;
        }

        div:nth-child(2) {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
