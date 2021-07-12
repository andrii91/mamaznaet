$(document).ready(function () {
  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  function timer() {


    var end = new Date(2019, 9, 19, 00, 00, 00, 00);

    var _milisec = 10;
    var _second = _milisec * 100;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    function showRemaining() {
      var now = new Date();
      var distance = end - now + 480000;

      if (distance < 0) {

        $('.days').text("00");
        $('.hours').text("00");
        $('.minutes').text("00");
        $('.seconds').text("00");
        $('.milliseconds').text("00");

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

      $('.days span').text(days);
      $('.hours span').text(hours);
      $('.minutes span').text(minutes);
      $('.seconds span').text(seconds);
      $('.milliseconds span').text(miliseconds);


    };

    var intervalTimer = setInterval(showRemaining, 10);
  }
  timer();

  $('.days').append('<b class="title">Дни</b>');
  $('.hours').append('<b class="title">Часы</b>');
  $('.minutes').append('<b class="title">Минуты</b>');
  $('.seconds').append('<b class="title">Секунды</b>');
  $('.milliseconds').append('<b class="title">Милисекунды</b>');

  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 40
    }, 1500);

  });

  $('#nav-icon').click(function () {
    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('.menu').slideToggle(200);
  });
  /*

    $('.plan-list li:nth-child(odd) .content').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
      classToRemove: 'hidden_animation',
      offset: 0
    });

    $('.plan-list li:nth-child(even) .content').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
      classToRemove: 'hidden_animation',
      offset: 0
    });
    
    $('.plan-list .plan-day').viewportChecker({
      classToAdd: 'active', // Class to add to the elements when they are visible
      repeat: true,
      offset: '45%'
    });
    
     $('.plan-list li').hover(function(){
       $('.plan-list .plan-day').removeClass('active');
       $(this).find('.plan-day').addClass('active');
     })
    */
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
  })



  var observer = lozad();
  observer.observe();

  $('.loop').owlCarousel({
    center: true,
    loop: true,
    margin: 70,
    nav: true,
    autoHeight: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      600: {
        items: 2,
        margin: 20,
      },
      1200: {
        items: 3
      }
    }
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
		customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
			return "+" + selectedCountryData.dialCode;
		},
		geoIpLookup: function(success, failure) {

			
			$.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
				var countryCode = (resp && resp.country) ? resp.country : "ua";
				success(countryCode);
			});
		},
		separateDialCode: false,
		formatOnDisplay: false,
//		utilsScript: 'https://mk.beauty-matrix.ru/assets/plugins/intltelinput/js/utils.js',
	});
  
    
    $('.check').each(function(){
       $(this).on('change', function(){
            var form = $(this).parents('form');

            if( $(this).prop('checked') ) {
                
                form.find('.phone').slideDown();
            } else {
                form.find('.phone').slideUp();
            }
        });
    });
});