$(document).ready(function(){

      //slaider

        $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });

      //tabs

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      // next&prev tabs
     
      function toggleSlide(item){
        $(item).each(function(i){
          $(this).on('click',function(e){
             e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          });
        });
      }

      // Slide tabs

      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');

      //Modal

      $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn();
      });

      $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut();     
      });

      

      $('.button_mini').each(function(i){
        $(this).on('click', function(){
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn();
        });
      });

      //Validation forms
      
      function validateForms(form){
        $(form).validate({
          rules:{
            name: {
              required: true,
              minlength: 3
            },
            phone: "required",
            email: {
              required: true,
              email: true
            }
          },
          messages: {
            name: {
              required: "Пожалуйста, введите свое имя",
              minlength: jQuery.validator.format("Введите {0} символов")
            },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адресс"
            }
          }
        });
      }

      validateForms('#consultation-form');
      validateForms('#consultation form');
      validateForms('#order form');

      // Masked input

      $('input[name=phone]').mask("+7 (999) 999-99-99");

      // Massege on Email adress

      $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    // Smooth scroll and pageUP

    $(window).scroll(function(){
      if($(this).scrollTop()>1600){
        $('.pageUp').fadeIn();
      }
      else{
        $('.pageUp').fadeOut();
      }
    });

    $("a[href=#up]").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

    // include WOW.js

    new WOW().init();

  });