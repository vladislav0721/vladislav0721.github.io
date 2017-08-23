$(document).ready(function(){
	
	if($('#chose_file').length)
		{
			$('#chose_file').click(function(){
			$('#chose_file_input').click();
			return(false);
		});
 
			$('#chose_file_input').change(function(){
			$('#chose_file_text').html($(this).val());
			}).change();
		}
	
	$(window).load(function() {
		var block = $('div.read-more');
		var position = block.position();
		var windowpos = 0;
    $(window).scroll(function() {
         wintop = $(window).scrollTop();
         if(wintop<position.top+10){
            block.css({position: 'relative', top: '0px'});
         } else {
            block.css({position: 'fixed', top: '10px'});
         }
    });
});


});


$(function(){
	$('input[placeholder], textarea[placeholder]').placeholder();
});