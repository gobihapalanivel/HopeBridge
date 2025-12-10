// Contact Modal
const contactModal: HTMLElement | null = document.getElementById('contactModal');
const closeContactModal: HTMLElement | null = document.getElementById('closeContactModal');
const openFooterModal: HTMLElement | null = document.getElementById('openFooterModal');
const contactForm: HTMLFormElement | null = document.getElementById('contactForm') as HTMLFormElement | null;

const openContactModal = (event?: Event): void => {
  event?.preventDefault();
  contactModal?.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

const closeModal = (): void => {
  contactModal?.classList.add('hidden');
  document.body.style.overflow = 'auto';
};

openFooterModal?.addEventListener('click', openContactModal);
closeContactModal?.addEventListener('click', closeModal);

contactModal?.addEventListener('click', (e: MouseEvent): void => {
  if (e.target === contactModal) closeModal();
});

contactForm?.addEventListener('submit', (e: Event): void => {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  contactForm.reset();
  closeModal();
});

// Mobile Menu Toggle
const menuBtn: HTMLElement | null = document.getElementById('menuBtn');
const mobileMenu: HTMLElement | null = document.getElementById('mobileMenu');

menuBtn?.addEventListener('click', (): void => {
  mobileMenu?.classList.toggle('hidden');
});

document
  .querySelectorAll<HTMLAnchorElement | HTMLButtonElement>('#mobileMenu a, #mobileMenu button')
  .forEach((link) => link.addEventListener('click', (): void => mobileMenu?.classList.add('hidden')));

// Expose for inline handlers
(window as any).openContactModal = openContactModal;