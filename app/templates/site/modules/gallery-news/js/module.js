$(function () {
	var galleryNews= $('.gallery-news');

	//Отображение скрытых новостных блоков
	$('[class*="btn_"]', galleryNews).on('click', function () {
		var news = $('.news.no-active', galleryNews);

		//Обращаемся к самому первому скрытому блоку
		if (news[0]) {
			$(news[0]).css('display', 'inline-block');
			$(news[0]).removeClass('no-active');
			//Анимация скролл
			$("html, body").animate({ 
				scrollTop: $("html, body").scrollTop() + $(news[0]).height()
			}, 600);
	
			var news = $('.new', news),
				newsCount = news.length;

			
			$(news).addClass('active');
			//Постепенное отображение новостного блока	
			var intervalFade = 500;
		/*	for (var index = 0; index < newsCount; index++) {
				var newItem = news[index];
				setTimeout(function() {
					showNew(newItem);
				}, intervalFade);

				intervalFade += 200;	
			}*/
		}
	});

	function showNew(newItem) {
		$(newItem).addClass('active');
	}	
});