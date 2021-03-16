<template>
  <div class="recommendScroll">
    <div class="recommend">
      <div class="banner">
        <!-- Swiper -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in bannerList"
              :key="index"
              @click="goSongListDetail(item)"
            >
              <!-- <img :src="item.coverImgUrl" /> -->
              <img v-lazy="item.coverImgUrl" />
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <ul>
          <li v-for="(item, index) in contentList" :key="index" @click="goSongListDetail(item)">
            <img :src="item.coverImgUrl" />
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Swiper from "swiper";
import { mapState } from "vuex";
import _ from "lodash";
// import 'swiper/js/swiper.min.js';
// import {SAVE_SONGLISTDETAIL} from '../../../store/mutations-type'
export default {
  computed: {
    ...mapState({
      songList: (state) => state.RecSongList,
    }),
    bannerList() {
      let a = _.slice(this.songList, 0, 3);
      return a;
    },
    contentList() {
      return _.drop(this.songList, 3);
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
    this.$nextTick(() => {
      new BScroll(".recommendScroll", {
        scrollY: true,
        click: true,
      });
      new Swiper(".swiper-container", {
        loop: true,
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
      });
    });
  },
  watch: {
    bannerList() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true,
          effect: "coverflow",
          centeredSlides: true,
          slidesPerView: "auto",
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          },
        });
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.recommendScroll
  height calc(100vh - 260px)
  overflow hidden
  .recommend
    .banner
      height 640px
      box-sizing border-box
      padding-top 65px
      .swiper-container
        width 100%
        height 575px
        .swiper-wrapper
          .swiper-slide
            height 575px
            width 480px
            text-align center
            font-size 18px
            display flex
            flex-direction column
            justify-content center
            align-items center
            span
              overflow hidden
              text-overflow ellipsis
              display -webkit-box
              -webkit-line-clamp 2
              -webkit-box-orient vertical
              width 480px
              height 70px
            img
              width 480px
              height 480px
              margin-bottom 20px
    .content
      padding 52px 44px 0
      margin-top 30px
      ul
        display flex
        flex-wrap wrap
        justify-content space-between
        li
          display flex
          flex-direction column
          align-items center
          width 310px
          height 400px
          box-sizing border-box
          span
            width 310px
            margin-top 10px
            overflow hidden
          img
            width 310px
            height 310px
            border-radius 30px
</style>