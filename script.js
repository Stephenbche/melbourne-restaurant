const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#primary-menu');
const bookingForm = document.querySelector('#booking-form');
const formMessage = document.querySelector('#form-message');
const currentYear = document.querySelector('#current-year');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const booking = new FormData(bookingForm);
  const guestName = booking.get('name');
  const bookingDate = booking.get('date');
  const bookingTime = booking.get('time');
  const guestCount = booking.get('guests');

  formMessage.textContent = `Thanks, ${guestName}. Your request for ${guestCount} on ${bookingDate} at ${bookingTime} has been received.`;
  bookingForm.reset();
});

currentYear.textContent = new Date().getFullYear();
