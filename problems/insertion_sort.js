function insert(index1, index2, array){
    let temp2 = array[index2];
    for(let i = index2 - 1; i >= index1; i--){
        array[i + 1] = array[i];
    }
    array[index1] = temp2;
    return array;
}

function sort(array){
    for (let i = 1; i < array.length; i++){
        for(let j = 0; j < i; j++){
            if(array[i] < array[j]){
                array = insert(j, i, array);
            }
        }
    }
    return array;
}
// console.log(insert(0, 4, [2, 3, 4, 5, 1]));

console.log(sort([1, 5, 3, 7, 2, 22, 10]));