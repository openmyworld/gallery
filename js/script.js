// isInViewport function
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(document).ready(function() {
  
  // Menu buttom on SP
  $('.menu-button').click(function() {
    $(this).toggleClass('menu-button_change');
  });
  
  $(window).scroll(function(){
    
    // Navbar effect
    let position = $(this).scrollTop();
    if(position >= 200) {
      $('.menu').addClass('menu_custom');
    }
    else {
      $('.menu').removeClass('menu_custom');
    }

    // Animate paragraph and picture in Mission section
    let missionPosition = $(this).scrollTop();

    if( window.matchMedia("(min-width: 992px)").matches ) {
      if (missionPosition >= 650) {
        $('.mission__image').addClass('mission__from-left');
        $('.mission__text').addClass('mission__from-right');
      }
    }

    // Pricing animation
    if( window.matchMedia("(min-width: 992px)").matches ) {
      if( $('.pricing-card_1').isInViewport() ) {
        $('.pricing-card_1').addClass('pricing-card__move-left');
      }
      
      if( $('.pricing-card_2').isInViewport() ) {
        $('.pricing-card_2').addClass('pricing-card__move-bottom');
      }
      
      if( $('.pricing-card_3').isInViewport() ) {
        $('.pricing-card_3').addClass('pricing-card__move-right');
      }
    }

    // let pricingPosition = $(this).scrollTop();
    
    // if( window.matchMedia("(min-width: 992px)").matches ) {
    //   if(pricingPosition >= 4300) {
    //     $('.pricing-card_1').addClass('pricing-card__move-left');
    //     $('.pricing-card_2').addClass('pricing-card__move-bottom');
    //     $('.pricing-card_3').addClass('pricing-card__move-right');
    //   }
    // }
  });

  // Gallery section
  $('.gallery-list-item').click(function(){
    
    // Hide or show images in Gallery section
    // Change lightbox attribute after click
    let value = $(this).attr('data-filter');
    if(value === 'all') {
      $('.gallery__all').show(300);
      $('.gallery__all>a').attr('data-lightbox', 'gallery');
    }
    else {
      $('.gallery__all').not('.gallery__' + value).hide(300);
      $('.gallery__all').filter('.gallery__' + value).show(300);
      $('.gallery__all.' + 'gallery__' + value + '>a').attr('data-lightbox', 'gallery-' + value);
    }

    $(this).addClass('active-item').siblings().removeClass('active-item');
  });

  // Smooth scroll
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });
})
