<template>
  <div class="footer-guide">
    <span
      class="guide-item"
      :class="{ on: $route.path === '/find' }"
      @click="goto('/find')"
    >
      <span>
        <i class="iconfont icon-music"></i>
      </span>
      <span>发现</span>
    </span>
    <span
      class="guide-item"
      :class="{ on: $route.path === '/podcast' }"
      @click="goto('/podcast')"
    >
      <span>
        <i class="iconfont icon-guangbo"></i>
      </span>
      <span>播客</span>
    </span>
    <span
      class="guide-item"
      :class="{ on: $route.path === '/my' }"
      @click="goto('/my')"
    >
      <span>
        <i class="iconfont icon-yinle4"></i>
      </span>
      <span>我的</span>
    </span>
    <span
      class="guide-item"
      :class="{ on: $route.path === '/video' }"
      @click="goto('/video')"
    >
      <span>
        <i class="iconfont icon-huatong1"></i>
      </span>
      <span>视频</span>
    </span>
    <span
      class="guide-item"
      :class="{ on: $route.path === '/yuncun' }"
      @click="goto('/yuncun')"
    >
      <span>
        <i class="iconfont icon-wode2"></i>
      </span>
      <span>云村</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "Footer",

  methods: {
    goto(path) {
      // 编程式路由跳转
      path !== this.$route.path && this.$router.replace(path);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl'
.footer-guide
  top-border-1px(#e6e6e6)
  // top-border-1px(red)
  position fixed
  bottom 0
  left 0
  display flex
  justify-content space-around
  width 100%
  height 193px
  background-color #fff
  .guide-item
    display flex
    flex-direction column
    text-align center
    justify-content center
    &.on
      color $primary
    span
      margin-top 5px
      font-size 40px
      i
        font-size 100px
</style>