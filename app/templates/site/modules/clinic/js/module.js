$(function () {

	var clinic = $('.clinic .items'), clinicHtml =  $(clinic).html();
	var owlclinic = clinic,
	    owlclinicOptions = {
	        loop:true,
	        margin: 0,
	        nav: false,
	        items: 1,
	        lazyLoad: true,
			autoHeight: true	           
	    }; 
	        
	if ($(window).width() < 960) {
	    startOwlowlclinic();
	}

	$(window).resize(function () {
	    if ($(window).width() > 960) {
	        owlclinic.trigger('destroy.owl.carousel');
	        $(owlclinic).removeClass('owl-carousel');
	        $(clinic).html(clinicHtml);
	    } else {
	        if (!$(owlclinic).hasClass("owl-carousel")) {
	            startOwlowlclinic();            
	        }
	    }
	}); 

	function startOwlowlclinic() {
	    $(owlclinic).addClass('owl-carousel');
	    owlclinic.owlCarousel(owlclinicOptions);
	}		
});