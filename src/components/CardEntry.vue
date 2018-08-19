<template>
  <div class="card-entry" @touchstart="go(data.path)">
    <div class="a-title">
      {{data.title}}
    </div>
    <div class="a-sub">
      {{data.sub}}
    </div>
    <div class="a-logo">
      <img :src="data.img" alt="">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    go (path) {
      this.$router.push({
        path: path
      })
    }
  }
}
</script>
<style lang="stylus">
.card-entry {
  width: 100%;
  height: 140px;
  background: white;
  box-shadow: 0 0px 3px #9E9E9E;
  position: relative;

  .a-title {
    margin-left: 6px;
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  .a-sub {
    margin-left: 6px;
    margin-top: 2px;
    font-size: 12px;
  }

  .a-logo {
    width: 100px;
    height: 70px;
    position: absolute;
    bottom: 2px;
    right: 2px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
