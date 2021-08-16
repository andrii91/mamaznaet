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

  $('#nav-icon').click(function () {
    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('.menu').slideToggle(200);

    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));
    })
  });

  $('.menu li').click(function () {
    $('#nav-icon').removeClass('open');
    $('nav').removeClass('open');
    $('.menu').hide(200);
  })


/*  $('.programs-item').click(function () {
    $(this).toggleClass('active');
    $(this).find('.more').slideToggle();
  })*/

  jQuery.cookie = function (name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
      options = options || {};
      if (value === null) {
        value = '';
        options.expires = -1;
      }
      var expires = '';
      if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
        var date;
        if (typeof options.expires == 'number') {
          date = new Date();
          date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
        } else {
          date = options.expires;
        }
        expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
      }
      // CAUTION: Needed to parenthesize options.path and options.domain
      // in the following expressions, otherwise they evaluate to undefined
      // in the packed version for some reason...
      var path = options.path ? '; path=' + (options.path) : '';
      var domain = options.domain ? '; domain=' + (options.domain) : '';
      var secure = options.secure ? '; secure' : '';
      document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
      var cookieValue = null;
      if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
          var cookie = jQuery.trim(cookies[i]);
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) == (name + '=')) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    }
  }


  var myDate = new Date();

  function returnEndDate(d, h, m) {
    myDate.setDate(myDate.getDate() + d);
    myDate.setHours(myDate.getHours() + h);
    myDate.setMinutes(myDate.getMinutes() + m);
    return myDate;
  }
  if ($.cookie("timer")) {
    var dateEnd = $.cookie("timer");
  } else {
    var dateEnd = returnEndDate(0, 0, 0);
    $.cookie("timer", dateEnd, {
      expires: 1
    });
  }


  var ts = new Date(dateEnd);

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

        //        $('.days').text("00");
        //        $('.hours').text("00");
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

      //      $('.days span').text(days);
      //      $('.hours span').text(hours);
      $('.minutes span').text(minutes);
      $('.seconds span').text(seconds);
      $('.milliseconds span').text(miliseconds);


    };

    var intervalTimer = setInterval(showRemaining, 10);
  }

  $('.minutes').append('<b class="title">минут</b>');
  $('.seconds').append('<b class="title">секунд</b>');
  $('.milliseconds').append('<b class="title">миллисек.</b>');
  timer(ts);




  $('.carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    items: 1,
    singleItem: true,
    //    autoHeight: true,
    transitionStyle: "fade"

  });


  $('.smi-list').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    items: 3,
    //    singleItem: true,
    autoWidth: true,
    //    autoHeight: true,
    //    transitionStyle: "fade"

  });

  var observer = lozad();
  observer.observe();



  $('.order-btn').click(function (e) {
    e.preventDefault();
    var destination = $(".appointment").offset().top - 0;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });



  $('a.btn').click(function () {
    _fbq.push(['track', 'Lead', {
      content_name: 'poslush_web',
      content_category: 'pr_online',
      referrer: window.location.href
				}]);
    // console.log($(this).attr('id'));
    if ($(this).hasClass('telegramm')) {
      ym(57024379, 'reachGoal', 'telegramm');
      // document.location.href = 'https://t.me/mother_knows_bot?start=ZGw6NDQ1OA';
      /*https://t.me/mother_knows_bot?start=ZGw6NDQ1OA*/
      return true;
    } else {
      ym(57024379, 'reachGoal', 'viber');
      // document.location.href = 'viber://pa?context=ZGw6NDQ1OA&chatURI=httpmama-znaettop';
      /*viber://pa?context=ZGw6NDQ1OA&chatURI=httpmama-znaettop*/
      return true;

    }
  })

  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  }

/*
  ssDeepLink('deep-link', 'mamaznaet', false, {
    variables: {
      campaign: 'https://free.mamaznaet.pro/new2/',
      utm_source: getUrlVars()["utm_source"],
      utm_campaign: getUrlVars()["utm_campaign"],
      utm_medium: getUrlVars()["utm_medium"],
      utm_term: getUrlVars()["utm_term"],
      utm_content: getUrlVars()["utm_content"],
      user_agent: navigator.userAgent,
      ref: document.referrer,
    },
  });*/


});