var heli = $('#heli');

// Default Frame Rate 13
jQuery.fx.interval = 5

// Turn Off Animation Gloablly
//jQuery.fx.off = true

$('#start').click(function(event) {
	// heli.delay(500).animate({
	// 	top: 100
	// }, 1200, 'easeInOutCirc');

	// heli.fadeIn();

	// heli.fadeTo(1000, .5, function() {
	// 	alert('Done');
	// });

    // Fade Toggle
	// heli.fadeToggle()

	// slideUp
	// heli.slideToggle(500, 'easeInOutExpo');

	// heli.animate({
	// 	left: 700
	// }, 1200, 'easeInOutQuad');
	// heli.animate({
	// 	top: -150
	// }, 600, 'easeInOutQuad');

   heli.animate({
       left: 700
   }, 500, 'easeInOutExpo');

});

$('#stop').click(function(event) {
    // heli.clearQueue();
    // heli.stop();

    // heli.finish();

    // heli.finish();

    // heli.fadeOut();

    // heli.slideDown(2000, 'easeInOutExpo');
});