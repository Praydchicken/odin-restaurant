const home = () => {
	const view = document.createElement('section');
	view.classList.add('hero');

	view.innerHTML = `
		<div>
			<div class="hero__eyebrow">
			 	Est. 2019 · Specialty Coffee
			</div>
			<h1 class="hero__title">Where Every Cup <br>
			<em>Tells</em> a story</h1>
			<p class="hero__sub">Slow-roasted single origins, freshly baked pastries, <br>
			and a corner to call your own.</p>
			<button class="hero__cta" data-link="menu">Explore the Menu</button>
		</div>`;

	return view;
}

export default home;
