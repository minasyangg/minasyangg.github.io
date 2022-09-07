$(function() {

	$('.podcasts-item')
		.mouseover(function(){
			$(this).find("p.podcast-title").css("display", "none");
	})
		.mouseleave(function(){
			$(this).find("p.podcast-title").css("display", "block");
	});

// 	$('.podcasts-item').click(function(){
// 		$(this).find("p.podcast-title").toggleClass('active')

// })


});
