class LinkedList {
    constructor(firstValue){
        this.head = {
            value: firstValue,
            next: null
        }
        this.tail = this.head;
        this.size = 1;
    }

    getList(){
        const list = [];
        let currentNode = this.head;
        while(currentNode.next !== null){
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }
        list.push(this.tail.value);
        return list
    }

    append(value){
        const node = {
            value: value,
            next: null
        }
        this.tail.next = node;
        this.tail = node;
        this.size++;
    }

    prepend(value){
        const node = {
            value: value,
            next: this.head
        }
        this.head = node;
    }

    insert(value, index){
        if (index === 0){
            this.prepend(value);
        }
        let currentNode = this.head;
        for(let i = 0; i < index; i++){
            currentNode = currentNode.next;
        }
        let previousNode = this.head;
        for(let i = 0; i < index-1; i++){
            previousNode = previousNode.next;
        }
        const newNode = {
            value: value,
            next: currentNode
        }
        let temp = this.tail;
        this.tail = previousNode;
        this.tail.next = newNode;
        this.tail = temp;
        this.size++;
    }

    remove(index){
        let prevNode = this.head;
        for(let i = 0; i < index-1; i++){
            prevNode = prevNode.next;
        }
        let nextNode = this.head;
        for(let i = 0; i < index+1; i++){
            nextNode = nextNode.next;
        }
        let temp = this.tail;
        this.tail = prevNode;
        this.tail.next = nextNode;
        this.tail = temp;
        this.size--;
    }

    get(index){
        if (index > this.size){
            throw "Index out of bonds"
        }
        let currentNode = this.head;
        for(let i = 0; i < index; i++){
            currentNode = currentNode.next;
        }
        return currentNode.value;
    }

    getNode(index){
        if (index > this.size){
            throw "Index out of bonds"
        }
        let currentNode = this.head;
        for(let i = 0; i < index; i++){
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    // reverse(){
    //     for(let i = 0; i < this.size - 1; i++){
    //         let rev = this.size - i - 1;
    //         let leader = this.getNode(rev);
    //         let follower  = this.getNode(rev - 1);
    //         follower.next = null;
    //         leader.next = follower;
    //     }
    //     let temp = this.head;
    //     this.head = this.tail;
    //     this.tail = temp;
    // }

    reverse(){
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second){
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    }
}

module.exports = LinkedList;
