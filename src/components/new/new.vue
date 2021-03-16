<template>
  <div class="new">
    <div class="header">
      <div class="left">
        <ul>
          <li :class="{active:comName === 'NewSong'}" @click="comName = 'NewSong'">
            <h2>新歌</h2>
          </li>
          <li class="line">
            <i class="iconfont icon-tubiaozhizuo-"></i>
          </li>
          <li :class="{active:comName === 'NewDVD'}" @click="comName = 'NewDVD'">
            <h2>新碟</h2>
          </li>
          <li class="line">
            <i class="iconfont icon-tubiaozhizuo-"></i>
          </li>
          <li :class="{active:comName === 'NewAlbum'}" @click="comName = 'NewAlbum'">
            <h2>数字专辑</h2>
          </li>
        </ul>
      </div>
      <div class="right">
        <button @click="$router.push('/latestMusic')">
          <span>更多 &gt;</span>
          <!-- <i class="iconfont icon-arrow-right"></i> -->
        </button>
      </div>
    </div>
    <component :is="comName"></component>
  </div>
</template>

<script>

  import NewSong from "./newSong";
  import NewAlbum from "./newAlbum";
  import NewDVD from "./newDVD";
  export default {
    data() {
      return {
        comName: "NewSong",

      };
    },
    components:{
      NewSong,
      NewAlbum,
      NewDVD
    },
  };
</script>

<style lang="stylus" scoped>
  .new
    height 696px
    width 100%
    overflow hidden
    .header
      margin-top 60px
      display flex
      justify-content space-between

      .left
        margin-left 44px
        margin-top 10px
        ul
          display flex
          .line
            color #e6e6e6
          li
            color #999
            &.active
              color #333
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
