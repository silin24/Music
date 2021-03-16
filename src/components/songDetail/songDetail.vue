<template>
  <div class="songDetailWrapper">
    <audio
      :src="url"
      autoplay="true"
      ref="music"
      @ended="next"
      @timeupdate="playTime"
    ></audio>
    <div class="songDetail" v-if="isShowSongDetail">
      <div class="header" v-if="song">
        <i class="iconfont icon-ai-arrow-down" @click="handleChange(song)"></i>
        <div class="songInfo" v-if="song">
          <span class="musicname">{{ song.name }}</span>
          <span class="author">{{ song.author }}</span>
        </div>

        <i class="iconfont icon-lianjie1"></i>
      </div>
      <div class="playAnimation">
        <div class="discContainer" :class="{ discAnimation: Play === true }">
          <img src="../../common/img/disc.png" class="disc" />
          <img :src="song.picUrl" class="musicImg" v-if="song" />
        </div>
      </div>
      <div class="playControl">
        <div class="top">
          <i class="iconfont icon-icon_fuben"></i>
          <i class="iconfont icon-iconset0425"></i>
          <i class="iconfont icon-changpian"></i>
          <i class="iconfont icon-pinglun1"></i>
          <i class="iconfont icon-gengduo-shuxiang"></i>
        </div>
        <div class="middle">
          <div class="progress">
            <span>{{ currentTime }}</span>
            <div class="bar" @click="move">
              <!-- 实时进度条 -->
              <!-- <div class="currentBar" :style="{'width':currentWidth + 'px'}"> -->
              <div class="currentBar" v-bind:style="{width:currentWidth + 'px'}">
                <div class="circle"></div>
              </div>
            </div>
            <span>{{ durationTime }}</span>
          </div>
        </div>
        <div class="bottom">
          <i class="iconfont icon-suijibofang1"></i>
          <i class="iconfont icon-48shangyishou" @click="previous"></i>
          <!-- icon-zanting3 -->
          <i
            class="bfOrzt iconfont icon-zanting3"
            @click="isplay(false)"
            v-if="Play"
          ></i>
          <i
            class="bfOrzt iconfont icon-bofang1"
            @click="isplay(true)"
            v-else
          ></i>
          <i class="iconfont icon-49xiayishou" @click="next"></i>
          <i class="iconfont icon-caidan4"></i>
        </div>
      </div>
    </div>
    <!-- <div class="miniPlay" v-if="miniShow"></div> -->
    <!-- <MiniPlay v-if="showMini"/> -->
    <MiniPlay
      v-if="isshowMiniPlay"
      :miniPlay="this.$refs.music"
      :song="song"
      :isShowSongDetail="isShowSongDetail"
    />
  </div>
</template>

