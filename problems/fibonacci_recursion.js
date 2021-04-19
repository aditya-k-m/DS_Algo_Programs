function fibonacci(value1, value2, limit){
    if(value2 > limit){
        return value2
    }
    if(value1 === 0){
        console.log(0);
    }
    console.log(value2);
    fibonacci(value2, value1 + value2, limit);
}

fibonacci(0, 1, 13);