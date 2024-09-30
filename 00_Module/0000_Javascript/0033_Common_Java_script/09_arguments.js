// array like object
function sum(a, b, c){
    const args = [...arguments]; // keyword "arguments" only available inside function. It's type is array-like object. "[...arguments]" is the way to convert the "arguments" into a proper array.
    // console.log(args);
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56); // here 98 and 56 are arguments. They have no corresponding parameter.
// console.log(total);
console.log(sum.length);