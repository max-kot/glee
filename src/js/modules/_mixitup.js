import mixitup from "../../../node_modules/mixitup/dist/mixitup.js";

const initMix = () => {
	var mixer = mixitup('.product-block__product-list');
}

if (document.querySelector('.product-block__product-list')) {
	initMix()
}