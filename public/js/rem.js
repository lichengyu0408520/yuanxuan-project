!(function(){
  var width = document.documentElement.clientWidth;
  var styleNode = document.createElement('style');
  styleNode.innerHTML = 'html{font-size: '+ width/16 +'px !important;}';
  document.head.appendChild(styleNode);
})();

document.addEventListener('touchstart',function(event){
  event.preventDefault();
});

var aNodes = document.querySelectorAll('a');
for(var i = 0; i < aNodes.length; i++){
  aNodes[i].addEventListener('touchstart',function(){
      window.location.href = this.href;
  })
}
// //轮播图
// var mySwiper = new Swiper ('.swiper-container', {
//   loop: true, // 循环模式选项

//   // 如果需要分页器
//   pagination: {
//       el: '.swiper-pagination',
//   }
// })