import './styles.css';
import home from './js/home.js';
import menu from './js/menu.js';
import about from './js/about.js';

const content = document.getElementById('content');
const navigation = document.getElementById('navigation');

let currentActivePage = null;

const pages = {
	home,
	menu,
	about,
};

const setActivePage = (id) => {
	if (id === currentActivePage) {
		return;
	}

	currentActivePage = id;

	navigation.querySelectorAll('[data-link]').forEach(btn => {
		btn.classList.toggle('active', btn.dataset.link === id);
	})

	content.replaceChildren(pages[id]());
};

const handleRouting = (event) => {
	const trigger = event.target.closest('[data-link]');

	if (!trigger) {
		return;
	}

	const targetPage = trigger.dataset.link;

	if (pages[targetPage]) {
		setActivePage(targetPage);
	}
};

navigation.addEventListener('click', handleRouting);
content.addEventListener('click', handleRouting);

setActivePage('home');
