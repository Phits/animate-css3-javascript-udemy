// Complete Function
// $('#bird').animate({
// 	left: 700
// }, 1000, function() {
// 	$('#bird').animate({
// 		width: 400
// 	})
// });

// Complete Object
// $('#bird').animate({
// 	left: 700
// }, {
// 	duration: 1000,
// 	complete: function() {
// 		alert('Complete');
// 	}
// });

// Start Event
// $('#bird').animate({
// 	left: 700
// }, {
// 	duration: 1000,
// 	start: function() {
// 		$('#bird').css({
// 			'width': 400
// 		})
// 	}
// });

// Step Event
// $('#bird').animate({
// 	left: 700
// }, {
// 	duration: 1000,
// 	step: function(now, fx) {
// 		// $('h1').text(now)
// 		// $('h1').text(fx.start)
// 		// $('h1').text(fx.end)
// 		// $('h1').text(fx.prop)

// 		var per = Math.round((now * 100) / fx.end)
// 		$('h1').text(per + '%')
// 	}
// });

// Property queue
$('#bird').animate({
	left: 700
}, {
	duration: 1000, queue: false
});

$('#bird').animate({
	top: 700
}, {
	duration: 1000
});

