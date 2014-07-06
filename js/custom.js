$(document).ready(function () {

	var v = false;
	var $fishArray, $meatArray;

	// setting property of each button
	$("button#vegOn").click(function () {
		if (v == false) {
			//removed fish items and stored the same in the $fishArray 
			$fishArray = $(".fish").parent().parent().detach();//relationship chaining

			//replaced hamburger with Portobello Mushroom and added the veg leaf image
			$(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");
			$(".portobello").parent().parent().addClass("veg_leaf");

			//replaced meat with tofu
			$(".meat").after("<li class='tofu'><em>Tofu</em></li>");
			$meatArray = $(".meat").detach();

			//added the veg leaf as specification
			$(".tofu").parent().parent().addClass("veg_leaf");

			v = true;
		}
		
	});//end of vegOn button

	$("button#restoreMe").click(function () {
		if (v == true) {
			//added back the fish items
			$(".menu_entrees li").first().before($fishArray);

			//replaced the Portobello Mushroom to hamburger
			$(".portobello").replaceWith("<li class='hamburger'>hamburger</li>");
			$(".tofu").each(function (i) {
				$(this).after($meatArray[i]);
			});

			$(".tofu").remove();

			//removed the veg leaf
			$(".veg_leaf").removeClass();	
			v = false;
		}
		// location.reload();
	});//end of restoreMe button
});//end of document ready