<template>
  <div class="videoWrapper">
    <div class="video">
      <!-- 头部 -->
      <div class="header">
        <i class="iconfont icon-dianshiju"></i>
        <input
          type="search"
          :placeholder="reHotWord"
          @click="$router.push('./search')"
        />
        <img src="../../common/img/logo.png" alt="logo" />
      </div>
      <!-- 导航 -->
      <div class="nav">
        <ul>
          <li
            v-for="(item, index) in videoLabelList"
            :key="item.id"
            :class="{ active: navId === index }"
            @click="handle(index)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- 内容区 -->
      <div class="content">
        <ul>
          <li v-for="(videoItem, index) in videoList" :key="index">
            <video
              :src="videoItem.data.urlInfo.url"
              controls
              :id="videoItem.data.vid"
              @play="handlePlay"
            ></video>
          </li>
          <li class="gap">
            <div class="gap193" @click="$router.go(0)">
              <i class="iconfont icon-shuaxin4"></i>点击刷新
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
index
<script>
import BScroll from "better-scroll";
import { mapState } from "vuex";

export default {
  data() {
    return {
      navId: 0,
    };
  },
  computed: {
    ...mapState({
      videoLabelList: (state) => state.videoLabelList,
      videoList: (state) => state.videoList,
      hotWord: (state) => state.hotWord,
    }),
    reHotWord() {
      let word = "东风破";
      //防止页面刚加载是没有 hotWord 报错
      if (this.hotWord) {
        let index = Math.floor(Math.random() * (20 - 0) + 0);
        // console.log(index);
        word = this.hotWord[index].searchWord;
      }
      return word;
    },
  },
  methods: {
    handle(a) {
      this.navId = a;
    },
    handlePlay(event) {
      this.videoContext && this.videoContext.id !== event.target.id && this.videoContext.pause()
      this.videoContext = event.target
    },
  },
  mounted() {
    this.$store.dispatch("getVideoLabelListAction");
  },
  watch: {
    videoLabelList() {
      this.$nextTick(() => {
        new BScroll(".nav", {
          scrollX: true,
          click: true,
        });
        // let num;
        // if (typeof this.videoLabelList[this.navId] === "object") {
        //   num = this.videoLabelList[this.navId].id;
        //   console.log(num);
        // }
        this.$store.dispatch("getVideoListAction", this.videoLabelList[0].id);
      });
    },
    navId() {
      let id = this.videoLabelList[this.navId].id;
      this.$store.dispatch("getVideoListAction", id);
    },
    videoList() {
      this.$nextTick(() => {
        new BScroll(".content", {
          scrollY: true,
          click: true,
        });
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.videoWrapper
  background-color #f5f5f5
  .video
    width 100%
    .header
      display flex
      justify-content space-between
      height 90px
      padding 22px 40px 0
      i
        font-size 85px
      input
        width 75%
        padding-left 50px
        border-radius 50px
      img
        width 85px
        height 85px
        border-radius 85px
    .nav
      margin-top 30px
      // width 1080px
      overflow hidden
      ul
        display flex
        width 4000px
        white-space nowrap
        justify-content space-between
        align-items center
        padding-left 40px
        li
          font-size 48px
          height 80px
          line-height 80px
          &.active
            border-bottom 6px solid #d43c33
    .content
      margin-top 50px
      height calc(100vh - 443px)
      overflow hidden
      ul
        .gap
          .gap193
            height 386px
            font-size 45px
            color #007ACC
            text-align center
            padding-top 80px
        li
          text-align center
          overflow hidden
          margin-bottom 20px
          video
            width 1000px
            height 668px
</style>