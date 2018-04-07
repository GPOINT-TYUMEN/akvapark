$(function () {
	$('.attraction-slider-images .attraction-bg').on('click', function () {
		var galery = $('.attractions-content .gallery-slider');

		$(galery).fadeIn(400, function () {
			$(galery).css('display', 'flex');
			
			var galleryItem = $('.gallery-item', galery);

			$(galleryItem).animate({
				"height": "100%"
			}, 200, function () {
				$(galleryItem).animate({
					"width": "100%"
				}, 300);
			});

		});
	});
});