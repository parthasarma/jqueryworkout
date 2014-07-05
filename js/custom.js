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
			var discount = generateRandom(100) + 1;
				//create the message string
			discount_msg = "<p>Your code:  CODE" + discount + "</p>";
		}else{
			discount_msg = "<p>Sorry, no discount this time</p>";
		}

		//remove the event and display in which image discount was if missed
		$(".image").each(function () {
			if ($.contains(this, document.getElementById("has_discount"))) {
				$(this).addClass("discount");
			}else{
				$(this).addClass("no_discount");
			}
			
			$(this).unbind("click");
		});

		//append the message string to the image
		$("#result").append(discount_msg);
	}//end of the click

	$(".image").hover(
		function () {
		// this is the mouseenter event handler
		$(this).addClass("my_hover");
	},
	function () {
		// this is the mouseleave event handler
		$(this).removeClass("my_hover");
	});

});//end of doc ready 