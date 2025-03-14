const body = document.body;
const navbar = document.querySelector('.navbar');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const skillsSection = document.getElementById('skills');
const projectsSection = document.getElementById('projects');
const contactSection = document.getElementById('contact');
const footer = document.querySelector('footer');
const hamburger = document.getElementById('hamburger');
const navbarMenu = document.getElementById('navbar-menu');

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    navbar.classList.toggle('dark-mode');
    skillsSection.classList.toggle('dark-mode');
    projectsSection.classList.toggle('dark-mode');
    contactSection.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    moonIcon.style.display = isDarkMode ? 'none' : 'block';
    sunIcon.style.display = isDarkMode ? 'block' : 'none';
});

// Hamburger Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

// Loading Animation
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    loading.style.display = 'none';
});

// ScrollReveal Initialization
ScrollReveal({ reset: true });

// Animations for Sections
ScrollReveal().reveal('#hero .container', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
});

ScrollReveal().reveal('#about .container', {
    delay: 300,
    distance: '50px',
    origin: 'left',
    duration: 1000,
});

ScrollReveal().reveal('#skills .container', {
    delay: 300,
    distance: '50px',
    origin: 'right',
    duration: 1000,
});

ScrollReveal().reveal('#projects .container', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
});

ScrollReveal().reveal('#contact .container', {
    delay: 300,
    distance: '50px',
    origin: 'top',
    duration: 1000,
});

ScrollReveal().reveal('footer', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
});

ScrollReveal().reveal('.profile-image', {
    delay: 500,
    distance: '50px',
    origin: 'left',
    duration: 1000,
});

ScrollReveal().reveal('.about-text', {
    delay: 700,
    distance: '50px',
    origin: 'right',
    duration: 1000,
});

ScrollReveal().reveal('.skills-list li', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    interval: 200,
    duration: 1000,
});

ScrollReveal().reveal('.projects-list li', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    interval: 200,
    duration: 1000,
});

ScrollReveal().reveal('.contact-card', {
    delay: 300,
    distance: '50px',
    origin: 'top',
    duration: 1000,
});

// Event Listener for e-kartu nama
document.getElementById('e-kartu-nama').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah perilaku default link
    window.location.href = this.href; // Pindah ke halaman yang dituju
});