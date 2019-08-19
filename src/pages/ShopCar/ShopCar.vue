<template>
<div>
  <div class="headerCar">
    <div class="new">
      <span>购物车</span>
      <div class="more">
        <span>领券</span>
      </div>
    </div>
  </div>
  <div id="carContainer">
    <section class="car">
      <ul class="carList">
        <li class="carItem">
          <i class="iconfont iconcaigouziying"></i>
          <span>网易自营品牌</span>
        </li>
        <li class="carItem">
          <i class="iconfont iconwuyouding"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="carItem">
          <i class="iconfont iconshouhouwuyou"></i>
          <span>48小时快速退款</span>
        </li>
      </ul>
    </section>
  </div>
  <div class="carImg">
    <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
    <span class="clear">去添加点什么吧</span>
    <button class="goLogin">登录</button>
  </div>
</div>
  
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/minxis.styl'
.headerCar
  .new
    width 100%
    padding  px2rem(20px)
    box-sizing border-box
    display flex
    span
      white-space nowrap
      color rgb(51, 51, 51)
      font-size px2rem(36px)
      width: 84%;
    .more
      display flex
      float: right
      margin-top px2rem(8px)
      span
        font-size px2rem(30px)
        color red
#carContainer        
  margin-top px2rem(20px)
  .car
    width px2rem(750px)
    height px2rem(72px)
    .carList
      display flex
      justify-content space-around
      background #eee
      .carItem
        color rgb(102,102,102)
        .iconfont
          font-size px2rem(24px)
        span
          font-size px2rem(24px)
 .carImg
    margin-top px2rem(400px)
    display flex
    flex-direction column
    align-items center
    justify-content space-around
    img 
      width px2rem(248px)    
      height px2rem(248px)  
      font-size px2rem(24px)    
      color rgb(152,152,152)
    .clear
      font-size px2rem(28px) 
      color rgb(152,152,152)
      padding px2rem(20px) 
    .goLogin
      width px2rem(480px)    
      height px2rem(92px)  
      background rgb(180,40,45)
      font-size px2rem(30px)  
      color white
</style>
