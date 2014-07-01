//adding behavior to the images
$(document).ready(function () {
	//add the function to the images
	$(".image").click(checkForCode);

	//function to display dicount message
	function checkForCode () {
		//$(".image p").remove();
		//find a random number
		var discount = Math.floor((Math.random() * 5) + 5);
		//create the message string
		var discount_msg = "<p>You get a discount of $" + discount + "%</p>";
		//append the message string to the image
		$(this).append(discount_msg);

		//remove the event
		$(".image").each(function () {
			$(this).unbind("click");
		});
	}//end of the click
});//end of doc ready 