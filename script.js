const video = document.getElementById('video');
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const menu = document.getElementById('nav-bar')

video.playbackRate = 0.4;

formChange = () => {
  const name = document.getElementById('input-name').value;
  const email = document.getElementById('input-email').value;
  const message = document.getElementById('input-message').value;

  const emailRegex = /\w+@\w+.com/;
  const validEmail = emailRegex.test(email);

  submitBtn.disabled = !(name.length > 0 && validEmail && message.length > 0);
}

contactForm.addEventListener('keyup', formChange);
submitBtn.addEventListener('click', () => alert('Mensagem enviada!'));

mobileMenuIcon.addEventListener('click', () => {
  if (menu.classList.contains('move-in')) {
    menu.classList.remove('move-in');
    menu.classList.add('move-out');
    mobileMenuIcon.classList.remove('menu-open');
    mobileMenuIcon.classList.add('menu-close');
    mobileMenuIcon.innerHTML = '&#x2630;';
  } else {
    menu.classList.remove('move-out');
    menu.classList.add('move-in');
    mobileMenuIcon.classList.remove('menu-close');
    mobileMenuIcon.classList.add('menu-open');
    mobileMenuIcon.innerHTML = '&#x2715;';
  }
});