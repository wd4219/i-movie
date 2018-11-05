<template>
  <div class="topbar">
    <div class="nav">电影<span class="iconfont icon-search"></span></div>
    <div class="category-list-container" ref="container">
      <ul class="category-list clearfix">
          <li class="category-list-item" @click="goCategory($event,0)" :class="{active: current == 0}">
            为你推荐
          </li>
          <li class="category-list-item"  @click="goCategory($event,1)">
            热门
          </li>
          <li class="category-list-item"  @click="goCategory($event,2)">
            最新
          </li>
          <li class="category-list-item"  @click="goCategory($event,3)">
            动作
          </li>
          <li class="category-list-item"  @click="goCategory($event,4)">
            动作
          </li>
          <li class="category-list-item"  @click="goCategory($event,5)">
            动作
          </li>
          <li class="category-list-item"  @click="goCategory($event,6)">
            动作
          </li>
          <li class="category-list-item"  @click="goCategory($event,7)">
            动作
          </li>
          <li class="category-list-item"  @click="goCategory($event,8)">
            动作
          </li>
          <li class="category-list-item"  @click="goCategory($event,9)">
            动作
          </li>
          <div class="line" ref="line"></div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
    }
  },
  methods: {
    goCategory(e,index) {
      let width = e.target.offsetWidth;
      let left = e.target.offsetLeft;
      this.$refs.line.style.width = width + "px";
      this.$refs.line.style.left = left + "px";
      let screenWidth = document.body.clientWidth;
      this.$refs.container.scrollLeft = left - screenWidth / 2 + (width / 2);
      this.current = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.topbar {
  background: rgba(22, 23, 27, 0.95);
  padding: 0.466667rem /* 35/75 */ 0;
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
}
.nav {
  font-size: 20px;
  color: #ef1a51;
  text-align: center;
  height: 0.933333rem /* 70/75 */;
  line-height: 0.933333rem /* 70/75 */;
  position: relative;
  .iconfont {
    position: absolute;
    right: 0.4rem /* 30/75 */;
    font-size: 24px;
    transform: translateY(-50%);
    color: #5a5c63;
  }
}
.category-list-container {
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
  width: 100%;
  overflow-x: auto;
}
.category-list {
  display: inline-block;
  font-size: 0;
  height: 0.933333rem /* 70/75 */;
  line-height: 0.933333rem /* 70/75 */;
  white-space: nowrap;
  width: auto;
  padding: 0 0.533333rem /* 40/75 */;
  position: relative;
  .line {
    height: 0.053333rem /* 4/75 */;
    background: #ef1a51;
    left: .533333rem /* 40/75 */;
    width: 2rem /* 150/75 */;
    border-radius: 0.026667rem /* 2/75 */;
    position: absolute;
    bottom: 0;
    transition: all 0.5s;
  }
  &-item {
    font-size: 15px;
    display: inline-block;
    padding: 0 0.333333rem /* 25/75 */;
    color: #c7c8c9;
    &.active {
      color: #ef1a51;
    }
  }
}
</style>
