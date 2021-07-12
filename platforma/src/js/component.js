$(document).ready(function() { 
  $('#nav-icon').click(function () {
    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('.menu').slideToggle(200);
  });
  
    $('[data-modal]').click(function (e) {
    e.preventDefault();
    
    $($(this).attr('href')).css({
      'display' : 'flex',
    })
  });
  
  $('.close').click(function(){
    $(this).parents('.modal').hide('200');
  })
    	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".modal .modal-content"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.parent().hide(200); // скрываем его
		}
	});
});