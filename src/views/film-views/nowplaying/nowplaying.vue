<template>
  <div class="nowplay-page-wrap" >
    <div v-for="item in nowPlayingList" :key="item.id" class="moive-list" @click="ToMovieCinemaPage(item)">
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
          <div class="moive-score" v-if="!item.globalReleased">
            <span class="moive-src">{{item.wish}}</span>
            <span>人想看</span>
          </div>

          <div class="moive-score" v-else-if="item.sc > 0">
            <span>观众评&nbsp;</span>
            <span class="moive-src">{{item.sc}}</span>
          </div>

          <div class="moive-score" v-else-if="item.sc == 0">
            <span>暂无评分</span>
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
  filters: {
    filterImg (value) {
      return value.replace('w.h', '128.180')
    }
  },
  computed: {
    ...mapState(['nowPlayingList'])
  },
  mounted () {
    if (this.nowPlayingList.length === 0) {
      console.log('111')
      this.$store.dispatch('getNowPlayingListAction')
    } else {
      console.log('使用缓存数据')
    }
  },
  methods: {
    ToMovieCinemaPage (item) {
      this.$router.push({ path: '/movieCinemaPage', query: { movieID: item.id } })
    }
  }
}
</script>
<style>
.nowplay-page-wrap {
  flex-grow: 1;
  /* height: 100%; */
  overflow: auto;
}
.moive-list {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
}
.moive-img {
  flex-shrink: 0;
  width: 64px;
  height: 90px;
}
.moive-img img {
  width: 100%;
  height: 100%;
}

.moive-content-wrap {
  flex-grow: 1;
  padding: 10px 0;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
}
.moive-content-left-wrap {
  flex-grow: 1;
}
.moive-title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 2px;
}
.moive-title p {
  font-size: 17px;
  font-weight: bold;
  padding-right: 5px;
}
.moive-score,
.moive-actor {
  width: 210px;
  font-size: 13px;
  color: #666666;
  padding-top: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.moive-score {
  line-height: 15px;
}
.moive-src {
  color: #faaf00;
  font-size: 15px;
  font-weight: bold;
}
.moive-buy-btn {
  flex-shrink: 0;
  margin-right: 15px;
  padding: 4px 10px;
  background: #f03d37;
  color: white;
  font-size: 13px;
  border-radius: 5px;
}
.version {
  width: 44px;
  height: 22px;
}
.version3d {
  width: 20px;
  height: 20px;
}
</style>
