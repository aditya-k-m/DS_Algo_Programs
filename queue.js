const LinkedList = require('./linked_list.js');

class Queue {
    constructor(value){
        this.data = new LinkedList(value);
        this.length = this.data.size;
    }
    enqueue(value){
        this.data.append(value);
    }
    dequeue(){
        this.data.head = this.data.head.next;
    }
    peek(){
        return this.data.head;
    }
}

const q = new Queue(10);
q.enqueue(25);
q.enqueue(55);
q.dequeue();
console.log(q.peek());