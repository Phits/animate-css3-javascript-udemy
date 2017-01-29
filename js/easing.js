
$('#bird-1').animate({
	left: 700

}, 1000, 'easeOutElastic');

$('#bird-2').animate({
	top: [300, 'easeInBounce'],
	width: [300, 'swing']

});

// $('#bird-3').animate({
// 	left: 700,
// 	width: 250
// }, {
// 	specialEasing: {
// 		left: 'linear',
// 		width: 'easeOutElastic'
// 	}
// });

$('#bird-3').animate({
	left: 700
});

$.easing.def = 'easeOutBounce';