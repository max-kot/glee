import Swiper from '../../../node_modules/swiper/swiper-bundle.js';

const swiper = new Swiper('.gallery-thumb', {
	direction: 'vertical',
	loop: true,
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});