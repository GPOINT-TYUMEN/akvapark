$(function () {
	$('.left-nav').hover(function () {
		$('.social', this).fadeIn(400);
	}, function () {
		$('.social', this).fadeOut(100);
	});
});