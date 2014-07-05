$(document).ready(function () {

	var v = false;
	var $f, $m;
	// setting property of each button
	$("button#vegOn").click(function () {
		if (v == false) {
			$f = $(".fish").parent().parent().detach();//relationship chaining
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