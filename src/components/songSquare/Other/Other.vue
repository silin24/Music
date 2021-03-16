<template>
  <div class="other">
    <div class="content">
      <ul>
        <li v-for="(item, index) in contentList" :key="index" @click="goSongListDetail(item)">
            <img :src="item.coverImgUrl" />
            <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      tag:''
    };
  },
  computed: {
    getTag() {
      return this.$store.state.tag;
    },
    ...mapState({
      otherSongList:state=>state.otherSongList
    }),
    contentList(){
       return this.otherSongList[this.getTag]
    }
  },
  methods: {
    goSongListDetail(item){
      this.$router.push('/songListDetail')
      // this.$store.commit(SAVE_SONGLISTDETAIL,item)
      this.$store.dispatch('getPlayListDetailAction',item.id)
    }
  },
  watch: {
    getTag: {
      deep: true,
      handler(value) {
        console.log(value);
        this.tag = value
      },
    },
    contentList(){
      this.$nextTick(()=>{
        new BScroll(".content", {
        scrollY: true,
        click: true,
      });
      })
    }
  },
  mounted() {
  },
};
</script>

<style lang="stylus" scoped>
.other
  height calc(100vh - 260px)
  .content
    padding 52px 44px 0
    margin-top 30px
    height calc(100vh - 260px)
    overflow: hidden;
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