let searchBtn = document.querySelector('#search_btn');
let searchBar = document.querySelector('.searchBar_container');
let formBtn = document.querySelector('#login_btn');
let loginForm = document.querySelector('.login_form_container');
let loginClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar')
let vid_btn = document.querySelectorAll('.vid_btn')

window.onscroll = () => {
   searchBtn.classList.remove('fa-times');   
   searchBar.classList.remove('active');   
   loginForm.classList.remove('active');   


}

menu.addEventListener('click' , () => {
   menu.classList.toggle('active');   
   navBar.classList.toggle('active');   

});
searchBtn.addEventListener('click' , () => {
   searchBtn.classList.toggle('fa-times');   
   searchBar.classList.toggle('active');   

});

formBtn.addEventListener( 'click' , () => {
   loginForm.classList.add('active');      
});

loginClose.addEventListener('click' , () => {
  loginForm.classList.remove('active');   
});
  
vid_btn .forEach(btn => {
   btn.addEventListener('click', ()=>{
     document.querySelector('.controls .active').classList.remove('active')
   btn.classList.add('active');
   let src = btn.getAttribute('data-src')
   document.querySelector('#video_slider').src = src;

})
})

var swiper = new Swiper(".review-slider", {
   spaceBetween:2,
   loop:true,
   autoplay: {
      Delay: 2500,
      disableOnInteraction: false,
   },
   breakpoints: {
      640:{
        slidesPerView:1,
      },
      768:{
        slidesPerView:2,
      },
      1024:{
        slidesPerView:3,
      },
   }

 });
 
var swiper = new Swiper(".brand-slider", {
   spaceBetween:2,
   loop:true,
   autoplay: {
      Delay: 2500,
      disableOnInteraction: false,
   },
   breakpoints: {
      640:{
        slidesPerView:1,
      },
      768:{
        slidesPerView:2,
      },
      1024:{
        slidesPerView:3,
      },
   }

 });