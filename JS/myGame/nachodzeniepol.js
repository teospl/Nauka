var obj1 = {
    aX: 1, aY: 1,
    bX: 3, bY: 1,
    cX: 3, cY: 3,
    dX: 1, dY: 3
};
var obj2 = {
    aX: 2, aY: 2,
    bX: 4, bY: 2,
    cX: 4, cY: 4,
    dX: 2, dY: 4
};
var obj3 = {
    aX: 10, aY: 10,
    bX: 30, bY: 10,
    cX: 30, cY: 30,
    dX: 10, dY: 30
};
 
function check(objA, objB){

    var widthOb1 = objA.bX - objA.aX;
    var heightOb1 = objA.cY - objA.aY;
    var widthOb2 = objB.bX - objB.aX;
    var heightOb2 = objB.cY - objB.aY;

    if(objA.aX-objB.aX < 0 && widthOb1 - widthOb2 < 0 || objA.aY-objB.aY < 0 && heightOb1 - heightOb2 < 0){  
        return console.log('nie zachodzą');
       } else {
        return console.log('zachodzą');
       }
}
        
check(obj1,obj2);