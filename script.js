const video = document.getElementById('video');
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const menu = document.getElementById('nav-bar')
const servicesContainer = document.getElementById('services-container');
const services = [
  {
    name:'GMW Welding',
    description: 'Soldas Especiais, eletrodos, varetas e arames sólidos/tubulares',
    img:'./img/logoGMW.png',
  },
  {
    name:'Grupo Aplicar',
    description: 'Tecnologia em composites. Indústrias, Construtoras, Fertilizantes, Petroquímico, Siderurgia, Mineração.',
    img:'./img/logoAplipox.png',
  },
  {
    name:'Maxweld',
    description: 'Chapas revestidas, tubos revestidos e serviço de recuperação mesa e rolos de moagem.',
    img:'./img/logoMaxxweld.png',
  }
];
let index = 0;
const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

formChange = () => {
  const name = document.getElementById('input-name').value;
  const email = document.getElementById('input-email').value;
  const message = document.getElementById('input-message').value;

  const emailRegex = /\w+@\w+.com/;
  const validEmail = emailRegex.test(email);

  submitBtn.disabled = !(name.length > 0 && validEmail && message.length > 0);
}

addIndex = () => {
  index === 2 ? index = 0 : index += 1
}

subIndex = () => {
  index === 0 ? index = 2 : index -= 1
}

checkMobile = () => {
  if (isMobile) {
    servicesContainer.innerHTML = (`
      <button type='button' id='prev-btn' onclick={subIndex()}>&#10094;</button>
      <div class='slider-container'>
        <img src=${services[index].img} alt=${services[index].name} />
        <h3>${services[index].name}</h3>
        <p>${services[index].description}</p>
      </div>
      <button type='button' id='next-btn' onclick={addIndex()}>&#10095;</button>
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

checkMobile();
