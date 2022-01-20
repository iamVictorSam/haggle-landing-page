const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const zIndex = document.querySelector(".objective__zIndex");
const image1 = document.querySelector(".objective__image");
const image2 = document.querySelector(".objective__image2");
const image3 = document.querySelector(".objective__image3");
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
  content1.style.color = "black";
  number1.style.background = "black";
});

content1.addEventListener("mouseout", function (e) {
  console.log("e.");
  image2.style.zIndex = "0";
  content1.classList.add("content-out");
  content1.style.color = "grey";
  number1.style.background = "grey";
});

content2.addEventListener("mouseover", function (e) {
  console.log("e.");
  image3.style.zIndex = "1";
  content2.style.color = "black";
  number2.style.background = "black";
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
  content3.style.color = "black";
  number3.style.background = "black";
});
content3.addEventListener("mouseout", function (e) {
  console.log(e.target);
  image1.style.zIndex = "0";
  content3.style.color = "grey";
  number3.style.background = "grey";
});
