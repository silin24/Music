<template>
  <div class="myWrapper">
    <div class="my">
      <div class="login" @click="tuichu = false">
        <i class="iconfont icon-caidan2" @click.stop="out"></i>
        <div class="logout" :class="{ out: tuichu }" v-if="user.avatarUrl">
          <div>
            <img :src="user.avatarUrl" />
            <span>{{ user.nickname }}</span>
          </div>
          <i class="iconfont icon-tuichudenglu" @click.stop="logout"></i>
        </div>
        <div class="avatar">
          <img :src="user.avatarUrl" />
        </div>
        <span @click="$router.push('/login')">
          {{ user.nickname ? user.nickname : "立即登录" }}</span
        >
      </div>
      <div class="myInfo">
        <ul>
          <li>
            <div>
              <i class="iconfont icon-songlist"></i>
              <span>本地/下载</span>
            </div>
            <div>
              <i class="iconfont icon-shangchuanyunpan"></i>
              <span>云盘</span>
            </div>
            <div>
              <i class="iconfont icon-yigoushuliang"></i>
              <span>已购</span>
            </div>
            <div>
              <i class="iconfont icon-bofang2"></i>
              <span>最近播放</span>
            </div>
          </li>
          <li>
            <div>
              <i class="iconfont icon-haoyou"></i>
              <span>我的好友</span>
            </div>
            <div>
              <i class="iconfont icon-xingxing1"></i>
              <span>收藏和赞</span>
            </div>
            <div>
              <i class="iconfont icon-guangbo"></i>
              <span>我的播客</span>
            </div>
            <div>
              <i class="iconfont icon-jia"></i>
              <span>音乐应用</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="myLoveMusic">
        <div class="left">
          <div>
            <div>
              <i class="iconfont icon-xin4"></i>
            </div>
            <span>我喜欢的音乐</span>
          </div>
        </div>
        <div class="right">
          <button><i class="iconfont icon-xin1"></i> 心动模式</button>
        </div>
      </div>
      <div class="gap180">
        <div :class="{ active: on === 1 }" @click="isShowCreate(1)">
          <h2>创建歌单</h2>
        </div>
        <i class="iconfont icon-tubiaozhizuo-"></i>
        <div :class="{ active: on === 2 }" @click="isShowCreate(2)">
          <h2>收藏歌单</h2>
        </div>
      </div>
      <div class="creSongList">
        <div class="header">
          <span>创建歌单</span>
          <div>
            <i class="iconfont icon-jia2 add"></i>
            <i class="iconfont icon-gengduo-shuxiang"></i>
          </div>
        </div>
        <div>
          <div class="input">
            <i class="iconfont icon-daoru1"></i>
          </div>
          <span>一键导入外部音乐</span>
        </div>
      </div>
      <div class="collectionList">
        <div class="header">
          <span>收藏歌单</span>
          <i class="iconfont icon-gengduo-shuxiang"></i>
        </div>
        <div>暂无收藏的歌单</div>
      </div>
      <div class="gap193"></div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState } from "vuex";
import { MessageBox } from "mint-ui";
import { LOGOUT } from "../../store/mutations-type";
export default {
  data() {
    return {
      on: 1,
      tuichu: false,
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
  mounted() {
    new BScroll(".myWrapper", {
      scrollY: true,
      click: true,
    });
  },
  methods: {
    isShowCreate(number) {
      this.on = number;
    },
    out() {
      this.tuichu = true;
    },
    logout() {
      this.$API.Logout();
      MessageBox.confirm("确认退出吗").then(
        (actionAgree) => this.$store.commit(LOGOUT),
        (actionReject) => console.log("取消退出")
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl'
.myWrapper
  height 100vh
  .my
    background-color #f5f5f5
    overflow hidden
    .gap193
      height 193px
    .login
      padding-top 22px
      padding-left 44px
      width 100%
      height 330px
      position relative
      .logout
        position absolute
        top 0
        left 0
        width 800px
        height 100px
        background-color #fff
        display flex
        justify-content space-between
        align-items center
        transform translateX(-800px)
        transition transform 0.3s
        &.out
          transform translateX(0)
        div
          span
            margin -170px 0 0 -120px
            font-size 40px
        i
          margin-right 40px
          color $primary
        img
          width 80px
          height 80px
          border-radius 80px
          margin-left 40px
      i
        font-size 80px
      .avatar
        margin-top 40px
        margin-left 40px
        width 130px
        height 130px
        border 6px solid #fff
        border-radius 130px
        background-color #f7f2f1
        text-align center
        line-height 180px
        overflow hidden
        img
          width 130px
          height 130px
          border-radius 130px
      span
        position absolute
        top 200px
        left 250px
        font-size 50px
        font-weight 700
    .myInfo
      width 992px
      height 480px
      border-radius 30px
      background-color #fff
      margin-left 44px
      ul
        height 480px
        overflow hidden
        li
          text-align center
          margin-top 20px
          line-height 130px
          height 240px
          display flex
          justify-content space-around
          div
            display flex
            flex-direction column
            text-align center
            i
              color $primary
              font-size 80px
              margin-bottom -40px
    .myLoveMusic
      margin-top 44px
      margin-left 44px
      background-color #fff
      width 992px
      height 226px
      border-radius 30px
      display flex
      justify-content space-between
      align-items center
      .left
        margin-left 44px
        div
          display flex
          align-items center
          span
            margin-left 20px
          div
            width 138px
            height 138px
            border-radius 30px
            background-color #9b9b9b
            i
              font-size 75px
              margin-left 30px
              margin-top 15px
              color #fff
      .right
        margin-right 44px
        text-align center
        button
          border 1px solid #e6e6e6
          background-color #fff
          line-height 67px
          font-size 40px
          border-radius 30px
    .gap180
      height 180px
      display flex
      justify-content space-around
      align-items center
      font-size 50px
      font-weight 700
      div
        &.active::after
          content ''
          display block
          margin-left -10px
          width 220px
          height 15px
          border-radius 15px
          background-image linear-gradient($primary, #ff7576)
    .creSongList
      margin-left 44px
      width 992px
      height 314px
      border-radius 30px
      background-color #fff
      overflow hidden
      .header
        margin 40px 40px 50px
        display flex
        justify-content space-between
        color #b3b3b3
        div
          .add
            margin-right 60px
      div
        display flex
        align-items center
        margin-left 40px
        .input
          width 138px
          height 138px
          border-radius 30px
          background-color #f3f3f3
          i
            font-size 75px
            margin-left 30px
            margin-top 15px
            color #333
        span
          margin-left 30px
    .collectionList
      margin-left 44px
      margin-top 28px
      width 992px
      height 314px
      border-radius 30px
      background-color #fff
      overflow hidden
      .header
        display flex
        justify-content space-between
        margin 40px 55px 50px
        color #b3b3b3
      div
        text-align center
</style>