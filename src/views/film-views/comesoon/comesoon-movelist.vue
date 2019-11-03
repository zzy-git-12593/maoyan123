<template>
  <!-- 近期波放列表 -->
  <div class="comesoon-moivelist-wrap">
    <div v-for="item in comeSoonList" :key="item.id" class="moive-list">
      <div class="move-data">{{item.data}}</div>
      <div class="moive-img">
        <img :src="item.img | filterImg " alt />
      </div>
      <div class="moive-content-wrap">
        <div class="moive-content-left-wrap">
          <div class="moive-title">
            <p>{{item.nm}}</p>
              <img v-if="item.version==='v2d imax'" class="version" src="@/assets/images/2DIMAX.png" />
              <img v-if="item.version==='v3d imax'" class="version" src="@/assets/images/3DIMAX.png" />
              <img v-if="item.version==='imax'" class="version" src="@/assets/images/IMAX.png" />
              <img v-if="item.version==='v3d'" class="version3d" src="@/assets/images/3D.png" />
          </div>

          <div class="moive-score">
            <span>{{item.wish}}想看</span>
          </div>

          <div class="moive-actor">主演：{{item.star}}</div>

          <div class="moive-actor">{{item.showInfo}}</div>
        </div>

        <div class="moive-buy-btn">购票</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['comeSoonList'])
  },
  mounted () {
    if (this.comeSoonList.length === 0) {
      console.log('即将上映')
      this.$store.dispatch('getComeSoonListAction')
    } else {
      console.log('使用缓存数据')
    }
  },
  filters: {
    filterImg (value) {
      return value.replace('w.h', '128.180')
    }
  },
  methods: {

  }

}
</script>
