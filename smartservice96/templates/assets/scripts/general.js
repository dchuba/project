$(document).ready(function () {
	$('#sl-brand').bxSlider({
		nextText: '',
		prevText: '',
		minSlides: 3,
 		maxSlides: 6,
  		moveSlides: 1,
  		slideWidth: 255,
  		slideMargin: 25,
  		pager: false,
  		auto: true,

	});
	$('#sl-come').bxSlider({
		nextSelector: '.come-next',
		prevSelector: '.come-prev',
		nextText: '',
		prevText: '',
		minSlides: 1,
 		maxSlides: 2,
  		moveSlides: 1,
  		slideWidth: 475,
  		slideMargin: 15,
  		pager: false,
  		autoDirection:'prev'

	});
	$('#bx-slider').bxSlider({
		minSlides: 1,
 		maxSlides: 2,
  		moveSlides: 1,
  		slideWidth: 475,
  		slideMargin: 15
	});
	$('#sl-comments').bxSlider({
		nextSelector: '.comment-next',
		prevSelector: '.comment-prev',
		nextText: '',
		prevText: '',		
  		responsive: true,
  		pager: true,
  		auto: true,
  		autoStart: true

	});
	$('#slider').bxSlider({
		nextSelector: '.slider-next',
		prevSelector: '.slider-prev',
		nextText: '',
		prevText: '',		
  		responsive: true,
  		pager: true,
  		auto: true,
  		autoStart: true,
  		mode: 'fade'

	});
	$('.navbar-toggle').click(function(){
		$('.nav').toggle( "slow", function() {});
	});
  
});
