<template>
  <div class="recWrapper">
    <div class="recommend">
      <div class="cainizaizui">
        <div class="top">
          <h2>猜你在追</h2>
          <button @click="$router.push('/songsquare')">更多 &gt;</button>
        </div>
        <div class="rec-bottom">
          <ul class="btm-wrapper">
            <li v-for="(item, index) in loveSong" :key="index">
              <!-- <img :src="item.coverImgUrl" /> -->
              <img v-lazy="item.coverImgUrl" />
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="jingxuanbodan">
        <div class="top">
          <h2>精选歌单</h2>
          <button @click="$router.push('/songsquare')">更多 &gt;</button>
        </div>
        <div class="jx-bottom">
          <ul class="btm-wrapper">
            <li v-for="(item, index) in jingxuanbodanSong" :key="index" @click="goSongListDetail(item)">
              <img :src="item.coverImgUrl" />
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="musicStory">
        <div class="top">
          <h2>音乐故事</h2>
          <button @click="$router.push('/songsquare')">更多 &gt;</button>
        </div>
        <div class="ms-bottom">
          <ul class="btm-wrapper">
            <li v-for="(item, index) in musicStorySong" :key="index" @click="goSongListDetail(item)">
              <img :src="item.coverImgUrl" />
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="theatre">
        <div class="top">
          <h2>声之剧场</h2>
          <button @click="$router.push('/songsquare')">更多 &gt;</button>
        </div>
        <div class="th-bottom">
          <ul class="btm-wrapper">
            <li v-for="(item, index) in theatreSong" :key="index" @click="goSongListDetail(item)">
              <img :src="item.coverImgUrl" />
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="radioStation">
        <div class="top">
          <h2>广播电台</h2>
          <button @click="$router.push('/songsquare')">更多 &gt;</button>
        </div>
        <div class="ra-bottom">
          <ul class="btm-wrapper">
            <li v-for="(item, index) in radioStationSong" :key="index" @click="goSongListDetail(item)">
              <img :src="item.coverImgUrl" />
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState } from "vuex";
import _ from "lodash";
export default {
  computed: {
    ...mapState({
      loveSong: (state) => state.loveSong,
      highqualityListSong: (state) => state.highqualitySong,
    }),
    jingxuanbodanSong() {
      return _.slice(this.highqualityListSong, 0, 6);
    },
    musicStorySong() {
      return _.slice(this.highqualityListSong, 6, 12);
    },
    theatreSong() {
      return _.slice(this.highqualityListSong, 12, 18);
    },
    radioStationSong() {
      return _.slice(this.highqualityListSong, 18, 24);
    },
  },
   methods: {
    goSongListDetail(item){
      this.$router.push('/songListDetail')
      // this.$store.commit(SAVE_SONGLISTDETAIL,item)
      this.$store.dispatch('getPlayListDetailAction',item.id)
    }
  },
  mounted() {
    this.$store.dispatch("getLoveSongAction");
    this.$store.dispatch("getHighqualitySongAction");
  },
  watch: {
    loveSong() {
      this.$nextTick(() => {
        new BScroll(".rec-bottom", {
          scrollX: true,
          click: true,
        });
      });
    },
    highqualityListSong() {
      this.$nextTick(() => {
        new BScroll(".recWrapper", {
          scrollY: true,
          click: true,
        });
      });
    },
    jingxuanbodanSong() {
      this.$nextTick(() => {
        new BScroll(".jx-bottom", {
          scrollX: true,
          click: true,
        });
      });
    },
    theatreSong() {
      this.$nextTick(() => {
        new BScroll(".th-bottom", {
          scrollX: true,
          click: true,
        });
      });
    },
    musicStorySong() {
      this.$nextTick(() => {
        new BScroll(".ms-bottom", {
          scrollX: true,
          click: true,
        });
      });
    },
    radioStationSong() {
      this.$nextTick(() => {
        new BScroll(".ra-bottom", {
          scrollX: true,
          click: true,
        });
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.recWrapper
  width 100%
  height calc(100vh - 683px)
  overflow hidden
  .recommend
    width 100%
    .cainizaizui
      height 580px
      .top
        display flex
        justify-content space-between
        padding 40px 43px
        h2
          font-weight 700
          font-size 46px
          margin-top 15px
        button
          width 155px
          height 74px
          border-radius 40px
          border 2px solid #e6e6e6
      .rec-bottom
        box-sizing border-box
        overflow hidden
        ul
          display flex
          padding-left 44px
          width 2000px
          li
            display flex
            flex-direction column
            align-items center
            margin-right 27px
            img
              width 300px
              height 300px
              border-radius 40px
              background-color #fff
              margin-bottom 20px
    .jingxuanbodan
      height 580px
      .top
        display flex
        justify-content space-between
        padding 40px 43px
        h2
          font-weight 700
          font-size 46px
          margin-top 15px
        button
          width 155px
          height 74px
          border-radius 40px
          border 2px solid #e6e6e6
      .jx-bottom
        box-sizing border-box
        overflow hidden
        ul
          display flex
          padding-left 44px
          width 2000px
          li
            display flex
            flex-direction column
            align-items center
            margin-right 27px
            img
              width 300px
              height 300px
              border-radius 40px
              background-color #fff
              margin-bottom 20px
    .musicStory
      height 580px
      .top
        display flex
        justify-content space-between
        padding 40px 43px
        h2
          font-weight 700
          font-size 46px
          margin-top 15px
        button
          width 155px
          height 74px
          border-radius 40px
          border 2px solid #e6e6e6
      .ms-bottom
        box-sizing border-box
        overflow hidden
        ul
          display flex
          padding-left 44px
          width 2000px
          li
            display flex
            flex-direction column
            align-items center
            margin-right 27px
            img
              width 300px
              height 300px
              border-radius 40px
              background-color #fff
              margin-bottom 20px
    .theatre
      height 580px
      .top
        display flex
        justify-content space-between
        padding 40px 43px
        h2
          font-weight 700
          font-size 46px
          margin-top 15px
        button
          width 155px
          height 74px
          border-radius 40px
          border 2px solid #e6e6e6
      .th-bottom
        box-sizing border-box
        overflow hidden
        ul
          display flex
          padding-left 44px
          width 2000px
          li
            display flex
            flex-direction column
            align-items center
            margin-right 27px
            img
              width 300px
              height 300px
              border-radius 40px
              background-color #fff
              margin-bottom 20px
    .radioStation
      height 580px
      .top
        display flex
        justify-content space-between
        padding 40px 43px
        h2
          font-weight 700
          font-size 46px
          margin-top 15px
        button
          width 155px
          height 74px
          border-radius 40px
          border 2px solid #e6e6e6
      .ra-bottom
        box-sizing border-box
        overflow hidden
        ul
          display flex
          padding-left 44px
          width 2000px
          li
            display flex
            flex-direction column
            align-items center
            margin-right 27px
            img
              width 300px
              height 300px
              border-radius 40px
              background-color #fff
              margin-bottom 20px
</style>