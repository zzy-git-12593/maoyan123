import Vue from 'vue'
import Router from 'vue-router'
import Film from './components/film/film.vue'
import Cinema from './components/cinema/cinema.vue'
import My from './components/my/my.vue'
import NowPlaying from './views/film-views/nowplaying/nowplaying.vue'
import ComeSoon from './views/film-views/comesoon/comesoon.vue'
import movieCinemaPage from './views/film-cinema-views/movieCinemaPage.vue'
import CinemaTicket from './views/cinemaTicket/cinemaTicket'

import Home from './components/home.vue'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '*',
    redirect: '/home/film/nowplaying'
  },
  {
    path: '/home',
    component: Home,
    children: [{
      path: 'film',
      name: 'film',
      component: Film,
      children: [{
        path: 'nowplaying',
        name: 'nowplaying',
        component: NowPlaying
      },
      {
        path: 'comesoon',
        name: 'comesoon',
        component: ComeSoon
      }
      ]
    },
    {
      path: 'cinema',
      name: 'cinema',
      component: Cinema
    }
    ]
  },
  {
    path: '/movieCinemaPage',
    component: movieCinemaPage
  },
  {
    path: '/cinemaTicket',
    component: CinemaTicket
  },
  {
    path: '/my',
    name: 'my',
    component: My
  }
  ]
})
