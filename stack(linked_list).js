const LinkedList = require('./linked_list.js');

class Stack extends LinkedList {
    constructor(firstValue){
        super(firstValue);
    }
    peek(){
        return this.head.value;
    }
    push(value){
        this.prepend(value);
    }
    pop(){
        this.head = this.head.next;
        this.size -- ;
    }
}

const abc = new Stack(10);
abc.push(20);
abc.push(39);
abc.pop();
console.log(abc);