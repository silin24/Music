<template>
  <div class="listContent">
    <div class="listContainer">
      <div
        ref="listItem"
        class="listItem"
        v-for="(songItem, index) in reSongDetailArr"
        :key="index"
      >
        <h3>{{ reRankingList[index].name }} &gt;</h3>
        <div class="item" v-for="(detail, index) in songItem" :key="index"  @click="goPlay(detail)" >
          <a>
            <img :src="detail.al.picUrl" />
          </a>
          <span class="name">{{ ++index }} {{ detail.name }} </span>
          <span class="author">- {{ detail.ar[0].name }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _ from "lodash";
import { mapState } from "vuex";
import BScroll from "better-scroll";
import { DEL_SONGDETAIL } from "../../store/mutations-type";

import { SAVE_SONGINFO,SHOWSONGDETAIL,SHOWMINIPLAY ,SAVE_IDARR,SAVE_PLAYLISTDATA} from '../../store/mutations-type';

export default {
  computed: {
    ...mapState({
      rankingList: (state) => state.rankingList,
      listDetail: (state) => state.listDetail,
      songDetail: (state) => state.songDetail,
    }),
    reRankingList() {
      let a = _.slice(this.rankingList, 0, 5);
      // console.log(a);
      let index = 0;
      let b = a.map((item) => {
        item.numid = index++;
        return item;
      });
      // console.log(b);
      return b;
    },
    reListDetail() {
      let b = _.slice(this.listDetail, 0, 4);
      return b;
    },
    reSongDetailArr() {
      while (this.songDetail.length == 15) {
        let c = _.chunk(this.songDetail, 3);
        // console.log(c);
        return c;
      }
    },
    saveSongDetail(){
      let d = this.songDetail.map((item)=>{
        let reSong ={}
        reSong.id = item.id
        reSong.name = item.al.name
        reSong.author = item.ar[0].name
        reSong.picUrl = item.al.picUrl
        return reSong
      })
      // console.log(d);
      return d
    },
    recDaySongIdArr(){
      let arr = []
       this.songDetail.forEach((item)=>{
        arr.push(item.id)
      })
      // console.log(arr);
      return arr
    },
  },
  methods: {
    goPlay(song){
      let reSong ={}
      reSong.id = song.id
      reSong.name = song.al.name
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
    this.$store.dispatch("getRankingListAction");
    this.$store.dispatch("getListDetailAction");
  },
  watch: {
    reRankingList() {
      this.$nextTick(() => {
        new BScroll(".listContent", {
          scrollX: true,
          click: true,
        });
      });
      // console.log(this.reRankingList);
      this.reRankingList.forEach((element) => {
        this.$store.dispatch("getSongDetailAction", element.id);
      });
    },
  },
  beforeCreate() {
    this.$store.commit(DEL_SONGDETAIL);
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.listContent
  width 1080px
  overflow hidden
  .listContainer
    display flex
    flex-wrap nowrap
    width 4000px
    .listItem
      width 917px
      height 665px
      margin-left 30px
      box-shadow 6px 6px 6px 6px rgba(250, 241, 242, 0.5)
      border-radius 30px
      h3
        font-size 50px
        font-weight 700
        margin 54px
        text-align center
      .item
        display flex
        margin-left 44px
        margin-bottom 28px
        width 735px
        height 138px
        line-height 138px
        .name
          font-size 45px
          font-weight 700
          color #333
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        .author
          color #999999
          font-size 35px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        a
          margin-right 44px
          img
            width 138px
            height 138px
            border-radius 30px
</style>






