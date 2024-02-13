var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slider-content");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

$(document).ready(function() {

  $(window).scroll(function(event) {
    if ($(window).width()>769) {
      if ($('.navbar.navbar-default.navbar-fixed').offset().top == 0) {
        $('.navbar.navbar-default.navbar-fixed').removeClass('navbar-scroll-color');
      }else {
        $('.navbar.navbar-default.navbar-fixed').addClass('navbar-scroll-color');
      }
    }
  });

  // Animation Effect on Navbar
  $('.navbar a').animateScroll({
    speed:1000
  });

  //PortFolio Gallery
  var mixer = mixitup('#portfolio-container', {
    selectors: {
      target: '#portfolio-container>.all'
    },
    animation: {
      duration: 500
    }
  });

  $('.portfolio-btn button').click(function(event) {
    var clicked_btn= $(this);
    mixer.filter('.' + $(this).attr('id'));
    $('.portfolio-btn button').each(function(index, el) {
      $(this).removeClass('active');
    });
    $(clicked_btn).addClass('active');
  });

  // preview-img
  $('.all').click( function(event) {
    $('#preview-img img').attr('src', $(this).children('img').attr('src'));
    $('#preview-img').slideDown('slow');
  });

});
