<template>
  <div class="searchDetail">
    <div class="header">
      <i class="iconfont icon-arrowLeft-fill" @click="$router.back()"></i>
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
          <li
            v-if="item.artists"
            v-for="(item, index) in SearchData"
            :key="index"
            @click="goPlay(item)"
          >
            <span>{{ ++index }}</span>
            <div class="songInfo">
              <span class="name">{{ item.name }}</span>
              <span class="author">{{ item.artists[0].name }}</span>
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

export default {
  computed: {
    ...mapState({
      SearchData: (state) => state.SearchData,
    }),
     saveSongDetail(){
      let d = this.SearchData.map((item)=>{
        let reSong ={}
        reSong.id = item.id
        reSong.name = item.name
        reSong.author = item.artists[0].name
        reSong.picUrl = item.artists[0].img1v1Url
        return reSong
      })
      // console.log(d);
      return d
    },
    recDaySongIdArr(){
      let arr = []
       this.SearchData.forEach((item)=>{
        arr.push(item.id)
      })
      // console.log(arr);
      return arr
    },
  },
  watch: {
    SearchData() {
      this.$nextTick(() => {
        new BScroll(".content-wrapper", {
          scrollY: true,
          click: true,
        });
      });
    },
  },
  methods: {
    goPlay(song){
      let reSong ={}
      // reSong.id = song.artists[0].id
      reSong.id = song.id
      reSong.name = song.name
      reSong.author = song.artists[0].name
      reSong.picUrl = song.artists[0].img1v1Url
      this.$store.commit(SHOWSONGDETAIL,true)
      this.$store.commit(SHOWMINIPLAY,Date.now())
      this.$store.commit(SAVE_SONGINFO,reSong)
      this.$store.commit(SAVE_IDARR,this.recDaySongIdArr)
      this.$store.commit(SAVE_PLAYLISTDATA,this.saveSongDetail)
    }
  },
};
</script>

<style lang="stylus" scoped>
.searchDetail
  width 100%
  height 100%
  .header
    height 5%
    line-height 120px
    i
      font-size 100px
  .content
    width 100%
    height 95%
    background-color #fff
    box-sizing border-box
    padding 60px 44px 0
    .content-header
      height 8%
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
      height 92%
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