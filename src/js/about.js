import Image from '../assets/images/story-img.jpg';

const about = () => {
	const view = document.createElement('section');
	view.classList.add('about');

	view.innerHTML = `
		<div class="about__image">

		</div>
		<div>
			<div class="about__heading">
				<p class="about__eyebrow"> Our Story</p>
				<h2 class="about__title">A <em>Warm</em> Place to Slow Down</h2>
				<p class="about__description">Ember & Grounds was born from a simple belief: a great cup of coffee should feel like a conversation, not a transaction.</p>
			</div>
			<div class="stats">
				<div class="stats__card">
					<div class="stats__number">12</div>
					<p class="stats__label">Origin Sourced</p>
				</div>
				<div class="stats__card">
					<div class="stats__number">6yr</div>
					<p class="stats__label">in the Community</p>
				</div>
				<div class="stats__card">
					<div class="stats__number">3</div>
					<p class="stats__label">Locations</p>
				</div>
				<div class="stats__card">
					<div class="stats__number">∞</div>
					<p class="stats__label">Refills of Warmth</p>
				</div>
			</div>
		</div>`;

	const imageContainer = view.querySelector('.about__image');

	const image = document.createElement('img');
	image.src = Image;
	imageContainer.append(image);

	return view;
}

export default about;
