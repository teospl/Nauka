var toSort = [1,2,3,5,4,32,2,3,5,5,7,78,5,43,3,5,6,7,7,3,32,2,4,5,7,87,6,4,3,3,43,5,6,7,8,90,0,8,5,3,2,1,1,1,23,34,1,34,57,88,9,0,5];

function countingSort(elements) {
    
    var minKey = 0;
    var maxKey = 100;
    var result = [];
    var helperTable = [];

    for(var i = minKey; i <= maxKey; ++i) {
        helperTable[i] = 0;
    }
    //console.log(helperTable);

    for(var j = 0; j < elements.length; ++j) {
        helperTable[elements[j]] += 1;
    }
    //console.log(helperTable);

    for(var h = minKey+1; h < maxKey+1; ++h){
        helperTable[h] += helperTable[h-1];
    }
    //console.log(helperTable);

    for(var l = elements.length-1; l > 0; --l){
        result[helperTable[elements[l]]] = elements[l];
        helperTable[elements[l]] = helperTable[elements[l]]-1;
    }
    //console.log(helperTable);
    return result;
}

console.log(countingSort(toSort));