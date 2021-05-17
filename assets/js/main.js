/*******************************************************
    Template Name    : Snoki - SEO Agency & Business HTML Landing Page
    Author           : Cute Themes
    Version          : 1.0
    Created          : 2020
*******************************************************/
(function ($) {
	"use strict";
	var wind = $(window);
	var parallaxSlider;
	var parallaxSliderOptions = {
		speed: 1000,
		autoplay: true,
		parallax: true,
		loop: true,
		on: {
			init: function () {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					$(swiper.slides[i]).find('.bg-img').attr({
						'data-swiper-parallax': 0.75 * swiper.width
					});
				}
			},
			resize: function () {
				this.update();
			}
		},
		pagination: {
			el: '.slider-prlx .parallax-slider .swiper-pagination',
			dynamicBullets: true,
			clickable: true
		},
		navigation: {
			nextEl: '.slider-prlx .parallax-slider .next-ctrl',
			prevEl: '.slider-prlx .parallax-slider .prev-ctrl'
		}
	};
	parallaxSlider = new Swiper('.slider-prlx .parallax-slider', parallaxSliderOptions);
	// Var Background image
	var pageSection = $(".bg-img, section");
	pageSection.each(function (indx) {
		if ($(this).attr("data-background")) {
			$(this).css("background-image", "url(" + $(this).data("background") + ")");
		}
	});
	var nav = $('nav');
	var navHeight = nav.outerHeight();
	$('.navbar-toggler').on('click', function () {
		if (!$('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	});
	// START PRELOADED
	$(window).on('load', function () {
		$('.preloader').fadeOut();
		$('.preloader').delay(350).fadeOut('slow');
	});
	// Navbar Menu Reduce 
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-lg').addClass('navbar-reduce');
			$('.navbar-expand-lg').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-lg').addClass('navbar-trans');
			$('.navbar-expand-lg').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});
	// Back to top button 
	$(function () {
		// Scroll Event
		$(window).on('scroll', function () {
			var scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.back-to-top').addClass('active');
			if (scrolled < 300) $('.back-to-top').removeClass('active');
		});
		// Click Event
		$('.back-to-top').on('click', function () {
			$("html, body").animate({
				scrollTop: "0"
			}, 500);
		});
	});
	//  Star Scrolling nav
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 30)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});
	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});
	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	// Testimonials owl
	$('#testimonial-slide').owlCarousel({
		margin: 0,
		autoplay: true,
		autoplayTimeout: 4000,
		nav: false,
		smartSpeed: 800,
		dots: true,
		autoplayHoverPause: true,
		loop: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});
	// Awards Slide owlCarousel
	$('#awards-slide').owlCarousel({
		loop: true,
		margin: 0,
		mouseDrag: true,
		autoplay: true,
		dots: false,
		fullscreen: false,
		smartSpeed: 800,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 5
			}
		}
	});
	//  Star Counter
	$('.counter-number').counterUp({
		delay: 15,
		time: 2000
	});
	//  Accordion faq
	$(".accordion").on("click", ".title", function () {
		$(this).next().slideDown();
		$(".accordion-info").not($(this).next()).slideUp();
	});
	$(".accordion").on("click", ".accordion-item", function () {
		$(this).addClass("active").siblings().removeClass("active");
	});
	//  POPUP VIDEO
	$('.popup-video').magnificPopup({
		type: 'iframe',
	});
	// Tab underline effect
	$(".underline").on("click", ".nav-item", function () {
		$(this).addClass("active").siblings().removeClass("active");
	});
	// Progress bar
	wind.on('scroll', function () {
		$(".skill-progress .progres").each(function () {
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			var myVal = $(this).attr('data-value');
			if (bottom_of_window > bottom_of_object) {
				$(this).css({
					width: myVal
				});
			}
		});
	});
	// MagnificPopup 
	$('.project-container').magnificPopup({
		delegate: '.popimg',
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	// Porfolio isotope and filter
	$(window).on('load', function () {
		var projectIsotope = $('.project-container').isotope({
			itemSelector: '.project-grid-item'
		});
		$('#project-flters li').on('click', function () {
			$("#project-flters li").removeClass('filter-active');
			$(this).addClass('filter-active');
			projectIsotope.isotope({
				filter: $(this).data('filter')
			});
		});
	});
	// WOW JS
	$(window).on('load', function () {
		if ($(".wow").length) {
			var wow = new WOW({
				boxClass: 'wow', // Animated element css class (default is wow)
				animateClass: 'animated', // Animation css class (default is animated)
				offset: 30, // Distance to the element when triggering the animation (default is 0)
				mobile: false, // Trigger animations on mobile devices (default is true)
				live: true, // Act on asynchronously loaded content (default is true)
			});
			wow.init();
		}
	});
})(jQuery);