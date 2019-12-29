<template>
<div class="header">
<div class="header-left">
    <div class="iconfont backicon">&#xe604;</div>
    </div>
<div class="header-input">
    <span class="iconfont">&#xe69f;</span>输入城市景点、主题</div>
<div class="header-right">{{this.city}} <span class="iconfont arrow-icon">&#xe632;</span></div>
</div>

</template>
<script>
export default {
    name:'HomeHeader',
    props:{
        city: String
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
    display:flex
    height :.86rem
    line-height .86rem
    background :$bgColor
    color: #fff
    .header-left
        width: 0.64rem
        float:left
        .backicon
            text-align :center
            font-size: .4rem
    .header-input
        flex :1
        height :.64rem
        line-height :.64rem
        margin-top .12rem
        margin-left .2rem
        padding-left .2rem
        background :#fff
        color :#ccc
        border-radius:.1rem
    .header-right
        width: 1.24rem
        padding-left 0.22rem
        float:right
        text-align:center
          .arrow-icon
           font-size .2rem
           margin-left :-0.04rem
</style>