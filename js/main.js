$(document).ready(function () {
	$('.slider').slick(
		dots, true
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

$('.center').slick({
    infinite: true, //スライドのループ有効化
    dots:true, //ドットのナビゲーションを表示
    centerMode: true, //要素を中央寄せ
    centerPadding:'10%', //両サイドの見えている部分のサイズ
    autoplay:true, //自動再生
});

$(function() {

var $window = $(window),
	$header = $('.page-header'),
	headerOffsetTop = $header.offset().top;


$window.on('scroll', function() {
    if ($window.scrollTop() > headerOffsetTop) {
    $header.addClass('sticky');
    } else {
    $header.removeClass('sticky');
    }
});

$window.trigger('scroll');

});

<script type="text/javascript">
$(document).ready(function(){
    $('center').slick({
        accessibility: true
    });
});
</script>

$(function(){
    //スクロールの方向　−1の時には左、1の時には右
    var dir = -1;

    //スクロールのインターバル（何秒ごとにスクロールさせるか。3000ミリ秒に設定）
    var interval = 3000;

    //スクロールのスピード(700ミリ秒に設定)
    var duration = 700;

    // タイマー用の変数
    var timer;
});

        $(function () {
            //スクロールの方向　−1の時には左、1の時には右
            var dir = -1;

            //スクロールのインターバル（何秒ごとにスクロールさせるか。3000ミリ秒に設定）
            var interval = 3000;

            //スクロールのスピード(700ミリ秒に設定)
            var duration = 700;

            // タイマー用の変数
            var timer;
        });

        $(function () {
            //スクロールの方向　−1の時には左、1の時には右
            var dir = -1;

            //スクロールのインターバル（何秒ごとにスクロールさせるか。3000ミリ秒に設定）
            var interval = 3000;

            //スクロールのスピード(700ミリ秒に設定)
            var duration = 700;

            // タイマー用の変数
            var timer;
        });
