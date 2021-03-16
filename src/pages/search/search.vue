<template>
  <div class="search">
    <div class="searchSuggest" :class="{ out: Suggest }">
      <ul>
        <li class="title">
          <span>搜索:"{{ searchWord }}"</span>
        </li>
        <li v-for="(item, index) in SearchSuggestData" :key="index" @click="gosearch(item.keyword)">
          <i class="iconfont icon-sousuo"></i>
          <span> {{ item.keyword }} </span>
        </li>
      </ul>
    </div>
    <div class="search-frame">
      <i class="iconfont icon-arrowLeft-fill" @click="$router.back()"></i>
      <input
        type="text"
        :placeholder="reHotWord"
        @input="inputChange"
        ref="input"
      />
    </div>
    <div class="history"></div>
    <div class="hot">
      <div class="hot-header">
        <span>热搜榜</span>
        <button>播放</button>
      </div>
      <div class="hot-content">
        <ul>
          <li v-for="(hot, index) in hotList" :key="index" @click="gosearch(hot.first)">
            <span>
              {{ ++index }}
            </span>
            <span>
              {{ hot.first }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      Suggest: false,
      isSend: false,
      searchWord: "东风破",
    };
  },
  computed: {
    ...mapState({
      hotList: (state) => state.hotList,
      hotWord: (state) => state.hotWord,
      SearchSuggestData: (state) => state.SearchSuggestData,
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
    inputChange(e) {
      this.Suggest = true;
      let keywords = this.$refs.input.value;
      console.log(keywords);
      this.searchWord = keywords;
      if (this.isSend) {
        return;
      }
      this.isSend = true;
      if (keywords.trim() === '') {
        this.Suggest = false;
        return;
      }else{
      this.$store.dispatch("getSearchSuggestAction", keywords);
       setInterval(() => {
        this.isSend = false;
      }, 500);
      }
    },
    gosearch(keywords){
      this.$store.dispatch("getSearchAction",keywords)
      this.$router.push('/searchDetail')
    }
  },
  mounted() {
    this.$store.dispatch("getHotListAction");
  },
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl'
.search
  position relative
  .searchSuggest
    display none
    &.out
      display block
    position absolute
    top 100px
    left 16%
    width 80%
    background-color #fff
    z-index 22
    border 1px solid #FF4202
    ul
      padding 10px 30px 30px 30px
      .title
        font-size 58px
        color blue
      li
        height 120px
        font-size 55px
        line-height 120px
        border-bottom 1px solid #000
  .search-frame
    margin-top 20px
    height 90px
    display flex
    justify-content space-between
    align-items center
    box-sizing border-box
    i
      width 20%
      font-size 90px
      margin-left 30px
      margin-top 20px
    input
      margin-right 40px
      margin-left -40px
      width 95%
      outline 0
      padding 20px
      border-bottom 1px solid #000
  .hot
    .hot-header
      height 150px
      box-sizing border-box
      padding 40px
      display flex
      justify-content space-between
      align-items center
      bottom-border-1px(#e6e6e6)
      span
        font-size 45px
        font-weight 700
      button
        width 155px
        height 74px
        border-radius 30px
        border 1px solid #e6e6e6
    .hot-content
      width 100%
      ul
        padding 20px 40px
        display flex
        white-space nowrap
        // flex-wrap wrap
        flex-direction column
        li
          // width 50%
          height 120px
          line-height 80px
          span
            font-size 45px
            font-weight 700
            margin-right 30px
</style>