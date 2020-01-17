<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="bannner-title"> {{this.sightName}} </div>
                <div class="banner-number"><span class="iconfont arrow-icon">&#xe60e;</span> {{this.bannerImgs.length}} </div>
            </div>
        </div>
        <fade-animation>
            <common-gallary :imgs="bannerImgs" v-show="showgallary" @close='hanfleGallaryClose'></common-gallary>
         </fade-animation>   
    </div>
    
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import Fadeanimation from 'common/Fadeanimation/Fade'
export default {
    name:'DetallBanner',
    props:{
        sightName:String,
        bannerImg:String,
        bannerImgs:Array
    },
    data () {
        return{ 
            showgallary:false, 
            
     }
    },
    methods:{
        handleBannerClick (){
            this.showgallary =true
        },
        hanfleGallaryClose (){
            this.showgallary=false
        }
    },
    components:{
        CommonGallary,
        Fadeanimation
    }
}
</script>
<style lang="stylus"  scoped>
 .banner
   position relative
   overflow hidden
   height 0
   padding-bottom 55%
   .banner-img
    width 100%
 .banner-info
  display flex
  position absolute
  left 0
  right 0
  bottom 0
  color #ffffff
  background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
  line-height .6rem
  .bannner-title
   flex 1
   font-size .32rem
   padding  0 .2rem
  .banner-number
   line-height .4rem
   margin-top .14rem
   height .4rem
   padding 0 .4rem
   border-radius .2rem
   background  rgba(0 , 0, 0, .5)
   font-size .24rem
   color #ffffff
   .arrow-icon
    font-size .24rem
</style>