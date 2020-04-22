$('.slider').slick(
    dots, true
});

$(document).ready(function () {
    $('.slider').slick({
        setting-name, setting-value
    });
});

$(function () {
    $('.page-header').each(function () {
        var $window =$(window),
            $header = $(this),
        headerOffsetTop = $header.offset().top;

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
$(function myFunction() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
}
$(document).ready(function(){
    $("#theTarget").skippr();
});

$(function(){
    // #で始まるa要素をクリックした場合に処理
    $('a[href^=#]').click(function(){
      // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
      var adjust = 0;
      // スクロールの速度（ミリ秒）
      var speed = 400;
      // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
      var href= $(this).attr("href");
      // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
      var position = target.offset().top + adjust;
      // スムーススクロール linear（等速） or swing（変速）
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
});

$('.center').slick({
    infinite: true, //スライドのループ有効化
    dots:true, //ドットのナビゲーションを表示
    centerMode: true, //要素を中央寄せ
    centerPadding:'10%', //両サイドの見えている部分のサイズ
    autoplay:true, //自動再生
});
