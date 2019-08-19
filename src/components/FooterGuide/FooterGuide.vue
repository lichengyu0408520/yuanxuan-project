<template>
    <footer class="footer_guide">
        <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/home'}" @click="goTo('/home')">
            <span class="item_icon">
                <i class="iconfont iconhome"></i>
            </span>
            <span>首页</span>
        </a>
         <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/category'}" @click="goTo('/category')">
            <span class="item_icon">
                <i class="iconfont iconsousuofenlei"></i>
            </span>
            <span>分类</span>
        </a>
         <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/searchthing'}" @click="goTo('/searchthing')">
            <span class="item_icon">
                <i class="iconfont icontupian"></i>
            </span>
            <span>识物</span>
        </a>
         <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/shopcar'}" @click="goTo('/shopcar')">
            <span class="item_icon">
                <i class="iconfont icongouwuche"></i>
            </span>
            <span>购物车</span>
        </a>
         <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/personalcenter'}" @click="goTo('/personalcenter')">
            <span class="item_icon">
                <i class="iconfont icongeren"></i>
            </span>
            <span>个人</span>
        </a>
    </footer>
</template>

<script type="text/ecmascript-6">
  export default {
      methods: {
        goTo (path) {
            this.$router.replace(path)
        }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/minxis.styl'
  .footer_guide
    position fixed
    left 0
    bottom 0
    width 100%
    height px2rem(98px)
    display flex
    background white
    .guide_item
        width 20%
        height 100%
        display flex
        flex-direction column
        align-items center
        justify-content center
        &.on
        color #02a774
        span
        font-size px2rem(24px)
        margin-bottom px2rem(2px)
        .iconfont
            font-size px2rem(40px)
            margin-bottom px2rem(2px)
</style>
