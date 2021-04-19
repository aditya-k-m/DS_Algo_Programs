function factorial(value){
    if(value === 1){
        return value
    }
    return(value * factorial(value - 1))
}

console.log(factorial(5));