<template>
    <div v-if="cinemaTicket.channelId" class="movie_ticket_page">
        <div class="head-title">{{cinemaTicket.cinemaData.nm}}</div>
        <dowload/>
        <div>
            <div class="cinema_title_wrapper">
                <div>
                    <div class="cinema_title">{{cinemaTicket.cinemaData.nm}}</div>
                    <div class="cinema_address">{{cinemaTicket.cinemaData.addr}}</div>
                </div>
                <img src="../../assets/images/address.png" alt="">
            </div>
            <swiper :key="cinemaTicket.showData.movies.length" class="cinema_ticket_swiper-wrapper">
                <div class="swiper-slide"  v-for="item in cinemaTicket.showData.movies" :key="item.id" @click="movieTicket(item)" ref="refs">
                    <img :src="item.img | filterImg" alt="">
                </div>
            </swiper>
        </div>
        <cinemaTicketSell :movies-id="moviesId"></cinemaTicketSell>
        <cinemaSnack></cinemaSnack>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import dowload from '../film-views/nav/dowload'
import swiper from '../cinemaTicket/cinemaTicket/cinemaTicketSellSwiper'
import cinemaTicketSell from '../cinemaTicket/cinemaTicket/cinemaTicketSell.vue'
import cinemaSnack from '../cinemaTicket/cinemaTicket/cinemaSnack'
export default {
  computed: {
    ...mapState(['cinemaTicket'])
  },
  data () {
    return {
      moviesId: 0,
    }
  },
  filters: {
    filterImg (item) {
      return item.replace('w.h', '148.208')
    }
  },
  components: {
    dowload, swiper, cinemaTicketSell,cinemaSnack
  },
  mounted () {
    this.$store.dispatch('getCinemaTicketActions', { cinemaId: this.$route.query.cinemaId, movieId: this.$route.query.movieId })
    this.moviesId = this.$route.query.moviesId
  },
  methods: {
    movieTicket (item) {
      this.$router.replace({ path: '/cinemaTicket', query: { cinemaId: this.cinemaTicket.cinemaData.cinemaId, movieId: this.$route.query.movieId, moviesId: item.id } })
      this.moviesId = this.$route.query.moviesId
    }

  }
}
</script>
<style>
.movie_ticket_page{width: 100%;overflow-x: hidden;}
.cinema_title_wrapper{display: flex;flex-direction: row;justify-content: space-between;padding: 15px;align-items: center;border-top: 1px solid #f2f2f2}
.cinema_title{font-size: 20px;color: #333;font-weight: bold}
.cinema_address{font-size: 13px;color: #777;margin-top: 5px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
.cinema_title_wrapper img{width: 19px;height: 22px;margin-right: 15px}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    /* background: #fff; */
    /* Center slide text vertically; */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: 300ms;
    transform: scale(0.8);
    }
.swiper-slide-active,.swiper-slide-duplicate-active{
      transform: scale(1);
}
.swiper-slide-active{
    width: 80px !important;
    height: 110px;
    border: 2px solid white

}
.swiper-slide img{
  width: 100%;
  height: 100%;
}

.cinema_ticket_swiper-wrapper{background: green;padding: 10px 0;height: 135px;}
</style>
