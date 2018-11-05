<template>
  <div class="footer">
    <ul class="footer-list" >
      <li class="footer-list-item" :class="{active: page == 'movie'}" @click="goToPage('movie')">
        <i class="iconfont icon-movie"></i>
        <div class="text">电影</div>
      </li>
      <li class="footer-list-item" :class="{active: page == 'tv'}" @click="goToPage('tv')">
        <i class="iconfont icon-tv"></i>
        <div class="text">电视</div>
      </li>
      <li class="footer-list-item" :class="{active: page == 'list'}" @click="goToPage('list')"> 
        <i class="iconfont icon-list"></i>
        <div class="text">观看列表</div>
      </li>
      <li class="footer-list-item" :class="{active: page == 'profile'}" @click="goToPage('profile')">
        <i class="iconfont icon-profile"></i>
        <div class="text">个人中心</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 'movie'
    };
  },
  methods: {
    goToPage(page){
      this.page = page;
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: rgba(22, 23, 27, 0.9);
    height: 1.333333rem /* 100/75 */;
    font-size: 9px;
    color: #fff;
    .footer-list{
      display: flex;
      padding: .133333rem /* 10/75 */;
      box-sizing: border-box;
      height: 100%;
      &-item{
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        .iconfont{
          font-size: 18px;
        }
        &.active{
          color: #ef1a51;
        }
      }
    }
  }
</style>
