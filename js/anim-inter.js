$('#horizontal').click(function(event) {
	$('#bird').addClass('horz');
	$('#bird').removeClass('vert');
})

$('#vertical').click(function(event) {
	$('#bird').addClass('vert');
	$('#bird').removeClass('horz');
})

$('#play-btn').click(function(event) {
	$('#bird').addClass('play');
	$('#bird').removeClass('pause');
})

$('#pause-btn').click(function(event) {
	$('#bird').addClass('pause');
	$('#bird').removeClass('play');
})