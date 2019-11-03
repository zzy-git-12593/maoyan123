<template>
  <div class="cinema-list-wrap">
    <div class="cinema-item" v-for="item in cinemaList" :key="item.id">
      <div class="cinema-name-wrap">
        <span class="cinema-name">{{item.nm}}</span>
        <span class="cinema-price">
          {{item.sellPrice}}
          <span class="cinema-price-desc">元起</span>
        </span>
      </div>
      <div class="cinema-address">
        <span class="addr">{{item.addr}}</span>
        <span class="distance">{{item.distance}}</span>
      </div>
      <div class="cinema-info">
        <span v-if="item.tag.allowRefund">退票</span>
        <span v-if="item.tag.endorse">改签</span>
        <span v-if="item.tag.snack">小吃</span>
        <span v-if="item.tag.vipTag">{{item.tag.vipTag}}</span>
        <div v-for="(data,index) in item.tag.hallTypeVOList" :key="index">
          <span v-if="data.name">{{data.name}}</span>
        </div>
      </div>

      <div class="cinema-info">
        <span>{{item.promotion.platformActivityTag}}</span>
        <span>{{item.promotion.cardPromotionTag}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['cinemaList'])
  },
  mounted () {
    if (this.cinemaList.length === 0) {
      console.log('电影院')
      this.$store.dispatch('getCinemaListAction')
    } else {
      console.log('使用缓存数据')
    }
  }
}
</script>
<style>
.cinema-list-wrap {
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.cinema-item {
  display: flex;
  flex-direction: column;
  margin: 0 15px;
  padding: 20px 0;
  border-bottom: 1px solid #e6e6e6;
}
.cinema-name-wrap {
  display: flex;
  flex-direction: row;
  line-height: 18px;
}
.cinema-name {
  font-size: 16px;
}
.cinema-price {
  font-size: 18px;
  color: rgb(240, 61, 55);
}
.cinema-price-desc {
  font-size: 14px;
}

.cinema-address {
  font-size: 13px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:4px 10px 0 0;
}
.addr,
.distance {
  color: #666666;
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
</style>
