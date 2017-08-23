$(function() {
    
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
        
    /******************/
    $(window).scroll(function () {if ($(this).scrollTop() > 0) {$('#scroller').fadeIn();} else {$('#scroller').fadeOut();}});
    $('#scroller').click(function () {$('body,html').animate({scrollTop: 0}, 400); return false;});
    
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
    
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
	
    var now = new Date(); 
    var time_stamp = 86400 - (now.getHours()*3600 + now.getMinutes()*60);
    $('#countdown-1').FlipClock(time_stamp, {
        countdown: true,
        language:'ru-ru'
    });
    $('#countdown-2').FlipClock(time_stamp, {
        countdown: true,
        language:'ru-ru'
    });
});

