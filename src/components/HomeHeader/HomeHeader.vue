<template>
  <div>
    <div id="homeContainer">
      <!--头部-->
      <section class="header">
        <section class="headerLine">
          <img src="./images/logo.png" alt="">
          <!--<input type="text" placeholder="搜索商品，共1000款好物">-->
          <!--<i class="iconfont iconiconset0157"></i>-->
          <div class="searchShop">
            <i class="iconfont iconiconset0157"></i>
            <span>搜索商品，共1000款好物</span>
          </div>
          <button class="btn">登录</button>
        </section>
        <!--商品列表-->
        <section class="list" ref="list">
          <ul class="listContent">
            <li class="listItem">
              <span>推荐</span>
            </li>
            <li class="listItem">
              <span>居家生活</span>
            </li>
            <li class="listItem">
              <span>服饰鞋包</span>
            </li>
            <li class="listItem">
              <span>美食酒水</span>
            </li>
            <li class="listItem">
              <span>个户清洁</span>
            </li>
            <li class="listItem">
              <span>母婴亲子</span>
            </li>
            <li class="listItem">
              <span>运动旅行</span>
            </li>
            <li class="listItem">
              <span>数码家电</span>
            </li>
            <li class="listItem">
              <span>全球特色</span>
            </li>
          </ul>
          <div class="jiantou">
            <i class="iconfont iconjiantou-xia"></i>
          </div>
        </section>
      </section>
      <div class="hide">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted() {
      this.rightScroll = new BScroll(this.$refs.list, {
      scrollX:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './minxis'
#homeContainer
  padding-bottom px2rem(98px)
  overflow hidden
  .header
    position fixed
    top 0
    left 0
    width 100%
    height px2rem(148px)
    background white
    z-index 10
    /* 首页头部*/
    .headerLine
      width 100%
      height px2rem(88px)
      padding px2rem(10px)
      display flex
      justify-content space-around
      align-items center
      box-sizing border-box
      margin-top px2rem(10px)
      img
        line-height px2rem(40px)
        width px2rem(138px)
        height px2rem(40px)
        padding px2rem(10px)
        margin-bottom px2rem(20px)
      .searchShop
        display flex
        align-items center
        vertical-align center
        width px2rem(442px)
        height px2rem(56px)
        line-height px2rem(56px)
        background #ededed
        box-sizing border-box
        border-radius px2rem(10px)
        padding px2rem(10px)
        text-align center
        margin-bottom px2rem(20px)
        .iconfont
          color: rgb(51, 51, 51)
          padding-left:px2rem(30px)
          width px2rem(28px)
          height px2rem(28px)
          font-size px2rem(29px)
          margin-bottom px2rem(22px)
          margin-right px2rem(20px)
        span
          color: rgb(102, 102, 102)
          text-align center
          line-height px2rem(17px)
          font-size px2rem(28px)
          vertical-align: baseline;
      .btn
        font-size px2rem(24px)
        width px2rem(74px)
        height px2rem(40px)
        border-radius px2rem(5px)
        background white
        color red
        border px2rem(1px) solid red
        margin-bottom px2rem(20px)
    /*商品列表*/
    .list
      width 100%
      display flex
      .listContent
        display flex
        width 80%
        .listItem
          height 100%
          text-align center
          flex-shrink 0
          padding 0 px2rem(20px)
          &:first-child
            color red
            box-sizing border-box
            border-bottom px2rem(5px) solid red
          span
            width 100%
            font-size px2rem(28px)
      .jiantou
        width 20%
        z-index 5
        text-align center
        background white
        .iconfont
          font-size px2rem(28px)
          color: rgb(51, 51, 51)
  .hide
    width 100%
    height px2rem(148px)
</style>
