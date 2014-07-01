//adding behavior to the images
$(document).ready(function () {
	//add the function to the images
	$(".image").click(checkForCode);

	//find a random number
	function generateRandom (number) {
		var randomNumber = Math.floor((Math.random() * number));
		return randomNumber;
	}

	//to hide discount within a random 
	var hideCode = function () {
		//to represent any of the four divs randomly
		var randNum = generateRandom(4);

		$(".image").each(function (index, value) {
			if (randNum == index) {
				$(this).append("<span id='has_discount'></span>");
				return false;
			}
		});
	}

	hideCode();

	//function to display dicount message
	function checkForCode () {
		//$(".image p").remove();
		
		var discount_msg;		
		if($.contains(this, document.getElementById("has_discount"))){
			//create the random discount
			var discount = generateRandom(5) + 5;
				//create the message string
			discount_msg = "<p>You get a discount of $" + discount + "%</p>";
		}else{
			discount_msg = "<p>Sorry no discount this time</p>";
		}
		//append the message string to the image
		$(this).append(discount_msg);

		//remove the event
		$(".image").each(function () {
			$(this).unbind("click");
		});
	}//end of the click

});//end of doc ready 