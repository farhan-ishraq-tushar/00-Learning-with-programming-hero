// function declaration


// function add (a, b){
//     const result = a + b;
//     return result;
// }

function add (a, b){
    return a + b;
}


// function expression 
const add2 = function(a, b){
    return a + b; 
}


// arrow function
const add3 = (a, b) => a + b;


const sum = add3 (5, 90);
console.log(sum);