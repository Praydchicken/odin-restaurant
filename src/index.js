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
		btn.classList.remove('active');
	})

	document.querySelector(`#${id}`).classList.add('active');
	content.innerHTML = '';

	content.append(pages[id]());
}

const handleNavButtons = (event) => {
	const button = event.target.closest('button');

	if (!button) {
		return;
	}

	setActivePage(button.id);
};

navigation.addEventListener('click', handleNavButtons);

setActivePage('home');
