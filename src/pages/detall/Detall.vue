<template>
    <div>
        <detall-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"
        ></detall-banner>
        <detall-header></detall-header>
        <div class="containt">
             <detall-list :list="list"></detall-list>
        </div>
    </div>
</template>
<script>
import DetallBanner from './components/Banner'
import DetallHeader from './components/Header'
import DetallList from './components/List'
import axios from 'axios'

export default {
    name: 'Detall',
    components: {
        DetallBanner,
        DetallHeader,
        DetallList
    },
    data () {
        return {
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            list:[]
        }
    },
    methods:{
        getDetallInfo (){
            axios.get('/api/detail.json?id=',{
                params:{
                     id: this.$route.params.id
                }
            }) .then(this.handleGetDatasucc) 
        },
        handleGetDatasucc(res){
            res=res.data
            if (res.ret && res.data){
                const data = res.data
                this.sightName=data.sightName
                this.bannerImg=data.bannerImg
                this.gallaryImgs=data.gallaryImgs
                this.list=data.categoryList
                // console.log(data)
            }
        }
    },
    mounted (){
        this.getDetallInfo()
    }
}
</script>
<style lang="stylus" scoped>
.containt 
 height 50rem
</style>