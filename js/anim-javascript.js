
var car = document.getElementById('car');

var cur = 0;
var dest = 700;
var friction = 0.04;

function loop() {

    cur += (dest -cur) * friction;

    car.style.left = cur + 'px';
    car.style.width = (cur * .5) + 'px';
 
    if (cur >= dest - 2) {
    	friction = -0.05;
        //clearInterval(myLoop);
    }

    if (cur < 1) {
       friction = 0.04;
    }

}

var myLoop = setInterval(loop, 20);