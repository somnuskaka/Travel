<template>
  <div>
    <div class="recommed-titile">周末去那</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}} </p>
          <p class="item-desc">{{item.desc}} </p>
         
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  props:{
    list:Array
  }
  // data (){
  //     return{ recommedlist:[{
  //         id:'001',
  //         imgUrl:'//imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
  //         title:'北京-巴厘岛 6天跟团游',
  //         desc:'三亚6日春节预售减200🔥1线海景+激情表演+派对🌴蜈支洲+分界洲丨双岛'
  //     },{
  //         id:'002',
  //         imgUrl:'//imgs.qunarzz.com/vs_ceph_vs_tts/fb5fbf5c-4f85-482b-91d6-4ce17a42618d.jpg_r_390x260x90_aae85edf.jpg',
  //         title:'北京-巴厘岛 6天跟团游',
  //         desc:'三亚6日春节预售减200🔥1线海景+激情表演+派对🌴蜈支洲+分界洲丨双岛'
  //     }]}
     
  // }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';
.recommed-titile 
  line-height: 0.8rem;
  background: #eeeeee;
  text-indent: 0.2rem;

.item-img-wrapper
  height 0
  overflow hidden
  padding-bottom 33.9%
  .item-img
   width 100%
   padding .1rem
.item-info
  padding .1rem
  min-width 0
  .item-title
   line-height .54rem
   font-size .32rem
   ellipsis()
  .item-desc
   line-height .4rem
   color #ccc
   ellipsis()
</style>