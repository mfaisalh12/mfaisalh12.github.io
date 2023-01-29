// ---------- Toggle Menu --------------
const toggle = document.getElementById('toggle');
const icon = document.getElementById('icon');
const links = document.querySelectorAll('.links');

icon.addEventListener('click', (e) => {
	toggle.classList.toggle('active');
});
links.forEach((e) => {
	e.addEventListener('click', () => {
		toggle.classList.toggle('active');
	});
});

// ---------- Dark Mode -------------
if (localStorage.getItem('theme') == 'dark') setDarkMode();

function setDarkMode() {
	let darkIcon = '';
	let isDark = document.body.classList.toggle('dark-theme');

	if (isDark) {
		darkIcon = 'bx bxs-moon';
		localStorage.setItem('theme', 'dark');
	} else {
		darkIcon = 'bx bxs-sun';
		localStorage.removeItem('theme');
	}
	document.getElementById('dark-mode').className = darkIcon;
}

// Owl Carousel
$(document).ready(function () {
	initialize_owl($('#owl1'));

	let tabs = [
		{ target: '#website', owl: '#owl1' },
		{ target: '#uiux', owl: '#owl2' },
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
				items: 2,
			},
		},
	});
}

function destroy_owl(el) {
	el.data('destroy');
}
