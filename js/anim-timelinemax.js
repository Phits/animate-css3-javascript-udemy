// No Timeline
// TweenMax.from('#clouds-1', 1, {
// 	left: -200
// });
// TweenMax.from('#clouds-2', 1, {
// 	left: 500,
// 	autoAlpha: 0,
// 	delay: .5
// });
// TweenMax.to('#sun', .4, {
// 	scale: 1.4,
// 	rotation: 30,
// 	yoyo: true,
// 	repeat: 1,
// 	delay: 1.5
// });
// TweenMax.staggerTo('.red-bird', .8, {
// 	top: 0,
// 	opacity: 1,
// 	yoyo: true,
// 	repeat: 1,
// 	delay: 2
// }, 0.1);
// TweenMax.from('h1', .5, {
// 	rotationX: -90,
// 	scale: .5,
// 	autoAlpha: 0,
// 	delay: 4
// });
// TweenMax.to('h1', .75, {
// 	rotationX: 360,
// 	opacity: 0,
// 	scale: 2,
// 	delay: 4.8
// });


// TimelineMax
// var myTween = new TimelineMax();

// myTween.from('#clouds-1', 1, {
// 	left: -200
// })
// .from('#clouds-2', 1, {
// 	left: 500,
// 	autoAlpha: 0
// }, "myLabel")
// .to('#sun', .4, {
// 	scale: 1.4,
// 	rotation: 30,
// 	yoyo: true,
// 	repeat: 1
// }, "myLabel += .25")
// .staggerTo('.red-bird', .8, {
// 	top: 0,
// 	opacity: 1,
// 	yoyo: true,
// 	repeat: 1
// }, 0.1, 0)
// .from('h1', .5, {
// 	rotationX: -90,
// 	scale: .5,
// 	autoAlpha: 0
// })
// .to('h1', .75, {
// 	rotationX: 360,
// 	opacity: 0,
// 	scale: 2
// })

// TimelineMax
var myTween = new TimelineMax({
	onUpdate: updateSlider
});

myTween.from('#clouds-1', 1, {
	left: -200
})
.from('#clouds-2', 1, {
	left: 500,
	autoAlpha: 0
})
.staggerTo('.red-bird', .8, {
	top: 0,
	opacity: 1,
	yoyo: true,
	repeat: 1
}, 0.1, 0, "birds")
.from('h1', .5, {
	rotationX: -90,
	scale: .5,
	autoAlpha: 0
}, "myText")
.to('h1', .75, {
	rotationX: 360,
	opacity: 0,
	scale: 2
})
.to('#sun', .4, {
	scale: 1.4,
	rotation: 30,
	yoyo: true,
	repeat: 1
})

//myTween.seek("myText");

myTween.timeScale(.5);

// Controls
$('#play').click(function() {
     myTween.play();
});

$('#pause').click(function() {
     myTween.pause();
});

$('#resume').click(function() {
     myTween.resume();
});

$('#reverse').click(function() {
     myTween.reverse();
});

$('#seek').click(function() {
     myTween.seek('birds');
});

$('#restart').click(function() {
     myTween.restart();
});

$('#slider').slider({
	range: false,
	min: 0,
	max: 100,
	step: .1,
	slide: function(event, ui) {
		myTween.progress(ui.value/100)
	}
});

function updateSlider() {
	$('#slider').slider('value', myTween.progress()*100)
}













