$(document).ready(function () {

	var headClix = 0, eyeClix = 0, noseClix = 0, mouthClix = 0;

	//for animating the head section
	$("#head").click(function () {
		//this condition limits the user to nine clicks	
		if (headClix < 9) {
			headClix += 1;
		}else{

			//reset the headclix variable to 0 after ninth click
			headClix = 0;
		}
	});

	//for animating the eye section
	$("#eyes").click(function () {
		//this condition limits the user to nine clicks	
		if (eyeClix < 9) {
			eyeClix += 1;
		}else{

			//reset the eyeClix variable to 0 after ninth click
			eyeClix = 0;
		}
	});

	//for animating the nose section
	$("#nose").click(function () {
		//this condition limits the user to nine clicks	
		if (noseClix < 9) {
			noseClix += 1;
		}else{

			//reset the noseClix variable to 0 after ninth click
			noseClix = 0;
		}
	});

	//for animating the mouth section
	$("#mouth").click(function () {
		//this condition limits the user to nine clicks	
		if (mouthClix < 9) {
			mouthClix += 1;
		}else{

			//reset the mouthClix variable to 0 after ninth click
			mouthClix = 0;
		}
	});
});