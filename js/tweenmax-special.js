
var myTween = TweenMax.to('.heli', 1, {
    marginTop: 350,
    width: 450,
    rotationY: 180,
    repeat: -1,
    yoyo: true,
    repeatDelay: .5,
    onRepeat: doRepeat
});

var count = 0;

function doRepeat() {
    count += 1;
    $('#myText').text(count);
}

$('html').click(function(event) {
    myTween.kill({
    	marginTop: true
    });
});