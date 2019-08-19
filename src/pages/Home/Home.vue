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
      <!-- <div class="jiantou">
        <i class="iconfont iconjiantou-xia"></i>
      </div> -->
    </section>
  </section>
  <!--轮播图-->
  <section class="swiper-container" ref="bigImg">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/fca5a6400454717c5b7d6c393071b307.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/09272c0588454c163017bfd19eb932ca.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/eda2f4fc108b2c1be7dd4eafe26b2daa.png?imageView&amp;quality=75&amp;thumbnail=750x0">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/b69d768f3cef93c13360a99c094cb5d0.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/84862d10e593a9281ce0fb1ee3960b4a.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </section>
  <!--grow-->
  <section class="grow">
    <ul class="growList">
      <li class="growItem">
        <i class="iconfont iconcaigouziying"></i>
        <span>网易自营品牌</span>
      </li>
      <li class="growItem">
        <i class="iconfont iconwuyouding"></i>
        <span>30天无忧退货</span>
      </li>
      <li class="growItem">
        <i class="iconfont iconshouhouwuyou"></i>
        <span>48小时快速退款</span>
      </li>
    </ul>
  </section>
  <!--新品首发列表-->
  <section class="swiperList">
    <ul class="shopList">
      <li class="shopItem">
        <img class="img" src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" data-reactid=".0.5.0.0.0.0.0.$0/=1$0.$0.0.0">
        <span>新品首发</span>
      </li>
      <li class="shopItem">
        <img class="img" src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png">
        <span>居家生活</span>
      </li>
      <li class="shopItem">
        <img class="img" src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png">
        <span>服饰鞋包</span>
      </li>
      <li class="shopItem">
        <img class="img" src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png">
        <span>个户清洁</span>
      </li>
      <li class="shopItem">
        <img class="img" src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png">
        <span>母婴亲子</span>
      </li>
      <li class="shopItem">
        <img class="img" src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png">
        <span>服饰鞋包</span>
      </li>
      <li class="shopItem">
        <img class="img" src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png">
        <span>运动旅行</span>
      </li>
      <li class="shopItem">
        <img class="img" src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif">
        <span>数码家电</span>
      </li>
      <li class="shopItem">
        <img class="img" src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png">
        <span>服饰鞋包</span>
      </li>
      <li class="shopItem">
        <img class="img" src="https://yanxuan.nosdn.127.net/3954c3cbeb4359dd7007be7a076e0dda.gif">
        <span>超级会员</span>
      </li>
    </ul>
  </section>
  <!--网易员工精选-->
  <section class="jingxuan">
    <img src="https://yanxuan.nosdn.127.net/a55393ea2c010bd73f0666e2ffca8d55.gif">
  </section>
  <!--超值-->
  <section class="cuxiao">
    <div class="cuxiaoItem">
      <span class="s1">9.9超值专区首发</span>
      <span class="s2">180爆款新定价</span>
      <div class="cuxiaoImg">
        <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png">
        <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png">
      </div>
    </div>
    <div class="cuxiaoItem">
      <span class="s1">9.9超值专区首发</span>
      <span class="s2">180爆款新定价</span>
      <div class="cuxiaoImg">
        <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png">
        <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png">
      </div>
    </div>
    <div class="cuxiaoItem">
      <span class="s1">9.9超值专区首发</span>
      <span class="s2">180爆款新定价</span>
      <div class="cuxiaoImg">
        <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png">
        <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png">
      </div>
    </div>
    <div class="cuxiaoItem">
      <span class="s1">9.9超值专区首发</span>
      <span class="s2">180爆款新定价</span>
      <div class="cuxiaoImg">
        <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png">
        <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png">
      </div>
    </div>
  </section>
  <!--私人定制-->
  <section class="personal">
    <div class="title">
      <p>私人定制</p>
    </div>
    <div class="swiper-container" ref="swiperOwn">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ul class="swiperList">
            <li class="swiperItem">
              <img src="https://yanxuan-item.nosdn.127.net/894b48e0a0dc9ed949da5a995e4114ad.png">
              <span class="shoptitle">射频导入嫩肤</span>
              <div class="detail">
                <span class="jinshou">仅</span>
                <span class="shopPrice">￥345</span>
              </div>
            </li>
            <li class="swiperItem">
              <img src="https://yanxuan-item.nosdn.127.net/bbd83d44d6d8fc61031256143ad37c93.png">
              <span class="shoptitle">泰国制造 天然乳</span>
              <div class="detail">
                <span class="jinshou">仅</span>
                <span class="shopPrice">￥199</span>
              </div>
            </li>
            <li class="swiperItem">
              <img src="https://yanxuan-item.nosdn.127.net/864633a00a776555b1c53abd50df0a40.png">
              <span class="shoptitle">男/女舒适拖鞋</span>
              <div class="detail">
                <span class="jinshou">仅</span>
                <span class="shopPrice">￥19.9</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul class="swiperList">
            <li class="swiperItem">
              <img src="https://yanxuan-item.nosdn.127.net/894b48e0a0dc9ed949da5a995e4114ad.png">
              <span class="shoptitle">射频导入嫩肤</span>
              <div class="detail">
                <span class="jinshou">仅</span>
                <span class="shopPrice">￥345</span>
              </div>
            </li>
            <li class="swiperItem">
              <img src="https://yanxuan-item.nosdn.127.net/bbd83d44d6d8fc61031256143ad37c93.png">
              <span class="shoptitle">泰国制造 天然乳</span>
              <div class="detail">
                <span class="jinshou">仅</span>
                <span class="shopPrice">￥199</span>
              </div>
            </li>
            <li class="swiperItem">
              <img src="https://yanxuan-item.nosdn.127.net/864633a00a776555b1c53abd50df0a40.png">
              <span class="shoptitle">男/女舒适拖鞋</span>
              <div class="detail">
                <span class="jinshou">仅</span>
                <span class="shopPrice">￥19.9</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul class="swiperList">
            <li class="swiperItem">
              <img src="https://yanxuan-item.nosdn.127.net/894b48e0a0dc9ed949da5a995e4114ad.png">
              <span class="shoptitle">射频导入嫩肤</span>
              <div class="detail">
                <span class="jinshou">仅</span>
                <span class="shopPrice">￥345</span>
              </div>
            </li>
            <li class="swiperItem">
              <img src="https://yanxuan-item.nosdn.127.net/bbd83d44d6d8fc61031256143ad37c93.png">
              <span class="shoptitle">泰国制造 天然乳</span>
              <div class="detail">
                <span class="jinshou">仅</span>
                <span class="shopPrice">￥199</span>
              </div>
            </li>
            <li class="swiperItem">
              <img src="https://yanxuan-item.nosdn.127.net/864633a00a776555b1c53abd50df0a40.png">
              <span class="shoptitle">男/女舒适拖鞋</span>
              <div class="detail">
                <span class="jinshou">仅</span>
                <span class="shopPrice">￥19.9</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul class="swiperList">
            <li class="swiperItem">
              <img src="https://yanxuan-item.nosdn.127.net/894b48e0a0dc9ed949da5a995e4114ad.png">
              <span class="shoptitle">射频导入嫩肤</span>
              <div class="detail">
                <span class="jinshou">仅</span>
                <span class="shopPrice">￥345</span>
              </div>
            </li>
            <li class="swiperItem">
              <img src="https://yanxuan-item.nosdn.127.net/bbd83d44d6d8fc61031256143ad37c93.png">
              <span class="shoptitle">泰国制造 天然乳</span>
              <div class="detail">
                <span class="jinshou">仅</span>
                <span class="shopPrice">￥199</span>
              </div>
            </li>
            <li class="swiperItem">
              <img src="https://yanxuan-item.nosdn.127.net/864633a00a776555b1c53abd50df0a40.png">
              <span class="shoptitle">男/女舒适拖鞋</span>
              <div class="detail">
                <span class="jinshou">仅</span>
                <span class="shopPrice">￥19.9</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </section>
  <!--限时购-->
  <section class="flashSale">
    <div class="time">
      <span>限时购</span>
      <div class="timeCount">
        <span class="times">00</span>
        <span>:</span>
        <span class="times">00</span>
        <span>:</span>
        <span class="times">00</span>
      </div>
      <div class="more">
        <span>更多</span>
        <i class="iconfont iconjiantou"></i>
      </div>
    </div>
    <div class="timeContent">
      <ul class="timeList">
        <!--1-->
        <li class="timeItem">
          <img src="https://yanxuan-item.nosdn.127.net/8427b14107deadbc140e95367ae38d5e.png">
          <div class="timeSpan">
            <span class="newPrice">￥179</span>
            <span class="oldPrice">￥399</span>
          </div>
        </li>
        <!--2-->
        <li class="timeItem">
          <img src="https://yanxuan-item.nosdn.127.net/d0aba28ac46db2434da3fbd8330d8e00.png">
          <div class="timeSpan">
            <span class="newPrice">￥179</span>
            <span class="oldPrice">￥399</span>
          </div>
        </li>
        <!--3-->
        <li class="timeItem">
          <img src="https://yanxuan-item.nosdn.127.net/2f800432797432dfdfdb135f98735cce.png">
          <div class="timeSpan">
            <span class="newPrice">￥179</span>
            <span class="oldPrice">￥399</span>
          </div>
        </li>
        <!--4-->
        <li class="timeItem">
          <img src="https://yanxuan-item.nosdn.127.net/8c96757210b51606c85604813f749bd0.png">
          <div class="timeSpan">
            <span class="newPrice">￥179</span>
            <span class="oldPrice">￥399</span>
          </div>
        </li>
        <!--5-->
        <li class="timeItem">
          <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png">
          <div class="timeSpan">
            <span class="newPrice">￥179</span>
            <span class="oldPrice">￥399</span>
          </div>
        </li>
        <!--6-->
        <li class="timeItem">
          <img src="https://yanxuan-item.nosdn.127.net/c34ea79a4db2d2fe2846736d137ce45e.png">
          <div class="timeSpan">
            <span class="newPrice">￥179</span>
            <span class="oldPrice">￥399</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <!--新品首发-->
  <section class="newSale">
    <div class="new">
      <span>新品首发</span>
      <div class="more">
        <span>更多</span>
        <i class="iconfont iconjiantou"></i>
      </div>
    </div>
    <div class="newContent">
      <ul class="newList">
        <!--1-->
        <li class="newItem">
          <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png">
          <span class="title">家用除湿机</span>
          <span class="price">￥179</span>
        </li>
        <!--2-->
        <li class="newItem">
          <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png">
          <span class="title">家用除湿机</span>
          <span class="price">￥179</span>
        </li>
        <!--3-->
        <li class="newItem">
          <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png">
          <span class="title">家用除湿机</span>
          <span class="price">￥179</span>
        </li>
        <!--4-->
        <li class="newItem">
          <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png">
          <span class="title">家用除湿机</span>
          <span class="price">￥179</span>
        </li>
        <!--5-->
        <li class="newItem">
          <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png">
          <span class="title">家用除湿机</span>
          <span class="price">￥179</span>
        </li>
        <!--6-->
        <li class="newItem">
          <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png">
          <span class="title">家用除湿机</span>
          <span class="price">￥179</span>
        </li>
      </ul>
    </div>
  </section>
  <!--人气推荐-->
  <section class="hotPerson">
    <div class="hotRecommend">
      <span>人气推荐</span>
      <div class="more">
        <span>更多</span>
        <i class="iconfont iconjiantou"></i>
      </div>
    </div>
    <div class="hotHeader">
      <div class="hotHeaderImg">
        <img src="https://yanxuan-item.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png">
      </div>
      <div class="hotHeaderContent">
        <span class="youhui">抄底特惠</span>
        <span class="title">奢华植鞣头层水牛皮席 凉席三件套</span>
        <span class="desc">三峡水牛</span>
        <span class="price">￥1949</span>
      </div>
    </div>
    <div class="hotBottom">
      <ul class="hotList">
        <!--1-->
        <li class="hotItem">
          <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png">
          <span class="title">家用除湿机</span>
          <span class="price">￥179</span>
        </li>
        <!--2-->
        <li class="hotItem">
          <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png">
          <span class="title">家用除湿机</span>
          <span class="price">￥179</span>
        </li>
        <!--3-->
        <li class="hotItem">
          <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png">
          <span class="title">家用除湿机</span>
          <span class="price">￥179</span>
        </li>
      </ul>
    </div>
  </section>
  <!-- 类目热销榜-->
  <section class="sellWell">
    <div class="title">
      <p>类目热销榜</p>
    </div>
    <div class="sellList">
      <div class="sellHot">
        <div class="hotLeft">
          <span class="hotList">热销榜</span>
        </div>
        <div class="hotImg">
          <img src="https://yanxuan-item.nosdn.127.net/c34ea79a4db2d2fe2846736d137ce45e.png">
        </div>
      </div>
      <div class="sellGood">
        <div class="sellLeft">
          <span class="sellList">好评榜</span>
        </div>
        <div class="sellImg">
          <img src="https://yanxuan-item.nosdn.127.net/c34ea79a4db2d2fe2846736d137ce45e.png">
        </div>
      </div>
    </div>
    <!--居家生活榜-->
    <div class="lifeList">
      <ul class="shopList">
        <li class="shopItem">
          <span>居家生活榜</span>
          <img src="https://yanxuan-item.nosdn.127.net/4497017f190800099eec339690907c80.png">
        </li>
        <li class="shopItem">
          <span>美食酒水榜</span>
          <img src="https://yanxuan-item.nosdn.127.net/9d1f1d04288f6307eb550ac1fb740326.png">
        </li>
        <li class="shopItem">
          <span>服饰鞋包榜</span>
          <img src="https://yanxuan-item.nosdn.127.net/4497017f190800099eec339690907c80.png">
        </li>
        <li class="shopItem">
          <span>个户清洁榜</span>
          <img src="https://yanxuan-item.nosdn.127.net/9d1f1d04288f6307eb550ac1fb740326.png">
        </li>
        <li class="shopItem">
          <span>数码家电榜</span>
          <img src="https://yanxuan-item.nosdn.127.net/4497017f190800099eec339690907c80.png">
        </li>
        <li class="shopItem">
          <span>运动旅行榜</span>
          <img src="https://yanxuan-item.nosdn.127.net/4497017f190800099eec339690907c80.png">
        </li>
        <li class="shopItem">
          <span>母婴亲子榜</span>
          <img src="https://yanxuan-item.nosdn.127.net/9d1f1d04288f6307eb550ac1fb740326.png">
        </li>
        <li class="shopItem">
          <span>全球特色榜</span>
          <img src="https://yanxuan-item.nosdn.127.net/4497017f190800099eec339690907c80.png">
        </li>
      </ul>
    </div>
  </section>
  <!--福利社-->
  <section class="welfare">
    <div class="welfareItem">
      <div class="welfaretitle">
        <span class="s1">福利社</span>
        <span class="s2">超值神券</span>
        <span class="s3">今日特价</span>
      </div>
      <div class="welfareImg">
        <img src="https://yanxuan-item.nosdn.127.net/864633a00a776555b1c53abd50df0a40.png">
      </div>
    </div>
    <div class="welfareItem">
      <div class="welfaretitle">
        <span class="s1">福利社</span>
        <span class="s2">超值神券</span>
        <span class="s3">今日特价</span>
      </div>
      <div class="welfareImg">
        <img src="https://yanxuan-item.nosdn.127.net/864633a00a776555b1c53abd50df0a40.png">
      </div>
    </div>
    <div class="welfareItem">
      <div class="welfaretitle">
        <span class="s1">福利社</span>
        <span class="s2">超值神券</span>
        <span class="s3">今日特价</span>
      </div>
      <div class="welfareImg">
        <img src="https://yanxuan-item.nosdn.127.net/864633a00a776555b1c53abd50df0a40.png">
      </div>
    </div>
    <div class="welfareItem">
      <div class="welfaretitle">
        <span class="s1">福利社</span>
        <span class="s2">超值神券</span>
        <span class="s3">今日特价</span>
      </div>
      <div class="welfareImg">
        <img src="https://yanxuan-item.nosdn.127.net/864633a00a776555b1c53abd50df0a40.png">
      </div>
    </div>
  </section>
  <!--品牌制造商直供-->
  <section class="pinpai">
    <div class="new">
      <span>品牌制造商直供</span>
      <div class="more">
        <span>更多</span>
        <i class="iconfont iconjiantou"></i>
      </div>
    </div>
    <div class="pinpaiList">
      <div class="pinpaiItem">
        <div class="pinpaititle">
          <span class="s1">海外制造商</span>
          <span class="s2">9.9元起</span>
        </div>
        <div class="pinpaiImg">
          <img src="https://yanxuan-item.nosdn.127.net/0fe562392cd8af853a565fb5c302fe3f.png">
        </div>
      </div>
      <div class="pinpaiItem">
        <div class="pinpaititle">
          <span class="s1">海外制造商</span>
          <span class="s2">9.9元起</span>
        </div>
        <div class="pinpaiImg">
          <img src="https://yanxuan-item.nosdn.127.net/0fe562392cd8af853a565fb5c302fe3f.png">
        </div>
      </div>
      <div class="pinpaiItem">
        <div class="pinpaititle">
          <span class="s1">海外制造商</span>
          <span class="s2">9.9元起</span>
        </div>
        <div class="pinpaiImg">
          <img src="https://yanxuan-item.nosdn.127.net/0fe562392cd8af853a565fb5c302fe3f.png">
        </div>
      </div>
      <div class="pinpaiItem">
        <div class="pinpaititle">
          <span class="s1">海外制造商</span>
          <span class="s2">9.9元起</span>
        </div>
        <div class="pinpaiImg">
          <img src="https://yanxuan-item.nosdn.127.net/0fe562392cd8af853a565fb5c302fe3f.png">
        </div>
      </div>
    </div>

  </section>
  <!--专题精选-->
  <section class="specialTopic">
    <div class="new">
      <span>专题精选</span>
      <div class="more">
        <span>更多</span>
        <i class="iconfont iconjiantou"></i>
      </div>
    </div>
    <div class="specialList">
      <div class="specialContent">
        <div class="specialList">
          <img class="img" src="https://yanxuan.nosdn.127.net/d92e4fa96f4c65e3a3f135d430c459ec.jpg">
          <span class="detail ellipsis">喝了这杯椰子汁喝了这杯椰子汁</span>
          <span class="title">女士精选礼物</span>
        </div>
      </div>
      <div class="specialContent">
        <div class="specialList">
          <img class="img" src="https://yanxuan.nosdn.127.net/d92e4fa96f4c65e3a3f135d430c459ec.jpg">
          <span class="detail ellipsis">喝了这杯椰子汁喝了这杯椰子汁</span>
          <span class="title">女士精选礼物</span>
        </div>
      </div>
      <div class="specialContent">
        <div class="specialList">
          <img class="img" src="https://yanxuan.nosdn.127.net/d92e4fa96f4c65e3a3f135d430c459ec.jpg">
          <span class="detail ellipsis">喝了这杯椰子汁喝了这杯椰子汁</span>
          <span class="title">女士精选礼物</span>
        </div>
      </div>
    </div>
  </section>
  <!--美食发烧节-->
  <section class="fineFood">
    <div class="foodImg">
      <img src="https://yanxuan.nosdn.127.net/09272c0588454c163017bfd19eb932ca.jpg" alt="">
    </div>
    <div class="foodBottom">
      <ul class="foodList">
        <!--1-->
        <li class="foodItem">
          <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png">
          <span class="title">家用除湿机</span>
          <span class="price">￥179</span>
        </li>
        <!--2-->
        <li class="foodItem">
          <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png">
          <span class="title">家用除湿机</span>
          <span class="price">￥179</span>
        </li>
        <!--3-->
        <li class="foodItem">
          <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png">
          <span class="title">家用除湿机</span>
          <span class="price">￥179</span>
        </li>
      </ul>
    </div>
  </section>
  <!--食器生活美学-->
  <section class="foodLife">
    <div class="lifeImg">
      <img src="https://yanxuan.nosdn.127.net/37449fc9cea8f248ab9d06cbb048fe99.jpg" alt="">
    </div>
    <div class="lifeBottom">
      <ul class="lifeList">
        <!--1-->
        <li class="lifeItem">
          <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png">
          <span class="title">家用除湿机</span>
          <span class="price">￥179</span>
        </li>
        <!--2-->
        <li class="lifeItem">
          <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png">
          <span class="title">家用除湿机</span>
          <span class="price">￥179</span>
        </li>
        <!--3-->
        <li class="lifeItem">
          <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png">
          <span class="title">家用除湿机</span>
          <span class="price">￥179</span>
        </li>
      </ul>
    </div>
  </section>
  <!--医护保健家用指南-->
  <section class="treat">
    <div class="treatImg">
      <img src="https://yanxuan.nosdn.127.net/8179e09266b10cfc55d0c99dcfcc4f8e.jpg" alt="">
    </div>
    <div class="treatBottom">
      <ul class="treatList">
        <!--1-->
        <li class="treatItem">
          <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png">
          <span class="title">家用除湿机</span>
          <span class="price">￥179</span>
        </li>
        <!--2-->
        <li class="treatItem">
          <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png">
          <span class="title">家用除湿机</span>
          <span class="price">￥179</span>
        </li>
        <!--3-->
        <li class="treatItem">
          <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png">
          <span class="title">家用除湿机</span>
          <span class="price">￥179</span>
        </li>
      </ul>
    </div>
  </section>
  <!--底部-->
  <section class="footer">
    <div class="load">
      <span class="loader">下载App</span>
      <span class="pc">电脑版</span>
    </div>
    <div class="publish">
      <span class="own">网易公司版权所有 © 1997-2010</span>
      <span class="allow">食品经营许可证：JY13301080111719</span>
    </div>
  </section>
