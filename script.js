$(document).ready(function () {
	let slideProject1 = $('#slideProjectWeb');
	let slideProject2 = $('#slideProjectUi');
	let slideCertificate = $('#slideCertificate');

	slideProject1.owlCarousel({
		loop: true,
		margin: 100,
		responsiveClass: true,
		autoplay: true,
		autoplayTimeout: 4000,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 2,
			},
		},
	});

	slideProject2.owlCarousel({
		loop: true,
		margin: 100,
		responsiveClass: true,
		autoplay: true,
		autoplayTimeout: 4000,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 2,
			},
		},
	});

	slideCertificate.owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
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
});
