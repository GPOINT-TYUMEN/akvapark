$(function () {
	var purity = $('.purity .adva'), purityHtml =  $(purity).html();
	var owlpurity = purity,
	    owlpurityOptions = {
	        loop:true,
	        margin: 0,
	        nav: false,
	        items: 1,
	        lazyLoad: true,
			autoHeight: true,	        
		    responsive:{
		        719:{
		            items:1
		        },

		        960:{
		            items:2,
		        }
		    }	           
	    }; 
	        
	if ($(window).width() < 960) {
	    startOwlowlpurity();
	}

	$(window).resize(function () {
	    if ($(window).width() > 960) {
	        owlpurity.trigger('destroy.owl.carousel');
	        $(owlpurity).removeClass('owl-carousel');
	        $(purity).html(purityHtml);
	    } else {
	        if (!$(owlpurity).hasClass("owl-carousel")) {
	            startOwlowlpurity();            
	        }
	    }
	}); 

	function startOwlowlpurity() {
	    $(owlpurity).addClass('owl-carousel');
	    owlpurity.owlCarousel(owlpurityOptions);
	}			
});