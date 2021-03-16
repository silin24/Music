<template>
  <div class="findContainer">
    <div class="profileInfoMask"  :class="{out:on === true}">
      <div class="profileInfo">
        <div class="proHeader">
          <div>
            <img :src="user.avatarUrl" />
            <span>{{ user.nickname }}</span>
          </div>
          <i class="iconfont icon-saoma3"></i>
        </div>
        <div class="proBody">
          <div class="Procontent">
            <div class="vip">
              <h2>vip</h2>
            </div>
            <div class="message">
              <ul>
                <li>
                  <div>
                    <i class="iconfont icon-mail"></i>
                    <span>我的消息</span>
                  </div>
                  <i class="iconfont icon-jiantou"></i>
                </li>
                <li>
                  <div>
                    <i class="iconfont icon-yun1"></i>
                    <span>云贝中心</span>
                  </div>
                  <i class="iconfont icon-jiantou"></i>
                </li>
                <li>
                  <div>
                    <i class="iconfont icon-deng1"></i>
                    <span>创作者中心</span>
                  </div>
                  <i class="iconfont icon-jiantou"></i>
                </li>
              </ul>
            </div>
            <div class="musicServe">
              <ul>
                <li>
                  <div>
                    <span>音乐服务</span>
                  </div>
                </li>
                <li>
                  <div>
                    <i class="iconfont icon-piao"></i>
                    <span>云村有票</span>
                  </div>
                  <i class="iconfont icon-jiantou"></i>
                </li>
                <li>
                  <div>
                    <i class="iconfont icon-paixing"></i>
                    <span>商城</span>
                  </div>
                  <i class="iconfont icon-jiantou"></i>
                </li>
                <li>
                  <div>
                    <i class="iconfont icon-youxi4"></i>
                    <span>游戏专区</span>
                  </div>
                  <i class="iconfont icon-jiantou"></i>
                </li>
                <li>
                  <div>
                    <i class="iconfont icon-cailing"></i>
                    <span>口袋彩铃</span>
                  </div>
                  <i class="iconfont icon-jiantou"></i>
                </li>
              </ul>
            </div>
            <div class="other">
              <ul>
                <li>
                  <div>
                    <span>其他</span>
                  </div>
                </li>
                <li>
                  <div>
                    <i class="iconfont icon-shezhi1"></i>
                    <span>设置</span>
                  </div>
                  <i class="iconfont icon-jiantou"></i>
                </li>
                <li>
                  <div>
                    <i class="iconfont icon-naozhong-"></i>
                    <span>定时关闭</span>
                  </div>
                  <i class="iconfont icon-jiantou"></i>
                </li>
                <li>
                  <div>
                    <i class="iconfont icon-yifu1"></i>
                    <span>个性装扮</span>
                  </div>
                  <i class="iconfont icon-jiantou"></i>
                </li>
                <li>
                  <div>
                    <i class="iconfont icon-yinle-yuanwenjian"></i>
                    <span>边听边存</span>
                  </div>
                  <i class="iconfont icon-jiantou"></i>
                </li>
                <li>
                  <div>
                    <i class="iconfont icon-piaoju"></i>
                    <span>优惠券</span>
                  </div>
                  <i class="iconfont icon-jiantou"></i>
                </li>
                <li>
                  <div>
                    <i class="iconfont icon-jujue1"></i>
                    <span>音乐黑名单</span>
                  </div>
                  <i class="iconfont icon-jiantou"></i>
                </li>
                <li>
                  <div>
                    <i class="iconfont icon-shezhi2"></i>
                    <span>青少年模式</span>
                  </div>
                  <i class="iconfont icon-jiantou"></i>
                </li>
              </ul>
            </div>
            <div class="logout" @click.stop="logout">
              <span> 退出登录/关闭 </span>
            </div>
            <div class="gap127"></div>
          </div>
        </div>
      </div>
      <div class="outMask" @click="on = false"></div>
    </div>
    <div class="findWrapper">
      <div class="find">
        <!-- 头部 -->
        <div class="header-banner">
          <div class="header">
            <i class="iconfont icon-caidan2" @click="out"></i>
            <div class="search">
              <input
                type="text"
                :placeholder="reHotWord"
                @click="$router.push('./search')"
              />
              <i class="iconfont icon-sousuo1" id="i"></i>
            </div>
            <i class="iconfont icon-maikefeng-xue"></i>
          </div>
          <!-- 轮播图 -->
          <div class="banner">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(banner, index) in banners"
                  :key="banner.bannerId"
                >
                  <a href="javascript:">
                    <div>
                      <img :src="banner.pic" />
                    </div>
                  </a>
                </div>
              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <!-- 每日推荐 -->
          <div class="recommend">
            <ul>
              <li @click="$router.push('/receveryday')">
                <a href="javascript:">
                  <div>
                    <i class="iconfont icon-rili1"></i>
                  </div>
                  <span>每日推荐</span>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div>
                    <i class="iconfont icon-shouyinji6"></i>
                  </div>
                  <span>私人FM</span>
                </a>
              </li>
              <li @click="$router.push('/songsquare')">
                <a href="javascript:">
                  <div>
                    <i class="iconfont icon-gedan3"></i>
                  </div>
                  <span>歌单</span>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div>
                    <i class="iconfont icon-paixing1"></i>
                  </div>
                  <span>排行榜</span>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div>
                    <i class="iconfont icon-biaoqiankuozhan_zhibo-347"></i>
                  </div>
                  <span>直播</span>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div>
                    <i class="iconfont icon-zhuanji"></i>
                  </div>
                  <span>数字专辑</span>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div>
                    <i class="iconfont icon-youxi"></i>
                  </div>
                  <span>游戏专区</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 推荐歌单 -->
        <RecSong />
        <div class="gap27"></div>
        <New />
        <div class="gap27"></div>
        <List />
        <div class="gap193" @click="$router.go(0)">
          <i class="iconfont icon-shuaxin4"></i>点击刷新
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { MessageBox } from "mint-ui";
import BScroll from "better-scroll";
import Swiper from "swiper";
// import _ from 'lodash'
import "swiper/css/swiper.min.css";
import RecSong from "../../components/recommendSong/recSong.vue";
import New from "../../components/new/new";
import List from "../../components/rankingList/list";

