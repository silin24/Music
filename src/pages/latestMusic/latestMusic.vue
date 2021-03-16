<template>
  <div class="latestMusic">
    <div class="header">
      <div class="headerTop">
        <i class="iconfont icon-arrowLeft" @click="$router.back()"></i>
        <h2>最新音乐</h2>
      </div>
      <div class="headerBtm">
        <div class="headerScroll">
          <ul>
          </ul>
        </div>
        <i class="iconfont icon-caidan3"></i>
      </div>
    </div>
    <!-- 歌单内容展示区 -->
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="stylus" scoped>
.latestMusic
  .header
      height 260px
      width 100%
      padding 40px
      box-sizing border-box
      // background-color #bfa
      border-bottom 1px solid #e6e6e6
      display flex
      flex-direction column
      // justify-content space-between
      .headerTop
        display flex
        align-items center
        margin-bottom 50px
        h2
          font-size 55px
          font-weight 700
        .icon-arrowLeft
          font-size 80px
          margin-right 30px
</style>