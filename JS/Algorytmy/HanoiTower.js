/*
function Hanoi(n, from, to , via)
{
  if (n==0) return;

  Hanoi(n-1, from, via , to);

  moveDisk(from,to);

  // callStack.push([from,to]); // save parameters to callStack array
  
  Hanoi(n-1, via, to , from);
}
*/
first =[1,2,3];
second =[];
third =[];
moveDisks(first.length, first, second, third);
function moveDisks(n, source, helper, target) {
        if (n <= 0 ) { return; }
        console.log(first);
        console.log(second);
        console.log(third);
        console.log("n= "+n);
        console.log("-------");

        moveDisks(n-1, source, target, helper );
        target.push(source.pop());
        moveDisks(n-1, helper, source, target );
    };
    console.log(first);
        console.log(second);
        console.log(third);