$(document).ready(function () {
  $('.head-img img').click(function () {
    var destination = $(".program").offset().top - 0;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });


  /*Анимация в шапке*/
/*  $('#callback').hide();

  var element = document.getElementById('callback');

  var instance = new TypeIt('#t1', {
    speed: 50,
    waitUntilVisible: true,
    afterComplete: function (instance) {
      $('#t1 .ti-cursor').hide();


      var instance2 = new TypeIt('#t2', {
        speed: 50,
        waitUntilVisible: true,
        strings: ["Cистема Осознанного <span class='span'>Воспитания</span>"],
        afterComplete: function (instance) {
          $('#t2 .ti-cursor').hide();
          var instance3 = new TypeIt('#t3', {
            speed: 20,
            waitUntilVisible: true,
            strings: ["Освойте комплексный подход к развитию характера <br>ребёнка, чтобы воспитать самостоятельную и уверенную<br> личность, избежав детских истерик и стресса"],
            afterComplete: function (instance) {
              $('#t3 .ti-cursor').hide();
              var instance4 = new TypeIt('#t4', {
                speed: 50,
                waitUntilVisible: true,
                strings: ["Дата старта : <span>1 ноября</span>"],
                afterComplete: function (instance) {
                  $('#callback').show();

                }
              }).go();

            }
          }).go();

        }
      }).go();

    }
  }).go();*/
  /*Конец Анимация в шапке*/



  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

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


  $('a[data-fancybox="gallery"]').click(function () {
    setTimeout(function () {
      $('[data-fancybox-thumbs]').trigger('click');
      $('[data-fancybox-thumbs]').trigger('click');
    }, 500)
  })
  
  $('.loop').owlCarousel({
//    center: true,
//    items: 3,
    loop: true,
    margin: 135,
    nav: true,
    autoHeight: true,
    autoplay: true,
//    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 0 ,
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

  
  
function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function timer() {

/*    var coki = getCookie('countdown4');
    //coki = false
    var end;
    console.log(coki);

    if (coki) {
        end = coki;
    } else {
        end = new Date();
        setCookie('countdown4', end.getTime() , 14)
    }

    console.log(end)*/
  
  var end = new Date(2019, 10, 4, 0, 0, 0, 0); 

    var _milisec = 10;
    var _second = _milisec * 100;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    function showRemaining() {
        var now = new Date();
        var distance = end - now + 480000;

        if (distance < 0) {

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
  
          $('.days').append('<b class="title">дней</b>');
          $('.hours').append('<b class="title">часов</b>');
        $('.minutes').append('<b class="title">минут</b>');
        $('.seconds').append('<b class="title">секунд</b>');
        $('.milliseconds').append('<b class="title">миллисек.</b>');

  
  $('.problems-item_bottom').viewportChecker({
    classToAdd: 'visible', // Class to add to the elements when they are visible,
    classToAddForFullView: 'full-visible', // Class to add when an item is completely visible in the viewport
    classToRemove: 'invisible', // Class to remove before adding 'classToAdd' to the elements
    removeClassAfterAnimation: false, // Remove added classes after animation has finished
    offset: '20%', // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
    invertBottomOffset: true, // Add the offset as a negative number to the element's bottom
    repeat: false, // Add the possibility to remove the class if the elements are not visible
    callbackFunction: function(elem, action){}, // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
	scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
});
  
      $('.idea-item li').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
        classToRemove: 'hidden_animation', 
        offset: 0    
    });
  
      $('.programs-item').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated flipInX', // Class to add to the elements when they are visible
        classToRemove: 'hidden_animation', 
        offset: 0    
    });
  
      $('.reviews_b-list li:nth-child(odd)').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
        classToRemove: 'hidden_animation', 
        offset: 0    
    });
  
      $('.reviews_b-list li:nth-child(even)').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated flipInX', // Class to add to the elements when they are visible
        classToRemove: 'hidden_animation', 
        offset: 0    
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
			/*
			$.get( "https://ip-api.com/json/", function( data ) {
				var countryCode = (data.countryCode) ? data.countryCode : "ru";
				success(countryCode);
			}, "json" );*/
			
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
  
  
  
  var observer = lozad();
  observer.observe();
  
});