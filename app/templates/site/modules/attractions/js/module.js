$(function () {

	//> SLIDER CONTENT
	var attractions = $('.attractions'),
		attractionsOwl = $('.attraction-wrapper ', attractions),
		attractionsImagesOwl = $('.attraction-slider-images ', attractions);

	attractionsOwl.owlCarousel({
		animateIn: 'fadeIn',
		loop:true,
		margin: 0,
		nav: false,
		items: 1,
		lazyLoad:true
	});

	attractionsImagesOwl.owlCarousel({
		animateIn: 'fadeIn',
		loop:true,
		margin: 0,
		nav: false,
		items: 1,
		touchDrag: false,
		lazyLoad:true
	});

	$('.route-right', attractions).click(function() {
		$('.owl-next', attractions).trigger('click');
	});
	//BACK SLIDE
	$('.route-left', attractions).click(function() {
		$('.owl-prev', attractions).trigger('click');
	});	

	//< SLIDER CONTENT
	var imagesActives;
	$('body').on('click', '.attraction-slider-images .attraction-bg, .attractions .zoom', function (e) {
		var elemSelf = e.target;

		if ($(elemSelf).hasClass('zoom')) {
			elemSelf = $(this).parent();
		}	

		if ($('body').width() < 720) {
			openSwipe(elemSelf);
		} else {
			
			//Изображения 
			imagesActives = $('span', elemSelf);

			var imagesCount = imagesActives.length;

			var gallerySlider = '';
			for (var index = 0; index < imagesCount; index++) {
				gallerySlider += '<div class="gallery-item" slide="slide-' + index +'" style="background-image: url(' + $(imagesActives[index]).attr('img-src') + ');"></div>';
			}
			var galery = $('.gallery-slider', attractions);

		
			$(galery).fadeIn(400, function () {
				$(galery).css('display', 'flex');
				
				$('.gallery-item', galery).remove();

				//Добавляем слайды
				$(galery).append(gallerySlider);

				galleryItem = $('.gallery-item', galery);


				var dot = $('.owl-dot', $(elemSelf).parent().parent().parent().parent()),
					dotCount = dot.length;
				
				//Вернём позицию активного слайда
				var activeIndex;
				for (var index = 0; index < dotCount; index++) {
					if ($(dot[index]).hasClass('active')) {
						activeIndex = index;
						break;
					}
				}

				

				$(galleryItem[index]).css('display', 'block');
				$(galleryItem[index]).animate({
					"height": "100%"
				}, 200, function () {
					$(galleryItem[index]).animate({
						"width": "100%"
					}, 300 , function () {
						$('.attractions .gallery-slider').addClass('active');
					});
				});

				setRouteSlide(index);
			});			
		}

	});

	//CLOSE GALERY
	$('.attractions .gallery-slider .close').on('click', function () {
		var gallerySlider = $('.attractions .gallery-slider');
			galleryItem   = $('.gallery-item', gallerySlider);

		$(gallerySlider).removeClass('active');

		$(galleryItem).animate({
			"width": "150px"
		}, 200, function () {
			$(galleryItem).animate({
				"height": "0"
			}, 300 , function () {
				$(gallerySlider).css('display', 'none');
			});
		});	
	});	

	//SLIDE
	$('.gallery-slider .left-slide', attractions).on('click', function () {
		var slide = parseInt($(this).attr('slide'));
		var items = $('.gallery-item', attractions);

		if (slide === 0) {
			slide = items.length - 1;
		} else {
			slide--;
		}

		

		$(items).css('display', 'none');

		var itemSlide = $('.gallery-slider .gallery-item[slide*="slide-' + slide + '"]');
		
		
		setRouteSlide(slide);

		
		$(itemSlide).css({
			"height": "100%",
			"width": "100%"
		});
		$(itemSlide).fadeIn();
	});

	$('.gallery-slider .right-slide', attractions).on('click', function () {
		var slide = parseInt($(this).attr('slide'));
		var items = $('.gallery-item', attractions);

		if (slide === (items.length - 1)) {
			slide = 0
		} else {
			slide++;
		}

		

		$(items).css('display', 'none');

		var itemSlide = $('.gallery-slider .gallery-item[slide*="slide-' + slide + '"]');
		
		
		setRouteSlide(slide);

		$(itemSlide).css({
			"height": "100%",
			"width": "100%"
		});
		$(itemSlide).fadeIn();
	});

	function setRouteSlide(slide) {
		$('.gallery-slider .left-slide').attr('slide', slide);
		$('.gallery-slider .right-slide').attr('slide', slide);
	}

	//SHOW MORE DESC
	$('.attractions .info-pagination').on('click', function () {
		$('.attraction-info-2-more', $(this).parent().parent()).toggleClass('active');
		
	});

	$('.attractions .attraction-right .close').on('click', function () {
		$(this).parent().removeClass('active');
	}); 
});

function openSwipe(elem) {
	//Изображения 
	imagesActives = $('span', elem);

	var imagesCount = imagesActives.length;	
	// build items array
	var items = [];

	for (var index = 0; index < imagesCount; index++) {
		items[index] = {
			src: $(imagesActives[index]).attr('img-src'),
			w: 	 $(imagesActives[index]).attr('img-w'),
			h: 	 $(imagesActives[index]).attr('img-h')
		}
	}
	var pswpElement = document.querySelectorAll('.pswp')[0];



	//Найдём index активного слайда
	var dot = $('.owl-dot', $(elem).parent().parent().parent().parent()),
		dotCount = dot.length;
	
	//Вернём позицию активного слайда
	var activeIndex;
	for (var index = 0; index < dotCount; index++) {
		if ($(dot[index]).hasClass('active')) {
			activeIndex = index;
			break;
		}
	}	


	// define options (if needed)
	var options = {
	    // optionName: 'option value'
	    // for example:
	    index: activeIndex // start at first slide
	};

	// Initializes and opens PhotoSwipe
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
}