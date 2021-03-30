
(function ($) {
	"use strict";

    jQuery(document).ready(function($){
     /* Sticky nav */ 
    $(".header-area").sticky({topSpacing:0});
	
	   /* //Smoth Scroll*/
		$('.smoth-menu a, a.smoth-menu').bind('click',function(event){
			var $anchor = $(this);
			var headerH = '65';
			
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1000, 'easeInOutExpo');
			event.easeInOutExpo();
		});
		//paralax
		$('.paralax-bg').scrolly({bgParallax: true});
	
		// Highlight the top nav as scrolling occurs
			$('body').scrollspy({
				target: '.navbar-collapse'
			});

	});





}(jQuery));	