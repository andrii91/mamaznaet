$(document).ready(function(){function e(e){function t(){var e=new Date,t=o-e+48e4;if(t<0)return $(".timer .days").text("00"),$(".timer .hours").text("00"),$(".timer .minutes").text("00"),$(".timer .seconds").text("00"),$(".timer .milliseconds").text("00"),void clearInterval(l);var d=Math.floor(t/r),c=Math.floor(t%r/s),p=Math.floor(t%s/i),u=Math.floor(t%i/a),f=Math.floor(t%a/n);u<10&&(u="0"+u),p<10&&(p="0"+p),c<10&&(c="0"+c),d<10&&(d="0"+d),$(".timer .days span").text(d),$(".timer .hours span").text(c),$(".timer .minutes span").text(p),$(".timer .seconds span").text(u),$(".timer .milliseconds span").text(f)}var o=new Date(e),n=10,a=100*n,i=60*a,s=60*i,r=24*s,l=setInterval(t,10)}$(".speaker-slider").slick({lazyLoad:"ondemand",dots:!0,infinite:!0,speed:300,rows:1,slidesToShow:1,slidesToScroll:1,arrows:!1,centerMode:!1}),$(".smi-list").slick({dots:!1,arrows:!0,infinite:!0,speed:300,slidesToShow:1,centerMode:!0,variableWidth:!0,prevArrow:'<div class="prev">‹</div>',nextArrow:'<div class="next">›</div>'}),$(".scroll").click(function(e){event.preventDefault();var t=$(this).attr("href"),o=$(t).offset().top;$("body,html").animate({scrollTop:o-80},1500)}),$("#phone").intlTelInput({defaultCountry:"ua",initialCountry:"auto",preferredCountries:["ua","ru","az","am","by","kz","kg","md","tj","uz","tm","ge"],autoPlaceholder:"aggressive",nationalMode:!1,customPlaceholder:function(e,t){return"+"+t.dialCode},geoIpLookup:function(e,t){$.get("https://ipinfo.io",function(){},"jsonp").always(function(t){var o=t&&t.country?t.country:"ua";e(o)})},separateDialCode:!1,formatOnDisplay:!1}),$(".check").each(function(){$(this).on("change",function(){var e=$(this).parents("form");$(this).prop("checked")?e.find(".phone").slideDown():e.find(".phone").slideUp()})});var t=lozad();t.observe(),e($(".timer").data("date").replace(/ /g,"T")),$(".days").append('<b class="title">дней</b>'),$(".hours").append('<b class="title">часов</b>'),$(".minutes").append('<b class="title">минут</b>'),$(".seconds").append('<b class="title">секунд</b>'),$(".milliseconds").append('<b class="title">миллисек.</b>')});