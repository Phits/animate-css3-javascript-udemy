

TweenMax.to('.bird', 2, {
    left: 700,
    onStart: doStart,
    onComplete: function() {
    	$('#statusText').text('Animation Completed');
    	this.reverse();
    },
    onReverseComplete: function() {
    	$('#statusText').text('Reverse Completed');
    },
    onUpdate: doUpdate, 
    onUpdateParams: ["{self}"]
});

function doStart() {
	$('#statusText').text('Animation Started');
}

function doUpdate(tween) {
	var txt = $(tween.target).css('left')
	$('#statusText').text('Animation Started ' + txt);
}