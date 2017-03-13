//////////////////////////////////////////////////////////// OBJEKT WAZ
function Snake() {
    this.bodyParts = [];
    this.dlugosc = 0;
    this.moveStep = 1;
    
    function BodyPart(x,y){
        this.x = x;
        this.y = y;
    };
    
    this.zainicjuj = function(){
        this.bodyParts.push(new BodyPart(2,0));
        this.bodyParts.push(new BodyPart(1,0));
        this.bodyParts.push(new BodyPart(0,0));
    };
    
    this.move = function(where, wys, szer){
        var newHead;
        if(this.bodyParts[0].x >= szer-1 && where == 'right'){
            newHead = new BodyPart(0,this.bodyParts[0].y);           
        } else if(this.bodyParts[0].y >= wys-1 && where == 'down'){
            newHead = new BodyPart(this.bodyParts[0].x, 0);        
        } else if(this.bodyParts[0].x <= 0 && where == 'left'){
            newHead = new BodyPart(szer-1, this.bodyParts[0].y);        
        } else if(this.bodyParts[0].y <= 0 && where == 'up'){
            newHead = new BodyPart(this.bodyParts[0].x, 9);        
        } else {
            newHead = this.getNewHead(where);
        }
        
        
        
        for(var i = this.bodyParts.length-1; i > 0; --i){
            this.bodyParts[i] = this.bodyParts[i-1];
        }
        
        this.bodyParts[0] = newHead;
        
        return true;
    }
    
    this.getNewHead = function(where){
        var currentHead = this.bodyParts[0];
        
        switch (where){
            case 'right':
                return new BodyPart(currentHead.x+this.moveStep, currentHead.y);
            case 'left':
                return new BodyPart(currentHead.x-this.moveStep, currentHead.y);            
            case 'up':
                return new BodyPart(currentHead.x, currentHead.y-this.moveStep);
            case 'down':
                return new BodyPart(currentHead.x, currentHead.y+this.moveStep);

        }
    };
    
    this.grow = function(kierunek){
        
        var currentHead = this.bodyParts[0];
        var newHead;
        
        switch (kierunek){
            case 'right':
                newHead = new BodyPart(currentHead.x+this.moveStep, currentHead.y);
                break;
            case 'left':
                newHead = new BodyPart(currentHead.x-this.moveStep, currentHead.y);    
                break;
            case 'up':
                newHead = new BodyPart(currentHead.x, currentHead.y-this.moveStep);
                break;
            case 'down':
                newHead = new BodyPart(currentHead.x, currentHead.y+this.moveStep); 
                break;
        }
            
        this.bodyParts.unshift(newHead);
        
//        var lastX = 0,
//            lastY = 0; 
//        for(var i = 0; i<this.bodyParts.length; ++i){
//            lastX = this.bodyParts[i].x;
//            lastY = this.bodyParts[i].y;  
//        }
//        if(kierunek == 'right'){
//            this.bodyParts.push(new BodyPart(lastX-1,lastY));
//        }
    }
    
    
}

////////////////////////////////////////////// OBJEKT GRACZ
//function Player(){ 
//// Sterowanie gracza
//this.stearing = function(event) {
//    if (isKeyDown) {
//        return;
//    }
//    isKeyDown = true;
//    var key = event.which || event.keyCode; 
//    switch (key){
//        case 37:
//            snake.move('left');
//            break;
//        case 39:
//            snake.move('right');
//            break;
//        default:
//            break;
//    }
//};
//}

//////////////////////////////////////////////////////////////////////////// OBJEKT PLANSZA
function Plansza(){
    this.snake = null;
    this.wys = 10;
    this.szer = 10;
    this.time = null;
    this.kierunek = "right";
    
    this.zmienKierunek = function(kierunek) {
       this.kierunek = kierunek;
    }
    
        
    this.draw = function(){
            var obszar = document.getElementById('plansza');
            this.time = setInterval(this.przerysuj.bind(this), 1000);
            //console.log(obszar);
            for(var i = 0; i < this.wys; ++i){
                var rzad = document.createElement('div')
                rzad.className = 'rzad';
                obszar.appendChild(rzad);               
                    for(var j = 0; j < this.szer; ++j){
                        var pole = document.createElement('div');
                        pole.className = 'pole';
                        pole.setAttribute('position', i+','+j);
                        //pole.innerText = 'a';
                        rzad.appendChild(pole);
                    }
                }   
            };
    
    this.locateApple = function(){
            var x = Math.floor(Math.random()*this.szer), 
                y = Math.floor(Math.random()*this.wys);
            var pole = document.querySelectorAll('[position="'+x+','+y+'"]');
            pole[0].className='pole apple';
        console.log("jablko:", x, y);
            };
    
    this.colisionDetected = function(){
        this.locateApple();
        this.snake.grow(this.kierunek);       
    }
    
    this.drawSnake = function(){   
        for(var i = 0; i < this.snake.bodyParts.length; ++i){
            var snake = document.querySelectorAll('[position="'+this.snake.bodyParts[i].y+','+this.snake.bodyParts[i].x+'"]');         
            if(snake.length > 0){
                if(i == 0){
                    if(snake[0].className == "pole apple"){
                        this.colisionDetected();
                    }
                }
                snake[0].className='pole snake';  
            }

        }
    };
        
    this.przerysuj = function(){     
       // this.locateApple();
        var pola = document.querySelectorAll('.pole');
            
        for(var i = 0; i < pola.length; ++i){
            if(pola[i].className == 'pole apple') {
                pola[i].className = 'pole apple';
            } else {
                pola[i].className = 'pole';
            }
        }
            
        if(this.snake.move(this.kierunek, this.wys, this.szer)){
            console.log(this.snake.bodyParts)
            this.drawSnake();
        }
                    
        };
}




////////////////////////////////////////////////////////////////////// RAF
//  function raf() {
//    requestAnimationFrame(raf);
////   BackGround();
//    render();
//  }

////////////////////////////////////////////////////////////////////// Event listenery dla sterowania i start gry
//document.addEventListener('keydown', hero.stearing);
//document.addEventListener('keyup', keyRelese);
//raf();
var plan = new Plansza();
var waz = new Snake();
waz.zainicjuj();
plan.snake = waz;



document.addEventListener('DOMContentLoaded',function(){

    plan.draw();
    plan.locateApple();
    
})

document.addEventListener('keydown', function(event){

    switch(event.keyCode){
        case 37:
            plan.zmienKierunek("left");
            break;
        case 38:
            plan.zmienKierunek("up");
            break;
        case 39:
            plan.zmienKierunek("right");
            break;
        case 40:
            plan.zmienKierunek("down");
            break;
        default:
            break;
    }
})