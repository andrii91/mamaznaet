$(document).ready(function () {
  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });


  var count = 0;
  var count_item_r = $('.hide_review').length;
  $('.show_more').click(function (e) {
    event.preventDefault();
    count = count + 6;

    if (count_item_r < count) {
      $(this).hide(200);
    }

    $('.hide_review').each(function (index) {
      $(this).show(200);
      if (count == (index + 1)) {
        return false;
      }
    })
  });

  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 80
    }, 1500);

  });

  function timer(data) {


    var end = new Date(data);

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
    console.log('sdsd');
     timer1($('.timer1').data('date').replace(/ /g, "T"));
  }



  $('.days').append('<b class="title">дней</b>');
  $('.hours').append('<b class="title">часов</b>');
  $('.minutes').append('<b class="title">минут</b>');
  $('.seconds').append('<b class="title">секунд</b>');
  $('.milliseconds').append('<b class="title">миллисек.</b>');



  if ($(window).width() < 1200) {
    $('.programs-mob_carousel').addClass('owl-carousel owl-theme no-js');
    $('.programs-mob_carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      //      autoplay: true,
      autoHeight: true,
      responsive: {
        0: {
          items: 1
        }
      }
    })
  } else {
    $('.programs-mob_carousel').removeClass('owl-carousel owl-theme no-js programs-mob_carousel');
  }

  $('#nav-icon').click(function () {
    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('.menu').slideToggle(200);

    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));
    })
  });



  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  }
  $('input[name="utm_source"]').val(getUrlVars()["utm_source"]);
  $('input[name="utm_campaign"]').val(getUrlVars()["utm_campaign"]);
  $('input[name="utm_medium"]').val(getUrlVars()["utm_medium"]);
  $('input[name="utm_term"]').val(getUrlVars()["utm_term"]);
  $('input[name="utm_content"]').val(getUrlVars()["utm_content"]);
  $('input[name="click_id"]').val(getUrlVars()["aff_sub"]);
  $('input[name="affiliate_id"]').val(getUrlVars()["aff_id"]);
  $('input[name="user_agent"]').val(navigator.userAgent);
  $('input[name="ref"]').val(document.referrer);

  $.get("https://ipinfo.io", function (response) {
    $('input[name="ip_address"]').val(response.ip);
    $('input[name="city"]').val(response.city);
  }, "jsonp");


  $('.questions form').on('submit', function (e) {
    e.preventDefault();
    $('.submit').addClass('inactive');
    $('.submit').prop('disabled', true);
    var $form = $(this);
    var $data = $form.find('input');
    _fbq.push(['track', 'Lead', {
      content_name: 'lead_gelan',
      content_category: 'jalan_zayavka',
      referrer: window.location.href
      }]);


    $.ajax({
      type: 'POST',
      url: 'db/registration.php',
      dataType: 'json',
      data: $form.serialize(),
      success: function (response) {}
    });

    setTimeout(function () {
      window.location.href = "success.html";
    }, 800);

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
  var observer = lozad();
  observer.observe();


  $('nav').hover(function () {
    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));
    })
  })





  //var user = detect.parse(navigator.userAgent);



  $('.slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    items: 3,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      600: {
        items: 3,
        margin: 20,
      }
    }

  });

});