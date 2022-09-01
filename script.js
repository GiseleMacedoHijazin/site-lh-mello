const video = document.getElementById('video');
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const menu = document.getElementById('nav-bar')
const servicesContainer = document.getElementById('services-container');
const shownFeedback = document.getElementById('shown-feedback');
const prevFeedbackBtn = document.getElementById('prev-btn-feedback');
const nextFeedbackBtn = document.getElementById('next-btn-feedback');

const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

let feedbackIndex = 0;
const maxFeedback = customerFeedback.length - 1;

const updateFeedback = () => {
  shownFeedback.innerHTML = (`
    <p>${ isMobile ? customerFeedback[feedbackIndex].mobile : customerFeedback[feedbackIndex].feedback}</p>
    <h4>${customerFeedback[feedbackIndex].name}</h4>
  `)
}

prevFeedbackBtn.addEventListener('click', () => {
  feedbackIndex === 0 ? feedbackIndex = maxFeedback : feedbackIndex -= 1
  updateFeedback()
}) ;

nextFeedbackBtn.addEventListener('click', () => {
  feedbackIndex === maxFeedback ? feedbackIndex = 0 : feedbackIndex += 1
  updateFeedback()
}) ;


formChange = () => {
  const name = document.getElementById('input-name').value;
  const email = document.getElementById('input-email').value;
  const message = document.getElementById('input-message').value;

  const emailRegex = /\w+@\w+.com/;
  const validEmail = emailRegex.test(email);

  submitBtn.disabled = !(name.length > 0 && validEmail && message.length > 0);
}

let servicesIndex = 0;

addIndex = () => {
  servicesIndex === 2 ? servicesIndex = 0 : servicesIndex += 1
}

subIndex = () => {
  servicesIndex === 0 ? servicesIndex = 2 : servicesIndex -= 1
}

checkMobile = () => {
  if (isMobile) {
    servicesContainer.innerHTML = (`
      <div class='slider'>
        <button type='button' id='prev-btn' onclick={subIndex()}>&#10094;</button>
        <div class='slider-container'>
          <img src=${services[servicesIndex].img} alt=${services[servicesIndex].name} />
          <h3>${services[servicesIndex].name}</h3>
          <p>${services[servicesIndex].description}</p>
        </div>
        <button type='button' id='next-btn' onclick={addIndex()}>&#10095;</button>
      </div>
    `);
    servicesContainer.addEventListener('click', checkMobile)
  }
}

video.playbackRate = 0.4;

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

updateFeedback();
checkMobile();
