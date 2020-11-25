// 햄버거
$(document).ready(function(){
	$('.hamburger-shell').click(function(){
		$('#menu').slideToggle(300);
		$('.h_top').toggleClass('rotate');
		$('.h_middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});
	$('.bg-cover').click(function(){
		$('#menu').slideToggle(300);
		$('.h_top').toggleClass('rotate');
		$('.h_middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	})
});


// 저는 이런 사람이에요.js
$(document).ready(function ($) {
    $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    $(".h1").css("transform", "translateX(-" + scroll + "px)");
    });
});


// carouselTicker.js
$(document).ready(function() {
    $('.carouselTicker').carouselTicker({
        speed: 1.5,
        delay: 30,
        reverse: true
    });
});