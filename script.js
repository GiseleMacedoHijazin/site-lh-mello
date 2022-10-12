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
const textHighlight = document.querySelectorAll('mark');

const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

textHighlight.forEach((text) => {
  const observer = new IntersectionObserver((element) => {
    if(element[0].isIntersecting === true) {
      text.style.backgroundPosition = '0 0'
    }
  }, { threshold: [1] });

  observer.observe(text)
})

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
        ${ services[servicesIndex].site
          ? `<a href=${services[servicesIndex].site} target='_blank'>Site</a>`
          : ""
        }
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
        ${ services[servicesIndex].site
          ? `<a href=${services[servicesIndex].site} target='_blank'>Site</a>`
          : ""
        }
      </div>
    </div>
    <div class='service'>
      <div class="service-img-container">
        <img src=${services[servicesIndex + 1].img} alt=${services[servicesIndex + 1].name} class='service-img' />
      </div>
      <div class="service-description">
        <h3>${services[servicesIndex + 1].name}</h3>
        <p>${services[servicesIndex + 1].description}</p>
        ${ services[servicesIndex + 1].site
          ? `<a href=${services[servicesIndex + 1].site} target='_blank'>Site</a>`
          : ""
        }
      </div>
    </div>
    ${ services[servicesIndex + 2] ?
      `
        <div class='service'>
          <div class="service-img-container">
            <img src=${services[servicesIndex + 2].img} alt=${services[servicesIndex + 2].name} class='service-img' />
          </div>
          <div class="service-description">
            <h3>${services[servicesIndex + 2].name}</h3>
          <p>${services[servicesIndex + 2].description}</p>
          ${ services[servicesIndex + 2].site
              ? `<a href=${services[servicesIndex + 2].site} target='_blank'>Site</a>`
            : ""
          }
          </div>
        </div>
      `
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
};

const createApplications = () =>{
  applications.forEach((application) => {
    const containerParent = document.createElement('div');
    containerParent.className = 'card-parent';
  
    const container = document.createElement('div');
    container.className = 'card';
    container.innerHTML = (
      `<p>${application.name}</p>
      <p>&plus;</p>`
    );
  
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
    });
  
    appImages.addEventListener('mousedown', (e) => mouseDownHandler(e, appImages));
    container.addEventListener('click', () => toggleContent(appImages, container));
  
    containerParent.append(container);
    containerParent.append(appImages);
    applicationsContainer.append(containerParent);
  
    // adjust img container position if desktop
    if(!isMobile) {
      const position = applicationsContainer.children.length;
      if ([2, 5, 8, 11].includes(position)) {
        appImages.style.right = '21.6vw';
      }
      if ([3, 6, 9].includes(position)) {
        appImages.style.right = '43.1vw';
      }
    };
  });
};

let feedbackIndex = 0;
const maxFeedback = customerFeedback.length - 1;

function feedbackSlider () {
  shownFeedback.innerHTML = (`
    <p>${ isMobile ? customerFeedback[feedbackIndex].mobile : customerFeedback[feedbackIndex].feedback}</p>
    <h3 class="feedback-name">${customerFeedback[feedbackIndex].name}</h3>
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

let pos = { top: 0, x: 0};
let isDown = false;

const mouseDownHandler = function (e, ele) {
    pos = {
        left: ele.scrollLeft,
        x: e.clientX,
    };

    isDown = true;

    ele.style.cursor = 'grabbing';
    ele.style.userSelect = 'none';

    ele.addEventListener('mouseup', () => mouseUpHandler(ele));
    ele.addEventListener('mousemove', (e) => mouseMoveHandler(e, ele));
    ele.parentElement.addEventListener('mouseout', (e) => {
      if (e.toElement.id === 'applications-container') mouseUpHandler(ele);
    })

};

const mouseMoveHandler = function (e, ele) {
  if (!isDown) return;
  const dx = e.clientX - pos.x;
  ele.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function (ele) {
  isDown = false;
  ele.removeEventListener('mousemove', (e) => mouseMoveHandler(e, ele));
  ele.style.cursor = 'grab';
  ele.style.removeProperty('user-select');
};

if (isMobile) {
  const mobileMenuIcon = document.getElementById('mobile-menu-icon');
  const menu = document.getElementById('nav-bar');
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
};

window.onload = () => {
  feedbackSlider();
  servicesSlider();
  createApplications();
};
