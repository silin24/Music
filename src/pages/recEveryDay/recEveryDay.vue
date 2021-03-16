<template>
  <div class="recEveryDay" :class="{mask:mask}" @click="changeMoreChoice">
    <div class="top">
      <div>
        <img src="../../common/img/ds.png" />
        <i class="iconfont icon-jiantouarrow506" @click="$router.back()"></i>
        <div class="date">
          <span class="day">{{ reDay }}/</span>
          <span class="mouth">{{ reMouth }}</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="btm-header">
        <div>
          <i class="iconfont icon-bofang2"></i>
          <span>播放全部</span>
        </div>
        <i class="iconfont icon-ziyuan1"></i>
      </div>
      <div class="btm-content">
        <ul>
          <li v-for="(song , index) in recDaySong" :key="index" @click="goPlay(song)">
            <div class="left">
              <img :src="song.album.picUrl" />
              <span>{{song.name}}</span>
            </div>
            <div class="right">
              <i class="iconfont icon-caozuo-bofang"></i>
              <i class="iconfont icon-gengduo-shuxiang" @click.stop="more(song)"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- moreChoice -->
    <MoreChoice v-if="moreOut":more="moreChoice"/>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState } from "vuex";
import { SAVE_SONGINFO,SHOWSONGDETAIL,SHOWMINIPLAY ,SAVE_IDARR,SAVE_PLAYLISTDATA} from '../../store/mutations-type';

import MoreChoice from '../../components/moreChoice/moreChoice'

export default {
  components:{MoreChoice},
  data() {
    return {
      day: "",
      mouth: "",
      moreOut:false,
      moreChoice:{},
      mask:false
    };
  },
  methods: {
    changeMoreChoice(){
      if (this.moreOut && this.mask) {
        this.mask = false
        this.moreOut = false
      }
    },
    goPlay(song){
      let reSong = {}
      reSong.id = song.id
      reSong.name = song.name
      reSong.author = song.artists[0].name
      reSong.picUrl = song.album.picUrl
      this.$store.commit(SHOWSONGDETAIL,true)
      this.$store.commit(SHOWMINIPLAY,Date.now())
      this.$store.commit(SAVE_SONGINFO,reSong)
      this.$store.commit(SAVE_IDARR,this.recDaySongIdArr)
      this.$store.commit(SAVE_PLAYLISTDATA,this.saveSongDetail)
    },
    more(song){
      // console.log('more');
      console.log(111);
      this.mask = true
      this.moreOut = true
      let obj = {}
      let reSong = {}
      reSong.id = song.id
      reSong.name = song.name
      reSong.author = song.artists[0].name
      reSong.picUrl = song.album.picUrl
      obj.song = reSong
      obj.out = true
      this.moreChoice = obj
    }

  },
  computed: {
    reMouth() {
      let mouth = new Date();
      return mouth.getMonth() + 1;
    },
    reDay() {
      let day = new Date();
      return day.getDate();
    },
    ...mapState({
      recDaySong: (state) => state.recDaySong,
    }),
    saveSongDetail(){
      let d = this.recDaySong.map((item)=>{
        let reSong ={}
         reSong.id = item.id
        reSong.name = item.name
        reSong.author = item.artists[0].name
        reSong.picUrl = item.album.picUrl
        return reSong
      })
      // console.log(d);
      return d
    },
    recDaySongIdArr(){
      let arr = []
      this.recDaySong.forEach(element => {
        let id = element.id
        arr.push(id)
      });
      // console.log(arr);
      return arr
    }
  },
  mounted() {
     this.$store.dispatch("getRecDaySongAction")
  },
  watch: {
    recDaySong() {
      this.$nextTick(() => {
        new BScroll(".btm-content", {
          scrollY: true,
          click: true,
        });
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.recEveryDay
  width 100%
  &.mask
    background-color: rgba(1,1,1,0.3);
  .top
    position relative
    div
      div
        position absolute
        left 30px
        bottom 50px
        color #fff
        .day
          font-size 60px
        .mouth
          font-size 45px
      i
        font-size 80px
        color #fff
        position absolute
        top 30px
        left 30px
      img
        width 100%
        height 550px
  .bottom
    .btm-header
      height 120px
      box-sizing border-box
      padding 40px
      display flex
      justify-content space-between
      align-items center
      div
        display flex
        span
          font-size 45px
        i
          margin-right 40px
          font-size 55px
          color #ff3a3a
    .btm-content
      height calc(100vh - 670px)
      overflow hidden
      ul
        padding 20px 40px
        // display flex
        // flex-direction column
        // justify-content space-around
        li
          display flex
          margin-bottom 30px
          justify-content space-between
          align-items center
          .right
            i
              padding-right 40px
              font-size 60px
          .left
            display flex
            align-items center
            img
              margin-right 20px
              width 108px
              height 108px
              border-radius 30px
            span
              font-size 40px
</style>