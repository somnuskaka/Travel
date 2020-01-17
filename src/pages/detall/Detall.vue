<template>
    <div>
        <detall-banner></detall-banner>
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
export default {
    name: 'Detall',
    components: {
        DetallBanner,
        DetallHeader,
        DetallList
    },
    data () {
        return {
            list:[{
                title:'成人票',
                children :[
                    {title:'成人三联票',
                    children:[{
                        title:'成人三联票-国庆节'
                    }]},
                    {title:'成人五联票'}
                ]
            },{
                title:'学生票'
            },{
                title:'儿童票'
            }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
.containt 
 height 50rem
</style>