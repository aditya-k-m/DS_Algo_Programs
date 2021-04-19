

function search(key, list){
    let min = 0;
    let max = list.length - 1;
    let mid = Math.ceil((min + max)/2);
    while(mid > 0 && mid < list.length){
        mid = Math.ceil((min + max)/2);
        if(key < list[mid]){
            max = mid - 1;
        }
        else if(key > list[mid]){
            min = mid + 1;
        }
        else{
            return mid;
        }
    }
    return false;
}

console.log(search(56,[1,3,5,25,44,56]));