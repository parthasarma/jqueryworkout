$(document).ready(function () {

	var v = false;

	// setting property of each button
	$("button#vegOn").click(function () {
		if (v == false) {
			v = true;
		}
	});//end of vegOn button

	$("button#restoreMe").click(function () {
		if (v == true) {
			v = false;
		}
	});//end of restoreMe button
});//end of document ready