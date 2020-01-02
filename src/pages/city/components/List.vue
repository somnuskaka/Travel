<template>
  <div class="list" ref="wrapper">
    <div class="">
      <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
              <div class="button-wrapper">
                <div class="button">北京</div>
              </div>
          </div>
      </div>
       <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
              <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
                <div class="button"> {{item.name}} </div>
              </div>
          </div>
      </div>
      <div v-for="(item,key) of cities" :key="key"  class="area">
          <div class="title border-topbottom" > {{key}} </div>
          <div class="item-list">
            <div class="item border-topbottom" v-for="innerItem of item" :key="innerItem.id">
              {{innerItem.name}}
            </div>
          
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: "CityList",
  props:{
    hotCities:Array,
    cities:Object
  },
  mounted(){
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
};
</script>
<style lang="stylus" scoped>

@import '~styles/varibles.styl'
.border-topbottom
 &:before
   boeder-color #cccccc
 &:after
   boeder-color #cccccc
.list 
 overflow hidden
 position absolute
 top 1.58rem
 left 0
 right 0
 bottom 0
 .title 
   line-height .54rem
   background  #eeeeee
   padding-left .2rem
   font-size .26rem
 .button-list
   overflow hidden
   padding .1rem .6rem .1rem .1rem
   margin .1rem 0
   .button-wrapper
    width 33%
    float left
    .button
     text-align center
     padding .1rem 0
     margin .1rem 
     border .02rem solid #cccccc
     border-radius .06rem
 .item-list 
   .item 
     line-height .76rem
     color #666
     padding-left .2rem
 
</style>