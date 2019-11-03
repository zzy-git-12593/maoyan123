<template>
    <div v-if="cinemaTicket.showData.movies.length">
        <div v-for="item in cinemaTicket.showData.movies" :key="item.id">
            <div v-if="item.id ==moviesId" class="movies_ticket_wrapper">
                <div class="movies_ticket_header" style="padding:10px ;border-bottom: 1px solid #f2f2f2">
                    <div class="movies_title">
                        <div class="movies_nm">{{item.nm}}</div>
                        <div class="movies_sc">&nbsp;&nbsp;{{item.sc}}分</div>
                    </div>
                    <div class="movies_info">{{item.desc}}</div>
                </div>
                <div class="movies_ticket_list">
                   <div class="movies_tab">
                        <div class="movies_tab_page" v-for="(date,index) in item.shows" :key="date.dateShow" @click="choseDate(index)">{{date.dateShow}}</div>
                   </div>
                   <div class="movies_tab_container">
                       <div class="movies_seat_wrapper">
                            <div v-for="(dataShows,index) in item.shows" :key="index" v-show="index==dateIndex">
                                <!-- <div class="movies-vip_info" v-for="(vipInfo,index) in cinemaTicket.showData.vipInfo" :key="index">
                                    <span>折扣</span><span>{{vipInfo.title}}</span><span>{{vipInfo.process}}</span>
                                </div> -->
                                <div class="movie_sell_list_wrapper" v-for="items in dataShows.plist" v-show="dataShows.plist.length" :key="items.tm">
                                    <div class="movie_playtime">
                                        <span>{{items.tm}}</span><span>12:30 散场</span>
                                    </div>
                                    <div class="movie_playhall">
                                        <span>{{items.lang}} {{items.tp}}</span> <span>{{items.th}}</span>
                                    </div>
                                    <div class="movie_vip_price">
                                        <div class="price_symbol"><span>￥</span><span>{{items.vipPrice}}</span><span>{{items.vipPriceName}}</span></div>
                                        <div class="first_order">{{items.vipPriceNameNew}}</div>
                                    </div>
                                    <div class="movie_buy_btn">
                                        购票
                                    </div>
                                </div>
                            </div>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      dateIndex: 0
    }
  },
  computed: {
    ...mapState(['cinemaTicket'])
  },
  props: ['moviesId'],
  methods: {
    choseDate (index) {
      this.dateIndex = index
    }
  }
}
</script>
<style>
    .movies_ticket_wrapper{width: 100%;display: flex;flex-direction: column;};
    .movies_ticket_header{display: flex;flex-direction: column}
    .movies_title{display: flex;flex-direction: row;justify-content: center}
    .movies_nm{font-size: 18px;font-weight: bold;color: #000000;line-height: 21px}
    .movies_sc{font-size: 16px;font-weight: bold;color: #FFB400;line-height: 21px}
    .movies_info{font-size: 13px;color: #999999;text-align: center;padding: 5px 0 0 0;}

    .movies_tab{width:100%;display: flex;flex-direction: row;overflow: auto;margin: 5px}
    .movies_tab_page{width: 33.33%;flex-shrink: 0;font-size:14px;padding: 5px 5px 10px;border-bottom: 1px solid salmon}

    .movie_sell_list_wrapper{margin: 0 10px;padding: 15px 0;border-bottom: 1px solid #eeeeee;display: flex;justify-content: flex-start;align-items: center}
    .movie_sell_list_wrapper:last-child{border-bottom: none}
    .movie_playtime{display: flex;flex-direction: column;font-size: 20px;margin-right: 10px}
    .movie_playtime span:nth-child(2){font-size: 12px;color: #777777;margin-top: 5px}
    .movie_playhall{display: flex;flex-direction: column;flex: 1;font-size: 13px;color: #333;margin-right: 10px}
    .movie_playhall span:nth-child(2){font-size: 12px;color: #777777;margin-top: 5px}
    .movie_vip_price{display: flex;flex-direction: column}
    .price_symbol span:nth-child(1){font-size: 12px;color: #f03d37}
    .price_symbol span:nth-child(2){font-size: 16px;color: #f03d37}
    .price_symbol span:nth-child(3){font-size: 12px;color: #fff;background: #FF9900;margin-left: 3px;line-height: 12px;padding: 1px;border-radius: 3px}
    .first_order{font-size: 12px;color: #777777;margin-top: 5px}
    .movie_buy_btn{line-height: 12px;font-size: 12px;color: #fff;background: #f03d37;border-radius: 4px;padding: 8px 15px;margin-left: 25px}
</style>
