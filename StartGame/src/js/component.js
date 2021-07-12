

$(document).ready(function () {
  // функция возвращает cookie с именем name, если есть, если нет, то undefined	
/*function getCookie(name) {
	var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
var alertwin = getCookie("alertwin");
if (alertwin != "no") { 
	$(document).mouseleave(function(e){
		if (e.clientY < 10) {
			$(".exitblock").fadeIn("fast");	
			// записываем cookie на 1 день, с которой мы не показываем окно
			var date = new Date;
			date.setDate(date.getDate() + 1);	
			document.cookie = "alertwin=no; path=/; expires=" + date.toUTCString();	   
		}    
	});
	$(document).click(function(e) {
		if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
			$(".exitblock").hide();
		}
	});  
}
  */
  
/*
  
    $(document).mouseleave(function (e) {
    if (e.clientY < 10) {
      $(".exitblock").fadeIn("fast");
    }
  });
*/

    $(".reviews-item  ").click(function(){	// Событие клика на маленькое изображение
	  	var img = $(this).find('img');	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
						 "</div>"); 
		$(".popup").fadeIn(800); // Медленно выводим изображение
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 800);
		});
	})
  
  
  
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

  
/*  
$('.show_btn_bonus').click(function(e){
  e.preventDefault();
   $(".exitblock").show("fast");
})
  $(document).click(function (e) {
    if($(window).width() > 1200) {
      if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
        $(".exitblock").hide();
      }else{
        $('.show_btn_bonus').click(function(e){
          e.preventDefault();
           $(".exitblock").show("fast");
        })
      }
      
    }else{
      $('.show_btn_bonus').click(function(e){
          e.preventDefault();
           $(".exitblock").show("fast");
        })
      $('.closeblock').click(function(e){
          e.preventDefault();
           $(".exitblock").hide("fast");
        })
      
      
    }
  });
  
  */
  
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
  /*
    
      $('.programs-container').addClass("hidden_animation").viewportChecker({
          classToAdd: 'visible', // Class to add to the elements when they are visible
          classToRemove: 'hidden_animation', 
          offset: 0    
      });

    
    
    
  */
  $('.section_6-item .before').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
    classToRemove: 'hidden_animation',
    offset: 0
  });
  $('.arr_left').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
    classToRemove: 'hidden_animation',
    offset: 0
  });
  $('.arr_right').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
    classToRemove: 'hidden_animation',
    offset: 0
  });
  $('.up').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
    classToRemove: 'hidden_animation',
    offset: 0
  });

  $('.programs-item li').viewportChecker({
    classToAdd: 'active', // Class to add to the elements when they are visible
    repeat: true,
    offset: '45%'
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
  timer($('.timer').data('date').replace(/ /g, "T"));


  $('.days').append('<b class="title">дней</b>');
  $('.hours').append('<b class="title">часов</b>');
  $('.minutes').append('<b class="title">минут</b>');
  $('.seconds').append('<b class="title">секунд</b>');
  $('.milliseconds').append('<b class="title">миллисек.</b>');


  var observer = lozad();
  observer.observe();

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



});
