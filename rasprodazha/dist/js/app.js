$(document).ready(function(){function t(t){function e(){var t=new Date,e=a-t+48e4;if(e<0)return $(".timer .days").text("00"),$(".timer .hours").text("00"),$(".timer .minutes").text("00"),$(".timer .seconds").text("00"),$(".timer .milliseconds").text("00"),void clearInterval(l);var u=Math.floor(e/r),p=Math.floor(e%r/s),c=Math.floor(e%s/o),m=Math.floor(e%o/i),d=Math.floor(e%i/n);m<10&&(m="0"+m),c<10&&(c="0"+c),p<10&&(p="0"+p),u<10&&(u="0"+u),$(".timer .days span").text(u),$(".timer .hours span").text(p),$(".timer .minutes span").text(c),$(".timer .seconds span").text(m),$(".timer .milliseconds span").text(d)}var a=new Date(t),n=10,i=100*n,o=60*i,s=60*o,r=24*s,l=setInterval(e,10)}function e(){var t={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,a,n){t[a]=n});return t}$(window).scroll(function(){return $("nav").toggleClass("fixed",$(window).scrollTop()>0)}),$(".scroll").click(function(t){event.preventDefault();var e=$(this).attr("href"),a=$(e).offset().top;$("body,html").animate({scrollTop:a-40},1500)}),$("#nav-icon").click(function(){$(this).toggleClass("open"),$(this).parents("nav").toggleClass("open"),$(".menu").slideToggle(200)}),$("div").hasClass("timer")&&t($(".timer").data("date").replace(/ /g,"T")),$(".days").append('<b class="title">дней</b>'),$(".hours").append('<b class="title">часов</b>'),$(".minutes").append('<b class="title">минут</b>'),$(".seconds").append('<b class="title">секунд</b>'),$(".milliseconds").append('<b class="title">м.сек.</b>'),$("#phone").intlTelInput({defaultCountry:"ua",initialCountry:"auto",preferredCountries:["ua","ru","az","am","by","kz","kg","md","tj","uz","tm","ge"],autoPlaceholder:"aggressive",nationalMode:!1,customPlaceholder:function(t,e){return"+"+e.dialCode},geoIpLookup:function(t,e){$.get("https://ipinfo.io",function(){},"jsonp").always(function(e){var a=e&&e.country?e.country:"ua";t(a)})},separateDialCode:!1,formatOnDisplay:!1}),$(".check").each(function(){$(this).on("change",function(){var t=$(this).parents("form");$(this).prop("checked")?t.find(".phone").slideDown():t.find(".phone").slideUp()})}),$('.order-btn[href="#"]').click(function(t){t.preventDefault()}),$('input[name="utm_source"]').val(e().utm_source),$('input[name="utm_campaign"]').val(e().utm_campaign),$('input[name="utm_medium"]').val(e().utm_medium),$('input[name="utm_term"]').val(e().utm_term),$('input[name="utm_content"]').val(e().utm_content),$('input[name="click_id"]').val(e().aff_sub),$('input[name="affiliate_id"]').val(e().aff_id),$('input[name="user_agent"]').val(navigator.userAgent),$('input[name="ref"]').val(document.referrer),$.get("https://ipinfo.io",function(t){$('input[name="ip_address"]').val(t.ip),$('input[name="city"]').val(t.city)},"jsonp"),$(".question form").on("submit",function(t){t.preventDefault(),$(".submit").addClass("inactive"),$(".submit").prop("disabled",!0);var e=$(this);e.find("input");$.ajax({type:"POST",url:"db/registration.php",dataType:"json",data:e.serialize(),success:function(t){}});var a=e.find('input[name="name"]').val(),n=e.find('input[name="phone"]').val();$.ajax({type:"POST",url:"https://api.telegram.org/bot801507460:AAGfGGyQTSPSy0ai-rZyFpIaJcjl1AbObKU/sendMessage?chat_id=308548437&text=Новый лид ЧП-Консультация: "+a+" | "+n}),$.ajax({type:"POST",url:"https://api.telegram.org/bot801507460:AAGfGGyQTSPSy0ai-rZyFpIaJcjl1AbObKU/sendMessage?chat_id=268845099&text=Новый лид ЧП-Консультация: "+a+" | "+n}),$.ajax({type:"POST",url:"https://api.telegram.org/bot801507460:AAGfGGyQTSPSy0ai-rZyFpIaJcjl1AbObKU/sendMessage?chat_id=266439197&text=Новый лид ЧП-Консультация: "+a+" | "+n}),setTimeout(function(){window.location.href="success.html"},800)});var a=lozad();a.observe()});