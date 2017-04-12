$(document).ready(function(){
	$('.circle > a > img').hover(
		function(){
			$(this).css('opacity','0.5');
		},
		function(){
			$(this).css('opacity','1');
		}
	);
});