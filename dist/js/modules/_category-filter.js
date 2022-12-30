const categoryList = document.querySelectorAll('.category__product-item');
const categoryBtnList = document.querySelectorAll('.category__btn');

if (categoryList) {
	categoryBtnList.forEach((btn) => {
		btn.addEventListener('click', () => {
			categoryBtnList.forEach((btn) => {
				btn.classList.remove('active');
			});
			btn.classList.add('active');
			let filterId = btn.dataset.f;

			categoryList.forEach((item) => {
				item.classList.remove('hide')
				if (!item.classList.contains(filterId) && filterId !== 'all') {
					item.classList.add('hide');
				}
			})

		})
	})
}
