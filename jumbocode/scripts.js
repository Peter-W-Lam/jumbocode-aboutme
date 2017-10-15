$(document).ready(function() {
	
	$("a").hover(function() {
		$(this).animate({
		    color: "#64DDBB"
  		}, 200 );
	}, function() {
		$(this).animate({
			color: "white"
		}, 200)
	});

	$('.img-overlay').hover(function() {
		$(this).fadeTo(200, 1)
	}, function() {
		$(this).fadeTo(200, 0);
	});

	$('.img-overlay').hover(function() {
		$(this).fadeTo(200, 1)
	}, function() {
		$(this).fadeTo(200, 0);
	});
	

	// img3.style.left = 390 + "px";
	// img3.style.top = 1260 + "px";
	/*var img3 = document.getElementById("img1");
	img2.style.left = 400 + "px";
	img2.style.top = 1050 + "px";
	*/
	// var draw = SVG('ex').size(500, 500)
	// draw.circle(100, 100).move(100, 50).fill('#f06')
});