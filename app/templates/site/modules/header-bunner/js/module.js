$(function () {
	
	/*
	* 
	* Выставляет баннер во всю высоту экрана
	*
	*/
	function headerBunnerWindow() {
		if ($('body').width() >= 960) {
			$('#header-bunner-fix').height(screen.height);
		}
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

			
			
			//Надём слайд
			var slide = $(this).attr('slide-bunner');
			$('.header-bunner .pagination [slide-bunner*="' + slide + '"]').addClass('active');

			//Вернём необходимый баннер
			var bunner = $('[bunner="' + slide + '"]', bunnersWrapper);

			$(bunners).css('display', 'none');

			//Есть ли баннер
			if (bunner.length > 0) {
				//> LAZY LOAD
				var bg = $('.bunner-bg img', bunner),
					bgCount = bg.length;
					bgLazy = $(bg).attr('data-lazy');

				for (var index = 0; index < bgCount; index++) {
					var bgLazy = $(bg[index]).attr('data-lazy');

					if (bgLazy) {
						$(bg[index]).attr('src', bgLazy);
						$(bg[index]).attr('data-lazy', '');
					}					
				}

				//< LAZY LOAD
				$(bunner).fadeIn(400);
			}			
		}
	})

});