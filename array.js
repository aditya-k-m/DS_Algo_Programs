class AnArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return(this.data[index]);
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
    }

    pop(){
        delete this.data[this.length - 1];
        this.length--;
    }

    delete(index){
       delete this.data[index];
       for(let i = index; i < this.length-1; i++){
           this.data[i] = this.data[i+1];
       }
       this.pop();
    }

    merge(anotherArray){
        for(let i = 0; i < anotherArray.length; i++){
            this.push(anotherArray[i]);
        }
    }
}

let arr = new AnArray();

arr.push('Hi');
arr.push('I');
arr.push('am');
arr.push('Aditya');

// arr.pop();

arr.delete(1);

console.log(arr);
console.log(arr.get(2));

arr.merge(['Added', 'New', 'Items']);
console.log(arr);