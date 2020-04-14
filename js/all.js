$(document).ready(function () {
  
  $('.topmenu > li > a').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).parent().siblings().find('a').removeClass('active');
    $(this).parent().find('ul').fadeToggle(300);
    $(this).parent().siblings().find('ul').fadeOut(200);
  });

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    effect: 'fade',
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  })
  
	lightbox.option({
    'resizeDuration': 200,
    'positionFromTop': 200,
  })

  $('.top a').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 300);
  });

  $(window).scroll(function () { 
    $('.topmenu > li > a').removeClass('active');
    $('.topmenu ul').fadeOut();
  });
});