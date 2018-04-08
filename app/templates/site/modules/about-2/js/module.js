$(function () {
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

});