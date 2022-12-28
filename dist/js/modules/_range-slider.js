import $ from "../../../node_modules/jquery/dist/jquery.js";
import "../../../node_modules/ion-rangeslider/js/ion.rangeSlider.js";

$(".filter-price").ionRangeSlider({
	onStart: function (data) {
		$(".filter-price__from").text(data.from)
		$(".filter-price__to").text(data.to)
	},
	onChange: function (data) {
		$(".filter-price__from").text(data.from)
		$(".filter-price__to").text(data.to)
	},
});