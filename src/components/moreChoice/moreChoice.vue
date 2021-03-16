<template>
  <div class="moreChoice" :class="{ out: more.out }">
    <div class="moreHeader">
      <div class="songInfo">
        <!-- <img src="../../common/img/4.png" alt="" /> -->
        <img :src="more.song.picUrl" alt="" />
        <div>
          <span class="name">歌曲:{{ more.song.name }}</span>
          <span class="author">{{ more.song.author }}</span>
        </div>
      </div>
      <button>vip首开5元</button>
    </div>
    <div class="choice">
      <ul>
        <li>
          <i class="iconfont icon-bofang3"></i>
          <span>下一首播放</span>
        </li>
        <li>
          <i class="iconfont icon-jia"></i>
          <span>收藏到歌单</span>
        </li>
        <li>
          <i class="iconfont icon-xiazai2"></i>
          <span>下载</span>
        </li>
        <li>
          <i class="iconfont icon-xinxi1"></i>
          <span>评论</span>
        </li>
        <li>
          <i class="iconfont icon-lianjie1"></i>
          <span>分享</span>
        </li>
        <li>
          <i class="iconfont icon-icontouxiang"></i>
          <span>歌手:</span>
        </li>
        <li>
          <i class="iconfont icon-changpian"></i>
          <span>专辑:</span>
        </li>
        <li>
          <i class="iconfont icon-songlist"></i>
          <span>设为铃声</span>
        </li>
        <li>
          <i class="iconfont icon-piaoju"></i>
          <span>单曲购买</span>
        </li>
        <li>
          <i class="iconfont icon-paixing1"></i>
          <span>人气榜应援</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["more"],
  data() {
    return {
      // on:false
      // on: true,
    };
  },
};
</script>

<style lang="stylus" scoped>
.moreChoice
  position fixed
  bottom 0
  left 0
  box-sizing border-box
  padding 40px 40px 0
  width 100%
  height 1500px
  border-radius 50px 50px 0 0
  background-color #fff
  transition transform 5s
  transform translateY(100%)
  &.out
    transform translateY(0)
  .moreHeader
    border-bottom 1px solid #e6e6e6
    box-sizing border-box
    height 200px
    display flex
    justify-content space-between
    align-items center
    .songInfo
      display flex
      align-items center
      div
        display flex
        flex-direction column
        span
          margin 10px 0
      img
        width 150px
        height 150px
        margin-right 20px
    button
      border 1px solid #C20C0C
      background-color #fff
      border-radius 40px
      width 250px
      height 70px
      text-align center
      line-height 70px
      color #C20C0C
  .choice
    height 1300px
    padding-top 30px
    ul
      li
        height 120px
        line-height 120px
        font-size 42px
        i
          font-size 50px
          margin-right 40px
</style>