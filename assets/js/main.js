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
