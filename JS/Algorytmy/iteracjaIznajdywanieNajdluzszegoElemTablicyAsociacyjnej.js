var assocTable = {"one":"aaaa", "two":"bbbbbb", "three":"cccccccccccccccccccccc", "four":"ddddd"};

function findLongestVal(associativeEntity) {

    var elemId = "";
    var elemContentLength = 0;
    var actualBiggest = 0;
    
    for (var iterator in associativeEntity) {
        elemContentLength = associativeEntity[iterator].length;
            if (elemContentLength > actualBiggest) {
                actualBiggest = elemContentLength;
                elemId = iterator;
            }
    }
    console.log(elemId + " : " + associativeEntity[elemId]);
}

findLongestVal(assocTable);