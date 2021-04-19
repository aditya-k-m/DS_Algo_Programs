function search(key, list){
    for(let i = 0; i < list.length; i++){
        if(key === list[i]){
            return i;
        }
    }
    return false;
}

console.log(search(22, [2,4,5,6,1,3,5]));