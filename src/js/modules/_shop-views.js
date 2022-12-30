
const allViewBtn = document.querySelectorAll('.shop-content__view-btn');
const btnViewList = document.querySelector('.shop-content__view-btn--list');
const btnViewGrid = document.querySelector('.shop-content__view-btn--grid');
const shopList = document.querySelector('.shop-content__product-list');

if (allViewBtn) {
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
}