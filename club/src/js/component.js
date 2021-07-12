$(document).ready(function () {
  $('.speaker-slider').slick({
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true,
    speed: 300,
    rows: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false
    /*,
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
      ]*/
  });

  $('.smi-list').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<div class="prev">‹</div>',
    nextArrow: '<div class="next">›</div>'
  });
  
  
  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 80
    }, 1500);

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
  
    timer($('.timer').data('date').replace(/ /g,"T"));
  
  
  $('.days').append('<b class="title">дней</b>');
  $('.hours').append('<b class="title">часов</b>');
  $('.minutes').append('<b class="title">минут</b>');
  $('.seconds').append('<b class="title">секунд</b>');
  $('.milliseconds').append('<b class="title">миллисек.</b>');
  
});