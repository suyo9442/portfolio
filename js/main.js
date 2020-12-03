// main.js

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


// target 부드럽게 스크롤
(function( $ ) {      "use strict";   
  $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
        });
  });   
}(jQuery));


// 스크롤 헤더 전환 
$(function(){
  var header = $('#header'); //헤더를 변수에 넣기
  var page = $('.page-start'); //색상이 변할 부분
  var pageOffsetTop = page.offset().top; //색상 변할 부분의 top값 구하기
  $(window).resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = page.offset().top;
  });
  
  $(window).on('scroll', function(){
    if($(window).scrollTop() >= pageOffsetTop) { // 스크롤이 page보다 밑에 내려가면
      header.addClass('header_down');
      $('.h_font').addClass('h_font_change');
      $('.h_logo').addClass('h_logo_change');
      $('.h_top').addClass('hamburger_color');
      $('.h_middle').addClass('hamburger_color');
    } else { // 스크롤 올릴 때
      header.removeClass('header_down');
      $('.h_font').removeClass('h_font_change');
      $('.h_logo').removeClass('h_logo_change');
      $('.h_top').removeClass('hamburger_color');
      $('.h_middle').removeClass('hamburger_color');
    }
  });
});


// 그라디언트 배경화면
var colors = new Array(
  [135,184,227],
  [219,190,215],
  [199,185,224],
  [178,195,224],
  [135,184,227]
  );

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.003;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('.gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}
setInterval(updateGradient,10);



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


// 함께 일할 열정적인 퍼블리셔를...
$(document).ready(function ($) {
		$(this).scroll(function (event) {
		var scroll = $(window).scrollTop();
	
		$(".h2").css("transform", "translateX(+" + scroll + "px)");
	});
});


// 콘텐츠3 background 전환
$(document).ready(function() {
    /* 1 */
    $(window).scroll( function(){
        /* 2 */
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if( bottom_of_window > bottom_of_object/2 ){
                $(this).animate({'opacity':'1'},3000);
            }
        }); 
    });
});



// 비주얼 타이핑
    var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 6) || 1000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.07em solid #fff}";
  document.body.appendChild(css);
};




    jQuery(document).ready(function($){
	// 팝업창 열기
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	// 버튼으로 닫기
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
  });

	// ESC로 닫기
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
});
