
var mainCanvas = document.querySelector('#myCanvas');
var context = mainCanvas.getContext('2d');

var count = 0;

function draw() {

    context.clearRect(0, 0, 700, 700);

    count += 10;

    context.fillRect(count, 100, 50, 50);
    context.fillRect(count * .5, 300, 50, 50);

    context.fillStyle = '#003399';

    if (count > 800 ) {
        count = -50;
    }

    window.requestAnimationFrame(draw);

}

draw();