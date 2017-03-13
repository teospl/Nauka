var canvas = document.getElementById("myCanvas"),
ctx = canvas.getContext("2d");

var isKeyDown = false;
var W = canvas.width = window.innerWidth - 100;
var H = canvas.height = window.innerHeight - 50;

////////////////////////////////////////////////////////////////////// Początkowe wektory

var gravity = 0.98; 
var bounceFactor = 0.3;
var dodgeFactor = 0.1;
var isKeyDown = false;
//var random =1;

////////////////////////////////////////////////////////////////////// Objekt piłka
function Ball() {
	this.radius = 70;
    this.color = '#FF0000';
    this.offsetX = 0;
    this.offsetY = 0;
    this.x = canvas.width / 2;
	this.y = canvas.height - this.radius - 100;
    this.startX = this.x;
    this.startY = this.y;
    this.vX = 0;
    this.vY = 0;
    this.aX = 0;
    this.aY = 0;
    this.positionIsZero = true;
    this.dodgeGravity = 0;
    this.bounceFactor = 0.3;
    this.dodgeFactor = 0.1;
    this.turn;
////////////////////////////////////////////////////////////////////// Czy piłka jest w pozycji zerowej
    this.isPositionZero = function() {
        if (this.x == this.startX && this.y == this.startY) {
            this.positionIsZero = true;
        } else {
        this.positionIsZero = false;
    }
    };

////////////////////////////////////////////////////////////////////// Ruchy objektu piłka
    this.action = function(where){
    if(this.positionIsZero){
        this.vX = 0;
        this.vY = 0;
        switch (where){
            case 'jump':
                this.aY = 9;
                break;
            case 'right':
                this.turn = 'right';
                this.dodgeGravity = 1;
                this.aX = 9;
                break;
            case 'left':
                this.turn = 'left';
                this.dodgeGravity = -1;
                this.aX = -9;
                break;
        }
    }
    };

////////////////////////////////////////////////////////////////////// Fizyka ruchu i powrotu do punktu zero
    this.simulate = function () {
        this.aY -= gravity;
        this.aX -= this.dodgeGravity;
        this.vX += this.aX * 1;
        this.vY -= this.aY * 1;
        this.x += this.vX;
        this.y += this.vY;
        
        if(this.y > this.startY) {
            this.y = this.startY;
            this.vY *= -this.bounceFactor;
        }
        if(this.turn == 'right' && this.x < this.startX || this.turn == 'left' && this.x > this.startX) {
                this.x = this.startX;
                this.vX *= -this.dodgeFactor;
            }
        this.isPositionZero();
    };

////////////////////////////////////////////////////////////////////// Rysuj piłkę
	this.draw = function(ctx) {
        this.simulate();
        ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x + this.offsetX, this.y + this.offsetY, this.radius, 0, Math.PI*2, false);
		ctx.closePath();
        ctx.fill();
	};
}

function Bullet(){
    //////////////////////////////////////////////////////////////////////  Wystrzeliwany nabój ktory za chiny nie dziala ;)
    //   this.bulet = function(){
    console.log(this);
    this.buletX = canvas.width / 2;
    this.buletY = canvas.height / 2;
    this.buletDy = -0.5; // += y+1;
    this.buletDx = 1; //+=x+1;
    this.buletDraw = function(ctx) {
          ctx.beginPath();
          ctx.fillStyle = "#0000ff";
          ctx.arc(this.buletX, this.buletY, 20, 0, Math.PI*2, true);
          ctx.closePath();
          ctx.fill();
          this.buletX += this.buletDx;
          this.buletY += this.buletDy;
        };
        this.shoot = function() {
            this.buletX = canvas.width / 2;
            this.buletY = canvas.height / 2;
        };
 //   };
//    console.log(this);
//    buletX = canvas.width / 2;
//    buletY = canvas.height / 2;
//    buletDy = -0.5; // += y+1;
//    buletDx = 1; //+=x+1;
//    buletDraw = function(ctx) {
//          ctx.beginPath();
//          ctx.fillStyle = "#0000ff";
//          ctx.arc(buletX, buletY, 20, 0, Math.PI*2, true);
//          ctx.closePath();
//          ctx.fill();
//          buletX += buletDx;
//          buletY += buletDy;
//        };
}

//////////////////////////////////////////////////////////////////////  PLAYER
function Player(){ 
this.offsetX= -75;
// Sterowanie gracza
this.stearing = function(event) {
    if (isKeyDown) {
        return;
    }
    isKeyDown = true;
    var key = event.which || event.keyCode; 
    switch (key){
        case 37:
            hero.action('left');
            break;
        case 38:
            hero.action('jump');
            break;
        case 39:
            hero.action('right');
            break;
        case 32:
        var shot = new Bullet();
            shot;
            break;
    }
};
}

////////////////////////////////////////////////////////////////////// ENEMY 
function Enemy() {                                                               
    this.radius = 90;                                                               
    this.color = 'black';
    this.offsetX = 75;
    this.offsetY = -100;
// Losowanie ruchu WROGA  
    this.startDelayLotery = function(delay) {
        console.log('otrzymany delay:', delay, 'Rozpoczynam losowanie');
        var loteryTime = delay;
        var loteryTimeoutId;
       
        setTimeout(function () {
            console.log('ustawiony timeout:', loteryTime - 1);
            clearInterval(loteryTimeoutId);
        }, loteryTime);
       
        loteryTimeoutId = setInterval(function () {
            delay = Math.random();
            console.log('nowy interwal:', delay * 2000, this);
            var where = Math.random();
            if (where > 0.66) {
                    this.action('left');
                } else if (where < 0.33) {
                    this.action('jump');
                } else { 
                    this.action('right');
                }
            this.startDelayLotery(delay * 2000);
        }.bind(this), loteryTime - 1);
    }
    
    this.startDelayLotery(2000);
}

////////////////////////////////////////////////////////////////////// Dziedziczenie i utworzenie objektów
Player.prototype = new Ball();
Enemy.prototype = new Ball();
var hero = new Player();
var enemy = new Enemy();

////////////////////////////////////////////////////////////////////// Czy przycisk jest wciśnięty
function keyRelese(){
    isKeyDown = false;
}

////////////////////////////////////////////////////////////////////// Render postaci
function render() {
    enemy.draw(ctx);
    hero.draw(ctx);
    shot.buletDraw(ctx);
}

////////////////////////////////////////////////////////////////////// Tło gry
function BackGround(){
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#63D63C";
    ctx.fillRect(0, H, W, -200);
    ctx.closePath();
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(W - 150, 150, 60, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
}

////////////////////////////////////////////////////////////////////// RAF
  function raf() {
    requestAnimationFrame(raf);
    BackGround();
    render();
  }

////////////////////////////////////////////////////////////////////// Event listenery dla sterowania i start gry
document.addEventListener('keydown', hero.stearing);
document.addEventListener('keyup', keyRelese);
raf();






