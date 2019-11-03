
<template>
  <div class="nav-menus">
    <div class="nav-location">定位</div>
    <div class="nav-nowpalying" @click="changeNowPalying">正在热映</div>
    <div class="comesoon" @click="changeComeSoon">即将上映</div>
    <div class="nav-search">
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    changeNowPalying () {
      if (this.$route.path !== '/home/film/nowplaying') {
        this.$router.replace('/home/film/nowplaying')
      }
    },
    changeComeSoon () {
      if (this.$route.path !== '/home/film/comesoon') {
        this.$router.replace('/home/film/comesoon')
      }
    }
  }
}
</script>
<style>
.nav-menus {
  flex-shrink: 0;
  width: 100%;
  height: 45px;
  font-size: 15px;
  color: #666666;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid #e8e8e8;
  border-top: 1px solid #e8e8e8;
}
.nav-nowpalying {
  /* line-height: 45px; */
  padding: 0 15px;
}
.active {
  color: #f03d37;
  border-bottom: 2px solid #f03d37;
}
</style>
