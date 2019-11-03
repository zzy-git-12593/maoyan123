<template>
    <div class="detail_cinemas_container">
        <div class="show_days">
            <div class="day" @click="tabClick" >今天10月27日</div>
            <div class="day" @click="tabClick" >今天10月28日</div>
            <div class="day" @click="tabClick" >今天10月29日</div>
            <div class="day" @click="tabClick" >今天10月29日</div>
            <div class="day" @click="tabClick" >今天10月29日</div>
        </div>
        <div class="show_nav">
            <div class="nav_tools">全城</div>
            <div class="nav_tools">品牌</div>
            <div class="nav_tools">特色</div>
        </div>
        <div class="show_cinemas">
            <div class="cinema_list" v-for="item in cinemas.cinemas" :key="item.id">
                <div class="cinema_list_content" @click="tocinemaTicket(item)">
                    <div class="cinema_nm">{{item.addr}}<span>{{item.sellPrice}}元起</span></div>
                    <div class="cinema_addr">松江区车墩镇124214松江区车墩镇124214松江区车墩镇124214松江区车墩镇124214松江区车墩镇124214松江区车墩镇124214</div>
                    <div class="cinema_info"><span>小吃</span><span>折扣</span></div>
                    <div class="cinema_card">{{item.promotion.cardPromotionTag}}</div>
                    <div class="cinema_scene">近期场次</div>
                </div>
                <div class="cinema_distance">{{item.distance}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['cinemas', 'cinemaDetail'],
  mounted () {
    console.log(this.cinemas)
  },
  methods: {
    tabClick () {

    },
    tocinemaTicket (item) {
      this.$router.push({ path: '/cinemaTicket', query: { cinemaId: item.id, movieId: this.cinemaDetail.id, moviesId: this.cinemaDetail.id } })
    }
  }
}
</script>
<style>

.detail_cinemas_container{width: 100%;display: flex;flex-direction: column}
.show_days{width: 100%;display: flex;flex-direction: row;justify-content: flex-start;overflow: auto;font-size: 14px;text-align: center;color: #666666;}
.day{width: 33.3%;flex-shrink: 0;padding:10px 15px;margin-left:2px;border-bottom: 2px solid #f03d37}

.show_nav{width: 100%;display: flex;flex-direction: row;border-top: 1px solid #f2f2f2;border-bottom: 1px solid #f2f2f2;color: #777777;font-size: 13px;position: relative;}
.nav_tools{width: 33.3%;margin:10px 0;text-align: center;border-left: 1px solid #f2f2f2;}
.nav_tools::after{content:'';width: 0;height: 0;border: 5px solid;border-color: #999999 transparent transparent;position: absolute;top: 16px;margin-left:2px }

.show_cinemas{display: flex;flex-direction: column;padding-right:10px;margin-left: 20px;border-bottom: 1px solid #f2f2f2}
.cinema_list{display: flex;flex-direction: row;justify-content: space-between;align-items: center;padding: 15px 0 10px 0;}
.cinema_list_content{width:80%;display: flex;flex-direction:column;flex-grow: 1;}
.cinema_nm{font-size: 16px;color: #000000;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
.cinema_nm span{font-size: 18px;color: #f03d37;overflow: hidden;}
.cinema_addr{width: 100%;font-size: 14px; color: #777777;padding: 3px 0;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
.cinema_info span{font-size: 12px;color: #FF9900;border: 1px solid #FF9900;margin-right:10px;padding: 0 3px}
.cinema_card,.cinema_scene{font-size: 12px;color: #999999;padding: 3px 0}

.cinema_distance{font-size: 14px; color: #666666;flex-shrink: 0;margin-left: 5px;}
</style>
