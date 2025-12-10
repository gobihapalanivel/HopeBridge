"use strict";
// Contact Modal
const contactModal = document.getElementById('contactModal');
const closeContactModal = document.getElementById('closeContactModal');
const openFooterModal = document.getElementById('openFooterModal');
const contactForm = document.getElementById('contactForm');
const openContactModal = (event) => {
    event?.preventDefault();
    contactModal?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
};
const closeModal = () => {
    contactModal?.classList.add('hidden');
    document.body.style.overflow = 'auto';
};
openFooterModal?.addEventListener('click', openContactModal);
closeContactModal?.addEventListener('click', closeModal);
contactModal?.addEventListener('click', (e) => {
    if (e.target === contactModal)
        closeModal();
});
contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
    closeModal();
});
// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
});
document
    .querySelectorAll('#mobileMenu a, #mobileMenu button')
    .forEach((link) => link.addEventListener('click', () => mobileMenu?.classList.add('hidden')));
// Expose for inline handlers
window.openContactModal = openContactModal;
//# sourceMappingURL=script.js.map