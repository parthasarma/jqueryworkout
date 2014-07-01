//adding behavior to the images
$(document).ready(function () {
	$(".image").click(checkForCode);
	var checkForCode = function () {
		//$(".image p").remove();
		var discount = Math.floor((Math.random() * 5) + 5);
		var discount_msg = "<p>You get a discount of $" + discount + "%</p>";
		$(this).append(discount_msg);
		$(".image").each(function () {
			$(this).unbind("click");
		});
	});//end of the click
});//end of doc ready 