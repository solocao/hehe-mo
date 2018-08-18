
<template>
  <!-- 用户签到 -->
  <div>
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
