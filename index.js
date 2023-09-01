// template_pg4uwav
// service_4d0pocs
// user_AcR1Hy6RbvMfEEoijcIOp

const phrases = ["full stack developer", "cyber security analyst"];
let phraseIndex = 0;
const txtArr = phrases[phraseIndex].split("");

function getRandomTime() {
  return 0.1;
}

function getEle(id) {
  return document.getElementById("text");
}

function ModifyTxt(el, txt) {
  return (el.innerHTML = txt);
}

function writeOut(txtArr, curChar = 0) {
  const randomTime = getRandomTime();
  setTimeout(() => {
    const el = getEle("text");
    let elTxt = el.innerHTML;
    elTxt += txtArr[curChar];
    ModifyTxt(el, elTxt);
    // Check if next iteration is out of range
    if (curChar + 1 == txtArr.length) {
      // Wait for 3 seconds before starting to delete
      setTimeout(() => {
        return deleteOut(txtArr, txtArr.length);
      }, 1500);
    } else {
      return writeOut(txtArr, curChar + 1);
    }
  }, randomTime * 1000);
}

function deleteOut(txtArr, curChar = 0) {
  const randomTime = getRandomTime();
  setTimeout(() => {
    const el = getEle("text");
    let elTxt = el.innerHTML;
    // Remove
    const elTxtArr = elTxt.split("");
    const elTxtArrLen = elTxtArr.length;
    console.log(elTxtArr.length - 1);
    const newElTxt = elTxtArr.splice(0, curChar - 1).join("");
    ModifyTxt(el, newElTxt);
    if (elTxtArrLen == 0) {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      txtArr = phrases[phraseIndex].split("");
      setTimeout(() => {
        return writeOut(txtArr, 0);
      }, 1500);
    } else {
      return deleteOut(txtArr, elTxtArrLen - 1);
    }
  }, randomTime * 1000);
}

writeOut(txtArr);



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
        'service_gr3kkf3',
        'template_u9lhm8n',
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


