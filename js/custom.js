$(document).ready(function () {
	$("#clickMe").click(function () {
		$("img").fadeIn(1000);
		$("#picframe").slideToggle("slow");
	});
});	
// 	$("#move_up").click( function() {
// 		$("#change_me").animate({top:30},200); 
// 	});//end move_up
// 	$("#move_down").click( function() {	
// 		$("#change_me").animate({top:500},2000);  
// 	});//end move_down
// 	$("#color").click( function() {
// 		$("#change_me").css("color", "purple");	
// 	});//end color
// 	$("#disappear").click( function() {
// 		$("#change_me").toggle('slow'); 
// 	});//end disappear
// });

//adding behavior to the images
// $(document).ready(function () {
// 	$(".image").click(function () {
// 		$(".image p").remove();
// 		var discount = Math.floor((Math.random() * 5) + 5);
// 		var discount_msg = "<p>You get a discount of $" + discount + "%</p>";
// 		$(this).append(discount_msg);
// 	});//end of the click
// });//end of doc ready