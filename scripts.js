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

function closeMenu(event) {
    if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
        navLinks.classList.remove('active');
    }
}

menuIcon.addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenu);
