const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const zIndex = document.querySelector(".objective__zIndex");
const image1 = document.querySelector(".objective__image");
const image2 = document.querySelector(".objective__image2");
const image3 = document.querySelector(".objective__image3");
const title = document.querySelector(".objective__title");
const content1 = document.querySelector("#content1");
const content2 = document.querySelector("#content2");
const content3 = document.querySelector("#content3");
const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const number3 = document.querySelector("#number3");

btnHamburger.addEventListener("click", function () {
  console.log("this");

  if (header.classList.contains("open")) {
    //Close hamburger Menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    //open hamburger Menu
    header.classList.add("open");
    body.classList.add("noscroll");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

content1.addEventListener("mouseover", function (e) {
  console.log("e.");
  image2.style.zIndex = "1";
  title.style.color = "#ff0068";
  content1.style.color = "black";
  number1.style.background = "#ff0068";
});

content1.addEventListener("mouseout", function (e) {
  console.log("e.");
  image2.style.zIndex = "0";
  content1.classList.add("content-out");
  title.style.color = "grey";
  content1.style.color = "grey";
  number1.style.background = "grey";
});

content2.addEventListener("mouseover", function (e) {
  console.log("e.");
  image3.style.zIndex = "1";
  title.style.color = "#ff0068";

  content2.style.color = "#ff0068";
  number2.style.background = "#ff0068";
});

content2.addEventListener("mouseout", function (e) {
  console.log("e.");
  image3.style.zIndex = "0";
  content2.style.color = "grey";
  number2.style.background = "grey";
});

content3.addEventListener("mouseover", function (e) {
  console.log(e.target);
  // image1.classList.add('zIndex');
  image1.style.zIndex = "1";
  title.style.color = "#ff0068";

  content3.style.color = "#black";
  number3.style.background = "#ff0068";
});
content3.addEventListener("mouseout", function (e) {
  console.log(e.target);
  image1.style.zIndex = "0";
  content3.style.color = "grey";
  number3.style.background = "grey";
});

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
