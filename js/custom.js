$(document).ready(function () {
	$(".rectangle").find(".square_small").animate({left: $(".rectangle").width() - $(".rectangle").find(".square_small").width()}, "slow");

	function animation () {
		var option = {
			duration : 800,
			easing : "linear"
		};

	$(".square-big")
		.find(".square_small")
			.animate(
			{
				left: 280,
				top: 280
			},
			options
			)
			.animate(
			{
				left: 0,
			},
			options
			)			
			.animate(
			{
				left: 200,
				top: 0
			},
			options
			)
			.animate(
			{
				left: 0,
			},
			$.extend(true, options, {
				complete: function () {
					animation();
				}
			})
			);
	}
});