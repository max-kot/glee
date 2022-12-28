const filterBtn = document.querySelector('.shop__btn-aside');
const filterSection = document.querySelector('.shop__aside');


filterBtn.addEventListener('click', () => {
	filterBtn.classList.toggle('active');
	filterSection.classList.toggle('active');
	document.querySelector('body').classList.toggle('no-scroll');
})