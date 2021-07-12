$(document).ready(function () {
  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });
  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 80
    }, 1500);

  });

  $('.programs-item').viewportChecker({
    classToAdd: 'visible',
    classToRemove: 'invisible',
    offset: '25%',
    repeat: false,
    //    invertBottomOffset: true,
    callbackFunction: function (elem, action) {
      console.log('a');
    },
    //    scrollHorizontal: false
  });

  var slider = $('#slider');
  slider.slick({
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true,
    speed: 300,
    prevArrow: '<button type="button" class="prev"><img src="images/next.svg"></button>',
    nextArrow: '<button type="button" class="next"><img src="images/next.svg"></button>',
    rows: 2,
    slidesPerRow: 2,

    responsive: [{
        breakpoint: 960,
        settings: {
          rows: 2,
          slidesPerRow: 2,
          infinite: true,
          dots: true
        }
    },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          arrows: false,

          rows: 1,
          slidesPerRow: 1,
        }
    }
  ]
  });

  $('.speaker-slider').slick({
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true,
    speed: 300,
    rows: 1,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    centerMode: false,
    responsive: [{
        breakpoint: 960,
        settings: {
          rows: 1,
           slidesToShow: 3,
    slidesToScroll: 3,
          infinite: true,
          dots: true
        }
    },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToScroll: 1,
           slidesToShow: 1,
          rows: 1,
          slidesPerRow: 1,
        }
    }
  ]
  });



  var user = detect.parse(navigator.userAgent);

  function timer(data) {


    var end = new Date(data);
/*    if (user.browser.family === 'Safari') {
      end = new Date(data).setMilliseconds(-3 * 60 * 60 * 1000);
    }*/
    var _milisec = 10;
    var _second = _milisec * 100;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    function showRemaining() {
      var now = new Date();
      var distance = end - now + 480000;

      if (distance < 0) {

        $('.timer .days').text("00");
        $('.timer .hours').text("00");
        $('.timer .minutes').text("00");
        $('.timer .seconds').text("00");
        $('.timer .milliseconds').text("00");

        clearInterval(intervalTimer);
        return;
      }

      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);
      var miliseconds = Math.floor((distance % _second) / _milisec);

      if (seconds < 10) seconds = '0' + seconds;
      if (minutes < 10) minutes = '0' + minutes;
      if (hours < 10) hours = '0' + hours;
      if (days < 10) days = '0' + days;

      $('.timer .days span').text(days);
      $('.timer .hours span').text(hours);
      $('.timer .minutes span').text(minutes);
      $('.timer .seconds span').text(seconds);
      $('.timer .milliseconds span').text(miliseconds);


    };

    var intervalTimer = setInterval(showRemaining, 10);
  }

  function timer1(data) {


    var end = new Date(data);
/*    if (user.browser.family === 'Safari') {
      end = new Date(data).setMilliseconds(-3 * 60 * 60 * 1000);
    }*/

    var _milisec = 10;
    var _second = _milisec * 100;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    function showRemaining() {
      var now = new Date();
      var distance = end - now + 480000;

      if (distance < 0) {

        $('.timer1 .days').text("00");
        $('.timer1 .hours').text("00");
        $('.timer1 .minutes').text("00");
        $('.timer1 .seconds').text("00");
        $('.timer1 .milliseconds').text("00");

        clearInterval(intervalTimer);
        return;
      }

      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);
      var miliseconds = Math.floor((distance % _second) / _milisec);

      if (seconds < 10) seconds = '0' + seconds;
      if (minutes < 10) minutes = '0' + minutes;
      if (hours < 10) hours = '0' + hours;
      if (days < 10) days = '0' + days;

      $('.timer1 .days span').text(days);
      $('.timer1 .hours span').text(hours);
      $('.timer1 .minutes span').text(minutes);
      $('.timer1 .seconds span').text(seconds);
      $('.timer1 .milliseconds span').text(miliseconds);


    };

    var intervalTimer = setInterval(showRemaining, 10);
  }
  timer($('.timer').data('date').replace(/ /g, "T"));

  if ($('span').hasClass('timer1')) {
    timer1($('.timer1').data('date').replace(/ /g, "T"));
  }




  $('.days').append('<b class="title">дней</b>');
  $('.hours').append('<b class="title">часов</b>');
  $('.minutes').append('<b class="title">минут</b>');
  $('.seconds').append('<b class="title">секунд</b>');
  $('.milliseconds').append('<b class="title">м.сек.</b>');




  $('.article_1-item .title, .article_1-item p').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated animate__backInUp', // Class to add to the elements when they are visible
    classToRemove: 'hidden_animation',
    offset: 0
  });

  $('.article_2-list li').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated animate__fadeInLeft', // Class to add to the elements when they are visible
    classToRemove: 'hidden_animation',
    offset: 0
  });

  $('.article_3-img').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated animate__zoomIn', // Class to add to the elements when they are visible
    classToRemove: 'hidden_animation',
    offset: 0
  });


  $('#phone').intlTelInput({
    defaultCountry: "ua",
    initialCountry: "auto",
    preferredCountries: ["ua", "ru", 'az', 'am', 'by', 'kz', 'kg', 'md', 'tj', 'uz', 'tm', 'ge'],
    autoPlaceholder: 'aggressive',
    nationalMode: false,
    customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
      return "+" + selectedCountryData.dialCode;
    },
    geoIpLookup: function (success, failure) {
      /*
      $.get( "https://ip-api.com/json/", function( data ) {
      	var countryCode = (data.countryCode) ? data.countryCode : "ru";
      	success(countryCode);
      }, "json" );*/

      $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
        var countryCode = (resp && resp.country) ? resp.country : "ua";
        success(countryCode);
      });
    },
    separateDialCode: false,
    formatOnDisplay: false,
    //		utilsScript: 'https://mk.beauty-matrix.ru/assets/plugins/intltelinput/js/utils.js',
  });


  $('.check').each(function () {
    $(this).on('change', function () {
      var form = $(this).parents('form');

      if ($(this).prop('checked')) {

        form.find('.phone').slideDown();
      } else {
        form.find('.phone').slideUp();
      }
    });
  });

  $('a[data-fancybox="gallery"]').click(function () {
    setTimeout(function () {
      $('[data-fancybox-thumbs]').trigger('click');
      $('[data-fancybox-thumbs]').trigger('click');
    }, 500)
  })


  $('#nav-icon').click(function () {
    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('.menu').slideToggle(200);

    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));
    })
  });

  $('nav').hover(function () {
    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));
    })
  })


  var observer = lozad();
  observer.observe();
});