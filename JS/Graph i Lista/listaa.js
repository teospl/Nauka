
var lista = function() {
    this.head = null;
    this.size = 0;
    this.tail = null;

    this.Element = function(item) {
        this.data = item;
        this.next = null;
        this.prev = null;
    }


    this.addElement = function(item) {
        var elem = new this.Element(item);

        if(this.size === 0) {
            this.head = elem;
            this.tail = elem;
            this.size++;
        } else {
            this.tail.next = elem;
            elem.prev = this.tail;
            this.tail = elem;
            this.size++;
        }
    }



    this.addAtPosition = function(item, position) {
        var current = this.head;
        var elem = new this.Element(item);
        var previous;

        for(i = 1; i < position; i++) {
            previous = current;
            current = current.next;
        }

        elem.next = current;
        previous.next = elem;
        elem.prev = previous;
        current.prev = elem;

        this.size++;

    }

    this.showList = function() {
        var current = this.head;
        console.log(current);
        for(i = 0; i < this.size; i++) {
            current = current.next;
            console.log(current);
        }
    }


}
var myList = new lista();
myList.addElement(5);
myList.addElement(10);

myList.addElement(45);
myList.addElement(76);

myList.addAtPosition("new element", 3);

console.log(myList);
