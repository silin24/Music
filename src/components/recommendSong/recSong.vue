<template>
  <div class="recSong">
    <div class="header">
      <div class="left">
        <h2>推荐歌单</h2>
      </div>
      <div class="right">
        <button @click="$router.push('/songsquare')">
          <span>更多 &gt;</span>
          <!-- <i class="iconfont icon-arrow-right"></i> -->
        </button>
      </div>
    </div>
    <div class="scroll">
      <ul>
        <li v-for="(recSong,index) in recSongs" :key="recSong.id" @click="goSongListDetail(recSong)">
          <a href="javascript:">
            <img :src="recSong.picUrl" />
            <span>{{recSong.name}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      recSongs: (state) => state.recSong,
    }),
  },
   methods: {
    goSongListDetail(item){
      this.$router.push('/songListDetail')
      // this.$store.commit(SAVE_SONGLISTDETAIL,item)
      this.$store.dispatch('getPlayListDetailAction',item.id)
    }
  },
  mounted() {
    this.$store.dispatch("getRecSongAction");
  },
  watch: {
    recSongs() {
      this.$nextTick(() => {
        new BScroll(".scroll", {
          scrollX: true,
          click: true,
        });
      });
    },
  },
};
</script>

<style lang="stylus">
.recSong
  height 600px
  width 1080px
  .header
    position relative
    height 137px
    width 100%
    .left
      position absolute
      left 47px
      top 48px
      h2
        font-size 50px
        font-weight 700
    .right
      position absolute
      right 44px
      top 33px
      height 70px
      width 147px
      button
        display flex
        border 2px solid #e6e6e6
        width 100%
        height 100%
        border-radius 30px
        span
          font-size 35px
  .scroll
    width 1080px
    overflow hidden
    ul
      display flex
      width 2030px
      margin-left 45px
      li
        width 300px
        margin-right 28px
        a
          overflow hidden
          img
            width 300px
            height 300px
            border-radius 30px
</style>