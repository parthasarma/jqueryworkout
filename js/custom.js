$(document).ready(function () {

	var v = false;
	var $f, $m;
	// setting property of each button
	$("button#vegOn").click(function () {
		if (v == false) {
			$f = $(".fish").parent().parent().detach();//relationship chaining
			$(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");
			$(".meat").after("<li>Tofu</li>");
			$m = $(".meat").detach();
			v = true;
		}
		
	});//end of vegOn button

	$("button#restoreMe").click(function () {
		if (v == true) {
			v = false;
		}
		location.reload();
	});//end of restoreMe button
});//end of document ready