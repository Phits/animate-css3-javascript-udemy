var myTween = TweenMax.to('.bird', 5, {
	marginLeft: 700,
	ease: "linear"
})

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

$('#playAt').click(function() {
     myTween.play(4);
});

$('#reverseAt').click(function() {
     myTween.reverse(2);
});

$('#seek').click(function() {
     myTween.seek(3);
});

$('#timeHalf').click(function() {
     myTween.timeScale(.5);
});

$('#timeOne').click(function() {
     myTween.timeScale(1);
});

$('#time3').click(function() {
     myTween.timeScale(3);
});

$('#restart').click(function() {
     myTween.restart();
});