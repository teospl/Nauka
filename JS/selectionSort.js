var toSort = [40, 3, 20, 10, 0, 5];

function selectionSort(numToSort) {
    for(var i = 0; i < numToSort.length - 1; i++) {
        console.log('!!! Badam pozycję ' + (i+1) + ', wartość: ' + numToSort[i]);
        var temp;
        for(j=i+1; j < numToSort.length; j++){
            console.log('Porównuję pozycję ' + (i+1) + ' z pozycją ' + (j+1) + ', czyli ' + numToSort[i]+ ' i ' + numToSort[j]);      
            if(numToSort[j] < numToSort[i]){
                console.log(numToSort[j]+' jest mniejsze od ' + numToSort[minVal]); 
                var minVal = j;
                temp = numToSort[minVal];
                numToSort[minVal]=numToSort[i]
                numToSort[i] = temp; 
                console.log("Wynik po porównaniu: " + numToSort);
            } 

        }
    }
console.log('Ostateczny efekt sortowania: ' + toSort);
}

console.log('Orginalna tablica: ' + toSort);
selectionSort(toSort);
