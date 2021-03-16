<template>
  <div>
    <!-- <keep-alive include="SongDetail"> -->
    <!-- <keep-alive> -->
    <!-- <keep-alive exclude="Find"> -->
      <!-- <router-view></router-view> -->
    <!-- </keep-alive> -->
    <router-view v-show="!isShowSongDetail"></router-view>
    <!-- <SongDetail v-show="showSongDetail"/> -->
    <SongDetail/>
    <!-- <MiniPlay v-show="!isShowSongDetail"/> -->
    <Footer v-show=" !isShowSongDetail && $route.meta.isShowFooter"></Footer>
  </div>
</template>

<script>
import Footer from "./components/footer/footer";
// import MiniPlay from "./components/miniPlay/miniPlay";
import SongDetail from "./components/songDetail/songDetail";
import { mapState } from "vuex";
// import MiniPlay from './components/miniPlay/miniPlay.vue';

export default {
  components: {
    Footer,
    // MiniPlay,
    SongDetail
  },
  data() {
    return {
      isShowSongDetail:false,
      // reShow:Boolean
    };
  },
  computed: {
    ...mapState({
      showSongDetail: (state) => state.showSongDetail,
    }),

  },
  watch:{
  showSongDetail(){
    this.isShowSongDetail= this.showSongDetail
  }
  },
  mounted() {
    this.$store.dispatch("getHotWordAction");
    //获取热门歌单
    this.$store.dispatch("getHotCategoryListAction");
    //歌单广场
    let a = "推荐"
    this.$store.dispatch("getRecSongListAction",a);
  },
};
</script>

<style lang="stylus" scoped>
// @import './common/stylus/mixins.styl'
div
  width 100%
  height 100%
  
</style>
