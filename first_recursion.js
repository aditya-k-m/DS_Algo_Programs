const arr = [2, 7, 3, 6, 4, 5, 5, 6, 7, 7];

// function first_recur(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 return (arr[i]);
//             }
//         }
//     }
// }



let obj = {};

function first_recur(arr) {
    let return_value = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = [true, i];
        }
        else {
            obj[arr[i]][0] = "recurred";
        }
    }
    let small = 10000;
    for(let i in Object.keys(obj)){
        const key = Object.keys(obj)[i];
        if(obj[key][0] === "recurred" && obj[key][1] < small){
            return_value = key;
            small = obj[key][1];
        }
    }
    return(return_value);
}

console.log(first_recur(arr));