export default {
  data() {
    return {
      on:false
    }
  },
  components: {
    RecSong,
    New,
    List,
  },
  methods: {
    out() {
      this.on = true;
    },
    logout() {
      this.$API.Logout();
      MessageBox.confirm("确认退出吗").then(
        (actionAgree) => this.$store.commit(LOGOUT),
        (actionReject) => console.log("取消退出")
      );
    },
  },
  computed: {
    ...mapState({
      banners: (state) => state.banner,
      hotWord: (state) => state.hotWord,
      user: (state) => state.user,
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
  mounted() {
    // this.$store.dispatch("getRecDaySongAction")
    new BScroll(".findWrapper", {
      scrollY: true,
      click: true,
    });
    new BScroll(".proBody", {
      scrollY: true,
      click: true,
    });
    this.$store.dispatch("getBannerAction");
    new BScroll(".recommend", {
      scrollX: true,
      click: true,
    });
    // 可不用 因为歌单广场是写死的
    // this.$store.dispatch("getCategoryListAction");

  },
  watch: {
    banners() {
      //$nextTick保证下一次组件加载完毕执行
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          autoplay: true, //可选选项，自动滑动
          loop: true, // 循环模式选项
          // autoplay:true,
          pagination: {
            el: ".swiper-pagination",
          },
        });
      });
    },
  },
};
</script>

