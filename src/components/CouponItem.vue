<template>
  <div class="coupon-item">
    <div class="a-c1">
      <img src="https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/960a304e251f95ca4cd3be0ccb177f3e67095261.jpg" alt="">
    </div>
    <div class="a-c2">
      <div class="title">
        爱玛电动车满减券

      </div>
      <div class="discount">
        ¥12313

      </div>
      <div class="condition">
        满2000 减 200
      </div>

    </div>
    <div class="a-c3">
      <div class="detail">
        <div class="total">
          总计200张
        </div>
        <div class="surplus">
          剩余100张
        </div>
      </div>
      <div class="get">
        <span>
          立即领取
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    coupon: {
      type: Object
    }
  }

}
</script>
<style lang="stylus">
.coupon-item {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: white;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 3px;
  margin-bottom: 10px;

  .a-c1 {
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 90px;
      height: 90px;
      border-radius: 3px;
    }
  }

  .a-c2 {
    width: calc(100% - 200px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 4px;

    .title {
    }

    .discount {
      font-size: 24px;
      color: #46B211;
    }

    .condition {
      color: #9B9B9D;
      font-size: 14px;
    }
  }

  .a-c3 {
    width: 100px;
    height: 90px;

    .detail {
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;

      .total {
        font-size: 14px;
      }

      .surplus {
        font-size: 14px;
      }
    }

    .get {
      height: 50%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        line-height: 24px;
        background: #46B211;
        color: white;
        padding: 2px 10px;
        border-radius: 13px;
      }
    }
  }
}
</style>
