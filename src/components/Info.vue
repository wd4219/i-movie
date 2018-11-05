<template>
  <div class="info">
    <div class="info-detail">
      <div class="info-img">
        <img src="../assets/mad_max_fury_road_whv_keyart.jpg">
      </div>
      <div class="info-text">
        <div class="text">
          <h3 class="title">反贪风暴3</h3>
          <p class="category">动作，科幻，冒险</p>
          <p class="pubdate">120分钟 - 2015-05-15</p>
        </div>
        <div class="rate">
          <div class="score">
            8.4
          </div>/10
        </div>
      </div>
    </div>
    <ul class="opearate-list">
      <li class="opearate-list-item">
        <i class="iconfont icon-list"></i> <div class="text">加入收藏</div> 
      </li>
      <li class="opearate-list-item">
        <i class="iconfont icon-tv"></i> <div class="text">播放视频</div> 
      </li>
      <li class="opearate-list-item">
        <i class="iconfont icon-movie"></i> <div class="text">查看详情</div> 
      </li>
    </ul>
    <div class="close">关闭</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .info{
    position: fixed;
    left: 0;
    text-align: left;
    right: 0;
    top: 0;
    bottom: 0;
    background:rgba(22, 23, 27, 0.95);
    z-index: 2;
    padding: 1.866667rem /* 140/75 */ .8rem /* 60/75 */ 0;
    .info-detail{
      display: flex;
      width: 100%;
    }
    .info-img{
      display: block;
      height: 4.733333rem /* 355/75 */;
      width: 3.066667rem /* 230/75 */;
      margin-right: .666667rem /* 50/75 */;
      overflow: hidden;
      box-shadow: 0 1px 20px rgba(0, 0, 0, 0.48);
      img{
        display: block;
        height: 100%;
      }
    }
    .info-text{
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: left;
      line-height: 1.5;
      padding: .133333rem /* 10/75 */ 0;
      justify-content: space-between;
      .title{
        font-size: 22px;
        color: #fff;
        font-weight: normal;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .category,.pubdate{
        font-size: 12px;
        color: #fff;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .rate{
        font-size: 8px;
        color: #676971;
        height: 1.333333rem /* 100/75 */;
        width: 1.333333rem /* 100/75 */;
        border-radius: 50%;
        border: 1px solid #ef1a51;
        display: flex;
        align-items: center;
        justify-content: center;
        .score{
          color: #ef1a51;
          font-size: 16px;
        }
      }
    }
    .opearate-list{
      border-radius: .266667rem /* 20/75 */;
      margin-top: .4rem /* 30/75 */;
      width: 100%;
      color: #fff;
      font-size: 16px;
      background: #242527;
      .iconfont{
        font-size: 24px;
        margin-right: .666667rem /* 50/75 */;
      }
      &-item{
        height: 1.6rem /* 120/75 */;
        border-bottom: 1px solid #202023;
        padding: 0 .6rem /* 45/75 */;
        display: flex;
        align-items: center;
      }
    }
    .close{
      font-size: 15px;
      color: #ef1a51;
      margin-top: 1.6rem /* 120/75 */;
      text-align: center;
    }
  }
</style>
