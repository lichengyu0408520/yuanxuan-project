<template>
<!--首页-->
  <div id="categoryContainer">
    <!--头部-->
    <section class="headerContent">
      <div class="header">
        <div class="searchCategory">
          <i class="iconfont iconiconset0157"></i>
          <span>搜索商品，共1000款好物</span>
        </div>
      </div>
    </section>
    <div class="hide">
    </div>
    <div class="line">
    </div>
    <!--内容分类专区-->
    <div class="cateContent">
      <section class="contentLeft">
        <div class="categorys">
          <ul class="categoryList">
            <li class="categoryItem active">
              <span class="suggest">推荐专区</span>
            </li>
            <li class="categoryItem">
              <span class="suggest">推荐专区</span>
            </li>
            <li class="categoryItem">
              <span class="suggest">夏凉专区</span>
            </li>
            <li class="categoryItem">
              <span class="suggest">爆品专区</span>
            </li>
            <li class="categoryItem">
              <span class="suggest">新品专区</span>
            </li>
            <li class="categoryItem">
              <span class="suggest">居家生活</span>
            </li>
            <li class="categoryItem">
              <span class="suggest">服饰鞋包</span>
            </li>
            <li class="categoryItem">
              <span class="suggest">美食酒水</span>
            </li>
            <li class="categoryItem">
              <span class="suggest">个人清洁</span>
            </li>
            <li class="categoryItem">
              <span class="suggest">母婴亲子</span>
            </li>
            <li class="categoryItem">
              <span class="suggest">数码家电</span>
            </li>
            <li class="categoryItem">
              <span class="suggest">全球特色</span>
            </li>
          </ul>
        </div>
      </section>
      <section class="contentRight">
        <div class="categoryImg">
          <img src="https://yanxuan.nosdn.127.net/5b4ca33a0205482398006405c1db15e8.jpg">
        </div>
        <div class="cate">
          <ul class="cateList">
            <li class="cateItem">
              <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png">
              <span class="name">员工精选好货</span>
            </li>
            <li class="cateItem">
              <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png">
              <span class="name">员工精选好货</span>
            </li>
            <li class="cateItem">
              <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png">
              <span class="name">员工精选好货</span>
            </li>
            <li class="cateItem">
              <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png">
              <span class="name">员工精选好货</span>
            </li>
            <li class="cateItem">
              <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png">
              <span class="name">员工精选好货</span>
            </li>
            <li class="cateItem">
              <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png">
              <span class="name">员工精选好货</span>
            </li>
            <li class="cateItem">
              <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png">
              <span class="name">员工精选好货</span>
            </li>
            <li class="cateItem">
              <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png">
              <span class="name">员工精选好货</span>
            </li>
            <li class="cateItem">
              <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png">
              <span class="name">员工精选好货</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/minxis.styl'
#categoryContainer
  padding px2rem(20px)
  box-sizing border-box
  .headerContent
    background white
    width 100%
    height px2rem(60px)
    position fixed
    top 0
    left 0
    .header
      position fixed
      top 0
      left 0
      width 90%
      height px2rem(60px)
      background rgb(237,237,237)
      z-index 10
      margin px2rem(25px) px2rem(30px)
      border-radius px2rem(5px)
      /* 首页搜索*/
      .searchCategory
        display flex
        align-items center
        width px2rem(442px)
        height px2rem(56px)
        line-height px2rem(56px)
        box-sizing border-box
        border-radius px2rem(10px)
        text-align center
        //margin-top px2rem(13px)
        //margin-bottom px2rem(20px)
        margin px2rem(8px) auto
        .iconfont
          color rgb(51, 51, 51)
          padding-left px2rem(30px)
          width px2rem(30px)
          height px2rem(30px)
          font-size px2rem(30px)
          margin-bottom px2rem(22px)
          margin-right px2rem(20px)
        span
          color rgb(102, 102, 102)
          text-align center
          line-height px2rem(17px)
          font-size px2rem(28px)
          vertical-align baseline
  .hide
    height px2rem(88px)
    width 100%
  .line
    width 100%
    height px2rem(3px)
    background #ccc
    margin-top px2rem(5px)
  .cateContent
    display flex
    .contentLeft
      .categorys
        margin-top  px2rem(20px)
        .categoryList
          width px2rem(162px)
          .categoryItem
            padding px2rem(20px)
            width px2rem(162px)
            height px2rem(50px)
            //&:fisrt-child
            //  border-left px2rem(5px) solid red
            &.active
              color red
              border-left px2rem(5px) solid red
              //width px2rem(5px)
              //height px2rem(40px)
              //background red
            span
              font-size px2rem(27px)
    .contentRight
      margin-top px2rem(20px)
      .categoryImg
        img
          width px2rem(528px)
          height px2rem(192px)
      .cate
        .cateList
          display flex
          flex-wrap wrap
          justify-content space-around
          .cateItem
            display flex
            flex-direction column
            img
              width px2rem(144px)
              height px2rem(144px)
            .name
              width px2rem(144px)
              height px2rem(72px)
              font-size px2rem(24px)
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
