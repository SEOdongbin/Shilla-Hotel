$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      
    var swiper = new Swiper(".secondSwiper", {
        slidesPerView: 2,
        centeredSlides: true,
        initialSlide: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      
    $('.sec-4 .sec-4-box').mouseenter(function(){
      $(this).addClass('on');
      $(this).siblings().removeClass('on')
    });
      
    media();
    function media(){
        let windowWidth = $(window).width();
        if(windowWidth >= 1000){
            // fullpage
            new fullpage('#wrap',{
            scrollBar : true,
            anchors : ['anchor1','anchor2','anchor3','anchor4'],
            normalScrollElements : '.sec-5, footer',
            fitToSection : false,
            scrollinSpeed: 1000,
            })
        }else{

        }
    }
});