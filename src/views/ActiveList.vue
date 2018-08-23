<template>
  <div class="active-list">
    <div class="a-item" v-for="active in actives" :key="active.title">
      <img :src="active.url" alt="">
      <div class="a-city">{{active.city}}</div>
      <div class="a-school">{{active.school}}</div>
      <div class="a-title">{{active.title}}</div>
      <div class="a-sponsor">{{active.sponsor}}</div>
      <div class="a-brief">{{active.brief}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      actives: [{
        url: 'http://hehecms.oss-cn-hangzhou.aliyuncs.com/ee.jpg',
        city: '扬州',
        school: '扬州大学',
        title: '快乐校园行',
        sponsor: '新蕾电动车有限公司',
        brief: '开学季,电动车'

      }, {
        url: 'https://moto7.tw/imgs/QJ0A6300.jpg',
        city: '南京',
        school: '南京大学',
        title: '快乐校园行',
        sponsor: '新蕾电动车有限公司',
        brief: '开学季,电动车'
      }, {
        url: 'http://i4.hexunimg.cn/2015-07-30/177952024.jpg',
        city: '盐城',
        school: '盐城工学院',
        title: '快乐校园行',
        sponsor: '新蕾电动车有限公司',
        brief: '开学季,电动车'
      }, {
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534097351472&di=e96187db51bbbfda63a67c8d8e96ea89&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D3835662309%2C1136007658%26fm%3D214%26gp%3D0.jpg',
        city: '南通',
        school: '南通大学',
        title: '快乐校园行',
        sponsor: '新蕾电动车有限公司',
        brief: '开学季,电动车'
      }]
    }
  }

}
</script>

<style lang="stylus">
.active-list {
  padding: 4px;

  .a-item {
    position: relative;
    width: 46%;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 10px;
    float: left;
    height: 240px;
    border: 1px solid #8080803d;

    img {
      width: 100%;
      height: 120px;
      z-index: -1;
    }

    .a-city {
      z-index: 1;
      position: absolute;
      top: 60px;
      left: 10px;
      color: white;
      font-size: 12px;
      font-weight: bold;
      text-shadow: 1px 1px 5px #009688eb;
      background: #8bc34ac2;
      padding: 0px 5px;
    }

    .a-school {
      z-index: 1;
      position: absolute;
      top: 80px;
      left: 10px;
      color: #9E9E9E;
      font-size: 12px;
      font-weight: bold;
      background: rgba(254, 255, 254, 0.761);
      padding: 0px 5px;
    }

    .a-title {
      font-size: 14px;
    }

    .a-sponsor {
      font-size: 14px;
    }

    .a-brief {
      font-size: 12px;
    }
  }
}
</style>
