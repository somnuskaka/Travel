<template>
  <div>
    <home-header ></home-header>
    <home-swiper :list="swiperlist"></home-swiper>
    <home-Icons :list="iconList"></home-Icons>
    <home-recommed :list="recommedlist"></home-recommed>
    <home-weekend  :list="weekendlist"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommed from "./components/Recommed";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommed,
    HomeWeekend
  },
  data() {
    return {
      // city: "",
      swiperlist:[],
      iconList:[],
      recommedlist:[],
      weekendlist:[]
     
    };
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data
        // this.city = data.city
        this.swiperlist = data.swiperlist
        this.iconList = data.iconList
        this.recommedlist = data.recommedlist
        this.weekendlist = data.weekendlist
        
      }
      console.log(res);
    }
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>
<style scoped>
</style>