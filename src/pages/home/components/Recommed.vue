<template>
  <div>
    <div class="recommed-titile">热销推荐</div>
    <ul>

      <router-link 
        tag="li"
        class="item border-bottom" 
        v-for="item of list" 
        :key="item.id"
        :to="'/detall/'+item.id"
        >
            <div class="item-img=wrapper">
               <img class="item-img" :src="item.imgUrl" alt />
            </div>
            <div class="item-info">
               <p class="item-title">{{item.title}} </p>
               <p class="item-desc">{{item.desc}} </p>
               <button class="item-button">查看详情</button>
            </div>
      </router-link>
    
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommed",
  props:{
    list:Array
  }
  // data (){
  //     return{ recommedlist:[{
  //         id:'001',
  //         imgUrl:'//imgs.qunarzz.com/vs_ceph_vs_tts/fb5fbf5c-4f85-482b-91d6-4ce17a42618d.jpg_r_390x260x90_aae85edf.jpg',
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

.item
  display flex
  height 1.9rem
  .item-img
   width 1.7rem
   height 1.7rem
   padding .1rem
  .item-info
   flex 1
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
   .item-button
    line-height .44rem
    background #ff9300
    padding 0 .2rem
    border-radius .06rem
    margin-top .2rem
    color #fff
</style>