$(document).ready(function(){function t(t){function e(){var t=new Date,e=a-t+48e4;if(e<0)return $(".timer .days").text("00"),$(".timer .hours").text("00"),$(".timer .minutes").text("00"),$(".timer .seconds").text("00"),$(".timer .milliseconds").text("00"),void clearInterval(l);var u=Math.floor(e/r),c=Math.floor(e%r/s),m=Math.floor(e%s/o),d=Math.floor(e%o/i),p=Math.floor(e%i/n);d<10&&(d="0"+d),m<10&&(m="0"+m),c<10&&(c="0"+c),u<10&&(u="0"+u),$(".timer .days span").text(u),$(".timer .hours span").text(c),$(".timer .minutes span").text(m),$(".timer .seconds span").text(d),$(".timer .milliseconds span").text(p)}var a=new Date(t),n=10,i=100*n,o=60*i,s=60*o,r=24*s,l=setInterval(e,10)}function e(t){function e(){var t=new Date,e=a-t+48e4;if(e<0)return $(".timer1 .days").text("00"),$(".timer1 .hours").text("00"),$(".timer1 .minutes").text("00"),$(".timer1 .seconds").text("00"),$(".timer1 .milliseconds").text("00"),void clearInterval(l);var u=Math.floor(e/r),c=Math.floor(e%r/s),m=Math.floor(e%s/o),d=Math.floor(e%o/i),p=Math.floor(e%i/n);d<10&&(d="0"+d),m<10&&(m="0"+m),c<10&&(c="0"+c),u<10&&(u="0"+u),$(".timer1 .days span").text(u),$(".timer1 .hours span").text(c),$(".timer1 .minutes span").text(m),$(".timer1 .seconds span").text(d),$(".timer1 .milliseconds span").text(p)}var a=new Date(t),n=10,i=100*n,o=60*i,s=60*o,r=24*s,l=setInterval(e,10)}function a(){var t={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,a,n){t[a]=n});return t}$(window).scroll(function(){return $("nav").toggleClass("fixed",$(window).scrollTop()>0)});var n=0,i=$(".hide_review").length;$(".show_more").click(function(t){event.preventDefault(),n+=6,i<n&&$(this).hide(200),$(".hide_review").each(function(t){if($(this).show(200),n==t+1)return!1})}),$(".scroll").click(function(t){event.preventDefault();var e=$(this).attr("href"),a=$(e).offset().top;$("body,html").animate({scrollTop:a-80},1500)}),t($(".timer").data("date").replace(/ /g,"T")),$("span").hasClass("timer1")&&(console.log("sdsd"),e($(".timer1").data("date").replace(/ /g,"T"))),$(".days").append('<b class="title">дней</b>'),$(".hours").append('<b class="title">часов</b>'),$(".minutes").append('<b class="title">минут</b>'),$(".seconds").append('<b class="title">секунд</b>'),$(".milliseconds").append('<b class="title">миллисек.</b>'),$(window).width()<1200?($(".programs-mob_carousel").addClass("owl-carousel owl-theme no-js"),$(".programs-mob_carousel").owlCarousel({loop:!0,margin:0,nav:!0,autoHeight:!0,responsive:{0:{items:1}}})):$(".programs-mob_carousel").removeClass("owl-carousel owl-theme no-js programs-mob_carousel"),$("#nav-icon").click(function(){$(this).toggleClass("open"),$(this).parents("nav").toggleClass("open"),$(".menu").slideToggle(200),$("img[data-src]").each(function(){$(this).attr("src",$(this).data("src"))})}),$('input[name="utm_source"]').val(a().utm_source),$('input[name="utm_campaign"]').val(a().utm_campaign),$('input[name="utm_medium"]').val(a().utm_medium),$('input[name="utm_term"]').val(a().utm_term),$('input[name="utm_content"]').val(a().utm_content),$('input[name="click_id"]').val(a().aff_sub),$('input[name="affiliate_id"]').val(a().aff_id),$('input[name="user_agent"]').val(navigator.userAgent),$('input[name="ref"]').val(document.referrer),$.get("https://ipinfo.io",function(t){$('input[name="ip_address"]').val(t.ip),$('input[name="city"]').val(t.city)},"jsonp"),$(".questions form").on("submit",function(t){t.preventDefault(),$(".submit").addClass("inactive"),$(".submit").prop("disabled",!0);var e=$(this);e.find("input");_fbq.push(["track","Lead",{content_name:"lead_gelan",content_category:"jalan_zayavka",referrer:window.location.href}]),$.ajax({type:"POST",url:"db/registration.php",dataType:"json",data:e.serialize(),success:function(t){}}),setTimeout(function(){window.location.href="success.html"},800)}),$("#phone").intlTelInput({defaultCountry:"ua",initialCountry:"auto",preferredCountries:["ua","ru","az","am","by","kz","kg","md","tj","uz","tm","ge"],autoPlaceholder:"aggressive",nationalMode:!1,customPlaceholder:function(t,e){return"+"+e.dialCode},geoIpLookup:function(t,e){$.get("https://ipinfo.io",function(){},"jsonp").always(function(e){var a=e&&e.country?e.country:"ua";t(a)})},separateDialCode:!1,formatOnDisplay:!1}),$(".check").each(function(){$(this).on("change",function(){var t=$(this).parents("form");$(this).prop("checked")?t.find(".phone").slideDown():t.find(".phone").slideUp()})});var o=lozad();o.observe(),$("nav").hover(function(){$("img[data-src]").each(function(){$(this).attr("src",$(this).data("src"))})}),$(".slider").owlCarousel({loop:!0,margin:20,nav:!0,dots:!1,items:5,loop:!0,autoWidth:!0,responsive:{0:{items:2,margin:0},600:{items:4,margin:20}}})});