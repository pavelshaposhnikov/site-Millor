$(document).ready(function () {

	$('.go_to').click(function () {
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900);
		}
		return false;
	});

	/*---------------------------------------------------end*/

	$('.menu-btn').on('click', function (e) {
		$('.menu-btn').toggleClass('active');
		$('.header').toggleClass('menu')
	});
	$('.menu-close').on('click', function (e) {
		$(this).toggleClass('active');
		$('.header').toggleClass('menu')
	});

	/*---------------------------------------------------end*/

	$(function () {
		function searchClose() {
			$('.header').removeClass('search');
			$(".header__search").fadeIn();
		}
		$(".header__search").on('click', function () {
			$(this).fadeOut();
			$('.header').addClass('search');
		});
		$(".search-cancel").on('click', function () {
			searchClose()
		});

		$("#search__input").on('keypress', function () {
			$('.search-res').slideDown();
		});

		$(document).on('click', function (e) {
			if (!(
				($(e.target).parents('.header').length)
				|| ($(e.target).hasClass('search-wrap'))
				|| ($(e.target).hasClass('header__search'))
			)
			) {
				searchClose();
			}
		});
	});

	/*---------------------------------------------------end*/
	if ($('div').hasClass('products-wrap')) {
		$('.products-wrap').slick({
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			vertical: false,
			fade: false,
			dots: false,
			arrows: true,
			draggable: true,
			centerMode: true,
			focusOnSelect: false,
			variableWidth: true,
			responsive: [
				{
					breakpoint: 1240,
					settings: {
						arrows: false,
						infinite: true,
						slidesToShow: 3,
						slidesToScroll: 1,
						centerMode: false,
					}
				},
			]
		});
	}

	/*---------------------------------------------------end*/
	if ($('div').hasClass('catalog-wrap')) {
		$('.catalog-wrap').slick({
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: false,
			vertical: false,
			fade: false,
			dots: false,
			arrows: false,
			draggable: false,
			centerMode: false,
			focusOnSelect: false,
			variableWidth: true,
			responsive: [
				{
					breakpoint: 1240,
					settings: {
						draggable: true,
						infinite: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
						centerMode: true,
					}
				},
			]
		});
	}
	/*---------------------------------------------------end*/

	if ($('div').hasClass('news-wrap')) {
		$('.news-wrap').slick({
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
			arrows: true,
			draggable: true,
			centerMode: true,
			focusOnSelect: false,
			variableWidth: true,
			responsive: [
				{
					breakpoint: 3000,
					settings: "unslick"
				},
				{
					breakpoint: 1200,
					settings: {
						infinite: true,

					}
				},
			]
		});
	}
	/*---------------------------------------------------end*/

	if ($('div').hasClass('instagram-wrap')) {
		$('.instagram-wrap').slick({
			speed: 500,
			// slidesToShow: 3,
			slidesToScroll: 1,
			slidesPerRow: 1,
			infinite: true,
			rows: 2,
			dots: false,
			arrows: true,
			draggable: true,
			centerMode: false,
			focusOnSelect: false,
			variableWidth: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						rows: 1,
						slidesPerRow: 2,
						centerMode: false,
						// slidesToShow: 2,

					}
				},
			]
		});
	}
	/*---------------------------------------------------end*/

});

