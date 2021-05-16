$(document).ready(function(){
  $(window).scroll(function(){

    // Sticky Top Navbar Script
    if(this.scrollY >20) {
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky");
    }

    // Up Arrow to Home
    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("active");
    }else{
      $('.scroll-up-btn').removeClass("active");
    }
  });

  // Slide Up Script
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0})
  });

  // Toggle menu/navbar script
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });
});

// Typing Animation Script
  var typed = new Typed(".typing", {
    strings: ["Front-End Developer", "UX Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: ["Front-End Developer", "UX Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });