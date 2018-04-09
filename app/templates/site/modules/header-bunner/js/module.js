$(function () {
	
	/*
	* 
	* Выставляет баннер во всю высоту экрана
	*
	*/
	function headerBunnerWindow() {
		$('#header-bunner-fix').height(screen.height);
	};

	headerBunnerWindow();

	$(window).resize(function () {
		headerBunnerWindow();
	});

	/*
	* 
	* Отрисовываем слайдер для баннера
	*
	*/	
	var bunnersWrapper = $('.header-bunner .bunners'),
		bunners        = $('.bunner', bunnersWrapper),
		bunnersCount   = bunners.length;

	var pagination = '';
	
	for (var index = 0; index < bunnersCount; index++) {
		$(bunners[index]).attr('bunner', 'bunner-' + index);
		pagination += '<span slide-bunner="bunner-' + index + '"></span>';
	}

	$('.pagination', bunnersWrapper).append(pagination);

	var pagination = $('.pagination span', bunnersWrapper);

	$(pagination[0]).addClass('active');

	//Обработка пагинации
	$(pagination).on('click', function () {


		if (!$(this).hasClass('active')) {
			$('.pagination span.active', bunnersWrapper).removeClass('active');
			$(this).addClass('active');
			
			//Надём слайд
			var slide = $(this).attr('slide-bunner');

			//Вернём необходимый баннер
			var bunner = $('[bunner="' + slide + '"]', bunnersWrapper);

			$(bunners).css('display', 'none');

			//Есть ли баннер
			if (bunner.length > 0) {
				//> LAZY LOAD
				var bg = $('.bunner-bg img', bunner),
					bgLazy = $(bg).attr('data-lazy');

				if (bgLazy) {
					$(bg).attr('src', bgLazy);
					$(bg).attr('data-lazy', '');
				}
				//< LAZY LOAD
				$(bunner).fadeIn(400);
			}			
		}
	})

});