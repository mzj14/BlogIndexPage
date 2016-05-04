$(document).ready(function(){
	
	var button = $(".button");
    button.click(function(){
	
		$(this).parent().next().slideToggle();
	
	});
	
	$(".rslides").responsiveSlides();
	
});
