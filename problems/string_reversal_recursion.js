function reverseString(value){
    if (value === ""){
        return "";
    }
    return(reverseString(value.substr(1)) + value.charAt(0));
}

console.log(reverseString("Adity"));
