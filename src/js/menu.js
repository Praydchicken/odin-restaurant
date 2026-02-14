const coffeeItems = [
	{
		name: 'Ember Latte',
		price: 195,
		description: 'Espresso with oat milk, salted caramel, and a dash of cinnamon smoke.',
	},
	{
		name: 'Single Origin Pour-Over',
		price: 220,
		description: 'Ethiopioan Yirgacheffe, Bright, Floral notes with a clean finish.',
	},
	{
		name: 'Cortado',
		price: 165,
		description: 'A 1:1 balance of bold espresso and warm steamed milk',
	},
	{
		name: 'Midnight Cold Brew',
		price: 180,
		description: '16-hour slow-steeped concentrate served over ice with a hint of dark chocolate.',
	},
	{
		name: 'Pistachio Flat White',
		price: 210,
		description: 'Velvety micro-foam over ristretto shots, infused with house-made pistachio praline.',
	},
	{
		name: 'Black Eye',
		price: 175,
		description: 'A double shot of espresso dropped into a cup of our signature house drip coffee.',
	},
];

const createCard = (item) => {
	const card = document.createElement('div');
	card.classList.add('card');

	card.innerHTML = `
		<div class="card__header">
			<h3 class="card__title" data-field="name"></h3>
			<span class="card__price" data-field="price"></span>
		</div>
		<div class="card__content">
			<p class="card__description" data-field="description"></p>
		</div>`;

	const cardData = card.querySelectorAll('[data-field]');

	cardData.forEach(element => {
		const field = element.dataset.field;
		const value = item[field];

		element.textContent = (field === 'price') ? `₱${value}` : value;
	})

	return card;
};

const menu = () => {
	const view = document.createElement('section');
	view.classList.add('menu');

	view.innerHTML = `
		<div>
			<div class="menu__header">
				<p class="menu__eyebrow">What We Serve</p>
				<h2 class="menu__title">The <em>Menu</em></h2>
				<div class="divider"></div>
				<p class="menu__description">Sourced with care,crafted with intention</p>
			</div>
			<div class="menu__grid" id="menu-grid">
			</div>
		</div>`;

	const grid = view.querySelector('#menu-grid');

	coffeeItems.forEach(item => {
		grid.appendChild(createCard(item));
	})

	return view;
};

export default menu;
