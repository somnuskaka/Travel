<template>
  <div class="list">
      <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
              <div class="button-wrapper">
                <div class="button">北京</div>
              </div>
              <div class="button-wrapper">
                <div class="button">北京</div>
              </div>
              <div class="button-wrapper">
                <div class="button">北京</div>
              </div>
              <div class="button-wrapper">
                <div class="button">北京</div>
              </div>
              <div class="button-wrapper">
                <div class="button">北京</div>
              </div>
          </div>
      </div>
      <div class="area">
          <div class="title border-topbottom">热门城市</div>
      </div>
      <div class="area">
          <div class="title border-topbottom">A</div>
      </div>
  </div>
</template>
<script>
export default {
  name: "CityList"
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
 &:before
   boeder-color #cccccc
 &:after
   boeder-color #cccccc
.title 
  line-height .44rem
  background  #eeeeee
  padding-left .2rem
  font-size .26rem
.button-list
  overflow hidden
  padding .1rem .6rem .1rem .1rem
  padding  .1rem
  .button-wrapper
   width 33.33%
   float left
   .button
    text-align center
    padding .1rem 0
    margin .1rem .1rem
    border .02rem solid #cccccc
    border-radius .06rem


</style>