<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt />
          </div>
          <p class="icon-desc">{{item.dest}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  // data() {
  //   return {
  //     iconlist: [
  //       {
  //         id: "001",
  //         imgUrl: "//s.qunarzz.com/homenode/images/touchheader/hotel.png",
  //         dest: "酒店"
  //       },
  //       {
  //         id: "002",
  //         imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
  //         dest: "机票"
  //       },
  //       {
  //         id: "003",
  //         imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png",
  //         dest: "度假"
  //       },
  //       {
  //         id: "004",
  //         imgUrl: "//s.qunarzz.com/homenode/images/touchheader/train.png",
  //         dest: "火车票"
  //       },
  //       {
  //         id: "005",
  //         imgUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png",
  //         dest: "景点门票"
  //       },
  //       {
  //         id: "006",
  //         imgUrl: "//s.qunarzz.com/homenode/images/touchheader/innBnb.png",
  //         dest: "名宿客栈"
  //       },
  //       {
  //         id: "007",
  //         imgUrl:
  //           "//s.qunarzz.com/homenode/images/touchheader/bargainflight.png",
  //         dest: "低价机票"
  //       },
  //       {
  //         id: "008",
  //         imgUrl: "//s.qunarzz.com/homenode/images/touchheader/group.png",
  //         dest: "特色酒店"
  //       },
  //       {
  //         id: "009",
  //         imgUrl: "//s.qunarzz.com/homenode/images/touchheader/haiwai.png",
  //         dest: "海外酒店"
  //       },
  //       {
  //         id: "0010",
  //         imgUrl: "//picbed.qunarzz.com/7804b43ac02cd0333bd0f866eebd43b3.png",
  //         dest: "一日游"
  //       }
  //     ]
  //   };
  // },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 10);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 45%;
}

.icons {
  margin-top: 0.2rem;
}

.icon {
  position: relative;
  height: 0;
  overflow: hidden;
  float: left;
  width: 20%;
  padding-bottom: 20%;
}

.icon-img {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0.44rem;
  box-sizing: border-box;
  padding: 0.1rem;

  .icon-img-content {
    height: 100%;
    display: block;
    margin: 0 auto;
  }
}

.icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 0.44rem;
  height: 0.44rem;
  color: $darkTextColor;
  text-align: center;
  ellipsis();
}
</style>