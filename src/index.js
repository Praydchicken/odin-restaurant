import './styles.css';
import home from './js/home.js';
import menu from './js/menu.js';
import about from './js/about.js';

const content = document.querySelector('#content');
const navigation = document.querySelector('.navbar__links');

let currentActivePage = null;

const pages = {
	home: () => home(),
	menu: () => menu(),
	about: () => about(),
};

const setActivePage = (id) => {
	if (id === currentActivePage) {
		return;
	}

	currentActivePage = id;

	document.querySelectorAll('.navbar__links button').forEach(btn => {
		btn.classList.toggle('active', btn.dataset.link === id);
	})

	content.innerHTML = '';

	content.append(pages[id]());
};

const handleRouting = (event) => {
	const trigger = event.target.closest('[data-link]');

	if (!trigger) {
		return;
	}

	setActivePage(trigger.dataset.link);
};

navigation.addEventListener('click', handleRouting);
content.addEventListener('click', handleRouting);

setActivePage('home');
