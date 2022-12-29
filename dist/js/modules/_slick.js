import $ from "../../../node_modules/jquery/dist/jquery.js";
window.jQuery = $;
import "../../../node_modules/slick-carousel/slick/slick.js";

$('.hero-slider').slick({
	dots: true,
	infinite: true,
	fade: true,
	arrows: false,
	autoplay: true,
	speed: 800,
	autoplaySpeed: 2000,
});

$('.gallery-thumb').slick({
	arrows: false,
	vertical: true,
	slidesToShow: 3,
	asNavFor: '.gallery-slider',
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 1025,
			settings: {
				vertical: false,
			}
		},
		{
			breakpoint: 769,
			settings: {
				vertical: true,
			}
		},
		{
			breakpoint: 551,
			settings: {
				vertical: false,
			}
		},
	]
});

$('.gallery-slider').slick({
	arrows: false,
	asNavFor: '.gallery-thumb',
	autoplay: true,
	fade: true,

});

