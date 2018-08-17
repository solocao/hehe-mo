<template>
  <div style="height: 100%;">
    <div class="z-app" id="app">
      <keep-alive>
        <router-view/>
      </keep-alive>
      <div class="z-foot">
        <buttom-nav></buttom-nav>
      </div>
    </div>

  </div>

</template>

<script>
import ButtomNav from './components/BottomNav.vue'
require('assets/css/common.less')

export default {
  name: 'App',
  components: {
    ButtomNav
  }
}
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 44px; */
}
</style>
