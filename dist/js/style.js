$(document).ready(function() {
  $('.wrap-img, .main-button').magnificPopup(
      {type: 'image',
                                 
    gallery: {
        enabled: true,
        preload: [0,2], 
         navigateByImgClick: true,
    }                           
    });
});


$('.slider-wrap').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
          arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
          arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows: false
      }
    }
  ]
});



//brewers

$('.slider-brewers').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
    arrows: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
          arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
          arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows: false
      }
    }
  ]
});

//popup

$('.gallery-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
    arrows: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
          arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
          centerMode: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

 var Slider = $('.popup-gallery');
    $(Slider).each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',

            gallery: {
                enabled: true
            },

            disableOn: function() {
                if( $(window).width() < 480 ) {
                    return false;
                }
                return true;
            },

            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    });

    $('.gallery_hidden-block').click(function () {
       $(this).siblings('a').click();
    });

    $('.popup-gallery .item a').click(function(e) {
        e.preventDefault();
    });




//mobile-menu

$('.burg').click(function(){
   $('.mobile-menu').slideToggle(); 
});



//map open

 
$('.js-map').click(function(){
    $(this).parents().siblings('.button-clother').fadeIn(400);
    $(this).parents().siblings('.hidden-events_top').fadeIn(400);

});

$('.js_button__hidden-events').click(function(){
    $(this).parents().siblings('.map').fadeIn(400);
}) 

//map clother

$('.button-clother').click(function(){
    $('.hidden-events_top, .button-clother, .map').fadeOut(300);
});



        function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {lat: 29.250721, lng: -82.958951},
            });
            
            var map1 = new google.maps.Map(document.getElementById('map-1'), {
                zoom: 10,
                center: {lat: 29.250721, lng: -82.958951}
            });
           
           
            var map2 = new google.maps.Map(document.getElementById('map-2'), {
                zoom: 18,
                center: {lat: 59.250321, lng: -82.958951}
            });
            
        };




$('.footer-burg').click(function(){
  $('.footer-mobile-menu > .mobile-menu').slideToggle(300)
});




//scroll


$(document).ready(function(){

    $("#page-1, #page-2, #page-3, #page-4, #page-5, #page-6, #page-7").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();

 

        //забираем идентификатор бока с атрибута href

        var id  = $(this).attr('href'),

 

        //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;

         

        //анимируем переход на расстояние - top за 1500 мс

        $('body,html').animate({scrollTop: top}, 1500);

        e.preventDefault();
		return false;
    });
});