<style lang="stylus" >
@import '../../common/stylus/mixins.styl'
.findContainer
  .profileInfoMask
    position fixed
    left 0
    top 0
    width 100%
    height 100vh
    background-color rgba(102, 102, 102, 0.4)
    z-index 99
    transform translateX(-100%)
    transition transform 0.3s
    &.out
      transform translateX(0)
    .outMask
      position: fixed;
      right 0
      top 0
      width calc(100vw - 908px)
      height 100vh
    .profileInfo
      width 908px
      height 100vh
      background-color #f5f5f5
      .proHeader
        display flex
        white-space nowrap
        left 0
        top 0
        i
          font-size 80px
          margin 20px 30px 0 55%
        div
          display flex
          align-items center
          span
            margin 20px 0 0 20px
            font-size 40px
        img
          width 80px
          height 80px
          border-radius 80px
          margin-left 30px
    .proBody
      overflow hidden
      height 100vh
      .Procontent
        .vip
          margin 44px
          width 820px
          height 300px
          border-radius 40px
          box-sizing border-box
          border 1px solid #ff3a3a
          background #ff3a3a
          text-align center
          line-height 250px
          h2
            font-size 200px
            font-weight 700
            color #fff
        .message
          width 820px
          height 411px
          border-radius 40px
          margin 0 44px 44px 44px
          background-color #fff
          ul
            li
              display flex
              justify-content space-between
              width 820px
              height 127px
              box-sizing border-box
              padding 44px
              div
                i
                  margin-right 40px
                  font-size 55px
                span
                  font-size 50px
        .musicServe
          width 820px
          height 685px
          border-radius 40px
          margin 0 44px 44px 44px
          background-color #fff
          ul
            li
              display flex
              justify-content space-between
              width 820px
              height 127px
              box-sizing border-box
              padding 44px
              div
                i
                  margin-right 40px
                  font-size 55px
                span
                  font-size 50px
        .other
          width 820px
          height 1270px
          border-radius 40px
          margin 0 44px 44px 44px
          background-color #fff
          ul
            li
              display flex
              justify-content space-between
              width 820px
              height 127px
              box-sizing border-box
              padding 44px
              div
                i
                  margin-right 40px
                  font-size 55px
                span
                  font-size 50px
        .logout
          width 820px
          height 127px
          border-radius 40px
          margin 0 44px 44px 44px
          background-color #fff
          color #ff3a3a
          text-align center
          line-height 127px
          font-size 60px
          font-weight 700
        .gap127
          height 127px
  .findWrapper
    height 100vh
    .find
      width 100%
      // height calc(100vh - 193px)
      .gap193
        height 386px
        font-size 45px
        color #007ACC
        text-align center
        padding-top 10px
      .gap27
        height 27px
        background-color #f5f5f5
      .header-banner
        bottom-border-1px(#e6e6e6)
        // bottom-border-1px(red)
        height 808px
        width 100%
        background-image linear-gradient(#dbebf1, #fff)
        overflow hidden
        .header
          margin-top 22px
          background-color #dbebf1
          height 95px
          width 100%
          display flex
          align-items center
          i
            width 140px
            height 95px
            text-align center
            line-height 95px
            font-size 80px
          .search
            position relative
            height 100%
            width 800px
            i
              position relative
              display block
              left 0
              top -91px
              font-size 55px
            input
              background-color #fff
              height 95px
              width 100%
              border-radius 95px
              font-size 40px
              padding-left 100px
              box-sizing border-box
              outline 0
        .banner
          margin-top 50px
          width 995px
          height 383px
          margin-left 44px
          img
            width 995px
            height 383px
            border-radius 30px
        .recommend
          margin-top 38px
          height 220px
          width 1080px
          overflow hidden
          ul
            display flex
            flex-wrap nowrap
            width 1616px
            li
              padding 0 36px
              width 202px
              a
                // overflow hidden
                display flex
                flex-direction column
                align-items center
                text-align center
                div
                  height 130px
                  width 130px
                  border-radius 130px
                  background-color #FEF2f1
                  i
                    text-align center
                    line-height 130px
                    font-size 70px
                    color $primary
                span
                  margin-top 20px
                  font-size 20px
</style>
