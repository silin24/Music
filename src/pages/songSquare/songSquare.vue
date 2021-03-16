<template>
  <div class="songSquare">
    <div class="header">
      <div class="headerTop">
        <i class="iconfont icon-arrowLeft" @click="$router.back()"></i>
        <h2>歌单广场</h2>
      </div>
      <div class="headerBtm">
        <div class="headerScroll">
          <ul>
            <li
              v-for="(item, index) in reHotCategorylist"
              :key="index"
              @click="handleClick(index, item)"
              :class="{ active: navIndex === index }"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <i class="iconfont icon-caidan3"></i>
      </div>
    </div>
    <!-- 歌单内容展示区 -->
    <Recommend v-if="navIndex == 0" />
    <Other v-if="navIndex !== 0" />
    <!-- <component :is="comName"></component> -->
    <!-- <div class="banner"></div>
    <div class="content"></div> -->
  </div>
</template>

<script>
// import { mapState } from "vuex";
// import { MessageBox } from "mint-ui";
import Recommend from "../../components/songSquare/Rec/Rec";
import Other from "../../components/songSquare/Other/Other";

import BScroll from "better-scroll";
import { mapState } from "vuex";
import _ from "lodash";
import { SAVE_TAG } from "../../store/mutations-type";
export default {
  components: { Recommend, Other },
  data() {
    return {
      comName: "Recommend",
      navIndex: 0,
      // tag:''
    };
  },
  computed: {
    ...mapState({
      hotCategorylist: (state) => state.hotCategorylist,
    }),
    reHotCategorylist() {
      let arr = ["推荐"];
      this.hotCategorylist.forEach((item) => {
        arr.push(item.name);
      });
      console.log(arr);
      return arr;
    },
  },
  watch: {
    reHotCategorylist() {
      this.$nextTick(() => {
        // new BScroll(".headerScroll", {
        //   scrollX: true,
        //   click: true,
        // });
        console.log(1);
        this.hotCategorylist.forEach((item) => {
          // console.log(this.hotCategorylist);
          this.$store.dispatch("getOtherSongListAction", item.name);
        });
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      new BScroll(".headerScroll", {
        scrollX: true,
        click: true,
      });
      this.hotCategorylist.forEach((item) => {
        this.$store.dispatch("getOtherSongListAction", item.name);
      });
    });
  },
  methods: {
    handleClick(index, item) {
      this.navIndex = index;
      // this.tag = item;
      this.$store.commit(SAVE_TAG, item);
    },
  },
};
</script>

<style lang="stylus" scoped>
.songSquare
  .header
    height 260px
    width 100%
    padding 40px
    box-sizing border-box
    // background-color #bfa
    border-bottom 1px solid #e6e6e6
    display flex
    flex-direction column
    // justify-content space-between
    .headerTop
      display flex
      align-items center
      margin-bottom 50px
      h2
        font-size 55px
        font-weight 700
      .icon-arrowLeft
        font-size 80px
        margin-right 30px
    .headerBtm
      display flex
      align-items center
      .icon-caidan3
        margin-left 60px
        font-size 50px
      .headerScroll
        width 900px
        overflow hidden
        white-space nowrap
        ul
          display flex
          width 1450px
          li
            margin-right 60px
            font-size 44px
            color #5d5d5a
            &.active
              color #2e2f2c
            &.active::after
              content ''
              display block
              margin-top -8px
              // width 10px
              height 15px
              border-radius 15px
              background-image linear-gradient(#Fa4141, #f27d7e)
</style>