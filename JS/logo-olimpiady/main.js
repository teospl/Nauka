var positionDisplay = document.createElement('p');

var canvas = document.createElement('canvas');
	canvas.style.position = 'absolute';
	canvas.width = 60;
	canvas.height = 30;
var context = canvas.getContext('2d');
      
var x;
var y;
    
function getPosition(event) {
    x = event.clientX;
    y = event.clientY;
    var coordinates = "X: " + x + ", Y: " + y;
    positionDisplay.innerHTML = coordinates;
    canvas.style.left = x+5+'px';
    canvas.style.top = y-20+'px';
}
 
function drowCricle(posX, posY){
    context.beginPath();
    context.arc(posX, posY, 9, 0, 2*Math.PI);
    context.stroke();
}
    
function drowLogo(x,y) {
    drowCricle(x+10,y-20);
    drowCricle(x+20,y-10);
    drowCricle(x+30,y-20);
    drowCricle(x+40,y-10);
    drowCricle(x+50,y-20);
}

document.addEventListener('DOMContentLoaded',
	function(){
		document.body.appendChild(positionDisplay);
		document.body.appendChild(canvas);
		document.addEventListener('mousemove', getPosition);
		drowLogo(0, 30);
	});