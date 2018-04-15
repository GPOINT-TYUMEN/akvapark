$(function () {

	var adv2 = $('.advantages-2 .items'), adv2Html =  $(adv2).html();
	var owladv2 = adv2,
	    owladv2Options = {
	        loop:true,
	        margin: 0,
	        nav: false,
	        items: 1,
	        lazyLoad: true,
			autoHeight: true,
		    responsive:{
		        0:{
		            items:1
		        },

		        600:{
		            items:1
		        },

		        960 :{
		            items: 2
		        }
		    }			           
	    }; 
	        
	if ($(window).width() < 960) {
	    startOwlowladv2();
	}

	$(window).resize(function () {
	    if ($(window).width() > 960) {
	        owladv2.trigger('destroy.owl.carousel');
	        $(owladv2).removeClass('owl-carousel');
	        $(adv2).html(adv2Html);
	    } else {
	        if (!$(owladv2).hasClass("owl-carousel")) {
	            startOwlowladv2();            
	        }
	    }
	}); 

	function startOwlowladv2() {
	    $(owladv2).addClass('owl-carousel');
	    owladv2.owlCarousel(owladv2Options);
	}		
});