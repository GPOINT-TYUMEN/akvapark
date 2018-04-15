$(function () {
	var infoText = $('.prices .rate-info-wrapper'),
		infoTextHtml =  $(infoText).html();
	var owlinfoText = infoText,
		owlinfoTextOptions = {
			loop:true,
			margin: 0,
			nav: false,
			items: 1,
			lazyLoad: true       
		}; 
			
	if ($(window).width() < 480) {
		startOwlowlinfoText();
	}

	$(window).resize(function () {
		if ($(window).width() > 480) {
			owlinfoText.trigger('destroy.owl.carousel');
			$(owlinfoText).removeClass('owl-carousel');
			$(infoText).html(infoTextHtml);
		} else {
			if (!$(owlinfoText).hasClass("owl-carousel")) {
				startOwlowlinfoText();            
			}
		}
	}); 

	function startOwlowlinfoText() {
		$(owlinfoText).addClass('owl-carousel');
		owlinfoText.owlCarousel(owlinfoTextOptions);
	}	


	$('.prices .rates-mobile-wrapper').owlCarousel({
		loop:true,
		margin: 0,
		nav: false,
		items: 1,
		lazyLoad: true
	});

	var adv = $('.prices .adv'), advHtml =  $(adv).html();
	var owladv = adv,
	    owladvOptions = {
	        loop:true,
	        margin: 0,
	        nav: false,
	        items: 1,
	        lazyLoad: true,
			autoHeight: true	           
	    }; 
	        
	if ($(window).width() < 720) {
	    startOwlowladv();
	}

	$(window).resize(function () {
	    if ($(window).width() > 720) {
	        owladv.trigger('destroy.owl.carousel');
	        $(owladv).removeClass('owl-carousel');
	        $(adv).html(advHtml);
	    } else {
	        if (!$(owladv).hasClass("owl-carousel")) {
	            startOwlowladv();            
	        }
	    }
	}); 

	function startOwlowladv() {
	    $(owladv).addClass('owl-carousel');
	    owladv.owlCarousel(owladvOptions);
	}	
});
