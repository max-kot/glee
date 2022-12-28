/*
const viewButtons = document.querySelectorAll('.filter-view__btn');
const viewButtonList = document.querySelector('.filter-view__btn-list');
const viewButtonGrid = document.querySelector('.filter-view__btn-grid');
const productList = document.querySelector('.content-products__list')


viewButtons.forEach((button) => {
	button.addEventListener('click', function () {
		viewButtons.forEach((button) => {
			button.classList.remove('filter-view__btn--active')
		})
		button.classList.add('filter-view__btn--active')
	})
})

function initListMode() {
	viewButtonList.addEventListener('click', function () {
		productList.classList.add('content-products__list--list')
	})

	viewButtonGrid.addEventListener('click', function () {
		productList.classList.remove('content-products__list--list')
	})
}

if (productList) {
	initListMode();
}
*/

const allViewBtn = document.querySelectorAll('.shop-content__view-btn');
const btnViewList = document.querySelector('.shop-content__view-btn--list');
const btnViewGrid = document.querySelector('.shop-content__view-btn--grid');
const shopList = document.querySelector('.shop-content__product-list');

const removeActiveClassBtn = () => {
	allViewBtn.forEach((item) => {
		item.classList.remove('active')
	})
}

btnViewList.addEventListener('click', () => {
	removeActiveClassBtn();
	btnViewList.classList.add('active');
	shopList.classList.add('active');
})

btnViewGrid.addEventListener('click', () => {
	removeActiveClassBtn();
	btnViewGrid.classList.add('active');
	shopList.classList.remove('active');
})