const first = 'first_name';
const last = 'last_name';
const greet = 'Potas potas';
const name = first + ' ' + last + ' ' + greet;
console.log(name);
const a = 10;
const b = 20;
const result = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
console.log(result);

// writhing dynamic string
const math = `The sum of ${a} and ${b} is ${a + b}`
console.log(math);

// Double line string
// way1: !!!not preferable

// Wrong method
const country = 'The name of my country is' +
'Bangladesh'
// Output: The name of my country isBangladesh
// Here "Output" is single line. So multiline string output is not possible in this way. 

// way1: !!!not preferable
const country1 = 'The name of my country is \n' +
'Bangladesh'
/*Output: The name of my country is
Bangladesh
*/

// way2: preferable way
const country2 = `The name of my country is
Bangladesh.
It is 8th largest in terms of population`
// `string` is called template string. 
/*
Output: 
The name of my country is
Bangladesh.
It is 8th largest in terms of population
*/
console.log(country2);



// accessing array element and object with in string
const numbers = [70, 34, 34, 36];
const student = {
     name: 'studentName',
     age: '5',
}

const mathNumber = `${student.name}'s obtained number in math is ${numbers[0]}`;
console.log(mathNumber);
/**
 Output: studentName's obtained number in math is 70
 Here student.name is the way to obtain the value of the property name from the object student. 
 numbers[0] is the way to obtain the value of the 0 index from the array numbers.
 */