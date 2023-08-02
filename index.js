// template_pg4uwav
// service_4d0pocs
// user_AcR1Hy6RbvMfEEoijcIOp

document.addEventListener('DOMContentLoaded', function() {
  // Get the visitor's IP address using a free IP API service
  fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
          const visitorIp = data.ip;
          const visitorUserAgent = navigator.userAgent;
          const timestamp = new Date().toISOString();

          // Create a mailto link with the visitor's information
          const emailSubject = encodeURIComponent('New website visitor notification');
          const emailBody = encodeURIComponent(`A new visitor accessed your website.\n\nIP Address: ${visitorIp}\nUser Agent: ${visitorUserAgent}\nTimestamp: ${timestamp}`);
          const emailLink = `mailto:justhimanshk@gmail.com?subject=${emailSubject}&body=${emailBody}`;

          // Create a link or button that triggers the email
          const emailButton = document.createElement('a');
          emailButton.href = emailLink;
          emailButton.textContent = 'Notify Me';
          document.body.appendChild(emailButton);
      })
      .catch(error => {
          console.error('Error getting visitor information:', error);
      });
});

var responsiveSlider = function() {

    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count =01;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
    
    var prevSlide = function() {
      if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };
    
    var nextSlide = function() {
      if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
    
    next.addEventListener("click", function() {
      nextSlide();
    });
    
    prev.addEventListener("click", function() {
      prevSlide();
    });
    
    setInterval(function() {
      nextSlide()
    }, 2000);
    
    };
    
    window.onload = function() {
    responsiveSlider();  
    }

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for (let i = 0; i < shapes.length; ++i){
        const isOdd = i % 2 !== 0;
        const booInt = isOdd ? -1: 1;
        shapes[i].style.transform = `translate(${x * booInt}px, ${y * booInt}px)`
    }
}



function toggleContrast(){
    contrastToggle = !contrastToggle
    if(contrastToggle){
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
    
}



function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    
    emailjs.sendForm(
        'service_biu2uwd',
        'template_pg4uwav',
        event.target,
        'user_AcR1Hy6RbvMfEEoijcIOp'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible";
        console.log('FINALLY')
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert("The email service is currently unavailable. Please contact me directly. Thanks :)")
    })

}



function toggleModal(){
    
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
        scrollTo
    }
    isModalOpen = true;

    
    document.body.classList += " modal--open";
    
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

