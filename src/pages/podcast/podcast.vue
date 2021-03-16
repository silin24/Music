<template>
  <div class="podcastWrapper">
    <div class="podcast">
      <div class="header">
        <div class="top">
          <div class="left">
            <i class="iconfont icon-caidan2"></i>
          </div>
          <div class="header-banner">
            <ul>
              <li>
                <div
                  :class="{ active: comName === 'Listen' }"
                  @click="changeComName('Listen')"
                >
                  听听
                </div>
              </li>
              <li>
                <div
                  :class="{ active: comName === 'Recommend' }"
                  @click="changeComName('Recommend')"
                >
                  推荐
                </div>
              </li>
              <li>
                <div
                  :class="{ active: comName === 'Category' }"
                  @click="changeComName('Category')"
                >
                  分类
                </div>
              </li>
            </ul>
          </div>
          <div class="right">
            <i
              class="iconfont icon-sousuo"
              @click="$router.push('./search')"
            ></i>
          </div>
        </div>
        <div class="bottom">
          <ul class="btm-content">
            <li>
              <div>
                <i class="iconfont icon-paixingbang"></i>
              </div>
              <span>排行榜</span>
            </li>
            <li>
              <div>
                <i class="iconfont icon-yinle61"></i>
              </div>
              <span>新人必听</span>
            </li>
            <li>
              <div>
                <i class="iconfont icon-shouyinji1"></i>
              </div>
              <span>广播电台</span>
            </li>
            <li>
              <div>
                <i class="iconfont icon-dianshiju"></i>
              </div>
              <span>声之剧场</span>
            </li>
            <li>
              <div>
                <i class="iconfont icon-huangguan5"></i>
              </div>
              <span>精选播客</span>
            </li>
            <li>
              <div>
                <i class="iconfont icon-lipin"></i>
              </div>
              <span>有奖竞猜</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 播客内容展示区 -->
      <component :is="comName"></component>
      <div class="gap193" @click="$router.go(0)">
        <i class="iconfont icon-shuaxin4"></i>点击刷新
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Listen from "../../components/podcastContent/listen/listen";
import Recommend from "../../components/podcastContent/recommend/recommend";
import Category from "../../components/podcastContent/category/category";

export default {
  components: {
    Recommend,
    Listen,
    Category,
  },
  data() {
    return {
      comName: "Recommend",
    };
  },
  methods: {
    changeComName(name) {
      this.comName = name;
      console.log(111);
    },
  },
  mounted() {
    new BScroll(".bottom", {
      scrollX: true,
      click: true,
    });
  },
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl'
.podcastWrapper
  background-color #f5f5f5
  .podcast
    .gap193
      height 386px
      font-size 45px
      color #007ACC
      text-align center
      padding-top 80px
    .header
      height 490px
      bottom-border-1px(#e6e6e6)
      .top
        position relative
        border none
        display flex
        justify-content space-between
        height 90px
        padding-top 22px
        .header-banner
          ul
            display flex
            li
              margin 15px 35px
              div
                font-size 50px
                color #aaa
                font-weight 700
                &.active
                  color #313131
                &.active::after
                  content ''
                  display block
                  margin-left -5px
                  width 110px
                  height 15px
                  border-radius 15px
                  background-image linear-gradient($primary, #ef7776)
        .left
          margin-left 40px
          i
            font-size 85px
        .right
          margin-right 40px
          i
            font-size 85px
      .bottom
        height 400px
        box-sizing border-box
        padding-top 95px
        overflow hidden
        ul
          display flex
          width 1380px
          padding-left 44px
          flex-wrap nowrap
          li
            margin-right 54px
            display flex
            flex-direction column
            align-items center
            div
              width 169px
              height 169px
              border-radius 169px
              background-image linear-gradient($primary, #ef7776)
              text-align center
              line-height 169px
              margin-bottom 15px
              i
                color #fff
                font-size 80px
</style>