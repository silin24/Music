<template>
  <div ref="miniPlay" class="miniPlay">
    <!-- <div v-html="audioDom"></div> -->
    <div class="miniPlay1" v-if="show && !!!$route.meta.isShowFooter" @click="changeDetail">
      <div class="circle">
        <div>
          <div></div>
        </div>
      </div>
      <div class="musicInfo">
        <span class="name">{{song.name}}</span>
        <span class="autuor">-{{song.author}}</span>
      </div>
      <!-- <i class="iconfont icon-bofang1" @click="isPlay(true)"></i> -->
      <i class="bfOrzt iconfont icon-zanting3" @click.stop="isPlay(false)" v-if="play"></i>
      <i class="bfOrzt iconfont icon-bofang1" @click.stop="isPlay(true)" v-else></i>
      <i class="iconfont icon-caidan4" @click.stop="closeMiniShow"></i>
    </div>
    <div class="miniPlay2" v-if=" show && $route.meta.isShowFooter" @click="changeDetail">
      <div class="circle">
        <div>
          <div></div>
        </div>
      </div>
      <div class="musicInfo">
        <span class="name">{{song.name}}</span>
        <span class="autuor">-{{song.author}}</span>
      </div>
      <i class="bfOrzt iconfont icon-zanting3" @click.stop="isPlay(false)" v-if="play"></i>
      <i class="bfOrzt iconfont icon-bofang1" @click.stop="isPlay(true)" v-else></i>
      <i class="iconfont icon-caidan4" @click.stop="closeMiniShow"></i>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { SHOWSONGDETAIL,SHOWMINIPLAY} from '../../store/mutations-type';

export default {
  props:["miniPlay","song","isShowSongDetail"],
  data() {
    return {
      show:true,
      // songDetail:{
      //   name:'七里香',
      //   author:'周杰伦'
      // },
      play:true,
    };
  },
  methods: {
    closeMiniShow(){
      this.show = false
      this.miniPlay.pause()
    },
    isPlay(a) {
      this.play = a;
      // console.log(this.miniPlay);
      if (a) {
      this.miniPlay.play()
      }else{
      this.miniPlay.pause()
      }
    },
    changeDetail(){
      this.show = false
      // console.log(this.isShowSongDetail);
      // this.isShowSongDetail = true
      this.$store.commit(SHOWSONGDETAIL,true)
      this.$store.commit(SHOWMINIPLAY,Date.now())


    }
  },
  mounted() {
    // console.log(this.miniPlay);
  },
  watch:{
    reMiniShow(){
      this.show = true
    }
  },
};
</script>


<style lang="stylus" scoped>
.miniPlay
  .miniPlay1
    height 136px
    width 100%
    background-color #fbfbfb
    position fixed
    left 0
    // bottom 136px
    bottom 0px
    display flex
    align-items center
    // top-border-1px(#e6e6e6)
    .circle
      height 118px
      width 118px
      border-radius 118px
      background-color #4e4e4e
      position relative
      left: 47px;
      bottom: 20px;
      margin-right 70px
      z-index: 99;
      div
        width 78px
        height 78px
        border-radius 78px
        background-color #0d0807
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        margin auto
        div
          width 34px
          height 34px
          border-radius 34px
          background-color #9e0908
          position absolute
          top 0
          right 0
          bottom 0
          left 0
          margin auto
    .musicInfo
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      width 50%
      line-height: 136px;
      .name
        font-size 50px
        font-weight 700
        margin-right 20px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      .autuor
        font-size 30px
        color #646464
    .icon-bofang1
      margin 0 70px 0 80px
      font-size 80px
    .icon-zanting3
      margin 0 70px 0 80px
      font-size 80px
    .icon-caidan4
      margin-right 50px
      font-size 80px
  .miniPlay2
    height 136px
    width 100%
    position fixed
    left 0
    // bottom 329px
    bottom 193px
    background-color #fbfbfb
    display flex
    align-items center
    // top-border-1px(#e6e6e6)
    .circle
      height 118px
      width 118px
      border-radius 118px
      background-color #4e4e4e
      position relative
      margin -40px 24px 0 47px
      z-index: 99;
      div
        width 78px
        height 78px
        border-radius 78px
        background-color #0d0807
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        margin auto
        div
          width 34px
          height 34px
          border-radius 34px
          background-color #9e0908
          position absolute
          top 0
          right 0
          bottom 0
          left 0
          margin auto
    .musicInfo
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      width 50%
      margin-top 47px
      .name
        font-size 45px
        font-weight 700
        margin-right 20px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      .autuor
        font-size 30px
        color #646464
    .icon-bofang1
      margin 0 70px 0 80px
      font-size 80px
    .icon-zanting3
      margin 0 70px 0 80px
      font-size 80px
    .icon-caidan4
      margin-right 50px
      font-size 80px
</style>