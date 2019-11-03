import Vue from 'vue'
import Vuex from 'vuex'
import mutation from './store/mutations.js'
import action from './store/actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowPlayingList: [],
    comeSoonList: [],
    expectedList: [],
    cinemaList: [],
    cinemaTicket: []
  },
  mutations: mutation,
  actions: action
})
