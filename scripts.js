let timeout;

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');

    if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

document.querySelector('.nav-links').addEventListener('mouseleave', function() {
    const navLinks = document.querySelector('.nav-links');
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        navLinks.classList.remove('active');
    }, 300);
});
