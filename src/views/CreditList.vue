<template>
  <div class="credit-list">
    <div class="credit-item">
      <div class="a-header">
        <span class="a-title">
          万事达标准双币想用卡
        </span>
        <span class="a-btn">
          立即申请
        </span>
      </div>
      <div class="a-body">
        <img src="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1662489568.jpg" alt="">
        <div class="a-detail">
          <p>额度高-发卡快-0年费</p>
          <p>刷卡优惠多!</p>
          <p>新用户畅享5积分兑换好礼</p>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus">
.credit-list {
  background: #EEECF0;
  padding: 4px;
  font-size: 14px;

  .credit-item {
    background: white;
    border-radius: 4px;
    padding-top: 10px;
    margin-bottom: 10px;

    .a-header {
      display: flex;
      justify-content: space-between;
      height: 24px;
      padding-left: 6px;
      padding-right: 6px;

      .a-title {
      }

      .a-btn {
        line-height: 24px;
        padding: 0px 10px;
        background: #46B211;
        border-radius: 12px;
        color: white;
      }
    }

    .a-body {
      display: flex;
      height: 100px;

      img {
        width: 150px;
        height: 100px;
      }

      .a-detail {
        padding-left: 6px;
        padding-top: 6px;

        p {
          color: grey;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
