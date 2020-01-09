<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont backicon">&#xe604;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe69f;</span>输入城市景点、主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe632;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "HomeHeader",
  computed:{
    ...mapState(['city'])
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  display: flex;
  height: 0.86rem;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .backicon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #ccc;
    border-radius: 0.1rem;
  }

  .header-right {
    min-width: 1.04rem;
    padding 0 .1rem
    padding-left: 0.22rem;
    float: right;
    color #fff

    text-align:center {
      .arrow-icon {
        font-size: 0.2rem;
        margin-left: -0.04rem;
      }
    }
  }
}
</style>