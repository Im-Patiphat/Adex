const addEventOnElement = (elements,evenType,callback)=>{
    for (let i = 0, len = elements.length; i<len; i++){
        elements[i].addEventListener(evenType,callback);
    }
}

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = ()=>{
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");

}

addEventOnElement(navTogglers,"click",toggleNavbar)


/**slider */
const sliders = document.querySelectorAll("[data-slider]");

const initSlider = (currentSlider) =>{
const sliderContainer  = currentSlider.querySelector("[data-slider-container]");
const sliderPrevBtn  = currentSlider.querySelector("[data-slider-prev]");
const sliderNextBtn  = currentSlider.querySelector("[data-slider-next]");
    let currentSliderPo = 0;
    
     const moveSliderItem = () => {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSliderPo].offsetLeft}px)`;
  };
  const slidePrev = () => {
    if (currentSliderPo <= 0) {
      currentSliderPo = sliderContainer.childElementCount - 1;
    } else {
      currentSliderPo--;
    }
    moveSliderItem();
  };
  sliderPrevBtn.addEventListener("click", slidePrev);

    /**next */
  const slideNext = () => {
    const slideEnd = currentSliderPo >= sliderContainer.childElementCount - 1;

    if (slideEnd) {
      currentSliderPo = 0;
    } else {
      currentSliderPo++;
    }
    moveSliderItem();
  };
  sliderNextBtn.addEventListener("click", slideNext);

 const dontHaveExtraItem = sliderContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }
};
   for(let i=0, len = sliders.length; i<len; i++){
    initSlider(sliders[i]);
    }

//accordian
const accordians = document.querySelectorAll("[data-accordian]");
let lastActiveAccordian = accordians[0];
const initAccordian = (currentAccordian) =>{
  const accordianBtn = currentAccordian.querySelector("[data-accordian-btn");
  const expandAccordian = () => {
    if (lastActiveAccordian && lastActiveAccordian != currentAccordian) {
      lastActiveAccordian.classList.remove("expanded");
    }
    currentAccordian.classList.toggle("expanded");
    lastActiveAccordian = currentAccordian;
  };
  accordianBtn.addEventListener("click", expandAccordian);
};
for(let i =0, len=accordians.length; i<len;i++){
  initAccordian(accordians[i]);
}
