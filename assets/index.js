/*preloader */
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }


// about us slider

  $('.about-us-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 500,
    responsive: [
        {
         breakpoint: 1835,
         settings: {
           slidesToShow: 3,
         }
       },
       {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 1,
        }
      },
     ]
});

/*BURGER*/
$(function(){
    $('.header-burger').click(function(event){
        $('.header-burger, nav, .header-logo').toggleClass('active');
        $('body').toggleClass('lock')
    })
});


$(function() {
  $('.nav-link').click(function(event) {
      $('.header-burger, .nav').toggleClass('active');
      $('body').toggleClass('lock')
  });
});

/*Появление меню при скролле страницы*/
$(function(){
    let header = $("#header"),
        headerH = $("header").innerHeight(),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset){
        if ( scrollOffset >= (introH - headerH) ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
});


/*slider на странице design1*/
$('.slider1').slick({
    infinite: true,
    autoplay: true,
    speed: 500,
    asNavFor: '.slider11',
    responsive: [
        {
         breakpoint: 575,
         settings: {
           arrows: false,
         }
       },
     ]
  });
  $('.slider11').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    dots: true,
    asNavFor: '.slider1',
    focusOnSelect: true,
    responsive: [
        {
         breakpoint: 767,
         settings: {
           slidesToShow: 2,
         }
       },

     ]
  });