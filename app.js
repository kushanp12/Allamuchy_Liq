$(document).ready(function(){
	$('.button-1').click(function(){
		$('.we_got').show();
		$('.contact').hide();
		$('.location').hide();
		e.preventDefault();
	})

	$('.button-2').click(function(e){
		$('.we_got').hide();
		$('.contact').hide();
		$('.location').show();
		e.preventDefault();
	})
	$('.button-3').click(function(e){
		$('.we_got').hide();
		$('.location').hide();
		$('.contact').show()
		e.preventDefault();
	})
});