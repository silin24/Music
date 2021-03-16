<template>
  <div class="list">
    <div class="header">
      <div class="left">
        <h2>排行榜</h2>
      </div>
      <div class="right">
        <button>
          <span>更多 &gt;</span>
        </button>
      </div>
    </div>
    <ListContent/>
  </div>
</template>
<script>
import ListContent from './listContent'
  export default {
    components:{
      ListContent
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .list
    height 912px
    // overflow hidden
    .header
      box-sizing border-box
      padding-top 60px
      height 178px
      display flex
      justify-content space-between
      .left
        margin-left 44px
        margin-top 10px
        h2
          font-size 50px
          font-weight 700
      .right
        margin-right 44px
        button
          display flex
          border 2px solid #e6e6e6
          width 100%
          height 67px
          border-radius 30px
          span
            font-size 35px

</style>






