export default {
  getNowPlayingListMutations (state, data) {
    state.nowPlayingList = data
  },
  getExpectedListMutations (state, data) {
    state.expectedList = data
  },
  getComeSoonListMutations (state, data) {
    state.comeSoonList = data
  },
  getCinemaListMutations (state, data) {
    state.cinemaList = data
  },
  getCinemaTicketMutation (state, data) {
    state.cinemaTicket = data
  }
}
