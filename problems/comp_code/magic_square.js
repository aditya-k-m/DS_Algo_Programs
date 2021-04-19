//Hackerrank - Medium - Magic Square Forming
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let theArray = [];

r1.on('line', (input) => {
    if(input){
        theArray.push(input);
    }
    else{
        operate();
        r1.close();
    }
});

function operate(){
    let newArray =[];
    for(x in theArray){
        let push = x.split(" ").map((item) => {
            return (Number(item));
        });
        newArray.push(push);
    }
}