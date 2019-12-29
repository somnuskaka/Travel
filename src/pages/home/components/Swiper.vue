<template>
  <div class="wapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" alt :src="item.imgUrl" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }
      // swipwerlist: [
      //   {
      //     id: "001",
      //     imgUrl:
      //       "//imgs.qunarzz.com/vc/24/36/10/3fc94d042ae62de380581d4c98.jpg_92.jpg"
      //   },
      //   {
      //     id: "002",
      //     imgUrl:
      //       "//imgs.qunarzz.com/vc/8d/63/a8/90bc4af557172cc68c6725ec36.jpg_92.jpg"
      //   },
      //   {
      //     id: "003",
      //     imgUrl:
      //       "//imgs.qunarzz.com/vc/aa/9e/82/14bf523635542806a671763e98.jpg_92.jpg"
      //   }
      // ]
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }
  }
};
</script>
<style lang="stylus" scoped>
.wapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 30.5%;
  background: #ccc;

  .swiper-img {
    width: 100%;
  }
}
</style>