<script>
import MiniPlay from "../miniPlay/miniPlay.vue";
import { SAVE_MINISHOW, SHOWSONGDETAIL } from "../../store/mutations-type";
import { mapState } from "vuex";
import _ from "lodash";
import moment from "moment";
export default {
  components: {
    MiniPlay,
  },
  data() {
    return {
      isshowMiniPlay: false,
      isShowSongDetail: false,
      song: {},
      Play: true,
      idArr: [],
      url:'',
      currentTime: "00:00",
      durationTime: "00:00",
      currentWidth: 0
    };
  },
  methods: {
    move(e){
      // console.log(e.offsetX);
      let t =  e.offsetX/236 *this.$refs.music.duration
      // console.log(t);
      this.$refs.music.currentTime = t
    },
    playTime() {
      // console.log(this.$refs.music.currentTime);
      // console.log(this.$refs.music.duration);
      this.currentTime = moment(this.$refs.music.currentTime*1000).format("mm:ss");
      let a = this.$refs.music.currentTime/this.$refs.music.duration * 680/2.9
      // console.log(a);
      this.currentWidth = a
    },
    isplay(a) {
      this.Play = a;
      if (a) {
        this.$refs.music && this.$refs.music.play();
      } else {
        this.$refs.music && this.$refs.music.pause();
      }
    },
    previous() {
      if (this.idArr.length > 0 && this.song.id) {
        let currentId = this.song.id;
        let i = this.idArr.findIndex((item) => item == currentId);
        // console.log(i);
        if (i == 0) {
          this.$store.dispatch("getMusicUrlAction", i);
        } else {
          let musicId = this.idArr[i - 1];
          this.$store.dispatch("getMusicUrlAction", musicId);
          this.$store.dispatch("getAllSongDetailAction", musicId);
          this.song = this.playListData[i - 1];
        }
      }
    },
    next() {
      // console.log(111);
      this.currentWidth = 0
      this.currentTime= "00:00"
      if (this.idArr.length > 0 && this.song.id) {
        let currentId = this.song.id;
        let i = this.idArr.findIndex((item) => item == currentId);
        // console.log(i);
        if (i == this.idArr.length - 1) {
          this.$store.dispatch("getMusicUrlAction", i);
        } else {
          let musicId = this.idArr[i + 1];
          this.$store.dispatch("getMusicUrlAction", musicId);
          this.$store.dispatch("getAllSongDetailAction", musicId);
          this.song = this.playListData[i + 1];
        }
      }
    },
    handleChange(song) {
      this.isshowMiniPlay = true;
      this.$store.commit(SAVE_MINISHOW, Date.now());
      this.$store.commit(SHOWSONGDETAIL, false);
    },
  },
  computed: {
    ...mapState({
      musicUrl: (state) => state.musicUrl,
      recDaySong: (state) => state.recDaySong,
      showSongDetail: (state) => state.showSongDetail,
      showMiniPlay: (state) => state.showMiniPlay,
      songInfo: (state) => state.songInfo,
      Arr: (state) => state.idArr,
      playListData: (state) => state.playListData,
      songTime: (state) => state.songTime,
    }),
    reMusicUrl() {
      return this.musicUrl[0];
    },
  },
  watch: {
    reMusicUrl:{
      deep:true,
      handler(value){
        this.url = value.url
      }
    },
    songInfo() {
      let a = this.songInfo;
      this.song = a;
      let musicId = a.id;
      // console.log(musicId);
      this.$store.dispatch("getMusicUrlAction", musicId);
      // this.$store.dispatch("getAllSongDetailAction", musicId);
      this.$store.dispatch("getAllSongDetailAction", musicId);
    },
    Arr() {
      this.idArr = this.Arr;
    },
    showSongDetail() {
      this.isShowSongDetail = this.showSongDetail;
    },
    showMiniPlay() {
      this.isshowMiniPlay = false;
      // console.log(1);
      // this.isshowMiniPlay= true
    },
    songTime: {
      deep: true,
      handler(value) {
        let time = moment(value).format("mm:ss");
        this.durationTime = time;
      },
    },
  },
  mounted() {},
};
</script>

<style lang="stylus" scoped>
.songDetailWrapper
  overflow: hidden;
  width 100%
  height 100%
  background-color rgba(34, 34, 34, 0.8)
  .songDetail
    width 100%
    height 100%
    .header
      padding 30px 38px 30px 48px
      box-sizing border-box
      display flex
      // justify-content space-between
      align-items center
      color #fff
      .icon-ai-arrow-down
        font-size 80px
        width 15%
      .icon-lianjie1
        font-size 80px
        width 15%
        text-align center
      .songInfo
        font-size 55px
        width 70%
        text-align center
        display flex
        flex-direction column
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        .author
          margin-top 10px
          font-size 40px
          color #777
    .playAnimation
      padding 40px 135px
      box-sizing border-box
      .discContainer
        position relative
        margin-top 250px
        &.discAnimation
          animation disc 4s linear infinite
          animation-delay 1s
          @keyframes disc
            from
              transform rotate(0deg)
            to
              transform rotate(360deg)
        .disc
          width 810px
          height 810px
          border-radius 810px
        .musicImg
          width 540px
          height 540px
          border-radius 540px
          position absolute
          top 0
          right 0
          bottom 0
          left 0
          margin auto
    .playControl
      height 480px
      width 100%
      position fixed
      left 0
      bottom 0
      box-sizing border-box
      padding 0 55px 100px
      display flex
      flex-direction column
      justify-content space-around
      .top
        padding 0 100px
        display flex
        justify-content space-around
        align-items center
        color #fff
        i
          font-size 90px
      .middle
        text-align center
        .progress
          display flex
          align-items center
          justify-content space-between
          padding 0 30px
          color #fff
          box-sizing border-box
          .bar
            width 680px
            height 4px
            background-color rgb(122, 122, 122)
            position relative
            box-sizing border-box
            .currentBar
              position absolute
              top 0
              left 0
              z-index 2
              // width currentWidth
              height 4px
              background-color #fff
              box-sizing border-box
              .circle
                width 20px
                // z-index 3
                height 20px
                border-radius 20px
                background-color #fff
                position absolute
                right -20px
                top -8px
      .bottom
        padding 0 100px
        display flex
        justify-content space-around
        align-items center
        color #fff
        i
          font-size 80px
        .bfOrzt
          font-size 120px
</style>