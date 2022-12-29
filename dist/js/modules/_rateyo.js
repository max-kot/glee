import $ from "../../../node_modules/jquery/dist/jquery.js";
window.jQuery = $;
import "../../../node_modules/rateyo/src/jquery.rateyo.js";


$(".aside-products__rating").rateYo({
	//rating: 4,
	starWidth: '17px',
	normalFill: "#d6d6d6",
	ratedFill: "#ffcc00",
	readOnly: true,
});
$(".product-block__product-rating").rateYo({
	//rating: 4,
	starWidth: '18px',
	spacing: "10px",
	normalFill: "#d6d6d6",
	ratedFill: "#ffcc00",
	readOnly: true,
});
$(".product-info__rating").rateYo({
	//rating: 4,
	starWidth: '18px',
	spacing: "10px",
	normalFill: "#d6d6d6",
	ratedFill: "#ffcc00",
	readOnly: true,
});

