import axios from 'axios'

export default {
  getNowPlayingListAction (store) {
    axios({
      url: '/ajax/movieOnInfoList?token='
    }).then(res => {
      console.log(res.data.movieList)
      store.commit('getNowPlayingListMutations', res.data.movieList)
    })
  },

  getExpectedListAction (store) {
    axios({
      url: '/ajax/mostExpected?ci=10&limit=10&offset=0&token='
    }).then(res => {
      console.log(res.data.coming)
      store.commit('getExpectedListMutations', res.data.coming)
    })
  },

  getComeSoonListAction (store) {
    axios({
      url: '/ajax/comingList?ci=10&token=&limit=10'
    }).then(res => {
      // console.log(res.data.coming)
      store.commit('getComeSoonListMutations', res.data.coming)
    })
  },

  getCinemaListAction (store) {
    axios({
      url: '/ajax/cinemaList?day=2019-10-14&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1571052910748&cityId=10'
    }).then(res => {
      console.log(res.data.cinemas)
      store.commit('getCinemaListMutations', res.data.cinemas)
    })
  },
  getCinemaTicketActions (store, obj) {
    axios.get(`ajax/cinemaDetail?cinemaId=${obj.cinemaId}&movieId=1218029`)
      .then(res => {
        console.log(res)
        store.commit('getCinemaTicketMutation', res.data)
      })
  }

}
