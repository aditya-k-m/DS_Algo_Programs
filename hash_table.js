class HashTable {
    constructor(size) {
        this.data = new Array(size);
        // this.data = [];
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        this.data[this._hash(key)] = [key, value];
    }

    get(key) {
        return (this.data[this._hash(key)]);
    }

    keys() {
        const arr = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                arr.push(this.data[i][0]);
            }
        }
        return arr;
    }

    values() {
        const arr = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                arr.push(this.data[i][1]);
            }
        }
        return arr;
    }
}

let a = new HashTable(50);

a.set('apples', 20000);
a.set('grapes', 10000);
a.set('aditya', 6);

console.log(a);

console.log(a.values());

console.log(a.get('apples'));