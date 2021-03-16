<template>
  <div class="login">
    <i class="iconfont icon-jiantouarrowhead7 back" @click="$router.back()"></i>
    <div class="logo">
      <img src="../../common/img/logo.png" alt="" />
    </div>
    <div class="input-content">
      <div class="input-item">
        <span>手机</span>
        <div>
          <input
            type="tel"
            maxlength="11"
            placeholder="请输入手机号"
            v-model="phone"
            v-validate="'required|mobile'"
            name="phone"
          />
          <span style="color: #fef600" v-show="errors.has('phone')">{{
            errors.first("phone")
          }}</span>
        </div>
      </div>
      <div class="input-item">
        <span>密码</span>
        <div>
          <input
            type="text"
            placeholder="请输入密码"
            v-model="pwd"
            v-validate="'required'"
            name="pwd"
          />
          <span style="color: #fef600" v-show="errors.has('pwd')">{{
            errors.first("pwd")
          }}</span>
        </div>
      </div>
      <button @click.prevent="login">登录</button>
    </div>
    <div class="otherLogin">
      <div class="other">
        <i class="iconfont icon-tubiao215"></i>
        <i class="iconfont icon-icon"></i>
        <i class="iconfont icon-weibo1"></i>
      </div>
      <div class="agree">
        <i
          class="iconfont icon-tongyi"
          @click="agreeHandle"
          :class="{ active: on }"
        ></i>
        <span>同意用户协议,隐私政策</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      phone: "",
      pwd: "",
      agreement: false,
      on: false,
    };
  },
  methods: {
    agreeHandle() {
      this.agreement = !this.agreement;
      this.on = !this.on;
    },
    async login() {
      let { phone, pwd } = this;
      const success = await this.$validator.validateAll();
      if (success) {
        //后端验证
        let result;
        if (this.agreement) {
          result = await this.$API.phoneLogin({ phone, pwd });
          console.log(result);
          if (result.code === 502) {
            alert("请输入正确的密码");
            // MessageBox.alert("请输入正确的密码");
            this.pwd = "";
          } else if (result.code === 400) {
            alert("请输入正确的手机号");
            this.phone = "";
          } else if (result.code === 200) {
            alert("登陆成功");
            this.$router.replace("/my");
            let { token } = result;
            localStorage.setItem("token_key", token);
            this.$store.commit("save_token", token);
            // delete result.data.token;
            this.$store.commit("save_user", result.profile);
          } else {
            alert("登陆失败,请重新登录");
          }
        } else {
          alert("请先勾选同意用户协议,隐私政策");
          // MessageBox.alert("请先勾选同意用户协议,隐私政策");
        }
      } else {
        alert("前端验证失败");
        // const html =`<div style="margin-left:-90px;font-size:20px;width:500px;hight:500px";margin-top:600px>前端验证失败</div>`

        // MessageBox.alert(html)
       }
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl'
.login
  width 100%
  height 100%
  background-color $primary
  overflow hidden
  position relative
  .back
    position absolute
    top 20px
    left 15px
    color #fff
    font-size 70px
  .logo
    border-radius 198px
    margin 300px 440px
    img
      width 198px
      height 198px
      border-radius 198px
  .input-content
    margin-top 750px
    height 380px
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    .input-item
      display flex
      justify-content space-between
      align-items center
      span
        margin-right 20px
        color #fff
        font-size 40px
      div
        display flex
        flex-direction column
        input
          padding-left 40px
          width 750px
          height 100px
          border-radius 100px
          background-color #fff
          box-sizing border-box
          outline 0
    button
      width 200px
      height 90px
      background-color #fff
      border 1px solid #fff
      font-size 50px
  .otherLogin
    padding-top 40px
    color #fff
    .other
      display flex
      justify-content space-around
      i
        font-size 80px
    .agree
      margin 60px 0 0 253px
      font-size 45px
      i
        margin-right 20px
        color #333
        &.active
          color #fff
</style>