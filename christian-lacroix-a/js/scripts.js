$(document).ready(function() {
	
	/* scroll */
	
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	/* sliders */

	$(".aromas_list").owlCarousel({
		loop: true,
		margin: 20,
		smartSpeed: 300,
		mouseDrag: false,
		pullDrag: false,
		dots: false,
		nav: true,
		navText: "",
		responsive: {
			0: {
				items: 1
			},
			640: {
				items: 2
			},
			960: {
				items: 3
			}
		}
	});

});