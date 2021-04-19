const Stack = require('./stack.js');

class QueueUsingStack {
    constructor(value){
        this.data = new Stack();
        this.data.push(value);
        this.length = 1;
    }

    enqueue(value){
        this.data.push(value);
        this.length ++;
    }

    dequeue(){
        const temp = new Stack();
        for(let i = 0; i < this.length - 1; i ++){
            temp.push(this.data.peek());
            this.data.pop();
        }
        this.data.empty();
        for(let i = 0; i < this.length - 1; i ++){
            this.data.push(temp.peek());
            temp.pop();
        }
        this.length --;
        return this.data;
    }
    peek(){
        return this.data.data[0];
    }
}

const q = new QueueUsingStack(10);
q.enqueue(21);
q.enqueue(25);
console.log(q.peek());