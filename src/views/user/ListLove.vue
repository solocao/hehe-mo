<template>
  <div class="myCollection">
    <div v-for="item in loveList" :key="item._id">
      <div class="goods-img">
        <img :src="item.product_id.img_list[0].url" />
      </div>
      <div class="goods-info">
        <p>{{item.product_id.name}}</p>
        <div>
          <span>￥{{item.product_id.sale_price}}</span>
          <span>取消喜欢</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myCollection',
  data () {
    return {
      loveList: [],
      collectionList: [{
        id: '1',
        name: 'MD100*0.5-DKSKK+125这是一个什么玩意',
        price: '2142',
        img: ''
      }, {
        id: '2',
        name: 'MD100*0.5-DKSKK+125这是一个什么玩意',
        price: '2142',
        img: ''
      }, {
        id: '3',
        name: 'MD100*0.5-DKSKK+125这是一个什么玩意',
        price: '2142',
        img: ''
      }, {
        id: '4',
        name: 'MD100*0.5-DKSKK+125这是一个什么玩意',
        price: '2142',
        img: ''
      }]
    }
  },
  methods: {
    async getLoves () {
      const params = {
        url: 'user/loves/list',
        payload: {},
        auth: true
      }
      const result = await this.get(params)
      if (result.code === 1) {
        this.loveList = result.data
      }
    }
  },
  mounted () {
    this.getLoves()
  }
}
</script>

<style scoped lang="less">
.myCollection > div {
  padding: 17.5px 20px;
  height: 90px;
  background-color: #ffffff;
  font-size: 14px;
  margin-bottom: 10px;
  .goods-img {
    width: 90px;
    height: 90px;
    margin-right: 17.5px;
    overflow: hidden;
    border-radius: 6px;
    background-color: #eaeeef;
    float: left;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .goods-info {
    height: 90px;
    float: left;
    width: calc(~"100% - 107.5px");
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > p {
      line-height: 20px;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    > div {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
