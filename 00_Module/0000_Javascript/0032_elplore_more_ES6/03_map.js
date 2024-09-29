// Problem-1: Doubling every element of an array "const numbers = [4, 5, 2, 8, 10];" and make a new array

// Method-1: Old way
const numbers = [4, 5, 2, 8, 10];
const doubled = [];
for (const num of numbers){
    const double = num * 2;
    doubled.push(double);
}
console.log(doubled);
// output: [ 8, 10, 4, 16, 20 ]


//Method-2: Alternative way
function doubleIt(num){
    console.log('Num at this point:', num)
    /*
    Output:
    Num at this point: 4
    Num at this point: 5
    Num at this point: 2
    Num at this point: 8
    Num at this point: 10
    */
    return num * 2; 
}
const result = numbers.map(doubleIt); //".map" loops through each element of the array and do the operation that you passed in the call back function and hold the result form each operation in an array and finally return you the array. 
console.log(result);
// output: [ 8, 10, 4, 16, 20 ]


//Method-3: More refined way: Short Code version of the above
const double2 = n => n*2;
const output = numbers.map(double2);
console.log(output);
//output: [ 8, 10, 4, 16, 20 ]


//Method-3(Final): Final refined way: Try to use this
const output3 = numbers.map(n => n*2);
console.log(output3);
// output: [ 8, 10, 4, 16, 20 ]