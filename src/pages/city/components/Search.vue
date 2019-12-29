<template>
    <div class="serach serach-input">
        <input class="serach-input" type="text" placeholder="输入城市名或者拼音">
    </div>
</template>
<script>
export default {
    name:'CitySearch'
}
</script>
<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
 .serach
   height .72rem
   background $bgColor
   padding 0 .1rem
   .serach-input
    width 100%
    height .62rem
    text-align center
    border-radius .06rem
    color #666
    box-sizing border-box
    padding 0 .1rem

</style>