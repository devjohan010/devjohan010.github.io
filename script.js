document.addEventListener('DOMContentLoaded', function () {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const toggleButton = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggleButton && navLinks) {
        toggleButton.addEventListener('click', function () {
            navLinks.classList.toggle('open');
        });
    }

    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Mensagem enviada!');
            form.reset();
        });
    }
});
