$(function () {

	var aboutItem = $('.about-2 .vertical-slider .item'),
		aboutCountentItem = $('.about-2 .about-item'),
		aboutItemCount = aboutItem.length;


	$(aboutItem[0]).addClass('active');
	for (var index = 0; index < aboutItemCount; index++) {
		$(aboutItem[index]).attr('item', index);
		$(aboutCountentItem[index]).attr('item', 'item-' + index);
	}	

	var verticalSlider = $('.vertical-slider .slick');		

	verticalSlider.slick({
		dots: false,
		vertical: true,
		speed: 200,
		slidesToShow: 4,
		slidesToScroll: 1,
		draggable: true,
		verticalSwiping: true,
		lazyLoad: 'ondemand',
		arrows: false,
	 });

	verticalSlider.on('mousewheel', function(e) {
		e.preventDefault();

		if (e.originalEvent.deltaY < 0) {
			$(this).slick('slickNext');
		} else {
			$(this).slick('slickPrev');
		}
	});  

	$('.vertical-slider .route-up').on('click',  function () {
		$(verticalSlider).slick('slickNext');;
	});

	$('.vertical-slider .route-down').on('click',  function () {
		$(verticalSlider).slick('slickPrev');;
	});

	//SHOW CONTENT
	$('.about-2 .vertical-slider .item').on('click', function () {
		$('.about-2 .vertical-slider .item').removeClass('active');
		$(this).addClass('active');

		//Показываем нужный нам блок
		$('.about-2 .about-item').css('display', 'none');
		$('.about-2 .about-item[item*="item-' + $(this).attr('item') + '"]').fadeIn();
	});
});