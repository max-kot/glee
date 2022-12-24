const categoryList = document.querySelectorAll('.category__product-item');

// const categoryTagList = document.querySelector('.category__tag-list');

const categoryBtnList = document.querySelectorAll('.category__btn');

/*
categoryTagList.addEventListener('click', (e) => {

	if (e.target.tagName !== 'BUTTON') return false;

	let filterClass = e.target.dataset.f;

	e.target.classList.remove('active');
	e.target.classList.add('active');

	categoryList.forEach((el) => {
		el.classList.remove('hide')
		if (!el.classList.contains(filterClass) && filterClass !== 'all') {
			el.classList.add('hide');
		}
	})
})
*/


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