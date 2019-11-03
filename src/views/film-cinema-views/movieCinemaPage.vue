<template>
  <div>
    <div class="head-title">{{cinemaDetail.nm}}</div>
    <!-- <div> -->
    <dowload></dowload>
    <movieInfo :cinema-detail="cinemaDetail"></movieInfo>
    <movieShowDate :cinemas="cinemas" :cinema-detail="cinemaDetail"></movieShowDate>
    <!-- </div> -->
  </div>
</template>

<script>
import dowload from '../film-views/nav/dowload'
import movieInfo from './movieInfo'
import movieShowDate from './movieShowDate'
import axios from 'axios'
export default {
  data () {
    return {
      cinemaDetail: [],
      cinemas: []
    }
  },
  components: {
    dowload,
    movieInfo,
    movieShowDate
  },
  mounted () {
    axios.get(`ajax/detailmovie?movieId=${this.$route.query.movieID}`)
      .then(res => {
        console.log('1111111111', res.data)
        this.cinemaDetail = res.data.detailMovie
      }),
    axios.post(`ajax/movie?forceUpdate=${new Date().getTime()}`).then(res => {
      this.cinemas = res.data
      console.log(this.cinemas)
    })
  }
}
</script>
