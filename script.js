// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('menu-hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    hamburgerMenu.classList.toggle('show');
});
