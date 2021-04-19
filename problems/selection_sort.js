function sort(array){
    for(let i = 0; i <= array.length; i++){
        for(let j = i; j <= array.length; j++){
            if (array[i] > array[j]){
                let temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}

console.log(sort([5, 4, 8, 22, 1, 3, 10]));