// This file contains JavaScript code for managing micro-interactions on the donation website.

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.interactive-button');
    const cards = document.querySelectorAll('.card');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('scale-105', 'transition-transform', 'duration-300');
        });

        button.addEventListener('mouseleave', () => {
            button.classList.remove('scale-105');
        });
    });

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('shadow-lg', 'transition-shadow', 'duration-300');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('shadow-lg');
        });
    });
});