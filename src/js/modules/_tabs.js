const tabLinkNode = document.querySelectorAll('.tabs__title');
const tabContentNode = document.querySelectorAll('.tabs__content');


const classActiveRemove = (node) => {
	node.forEach((item) => {
		item.classList.remove('active')
	})
}

const initTabs = () => {
	tabLinkNode.forEach((link) => {

		link.addEventListener('click', (e) => {
			e.preventDefault();
			classActiveRemove(tabLinkNode);
			link.classList.add('active')
			let tabId = e.target.dataset.tab;

			tabContentNode.forEach((tab) => {
				classActiveRemove(tabContentNode);
				let activeTab = document.querySelector('#' + tabId);
				activeTab.classList.add('active')
			})
		})
	})
}

if (tabLinkNode) {
	initTabs();
}