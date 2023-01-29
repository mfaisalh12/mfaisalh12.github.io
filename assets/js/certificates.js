// Owl Carousel
$(document).ready(function () {
	initialize_owl($('#owl3'));

	let tabs = [
		{ target: '#academic', owl: '#owl3' },
		{ target: '#achivement', owl: '#owl4' },
	];

	// Setup 'bs.tab' event listeners for each tab
	tabs.forEach((tab) => {
		$(`a[href="${tab.target}"]`)
			.on('shown.bs.tab', () => initialize_owl($(tab.owl)))
			.on('hide.bs.tab', () => destroy_owl($(tab.owl)));
	});
});

function initialize_owl(el) {
	el.owlCarousel({
		loop: true,
		autoplay: true,
		margin: 10,
		autoplayTimeout: 3000,
		dots: true,
		nav: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});
}

function destroy_owl(el) {
	el.data('destroy');
}