</div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import BScroll from 'better-scroll'
  // import HomeHeader from '../../components/HomeHeader/HomeHeader.vue'
  export default {
    mounted () {
      new Swiper(this.$refs.bigImg, {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true
      })
      new Swiper(this.$refs.swiperOwn, {
      pagination: {
        el: '.swiper-pagination',
        },
      loop: true
      })

      this.$nextTick(() => {
        this.rightScroll = new BScroll(this.$refs.list, {
          scrollX:true
        })
      })
      
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/minxis.styl'
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
    /*首页头部*/
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
          vertical-align: baseline
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
      margin-top px2rem(-30px)
      .listContent
        display flex
        .listItem
          height 100%
          width 150px
          text-align center
          padding px2rem(15px)
          &:first-child
            color red
            box-sizing border-box
            border-bottom px2rem(5px) solid red
          span
            font-size px2rem(28px)
      .jiantou
        width 20%
        z-index 5
        text-align center
        background white
        .iconfont
          font-size px2rem(28px)
          color: rgb(51, 51, 51)
  /*轮播图*/
  .swiper-container
    width 750px
    height 370px
    margin-top px2rem(160px)
    .swiper-pagination-bullet
      width 30px
      height 8px
      display inline-block
      background #000
      opacity 0.2
    .swiper-pagination-bullet-active
      opacity: 1;
      background: #007aff;
  /*grow*/
  .grow
    width px2rem(750px)
    height px2rem(72px)
    .growList
      display flex
      justify-content space-around
      .growItem
        .iconfont
          color red
          font-size px2rem(24px)
        span
          font-size px2rem(24px)
  /*新品首发列表*/
  .swiperList
    width 100%
    .shopList
      width 100%
      display flex
      flex-wrap wrap
      .shopItem
        box-sizing border-box
        width 20%
        padding px2rem(20px)
        img
          width px2rem(110px)
          height px2rem(110px)
        span
          font-size: 24px;
  /*员工精选*/
  .jingxuan
    img
      width 100%
      height px2rem(127px)
  /*超值促销*/
  .cuxiao
    width 100%
    height px2rem(576px)
    display flex
    flex-wrap wrap
    padding px2rem(30px)
    box-sizing border-box
    justify-content center
    margin-bottom px2rem(10px)
    .cuxiaoItem
      background #eee
      display flex
      box-sizing border-box
      flex-direction column
      width 45%
      height 50%
      margin-bottom px2rem(20px)
      &:nth-child(2n+1)
        margin-right px2rem(20px)
      .s1
        margin-top px2rem(12px)
        text-align center
        font-size px2rem(32px)
        margin-bottom px2rem(20px)
      .s2
        text-align center
        font-size px2rem(24px)
        color rgb(127, 127, 127)
      .cuxiaoImg
        display flex
        img
          width px2rem(150px)
          height px2rem(150px)
  /*私人定制*/
  .personal
    padding width px2rem(20px)
    box-sizing border-box
    .title
      padding 0 px2rem(20px)
      color rgb(51, 51, 51)
      font-size px2rem(32px)
    .swiper-container
      width px2rem(750px)
      height px2rem(367px)
      .swiper-wrapper
        .swiper-slide
          .swiperList
            width px2rem(750px)
            height px2rem(750px)
            display flex
            .swiperItem
              width 30%
              display flex
              flex-direction column
              img
                width px2rem(216px)
                height px2rem(216px)
              .shoptitle
                margin-bottom px2rem(10px)
                text-align center
                color rgb(51, 51, 51)
                font-size px2rem(24px)
              .detail
                display flex
                align-items center
                justify-content center
                .jinshou
                  text-align center
                  color rgb(51, 51, 51)
                  font-size px2rem(24px)
                .shopPrice
                  text-align center
                  color red
                  font-size px2rem(24px)
      .swiper-pagination
        .swiper-pagination-bullet
          width px2rem(20px)
          height px2rem(20px)
          display inline-block
          background #000
          opacity 0.2
        /deep/ .swiper-pagination-bullet-active
          width px2rem(20px)
          height px2rem(20px)
          background red

  /*限时购*/
  .flashSale
    width 100%
    padding px2rem(25px) px2rem(25px)
    height px2rem(100px)
    display flex
    flex-direction column
    vertical-align middle
    align-items center
    box-sizing border-box
    margin-bottom px2rem(5px)
    .time
      display flex
      width 100%
      span
        color rgb(51, 51, 51)
        font-size px2rem(32px)
        width 20%
        padding px2rem(5px) px2rem(5px)
        box-sizing border-box
      .timeCount
        width 65%
        margin-right px2rem(5px)
        .times
          border-radius  px2rem(5px)
          vertical-align center
          width px2rem(36px)
          height px2rem(36px)
          background #000000
          color white
      .more
        margin-top px2rem(-12px)
        span
          font-size px2rem(24px)
        .iconfont
          font-size px2rem(24px)
    .timeContent
      width 100%
      height px2rem(598px)
      .timeList
        width 100%
        display flex
        justify-content space-around
        flex-wrap wrap
        align-items center
        vertical-align middle
        margin-top  px2rem(50px)
        box-sizing border-box
        .timeItem
          width 30%
          box-sizing border-box
          img
            width px2rem(216px)
            height px2rem(216px)
          .timeSpan
            display flex
            align-items center
            justify-content center
            .newPrice
              font-size px2rem(24px)
              color red
            .oldPrice
              font-size px2rem(24px)
  /*新品首发*/
  .newSale
    width 100%
    margin-top px2rem(550px)
    box-sizing border-box
    .new
      width 100%
      padding  px2rem(20px)
      box-sizing border-box
      display flex
      span
        color rgb(51, 51, 51)
        font-size px2rem(32px)
        width: 84%;
      .more
        display flex
        float: right
        margin-top px2rem(8px)
        span
          font-size px2rem(24px)
        .iconfont
          font-size px2rem(24px)
    .newContent
      width 100%
      height px2rem(598px)
      display flex
      margin-top px2rem(80px)
      .newList
        width 100%
        display flex
        flex-wrap wrap
        justify-content center
        .newItem
          width 30%
          margin-top  px2rem(-130px)
          margin-bottom   px2rem(-10px)
          display  flex
          flex-direction column
          align-items center
          justify-content center
          img
            width px2rem(216px)
            height px2rem(216px)
          .title
            font-size px2rem(24px)
            margin px2rem(10px) auto
          .price
            font-size px2rem(24px)
            color red
  /*人气推荐*/
  .hotPerson
    width 100%
    box-sizing border-box
    background-color rgb(255, 255, 255)
    .hotRecommend
      width 100%
      padding  px2rem(20px)
      box-sizing border-box
      display flex
      span
        color rgb(51, 51, 51)
        font-size px2rem(32px)
        width: 84%;
      .more
        display flex
        float: right
        margin-top px2rem(8px)
        span
          font-size px2rem(24px)
        .iconfont
          font-size px2rem(24px)
    .hotHeader
      width 100%
      height px2rem(280px)
      display flex
      .hotHeaderImg
        width 50%
        height px2rem(280px)
        margin-top px2rem(-40px)
        margin-left px2rem(-40px)
        img
          padding px2rem(30px)
          width px2rem(350px)
          height px2rem(350px)
          box-sizing border-box
      .hotHeaderContent
        display flex
        flex-direction column
        margin-top px2rem(37px)
        .youhui
          width px2rem(98px)
          height px2rem(30px)
          line-height px2rem(30px)
          text-align center
          font-size px2rem(20px)
          color: red
          border px2rem(1px) solid red
          margin-bottom px2rem(20px)
        .title
          font-size px2rem(28px)
          margin-bottom px2rem(20px)
        .desc
          font-size px2rem(24px)
          margin-bottom px2rem(20px)
          color rgb(127, 127, 127)
        .price
          font-size px2rem(24px)
          margin-bottom px2rem(20px)
          color red
    .hotBottom
      width 100%
      margin-top px2rem(60px)
      .hotList
        width 100%
        display flex
        flex-wrap wrap
        justify-content center
        .hotItem
          width 33%
          margin-top  px2rem(-130px)
          margin-bottom   px2rem(-10px)
          display  flex
          flex-direction column
          align-items center
          justify-content center
          img
            width px2rem(216dpx)
            height px2rem(216px)
          .title
            font-size px2rem(24px)
            margin px2rem(10px) auto
          .price
            font-size px2rem(24px)
            color red
  /*类目热销榜*/
  .sellWell
    padding px2rem(20px)
    margin-top px2rem(20px)
    box-sizing border-box
    .title
      padding 0 px2rem(20px)
      color rgb(51, 51, 51)
      font-size px2rem(32px)
    .sellList
      display flex
      .sellHot
        width 50%
        display flex
        .hotLeft
          height px2rem(200px)
          width 50%
          margin-top px2rem(50px)
          margin-right px2rem(-45px)
          padding 0 px2rem(36px)
          .hotList
            font-size px2rem(32px)
            border-bottom  px2rem(5px) solid #000
        .hotImg
          img
            width px2rem(200px)
            height px2rem(200px)
      .sellGood
        width 50%
        display flex
        .sellLeft
          width 50%
          margin-top px2rem(68px)
          margin-right px2rem(-45px)
          padding 0 px2rem(36px)
          .sellList
            font-size px2rem(32px)
            border-bottom  px2rem(5px) solid #000
        .sellImg
          img
            width px2rem(200px)
            height px2rem(200px)

     /*居家生活榜*/
    .lifeList
      margin-top px2rem(-40px)
      .shopList
        width 100%
        display flex
        flex-wrap wrap
        .shopItem
          box-sizing border-box
          width 25%
          padding px2rem(20px)
          img
            width px2rem(110px)
            height px2rem(110px)
          span
            font-size: 24px;
  /*福利社*/
  .welfare
    width 100%
    display flex
    flex-wrap wrap
    padding px2rem(20px)
    justify-content center
    align-items center
    box-sizing border-box
    .welfareItem
      background #eee
      width 49%
      display flex
      margin 1px
      .welfaretitle
        display flex
        flex-direction column
        width 50%
        padding px2rem(20px)
        box-sizing border-box
        margin-right px2rem(10px)
        margin-top px2rem(32px)
        align-items center
        vertical-align center
        .s1
          font-size px2rem(32px)
          margin-bottom px2rem(10px)
        .s2
          font-size px2rem(24px)
          color rgb(127,127,127)
          margin-bottom px2rem(10px)
        .s3
          font-size px2rem(24px)
          color red
      .welfareImg
        margin-top px2rem(35px)
        margin-left px2rem(20px)
        img
          width px2rem(110px)
          height px2rem(110px)
  /*品牌制造商直供*/
  .pinpai
    width 100%
    box-sizing border-box
    .new
      width 100%
      padding  px2rem(20px)
      box-sizing border-box
      display flex
      span
        color rgb(51, 51, 51)
        font-size px2rem(32px)
        width: 84%;
      .more
        display flex
        float: right
        margin-top px2rem(8px)
        span
          font-size px2rem(24px)
        .iconfont
          font-size px2rem(24px)
    .pinpaiList
      width 100%
      display flex
      flex-wrap wrap
      .pinpaiItem
        width 50%
        .pinpaititle
          display flex
          flex-wrap wrap
          flex-direction column
          padding px2rem(20px)
          text-align center
          .s1
            font-size px2rem(27px)
          .s2
            font-size px2rem(27px)
      .pinpaiImg
        width 50%
        padding px2rem(20px)
        img
          height px2rem(240px)
          width px2rem(323px)
   /*专题精选*/
  .specialTopic
     width 100%
     .new
       width 100%
       padding  px2rem(20px)
       box-sizing border-box
       display flex
       span
         color rgb(51, 51, 51)
         font-size px2rem(32px)
         width: 84%;
       .more
         display flex
         float: right
         margin-top px2rem(8px)
         span
           font-size px2rem(24px)
         .iconfont
           font-size px2rem(24px)
     .specialList
       display flex
       flex-wrap nowrap
       .specialContent
         display flex
         width 100%
         overflow hidden
         .specialList
           display flex
           flex-direction column
           flex-wrap nowrap
           width 100%
           img
             width px2rem(480px)
             height px2rem(267px)
         .detail
            font-size px2rem(28px)
            color rgb(51,51,51)
          .title
            font-size px2rem(28px)
            color rgb(127,127,127)

  /*美食发烧节*/
  .fineFood
    margin-top px2rem(50px)
    .foodImg
      margin-top px2rem(30px)
      img
        width 100%
        height px2rem(368px)
    .foodBottom
      width 100%
      margin-top px2rem(110px)
      .foodList
        width 100%
        display flex
        flex-wrap wrap
        justify-content center
        .foodItem
          width 33%
          margin-top  px2rem(-130px)
          margin-bottom   px2rem(-10px)
          display  flex
          flex-direction column
          align-items center
          justify-content center
          img
            width px2rem(216dpx)
            height px2rem(216px)
          .title
            font-size px2rem(24px)
            margin px2rem(10px) auto
          .price
            font-size px2rem(24px)
            color red
  /*食器生活美学*/
  .foodLife
    margin-top px2rem(50px)
    .lifeImg
      margin-top px2rem(30px)
      img
        width 100%
        height px2rem(368px)
    .lifeBottom
      width 100%
      margin-top px2rem(110px)
      .lifeList
        width 100%
        display flex
        flex-wrap wrap
        justify-content center
        .lifeItem
          width 33%
          margin-top  px2rem(-130px)
          margin-bottom   px2rem(-10px)
          display  flex
          flex-direction column
          align-items center
          justify-content center
          img
            width px2rem(216dpx)
            height px2rem(216px)
          .title
            font-size px2rem(24px)
            margin px2rem(10px) auto
          .price
            font-size px2rem(24px)
            color red
  /*医护保健家用指南*/
  .treat
    margin-top px2rem(50px)
    .treatImg
      margin-top px2rem(30px)
      img
        width 100%
        height px2rem(368px)
    .treatBottom
      width 100%
      margin-top px2rem(110px)
      .treatList
        width 100%
        display flex
        flex-wrap wrap
        justify-content center
        .treatItem
          width 33%
          margin-top  px2rem(-130px)
          margin-bottom   px2rem(-10px)
          display  flex
          flex-direction column
          align-items center
          justify-content center
          img
            width px2rem(216dpx)
            height px2rem(216px)
          .title
            font-size px2rem(24px)
            margin px2rem(10px) auto
          .price
            font-size px2rem(24px)
            color red
   /*首页底部*/
  .footer
     width 100%
     height px2rem(244px)
     background #414141
     margin-top px2rem(60px)
     .load
       height 50%
       display flex
       align-items center
       justify-content space-around
       .loader
         width  px2rem(137px)
         height px2rem(62px)
         margin-right px2rem(-260px)
         border px2rem(1px) solid white
         color white
         font-size px2rem(24px)
         text-align center
         line-height px2rem(62px)
         margin-top px2rem(20px)
         border-radius px2rem(5px)
       .pc
         text-align center
         line-height px2rem(62px)
         width  px2rem(137px)
         height px2rem(62px)
         border px2rem(1px) solid white
         color white
         border-radius px2rem(5px)
         margin-top px2rem(20px)
         font-size px2rem(24px)
     .publish
       height px2rem(64px)
       display flex
       flex-direction column
       justify-content center
       align-items center
       .own
         font-size px2rem(24px)
         margin-bottom px2rem(14px)
         margin-top px2rem(20px)
       .allow
         font-size px2rem(24px)
/*底部*/
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
