// Part1: arrow function with single parameter

// Difference between two variable using arrow function
const difference = (x, y) => x - y;  

// Multiplication between two variable using arrow function
const multiply = (first, second, third) => first * second * third;

// Element of an object using arrow function
const getAge = (person) => person.age; 
//implicit return. It's a feature of arrow function
const student = {name: 'Bokul', age: 45};
const age = getAge(student);
console.log(age);

// Element of an array using an arrow function
const getThird = numbers => numbers[2];
const third = getThird([5,9,88,2,13]);
console.log(third);

// We can avoid "()" in single parameter case. 
const doubleIt = num => num*2;
/* In the above example we avoided "()" in parameter "num" */




//Part2: no parameter case
const getPi = () => Math.PI;
console.log(getPi());




// Part3: large arrow function
const doMath = (x, y, z) => {
    const sum =  x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
    // For multiline arrow function we must return the function. In single line arrow function we can avoid this. 
}


// Search difference between arrow function and regular function. 



