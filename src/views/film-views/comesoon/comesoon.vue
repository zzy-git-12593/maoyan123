<template>
  <div class="comesoon-page-wrap">
    <div class="exxpeted-title">近期最受期待</div>
    <!-- <nowplayingSwiper :key="expectedList.length" v-if="expectedList"> -->
      <div class="expectedlist_wrapper" >
          <div class="expected_info" v-for="item in expectedList" :key="item.id" >
            <img :src="item.img|filterImg" alt />
            <div class="expected_mark">
               <span></span>
            </div>
            <div class="expected_wish">{{item.wish}}人想看</div>
            <div class="expected_name">{{item.nm}}</div>
            <div class="expected_timer">{{item.comingTitle|timer}}</div>
          </div>
      </div>
    <!-- </nowplayingSwiper> -->
    <my></my>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import my from './comesoon-movelist'

export default {
  components: {  my },
  filters: {
    filterImg (value) {
      return value.replace('w.h', '170.230')
    },
    timer(value){
      return value.split(' ')[0]
    }
  },
  computed: {
    ...mapState(['expectedList'])
  },
  mounted () {
    if (this.expectedList.length === 0) {
      console.log('最后欢迎')
      this.$store.dispatch('getExpectedListAction')
    } else {
      console.log('使用缓存数据')
    }
  }
}
</script>
<style>
.comesoon-page-wrap {
  height: 100%;
  overflow: auto;
}
.exxpeted-title {
  margin: 10px 0 10px 15px;
  font-size: 14px;
  color: #333;
}
.expectedlist_wrapper{
  margin: 0 15px;
  overflow-x: auto;
  display: flex;
  flex-direction: row;

}
.expected_info {
  width: 85px;
  margin-right: 15px;
  position: relative;
}
.expected_info img{
  display: block;
  width: 85px;
  height: 115px;
}
.expected_mark{
  position: absolute;
  top: 0;
  left: 0;
  width: 28px;
  line-height: 28px;
  text-align: center;
  background: rgba(61,63,71,.6);
  border-bottom-right-radius: 10px;
}
.expected_mark span{
  display: inline-block;
  width: 10px;
  height: 10px;
  background: url('../../../assets/images/love.png');
  background-size: 100%;
  background-repeat: no-repeat;
}
.expected_wish{
  position: absolute;
  top: 100px;
  right:0;
  color: #faaf00;
  font-size: 12px;
  font-weight: bold;
  line-height: 12px;
}
.expected_name{
  white-space:nowrap; 
	overflow:hidden; 
	text-overflow:ellipsis;
  margin-top: 5px;
  font-size: 13px;
  font-weight: bold;
}
.expected_timer{
  margin-top: 5px;
  font-size: 12px;
  font-weight: 100;
  color: #999;
}
</style>
