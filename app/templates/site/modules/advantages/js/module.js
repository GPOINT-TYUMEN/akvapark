$(function () {
	 $('.advantages .owl-carousel').owlCarousel({
			loop:true,
			margin: 104,
			nav: false,
			items: 5,
			responsive: {
				320: {
					items: 1
				},

				620: {
					items: 2
				},

				720: {
					items: 3
				},

				960: {
					items: 3
				}
			}
	  });
	
});