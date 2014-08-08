$(document).ready(function(){
	$(".child").mouseover(function(){
			var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
			         $(this).css("background-color", hue);
		
	});
	
	$(".child").mouseleave(function(){
			var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
			         $(this).css("background-color", hue);
		
	});
	
	var audio1 = $("#mySoundClip1")[0];
	$("#play1").mouseenter(function() {
	  audio1.play();
	});
	
	var audio2 = $("#mySoundClip2")[0];
	$("#play2").mouseenter(function(){
		audio2.play();
	});
	
	var audio3 = $("#mySoundClip3")[0];
	$("#play3").mouseenter(function(){
		audio3.play();
	});
	
	var audio4 = $("#mySoundClip4")[0];
	$("#play4").mouseenter(function(){
		audio4.play();
	});
	
	
	
	var audio5 = $("#mySoundClip1")[0];
	$("#play5").mouseenter(function() {
	  audio1.play();
	});
	
	var audio6 = $("#mySoundClip2")[0];
	$("#play6").mouseenter(function(){
		audio2.play();
	});
	
	var audio7 = $("#mySoundClip3")[0];
	$("#play7").mouseenter(function(){
		audio3.play();
	});
	
	var audio8 = $("#mySoundClip4")[0];
	$("#play8").mouseenter(function(){
		audio4.play();
	});
	
	
	var audio9 = $("#mySoundClip1")[0];
	$("#play9").mouseenter(function() {
	  audio1.play();
	});
	
	var audio10 = $("#mySoundClip2")[0];
	$("#play10").mouseenter(function(){
		audio2.play();
	});
	
	var audio11 = $("#mySoundClip3")[0];
	$("#play11").mouseenter(function(){
		audio3.play();
	});
	
	var audio12 = $("#mySoundClip4")[0];
	$("#play12").mouseenter(function(){
		audio4.play();
	});
	
	
	var audio13 = $("#mySoundClip1")[0];
	$("#play13").mouseenter(function() {
	  audio1.play();
	});
	
	var audio14 = $("#mySoundClip2")[0];
	$("#play14").mouseenter(function(){
		audio2.play();
	});
	
	var audio15 = $("#mySoundClip3")[0];
	$("#play15").mouseenter(function(){
		audio3.play();
	});
	
	var audio16 = $("#mySoundClip4")[0];
	$("#play16").mouseenter(function(){
		audio4.play();
	});

	
});



