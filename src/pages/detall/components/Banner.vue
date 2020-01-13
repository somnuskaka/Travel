<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/d992bf03-7438-4b05-b5c7-e56ca4e256ca.jpg_r_640x420x90_e7de13ce.jpg" alt="">
            <div class="banner-info">
                <div class="bannner-title">产品编号:2961226654</div>
                <div class="banner-number"><span class="iconfont arrow-icon">&#xe60e;</span>39</div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showgallary" @close='hanfleGallaryClose'></common-gallary>
    </div>
    
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name:'DetallBanner',
    data () {
        return{ 
            showgallary:false, 
            imgs:['https://img1.qunarzz.com/vs_ceph_vs_tts/d992bf03-7438-4b05-b5c7-e56ca4e256ca.jpg_r_640x420x90_e7de13ce.jpg',
               'https://img1.qunarzz.com/vs_ceph_vs_tts/2b766a0a-8c1d-43c6-b50d-42fe3935e209.jpg_r_640x420x90_3a2effdb.jpg']
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
        CommonGallary
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