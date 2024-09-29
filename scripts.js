const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
let closeTimeout;

function toggleMenu() {
    navLinks.classList.toggle('active');
}

navLinks.addEventListener('mouseleave', () => {
    closeTimeout = setTimeout(() => {
        navLinks.classList.remove('active');
    }, 300);
});

navLinks.addEventListener('mouseenter', () => {
    clearTimeout(closeTimeout);
});
