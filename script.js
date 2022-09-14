const video = document.getElementById('video');
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const menu = document.getElementById('nav-bar');
const shownServices = document.getElementById('shown-services');
const prevServicesBtn = document.getElementById('prev-btn-services');
const nextServicesBtn = document.getElementById('next-btn-services');
const partnersContainer = document.getElementById('partners-container');
const applicationsContainer = document.getElementById('applications-container');
const shownFeedback = document.getElementById('shown-feedback');
const prevFeedbackBtn = document.getElementById('prev-btn-feedback');
const nextFeedbackBtn = document.getElementById('next-btn-feedback');
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

video.playbackRate = 0.4;

let servicesIndex = 0;
const maxServices = isMobile ? services.length - 1 : 3; 
const indexJump = isMobile ? 1 : 3;

servicesSlider = () => {
  if (isMobile) {
    shownServices.innerHTML = (`
      <div class='slider-container'>
        <img src=${services[servicesIndex].img} alt=${services[servicesIndex].name} />
        <h3>${services[servicesIndex].name}</h3>
        <p>${services[servicesIndex].description}</p>
      </div>
    `);
    return;
  }
  shownServices.innerHTML = (`
    <div class='service'>
      <div class="service-img-container">
        <img src=${services[servicesIndex].img} alt=${services[servicesIndex].name} class='service-img' />
      </div>
      <div class="service-description">
        <h3>${services[servicesIndex].name}</h3>
        <p>${services[servicesIndex].description}</p>
      </div>
    </div>
    <div class='service'>
      <div class="service-img-container">
        <img src=${services[servicesIndex + 1].img} alt=${services[servicesIndex + 1].name} class='service-img' />
      </div>
      <div class="service-description">
        <h3>${services[servicesIndex + 1].name}</h3>
        <p>${services[servicesIndex + 1].description}</p>
      </div>
    </div>
    ${ services[servicesIndex + 2] ? `
      <div class='service'>
      <div class="service-img-container">
        <img src=${services[servicesIndex + 2].img} alt=${services[servicesIndex + 2].name} class='service-img' />
      </div>
      <div class="service-description">
        <h3>${services[servicesIndex + 2].name}</h3>
        <p>${services[servicesIndex + 2].description}</p>
      </div>
    </div>`
      : ''
    } `
  ) ;
}

prevServicesBtn.addEventListener('click', () => {
  servicesIndex === 0 ? servicesIndex = maxServices : servicesIndex -= indexJump
  servicesSlider()
});

nextServicesBtn.addEventListener('click', () => {
  servicesIndex >= maxServices ? servicesIndex = 0 : servicesIndex += indexJump
  servicesSlider()
});

partners.forEach((partner) => {
  const img = document.createElement('img');
  img.src = partner;
  img.alt = partner.split('/')[3].split('.')[0];
  partnersContainer.append(img);
});

const toggleContent = (appImages, container) => {
  const currentShown = document.querySelector('.show');
  if (currentShown && currentShown !== appImages) { 
    currentShown.classList.remove('show');
    currentShown.parentElement.children[0].classList.remove('selected');
    currentShown.classList.add('hide');
  }
  if (appImages.className.includes('hide')) {
    appImages.classList.remove('hide');
    appImages.classList.add('show');
    container.classList.add('selected');
  } else {
    appImages.classList.remove('show');
    appImages.classList.add('hide');
    container.classList.remove('selected');
  }
}

applications.forEach((application) => {
  const containerParent = document.createElement('div');
  containerParent.className = 'card-parent';

  const container = document.createElement('div');
  container.className = 'card';
  container.innerHTML = (`
    <p>${application.name}</p>
    <p>&plus;</p>
  `);

  const appImages = document.createElement('div');
  appImages.className = 'hide app-images-container';

  application.content.forEach((item) => {
    const itemCard = document.createElement('div');
    itemCard.className = 'item-card';
    itemCard.innerHTML = (`
      <img src=${item.img} alt=${item.text} />
      <p>${item.text}</p>
    `);
    appImages.append(itemCard);
  })

  containerParent.append(container);
  containerParent.append(appImages);
  container.addEventListener('click', () => toggleContent(appImages, container));
  applicationsContainer.append(containerParent);

  if(!isMobile) {
    const position = applicationsContainer.children.length;
    if ([2, 5, 8].includes(position)) {
      appImages.style.right = '21.6vw';
    } else if ([3, 6, 9].includes(position)) {
      appImages.style.right = '43.1vw';
    }
  }
})

let feedbackIndex = 0;
const maxFeedback = customerFeedback.length - 1;

const feedbackSlider = () => {
  shownFeedback.innerHTML = (`
    <p>${ isMobile ? customerFeedback[feedbackIndex].mobile : customerFeedback[feedbackIndex].feedback}</p>
    <h4>${customerFeedback[feedbackIndex].name}</h4>
  `);
}

prevFeedbackBtn.addEventListener('click', () => {
  feedbackIndex === 0 ? feedbackIndex = maxFeedback : feedbackIndex -= 1
  feedbackSlider()
});

nextFeedbackBtn.addEventListener('click', () => {
  feedbackIndex === maxFeedback ? feedbackIndex = 0 : feedbackIndex += 1
  feedbackSlider()
});

const formChange = () => {
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

feedbackSlider();
servicesSlider();
