import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/Movie.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // component: Movie
      redirect: 'movie'
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    }
  ]
})
