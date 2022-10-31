$(document).ready(function(){
	// Banner Slick slider
    $(".banner-slider").slick({
      dots: false,
      infinite: true,
      autoplay:true,
      nextArrow: '<i class="slick-prev"></i>',
      prevArrow: '<i class="slick-next"></i>',
    });
  // End banner slick-slider

  // story Slick slider
    $(".story-slider").slick({
      dots: true,
      infinite: true,
      autoplay:true,
      arrows: false
    });
  // End story slick-slider

  //Service page banner slider start
    $('.slider-single').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      adaptiveHeight: true,
      infinite: true,
      useTransform: true,
      dots: false,
      speed: 400,
      autoplay:true,
      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
     });

     $('.slider-nav')
      .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
      })
      .slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: false,
        focusOnSelect: false,
        infinite: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          }
        }, {
          breakpoint: 640,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        }, {
          breakpoint: 420,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
        }
        }]
    });


    $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
      $('.slider-nav').slick('slickGoTo', currentSlide);
      var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
      $('.slider-nav .slick-slide.is-active').removeClass('is-active');
      $(currrentNavSlideElem).addClass('is-active');
    });

    $('.slider-nav').on('click', '.slick-slide', function(event) {
      event.preventDefault();
      var goToSingleSlide = $(this).data('slick-index');

      $('.slider-single').slick('slickGoTo', goToSingleSlide);
    });
  //Service page banner slider end
  
  /*Whats New slider start*/
    $('.center').slick({
      centerMode: true,
      infinite: true,
      centerPadding: '20%',
      slidesToShow: 1,
      speed: 500,
      autoplay:false,
      dots: false,
      variableWidth: false,
      adaptiveHeight: true,
      arrows: true,
      nextArrow: '<i class="slick-prev"></i>',
      prevArrow: '<i class="slick-next"></i>',
      responsive: [{
        breakpoint: 1024,
        settings: {
          centerPadding: '0%',
        }
      }, {
        breakpoint: 640,
        settings: {
          centerPadding: '0%',
        }
      }, {
        breakpoint: 420,
        settings: {
          centerPadding: '0%',
      }
      }]
    });
    $('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log('beforeChange', currentSlide, nextSlide);
    });
    $('.center').on('afterChange', function(event, slick, currentSlide){
      console.log('afterChange', currentSlide);
    });
  /*Whats New slider end*/

  /*vacancies-slider start*/
    $('.vacancies-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  /*vacancies-slider end*/

  /*Gallery slider start*/
    $('.gallery-slider').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      arrows: true,
      nextArrow: '<i class="slick-next"></i>',
      prevArrow: '<i class="slick-prev"></i>',
      adaptiveHeight: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            variableWidth: false,
            slidesToShow: 1
          }
        }
      ]
    });
  /*Gallery slider end*/

  /*About page gallery slider start*/
    $('.about-gallery-slider').slick({
      centerMode: true,
      centerPadding: '100px',
      slidesToShow: 1,
      arrows: true,
      variableWidth: true,
      nextArrow: '<i class="slick-prev"></i>',
      prevArrow: '<i class="slick-next"></i>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 520,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            variableWidth: false,
            slidesToShow: 1
          }
        }
      ]
    });
  /*About page gallery slider end*/

  /*History single slider start*/
    $('.history-single').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      adaptiveHeight: true,
      infinite: true,
      useTransform: true,
      speed: 400,
      autoplay:false,
      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
     });

     $('.history-nav')
      .on('init', function(event, slick) {
        $('.history-nav .slick-slide.slick-current').addClass('is-active');
      })
      .slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        dots: false,
        focusOnSelect: false,
        arrows: false,
        infinite: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        }]
    });


    $('.history-single').on('afterChange', function(event, slick, currentSlide) {
      $('.history-nav').slick('slickGoTo', currentSlide);
      var currrentNavSlideElem = '.history-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
      $('.history-nav .slick-slide.is-active').removeClass('is-active');
      $(currrentNavSlideElem).addClass('is-active');
    });

    $('.history-nav').on('click', '.slick-slide', function(event) {
      event.preventDefault();
      var goToSingleSlide = $(this).data('slick-index');

      $('.history-single').slick('slickGoTo', goToSingleSlide);
    });
  /*History single slider end*/

  /*Countdown slider start*/
    $('.countdown-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            autoplay:true,
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            autoplay:true,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            autoplay:true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  /*Countdown slider end*/

  /*Fancy Box start*/
    $(".fancybox").fancybox({
      openEffect: "none",
      closeEffect: "none"
    });
  /*Fancy Box end*/
});

  /*Countdown numbers start*/
    (function($) {
        'use strict';

        $('.count-number').rCounter();
    })(jQuery);
  /*Countdown number end*/

  /*Goto Div smoothly start*/
  $(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: (target.offset().top - 15)
        }, 1000);
        return false;
      }
    });
  });
  /*Goto Div smoothly end*/