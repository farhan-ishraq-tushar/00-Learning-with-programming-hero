// Problem: Create a function that will return only the even numbers also the sum of it

function evenNumbersOnly(numbers){
    // console.log(numbers)
    const evens = [];
    for(const number of numbers){
        if(number %2 === 0){
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}
const numbers = [5, 8, 91, 245, 6];
const evens = evenNumbersOnly(numbers);
console.log('Even numbers only', evens);



console.log('---------------------------')
function sumOfEvenNumbers (numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}
const sum = sumOfEvenNumbers(numbers);
console.log('Sum of the even number is', sum);