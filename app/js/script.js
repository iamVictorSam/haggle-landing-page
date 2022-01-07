const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function () {
   console.log('this');

   if(header.classList.contains('open')){//Close hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open'); 
    fadeElems.forEach(element => {
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });

   }else{//open hamburger Menu
    header.classList.add('open'); 
    body.classList.add('noscroll');
    fadeElems.forEach(element => {
        element.classList.remove('fade-out');
        element.classList.add('fade-in'); 
    });
       
   }
})