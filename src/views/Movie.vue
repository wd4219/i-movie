<template>
  <div class="home">
    <v-topbar></v-topbar>
    <div class="movie-container">
      <ul class="movie-list">
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li><li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
        <li class="movie-list-item">
          <img src="../assets/p2531887203.webp" alt="">
        </li>
      </ul>
    </div>
    <v-info v-show="false"></v-info>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar';
import Info from '@/components/Info';

export default {
  name: 'home',
  components: {
    'v-topbar': TopBar,
    'v-info': Info
  }
}
</script>

<style lang="scss" scoped>
  .movie-container{
    width: 100%;
    scroll-behavior: smooth;
    .movie-list{
      display: flex;
      width: 100%;
      flex-flow: row wrap;
      &-item{
        width: 50%;
        flex: 0 0 50%;
        img{
          display: block;
          width: 100%;
        }
      }
    }
  }
</style>
