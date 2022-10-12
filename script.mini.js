const shownServices=document.getElementById("shown-services"),prevServicesBtn=document.getElementById("prev-btn-services"),nextServicesBtn=document.getElementById("next-btn-services"),partnersContainer=document.getElementById("partners-container"),applicationsContainer=document.getElementById("applications-container"),shownFeedback=document.getElementById("shown-feedback"),prevFeedbackBtn=document.getElementById("prev-btn-feedback"),nextFeedbackBtn=document.getElementById("next-btn-feedback"),contactForm=document.getElementById("contact-form"),submitBtn=document.getElementById("submit-btn"),textHighlight=document.querySelectorAll("mark"),isMobile=window.matchMedia("only screen and (max-width: 760px)").matches;if(isMobile){let e=document.getElementById("mobile-menu-icon"),s=document.getElementById("nav-bar");e.addEventListener("click",()=>{s.classList.contains("move-in")?(s.classList.remove("move-in"),s.classList.add("move-out"),e.classList.remove("menu-open"),e.classList.add("menu-close"),e.innerHTML="&#x2630;"):(s.classList.remove("move-out"),s.classList.add("move-in"),e.classList.remove("menu-close"),e.classList.add("menu-open"),e.innerHTML="&#x2715;")})}textHighlight.forEach(e=>{let s=new IntersectionObserver(s=>{!0===s[0].isIntersecting&&(e.style.backgroundPosition="0 0")},{threshold:[1]});s.observe(e)});let servicesIndex=0;const maxServices=isMobile?services.length-1:3,indexJump=isMobile?1:3;servicesSlider=()=>{if(isMobile){shownServices.innerHTML=`
      <div class='slider-container'>
        <img src=${services[servicesIndex].img} alt=${services[servicesIndex].name} />
        <h3>${services[servicesIndex].name}</h3>
        <p>${services[servicesIndex].description}</p>
        ${services[servicesIndex].site?`<a href=${services[servicesIndex].site} target='_blank'>Site</a>`:""}
      </div>
    `;return}shownServices.innerHTML=`
    <div class='service'>
      <div class="service-img-container">
        <img src=${services[servicesIndex].img} alt=${services[servicesIndex].name} class='service-img' />
      </div>
      <div class="service-description">
        <h3>${services[servicesIndex].name}</h3>
        <p>${services[servicesIndex].description}</p>
        ${services[servicesIndex].site?`<a href=${services[servicesIndex].site} target='_blank'>Site</a>`:""}
      </div>
    </div>
    <div class='service'>
      <div class="service-img-container">
        <img src=${services[servicesIndex+1].img} alt=${services[servicesIndex+1].name} class='service-img' />
      </div>
      <div class="service-description">
        <h3>${services[servicesIndex+1].name}</h3>
        <p>${services[servicesIndex+1].description}</p>
        ${services[servicesIndex+1].site?`<a href=${services[servicesIndex+1].site} target='_blank'>Site</a>`:""}
      </div>
    </div>
    ${services[servicesIndex+2]?`
        <div class='service'>
          <div class="service-img-container">
            <img src=${services[servicesIndex+2].img} alt=${services[servicesIndex+2].name} class='service-img' />
          </div>
          <div class="service-description">
            <h3>${services[servicesIndex+2].name}</h3>
          <p>${services[servicesIndex+2].description}</p>
          ${services[servicesIndex+2].site?`<a href=${services[servicesIndex+2].site} target='_blank'>Site</a>`:""}
          </div>
        </div>
      `:""} `},prevServicesBtn.addEventListener("click",()=>{0===servicesIndex?servicesIndex=maxServices:servicesIndex-=indexJump,servicesSlider()}),nextServicesBtn.addEventListener("click",()=>{servicesIndex>=maxServices?servicesIndex=0:servicesIndex+=indexJump,servicesSlider()});const toggleContent=(e,s)=>{let n=document.querySelector(".show");n&&n!==e&&(n.classList.remove("show"),n.parentElement.children[0].classList.remove("selected"),n.classList.add("hide")),e.className.includes("hide")?(e.classList.remove("hide"),e.classList.add("show"),s.classList.add("selected")):(e.classList.remove("show"),e.classList.add("hide"),s.classList.remove("selected"))},createApplications=()=>{applications.forEach(e=>{let s=document.createElement("div");s.className="card-parent";let n=document.createElement("div");n.className="card",n.innerHTML=`<p>${e.name}</p>
      <p>&plus;</p>`;let i=document.createElement("div");if(i.className="hide app-images-container",e.content.forEach(e=>{let s=document.createElement("div");s.className="item-card",s.innerHTML=`
        <img src=${e.img} alt=${e.text} />
        <p>${e.text}</p>
      `,i.append(s)}),i.addEventListener("mousedown",e=>mouseDownHandler(e,i)),n.addEventListener("click",()=>toggleContent(i,n)),s.append(n),s.append(i),applicationsContainer.append(s),!isMobile){let t=applicationsContainer.children.length;[2,5,8,11].includes(t)&&(i.style.right="21.6vw"),[3,6,9].includes(t)&&(i.style.right="43.1vw")}})};let feedbackIndex=0;const maxFeedback=customerFeedback.length-1;function feedbackSlider(){shownFeedback.innerHTML=`
    <p>${isMobile?customerFeedback[feedbackIndex].mobile:customerFeedback[feedbackIndex].feedback}</p>
    <h3 class="feedback-name">${customerFeedback[feedbackIndex].name}</h3>
  `}prevFeedbackBtn.addEventListener("click",()=>{0===feedbackIndex?feedbackIndex=maxFeedback:feedbackIndex-=1,feedbackSlider()}),nextFeedbackBtn.addEventListener("click",()=>{feedbackIndex===maxFeedback?feedbackIndex=0:feedbackIndex+=1,feedbackSlider()});const formChange=()=>{let e=document.getElementById("input-name").value,s=document.getElementById("input-email").value,n=document.getElementById("input-message").value,i=/\w+@\w+.com/,t=i.test(s);submitBtn.disabled=!(e.length>0&&t&&n.length>0)};contactForm.addEventListener("keyup",formChange),submitBtn.addEventListener("click",()=>alert("Mensagem enviada!"));let pos={top:0,x:0},isDown=!1;const mouseDownHandler=function(e,s){pos={left:s.scrollLeft,x:e.clientX},isDown=!0,s.style.cursor="grabbing",s.style.userSelect="none",s.addEventListener("mouseup",()=>mouseUpHandler(s)),s.addEventListener("mousemove",e=>mouseMoveHandler(e,s)),s.parentElement.addEventListener("mouseout",e=>{"applications-container"===e.toElement.id&&mouseUpHandler(s)})},mouseMoveHandler=function(e,s){if(!isDown)return;let n=e.clientX-pos.x;s.scrollLeft=pos.left-n},mouseUpHandler=function(e){isDown=!1,e.removeEventListener("mousemove",s=>mouseMoveHandler(s,e)),e.style.cursor="grab",e.style.removeProperty("user-select")};window.onload=()=>{feedbackSlider(),servicesSlider(),createApplications()};