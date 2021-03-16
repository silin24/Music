<template>
  <div class="songListDetail">
    <div class="header">
      <div>
        <i class="iconfont icon-arrowLeft" @click="$router.back()"></i>
        <h3>歌单</h3>
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gengduo-shuxiang"></i>
      </div>
      <img v-lazy="playListDetail.coverImgUrl" alt="" />
      <h2>经典回顾</h2>
      <div class="comment">
        <i class="iconfont icon-jia"></i>
        <span>555</span>
        <i class="iconfont icon-tubiaozhizuo-"></i>
        <i class="iconfont icon-xinxi1"></i>
        <span>666</span>
        <i class="iconfont icon-tubiaozhizuo-"></i>
        <i class="iconfont icon-lianjie1"></i>
        <span>777</span>
      </div>
    </div>
    <div class="content">
      <div class="content-header">
        <div>
          <i class="iconfont icon-bofang2"></i>
          <span>播放全部</span>
        </div>
        <i class="iconfont icon-ziyuan1"></i>
      </div>
      <div class="content-wrapper">
        <ul>
          <li v-for="(item, index) in tracks" :key="index" @click="goPlay(item)">
            <span>{{ ++index }}</span>
            <div class="songInfo">
              <span class="name">{{ item.name }}</span>
              <span class="author"
                >{{ item.ar[0].name }}-{{ item.al.name }}</span
              >
            </div>
            <i class="iconfont icon-caozuo-bofang"></i>
            <i class="iconfont icon-gengduo-shuxiang"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState } from "vuex";
import { SAVE_SONGINFO,SHOWSONGDETAIL,SHOWMINIPLAY ,SAVE_IDARR,SAVE_PLAYLISTDATA} from '../../store/mutations-type';

// import _ from "lodash";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      playListDetail: (state) => state.playListDetail,
    }),
    ListId() {
      // console.log(this.playListDetail.id);
      return this.playListDetail.id;
    },
    creator() {
      return this.playListDetail.creator;
    },
    tracks() {
      return this.playListDetail.tracks;
    },
    saveSongDetail(){
      let d = this.tracks.map((item)=>{
        let reSong ={}
        reSong.id = item.id
        reSong.name = item.name
        reSong.author = item.ar[0].name
        reSong.picUrl = item.al.picUrl
        return reSong
      })
      // console.log(d);
      return d
    },
    recDaySongIdArr(){
      let arr = []
       this.tracks.forEach((item)=>{
        arr.push(item.id)
      })
      // console.log(arr);
      return arr
    },
  },
  methods: {
    goPlay(song){
      let reSong = {}
      reSong.id = song.id
      reSong.name = song.name
      reSong.author = song.ar[0].name
      reSong.picUrl = song.al.picUrl
      this.$store.commit(SHOWSONGDETAIL,true)
      this.$store.commit(SHOWMINIPLAY,Date.now())
      this.$store.commit(SAVE_SONGINFO,reSong)
      this.$store.commit(SAVE_IDARR,this.recDaySongIdArr)
      this.$store.commit(SAVE_PLAYLISTDATA,this.saveSongDetail)

    }
  },
  mounted() {
    let id = sessionStorage.getItem('songListDetailID')
    if (id) {
      this.$store.dispatch('getPlayListDetailAction',id)
      sessionStorage.removeItem('songListDetailID')
    }
    this.$nextTick(() => {
      new BScroll(".content-wrapper", {
        scrollY: true,
        click: true,
      });
    });
    console.log(this.ListId);
    window.addEventListener("unload", () => {
      // 将最新的shopDatas存入sessionStorage
      sessionStorage.setItem("songListDetailID", this.ListId);
    });
  },
};
</script>

<style lang="stylus" scoped>
.songListDetail
  height 100%
  width 100%
  .header
    height 30%
    width 100%
    background-color #aaa
    position relative
    h2
      font-size 70px
      color #fff
      font-weight 700
      position absolute
      top 65%
      right 50%
      transform translateX(50%)
    .comment
      width 70%
      height 100px
      line-height 100px
      border-radius 100px
      box-sizing border-box
      border 1px solid #e6e6e6
      padding 0 50px
      background-color #fff
      position absolute
      bottom -50px
      left 15%
      // display flex
      // justify-content space-around
      span
        color #333
        font-size 45px
        margin-left 10px
      .icon-tubiaozhizuo-
        color #e6e6e6
        font-size 60px
        margin 0 20px
      i
        color #333
        font-size 60px
    div
      position absolute
      height 120px
      width 100%
      box-sizing border-box
      padding 0 44px
      color #fff
      display flex
      align-items center
      justify-content space-between
      h3
        width 60%
        font-size 50px
      .icon-arrowLeft
        font-size 80px
      .icon-sousuo
        font-size 80px
        margin-left 40px
      .icon-gengduo-shuxiang
        font-size 80px
    img
      height 100%
      width 100%
  .content
    width 100%
    height 70%
    background-color #fff
    box-sizing border-box
    padding 60px 44px 0
    .content-header
      height 120px
      box-sizing border-box
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
    .content-wrapper
      height 100%
      overflow hidden
      ul
        li
          height 120px
          box-sizing border-box
          margin-bottom 20px
          display flex
          align-items center
          justify-content space-between
          color #aaa
          font-size 41px
          i
            font-size 60px
          .songInfo
            width 70%
            display flex
            flex-direction column
            .name
              margin-bottom 10px
              color #111
            .author
              font-size 30px
</style>