$(function () {
  
  "use strict";
  $(".owl-carousel").owlCarousel({
    autoPlay: true,
    singleItem: true
  });
  
  var $container = $(".grid").isotope({
    
    itemSelector: '.grid-item',
    percentPosition: true
  });
  
  $(".filter").on('click', 'button', function () {
    
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });
  
  $(".btn-group").each(function (i, buttonGroup) {
    
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });
  
  function animatedHeader() {
    window.addEventListener('scroll', function (e) {
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 550;
      if (distanceY > shrinkOn) {
        $("header").addClass('shrink');
      } else {
        $("header").removeClass('shrink');
      }
    });
  }
  
  animatedHeader();

});